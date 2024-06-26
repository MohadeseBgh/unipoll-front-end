import Index from "../../components/educationalGroupsHome";
import SearchIcon from "@/components/icons/SearchIcon";

import {useContext, useEffect, useState} from 'react';
import TopBooklet from "@/components/topBooklet";
import EducationalGroupsHome from "../../components/educationalGroupsHome";
import Header from "@/components/header";
import TopCourse from "@/components/topCourse";
import LessonsSearch from "@/components/lessonsSearch";
import Search from "@/components/search";
import Layout from "@/layouts/layout";
import Footer from "@/components/footer";
import Close from "@/components/icons/Close";
import {topbooklt} from "@/context/topbooklet";
const Home = () => {
    const [formValue, setFormValue] = useState({text: "", filter: ""});
    const [resultSearch, setResultSearch] = useState([]);
    const [filter, setFilter] = useState(false);
    const [topCourse, setTopCourse] = useState([ {courseName:" " ,instructorCourseFirstname:" " ,instructorCourseLastname:'',rate:5.0}]);
    const [search , setSearch]=useState(false);
    const [topBooklt , setTopBooklt]=useContext(topbooklt);
    const [educationalGroups , setEducationalGroups]=useState([{publicId:'',name:'',description:''},{publicId:'',name:'',description:''},{publicId:'',name:'',description:''},{publicId:'',name:'',description:''}])
    useEffect(() => {
        const fetchData = async () => {
            let jwtToken=localStorage.getItem('jwtToken');

            try {
                console.log(jwtToken)
                const response = await fetch("http://localhost:8090/unipoll/v1/instructor-course");
                if (response.ok) {
                    const data = await response.json();
                    setTopCourse(data.result);
                } else {
                    console.log("Network response was not ok");
                }
                const response1 = await fetch("http://localhost:8090/unipoll/v1/academic-department");
                if (response1.ok) {
                    const data = await response1.json();
                    setEducationalGroups(data.result);
                    //console.log(educationalGroups)
                }else {
                    console.log("Network response was not ok");
                }
                if(jwtToken.length>5){
                    console.log("hi")
                    const response2 = await fetch("http://localhost:8090/unipoll/v1/booklet",{
                        method: 'GET',
                        headers: {
                            "Content-Type": "application/json",
                            'Authorization': jwtToken
                        },
                    });
                    if (response2.ok) {
                        const data = await response2.json();
                        setTopBooklt(data.result);
                    }
                }else{
                    console.log("jttt")
                        const response2 = await fetch("http://localhost:8090/unipoll/v1/booklet",{
                            method: 'GET',
                            headers: {
                                "Content-Type": "application/json",
                            },
                        });
                        if (response2.ok) {
                            const data = await response2.json();
                            setTopBooklt(data.result);
                    }

                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);
    const closeHandler = async (e) => {
        e.preventDefault();
        setSearch(false);
    }
    const searchHandler = async (e) => {
        e.preventDefault();
        if(formValue.filter==="professor"){
            try {
                const response = await fetch('http://localhost:8090/unipoll/v1/instructor/filter?'+new URLSearchParams({searchQuery:formValue.text.toString()}).toString() ,{
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                });
                if (response.ok) {
                    setFilter(true)
                    setSearch(true)
                    console.log("OK");
                    const data=await response.json();
                    const result=data.result
                    console.log(result)
                    setResultSearch(result)
                    console.log(resultSearch)
                } else {
                    console.log("not ok")
                }

            }catch (e) {
                console.error("we are GETTING ERROR", e)
            }
        }
        if(formValue.filter==="lesson"){
            try {
                const response = await fetch('http://localhost:8090/unipoll/v1/instructor-course/filter?'+new URLSearchParams({searchQuery:formValue.text.toString()}).toString() ,{
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                });
                if (response.ok) {
                    setFilter(false)
                    setSearch(true)
                    console.log("OK");
                    const data=await response.json();
                    const result=data.result
                    console.log(result)
                    setResultSearch(result)
                    console.log(resultSearch)
                } else {
                    console.log("not ok")
                }

            }catch (e) {
                console.error("we are GETTING ERROR", e)
            }
        }
        console.log(e)
    }
  return(
      <Layout>
      <div className='h-screen w-screen flex flex-col bg-white gap-y-4 overflow-x-hidden'>
          <div id="searchBar " className={`flex flex-col items-center justify-items-center min-h-[35rem] ${search===false ? 'mb-24':''}  laptop:w-screen mobile:w-auto`}
               dir="rtl">
              <div
                  className={"min-h-[35rem] w-screen  bg-[url('/images/searchbar.png')] bg-no-repeat bg-cover justify-items-center "}>
                  <div className='laptop:pr-56 my-20 mobile:pr-4'>
                      <img src='/images/logo3.png' alt={'logo'}/>
                      <h2 className='laptop:text-3xl mobile:text-2xl text-white'>فضایی برای کسب اطلاعات در مورد دروس و
                          اساتید دانشکده</h2>
                  </div>
                  <form
                      className='laptop:px-24 mobile:px-3 laptop:flex-row mobile:flex flex-col items-center justify-items-center'
                      onSubmit={searchHandler}
                  >
                      <div
                          className='basis-1/4  flex flex-row h-14 w-80 rounded-3xl bg-white text-black  items-center justify-items-center '
                          dir="rtl">
                          <h5 className='text-xl font-bold text-black px-8 '>جستجو:</h5>
                          <div>
                              <label className="inline-flex items-center">
                                  <input type="radio" value="lesson"
                                         className="form-radio h-5 w-5 text-blue-600 ml-1 "
                                         name="options" required onClick={(event) => {
                                      setFormValue({...formValue, filter: event.target.value})
                                  }}/>
                                  <span className="ml-2 text-xl text-black">دروس</span>
                              </label>

                              <label className="inline-flex items-center">
                                  <input type="radio" value="professor"
                                         className="form-radio h-5 w-5 text-blue-600 checked:bg-yellow-400 ml-1 mr-2"
                                         name="options" required onClick={(event) => {
                                      setFormValue({...formValue, filter: event.target.value})
                                  }}/>
                                  <span className="ml-2 text-xl text-black">اساتید</span>
                              </label>
                          </div>
                      </div>
                      <div
                          className='laptop:basis-3/4  flex flex-row h-14 w-80 rounded-3xl bg-white text-black  items-center justify-items-center laptop:mr-16 mobile:mr-0 laptop:mt-0 mobile:mt-5'
                          dir="rtl">
                          <input id="default-search" className="block h-14 w-10/12 p-4 ps-10  text-black-900 rounded-3xl  text-black text-xl placeholder:text-[#8B8C8D]
                             focus:outline-none  focus:ring-0 "
                                 placeholder=" جستجو را شروع کن ....." onChange={(event) => {
                              setFormValue({...formValue, text: event.target.value})
                          }}/>
                          <button type="reset" className={`px-10 ${search === false ? 'hidden' : ''}`}
                                  onClick={closeHandler}>
                              <Close/>
                          </button>
                          <button type="submit" className={` ${search === false ? 'pr-24' : 'pr-0'}`}>
                              <SearchIcon/>
                          </button>
                      </div>
                  </form>
              </div>
          </div>
          <div className={`${search === false ? 'hidden' : ''}`}>
              <Search result={resultSearch} professor={filter}/>
          </div>
          <div className={`${search === true ? 'hidden' : ''}`}>
              <div id="whyUniPoll"
                   className=' w-screen text-black laptop:flex-row  mobile: flex flex-col items-center mb-24'>
                  <div className='flex basis-1/2 justify-center'><img src='/images/why.jpg' alt={'why UniPoll ?'}/></div>
                  <div className='basis-1/2 flex flex-col laptop:pl-72 mobile:pl-0 ' dir='rtl'>
                      <h3 className='text-5xl font-bold text-darkBlue  mb-12'>چرا UniPoll ؟</h3>
                      <h3 className='text-3xl font-bold text-black '> امکان نظر دهی به اساتید</h3>
                      <p className='text-[1.75rem]  text-black items-center mb-8'>با امتیاز دهی و ارسال نظر ،به اساتید
                          در
                          بهبود عملکردشان کمک کنید.</p>
                      <h3 className='text-3xl font-bold text-black '> تسهیل گزینش اساتید</h3>
                      <p className='text-[1.75rem]  text-black  mb-8'>سامانه به گونه ای طراحی شده است که
                          دانشجویان هنگام انتخاب واحد بهترین دروس را انتخاب کنند.</p>
                      <h3 className='text-3xl font-bold text-black '> تسریع دست یابی به جزوه</h3>
                      <p className='text-[1.75rem]  text-black mb-8'>شما به اسانی میتوانید جزوات درس مورد نظر
                          خود را پیدا کنید.</p>
                  </div>
              </div>
              <div id="topCourse" className="flex flex-col mb-24 w-screen bg-[#F2FBFF] justify-items-center" dir="rtl">
                  <div className="flex flex-row items-center justify-between pt-8">
                      <hr className="w-4/12 h-1 bg-darkBlue "/>
                      <h3 className='desktop:text-3xl text-2xl font-bold text-black '>دروس پر طرفدار ارائه شده</h3>
                      <hr className="w-4/12 h-1 bg-darkBlue "/>
                  </div>
                  <TopCourse courses={topCourse}/>
              </div>
              <div id="educationalGroups " className=" w-screen flex flex-col items-center justify-center mb-24 ">
                  <h3 className='laptop:text-5xl tablet:text-[2rem]  font-bold text-black items-center '>گروه های آموزشی
                      دانشکده</h3>
                  <div
                      className=' grid gap-12  laptop:grid-cols-4  tablet:grid-cols-2 mobile:grid-cols-1items-center my-24  '>
                      <EducationalGroupsHome name={educationalGroups[0].name}
                                             text={"گروه مهندسی نرم‌افزار دانشگاه اصفهان همواره به عنوان یکی از باسابقه‌ترین گروه‌های کامپیوتری در سطح کشور شناخته می‌شده است. سابقه‌ی این گروه به سال‌های ۱۳۵۰ الی ۱۳۶۴ بازمی‌گردد که کامپیوتر به عنوان یکی از گرایش‌های رشته‌ی ریاضی در دانشگاه اصفهان موجود و از وجود استادان به نام و شناخته ‌شده‌ای بهره می‌برد. در سال ۱۳۶۴ برای اولین بار رشته‌ی کامپیوتر به طور مستقل از طریق کنکور سراسری دانشجو پذیرفت و در سال ۱۳۶۷ دو رشته‌ی مهندسی کامپیوتر با گرایش‌های نرم افزار و سخت‌افزار در این دانشگاه راه‌اندازی گردید. در سال ۱۳۹۱، گروه مهندسی نرم‌افزار به عنوان یک گروه مستقل در دانشکده‌ی مهندسی کامپیوتر در دانشگاه اصفهان شکل گرفت."}/>
                          <EducationalGroupsHome name={educationalGroups[1].name}
                                             text={"هوش مصنوعی شاخه‌­ای از علوم و مهندسی کامپیوتر بوده که هدف آن طراحی و ساخت ماشین‌ها و برنامه‌­های هوشمند است. می­‌توان هوش را قابلیت یک عامل در دستیابی به اهداف در جهان پیرامون پس از ادراک محیط دانست. گستره کاربرد این دانش و اهمیت آن در فعالیت­‌های متنوع بشری از زندگی روزمره گرفته تا پژوهش­‌ها و کاوش­‌های عمیق و چالش برانگیز علمی روز به روز در حال افزایش است. با هدف تربیت نیروی انسانی متخصص در زمینه هوش مصنوعی و احاطه هرچه جامع­تر بر شاخه‌­ها و زمینه­‌های مختلف مطرح در این علم، دوره کارشناسی ­ارشد هوش مصنوعی در سال ۱۳۸۳ در دو شیوه‌ی «آموزشی/پژوهشی»‌ و «آموزش محور» در دو گرایش تخصصی «سیستم­‌های هوشمند» و «مهندسی دانش» تشکیل شد. این گروه اولین بار در سال ۱۳۸۳ اقدام به پذیرش دانشجوی دوره کارشناسی ارشد در رشته مهندسی کامپیوتر گرایش هوش مصنوعی نمود. همچنین این گروه در سال ۱۳۸۷ اقدام به پذیرش اولین دوره دانشجو در مقطع دکتری مهندسی کامپیوتر در گرایش هوش مصنوعی نمود."}
                                             mt='laptop:mt-28'/>
                      <EducationalGroupsHome name={educationalGroups[2].name}
                                             text={"گروه مهندسی فنآوری اطلاعات (IT) در سال ۱۳۸۳ با هدف تربیت نیروی انسانی متخصص در زمینه فناوری اطلاعات تشکیل شد و با پذیرش ۳۵ نفر دانشجوی دوره کارشناسی، آغاز به کار نمود. این گروه در سال ۱۳۹۰ اقدام به پذیرش اولین دوره دانشجویان در مقطع کارشناسی ارشد گرایش شبکه های کامپیوتری نمود و از سال تحصیلی ۹۲-۹۱ نیز مقطع کارشناسی ارشد را در گرایش­های امنیت اطلاعات و تجارت الکترونیکی دائر کرده است. همچنین گروه مهندسی فناوری اطلاعات از بهمن ماه سال ۱۳۹۲ اقدام به پذیرش دانشجوی دکترا در گرایش امنیت اطلاعات نمود."}/>
                      <EducationalGroupsHome name={educationalGroups[3].name}
                                             text={"فعالیت گروه معماری کامپیوتر دانشگاه اصفهان در سال ۱۳۶۷ با هدف تربیت نیروی انسانی متخصص در زمینه سخت افزار شروع شد و با پذیرش ۳۵ نفر دانشجوی دوره کارشناسی، آغاز به کار نمود. این گروه در سال ۱۳۷۶ اقدام به پذیرش اولین دوره دانشجویان در مقطع کارشناسی ارشد و در سال ۱۳۸۳ اقدام به پذیرش دانشجوی دکترا نمود. در سال ۱۳۹۱ گروه مهندسی معماری کامپیوتر به عنوان یک گروه مستقل تشکیل شد. این گروه هم اکنون دارای ۱۰۰ دانشجو در مقطع کارشناسی، ۳۰ دانشجو در مقطع کارشناسی ارشد و ۴۲ دانشجو در مقطع دکترا می‌باشد و تا کنون بیش از ۸۶۰ دانشجوی کارشناسی، ۲۲۰ کارشناسی ارشد و ۳۰ دکترا فارغ التحصیل داشته است. اساتید گروه مهندسی معماری کامپیوتر در مقطع تحصیلات تکمیلی روی مباحث عمیق معماری کامپیوتر، سیستمهای رایانشی-فیزیکی و اینترنت اشیاء، فناوری نانو، کامپیوترهای زیستی و امنیت سخت افزاری پژوهش‌های بنیادی و توسعه‌ای ارزشمندی انجام داده‌اند که نتایج آنها در مجلات و کنفرانس‌های معتبر علمی به چاپ رسیده است. در حال حاضر گروه مهندسی معماری کامپیوتر گروهی پویا بوده و با ترکیب اساتیدی با تجربه و جوان دارای ۷ عضو هیات علمی شامل چهار دانشیار و سه استادیار می‌باشد."}
                                             mt='laptop:mt-28'/>
                  </div>
              </div>
              <div id="topBooklet" className="flex flex-col mb-24 " dir="rtl">
                  <div
                      className={"min-h-[29rem]  w-screen bg-[#F2FBFF] justify-items-center gap-y-16 "}>
                      <div className="flex flex-row items-center justify-between" >
                          <hr className="w-4/12 h-1 bg-darkBlue "/>
                          <h3 className='desktop:text-3xl text-2xl font-bold text-black'>جزوه های برتر</h3>
                          <hr className="w-4/12 h-1 bg-darkBlue "/>
                      </div>
                      <TopBooklet booklets={topBooklt}/>
                  </div>
              </div>

          </div>
          <Footer/>
      </div>
      </Layout>
  );
};
export default Home;
