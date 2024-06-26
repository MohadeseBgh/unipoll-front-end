import User from "@/components/icons/User";
import {forwardRef, useContext, useEffect, useState} from "react";
import  {useRouter}  from 'next/router';


const Header = () => {
    const [chosen, setChosen] = useState({home: false, educational_groups: false, forums: false, aboutUs: false ,contactUs: false});
    const [userSetting , setUserSetting]=useState({logIO:false});
    const [user , setUser]=useState({
        firstname: "",
        lastname: "",
        publicId: '',
        username: "",
        role: ""
    });

    const router = useRouter();
    useEffect(()=>{
        const academicDepartmentHandler = async () => {
            const jwtToken=localStorage.getItem('jwtToken');
            try {
                const response = await fetch("http://localhost:8090/unipoll/v1/user/one", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        'Authorization':`${jwtToken}`
                    },
                });
                if (response.ok) {
                    console.log("OK");
                    const data = await response.json();
                    setUser(data.result);
                    console.log(data.result)
                } else {
                    console.log("not ok")
                }
            }catch (e) {
                console.error("we are GETTING ERROR", e)
            }
        }
        academicDepartmentHandler().then(r => {});
    },[])

    return(
      <div className={'flex flex-row h-24 w-full bg-white'} dir={'ltr'}>
          <div className={'flex flex-col h-full w-1/12 justify-center items-center gap-2'}
          onClick={()=>{
              setUserSetting({logIO: !userSetting.logIO})
          }}
          >
              <User/>
              <p className='text-xs text-darkBlue' id={"name"}>{[user.firstname+' '+user.lastname]}</p>
              { userSetting.logIO && <div
                                   className="z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-20
                            absolute translate-y-20">
                  <ul className=" text-sm text-gray-700 dark:text-gray-400"
                      aria-labelledby="dropdownLargeButton inline">
                      <li>
                          <a href="/login"
                             className="block px-2 py-2 hover:bg-blue1 ">
                               Log In
                          </a>
                      </li>
                      <li>
                          <div
                             className="block px-2 py-2 hover:bg-blue1 rounded-b-lg"
                            onClick={()=>{
                                localStorage.setItem('jwtToken','');
                                document.getElementById("name").innerHTML = "";
                            }
                          }
                          >
                              Log Out
                          </div>
                      </li>
                  </ul>

              </div>}
          </div>
          <div className={'h-full w-1/12 flex items-center justify-start'}>
              <button className=' border border-blue2 text-blue2 xl:text-lg text-[0.72rem] rounded-3xl xl:px-4 py-3 px-2
               font-bold hover:bg-blue2 hover:opacity-60 hover:text-white
                      transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300
                      '   onClick={()=>{
                  setChosen({home: false, educational_groups: false, forums: true, aboutUs: false ,contactUs: false});
                  router.push('/myBooklet').then(r => {});
              }}>
                  جزوه های من
              </button>
          </div>
          <div className={'h-full w-8/12 flex justify-center items-center '}>
              <div className=' flex flex-row h-4/6 w-full bg-blue1 rounded-full grid grid-cols-5 shadow-lg ' dir={'rtl'}>
                  <div className='flex justify-center items-center block'>
                      <button className={`text-black text-sm font-bold hover:text-blue2 transition 
                      ease-in-out hover:-translate-y hover:scale-110 duration-100
                      ${chosen.home === true ? "text-blue2" : ""}
                      `}
                      onClick={()=>{
                          setChosen({home: true, educational_groups: false, Forums: false, aboutUs: false ,contactUs: false});
                          router.push('/home').then(r => {});
                      }}
                      >
                          خانه
                      </button>
                  </div>
                  <div className='flex justify-center items-center flex-col block overflow-visible'>

                      <button className={`flex items-center justify-center w-full text-gray-900 rounded text-black text-sm font-bold hover:text-blue2
                        ${chosen.educational_groups === true ? 'text-blue2' : ""}`}
                              onClick={()=>{
                                  setChosen({home: false, educational_groups: !chosen.educational_groups, forums: false, aboutUs: false ,contactUs: false});
                              }}
                      >
                          گروه های آموزشی
                          <svg
                          className={`w-2.5 h-2.5 ms-2.5 ${chosen.educational_groups===true ? 'rotate-180':''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                          fill="none" viewBox="0 0 10 6">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 1 4 4 4-4"/>
                          </svg>
                      </button>
                      { chosen.educational_groups && <div id="dropdownNavbar"
                           className="z-20 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44
                            absolute translate-y-24"
                            onClick={(
                                )=>{setChosen({ educational_groups: !chosen.educational_groups})
                            }
                            }>
                          <ul className="py-2 text-sm text-gray-700 dark:text-gray-400"
                              aria-labelledby="dropdownLargeButton inline">
                              <li>
                                  <a
                                      href={'/softwareGroup'}
                                     className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                      نرم افزار
                                  </a>
                              </li>
                              <li>
                                  <a
                                      href={'/networkGroup'}
                                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                      شبکه
                                  </a>
                              </li>
                              <li>
                                  <a
                                      href={'/AIGroup'}
                                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                      هوش مصنوعی
                                  </a>
                              </li>
                              <li>
                                  <a
                                      href={'/hardwareGroup'}
                                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                      سخت افزار
                                  </a>
                              </li>
                          </ul>

                      </div>}
                  </div>
                  <div className='flex justify-center items-center block'>
                      <button className={`text-black text-sm font-bold hover:text- hover:text-blue2 transition 
                      ease-in-out hover:-translate-y hover:scale-110 duration-100
                      ${chosen.forums === true ? "text-blue2" : ""}
                      `}
                              onClick={()=>{
                                  setChosen({home: false, educational_groups: false, forums: true, aboutUs: false ,contactUs: false});
                                 router.push('/groups').then(r => {});
                              }}
                      >
                          انجمن ها
                      </button>
                  </div>
                  <div className='flex justify-center items-center block'>
                      <button className={`text-black text-sm font-bold hover:text- hover:text-blue2 transition 
                      ease-in-out hover:-translate-y hover:scale-110 duration-100
                      ${chosen.aboutUs === true ? "text-blue2" : ""}
                      `}
                              onClick={()=>{
                                  setChosen({home: false, educational_groups: false, forums: false, aboutUs: true ,contactUs: false});
                                  router.push('/aboutUs').then(r => {});
                              }}
                      >
                          درباره ما
                      </button>
                  </div>
                  <div className='flex justify-center items-center block'>
                      <button className={`text-black text-sm font-bold hover:text- hover:text-blue2 transition 
                      ease-in-out hover:-translate-y hover:scale-110 duration-100
                      ${chosen.contactUs === true ? "text-blue2" : ""}
                      `}
                              onClick={()=>{
                                  setChosen({home: false, educational_groups: false, forums: false, aboutUs: false ,contactUs: true});
                                   router.push('/contactUs').then(r => {});
                              }}
                      >
                          ارتباط با ما
                      </button>
                  </div>
              </div>
          </div>
          <div className={'flex h-full w-2/12 justify-center items-center'}>
              <img src='/images/logo2.png' alt={'logo'}/>
          </div>
      </div>
  );
};

export default Header;