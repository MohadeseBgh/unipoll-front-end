import YellowStar from "@/components/icons/YellowStar";
import Star from "@/components/icons/Star";
import {useContext, useEffect, useState} from "react";
import Edit from "@/components/icons/Edit";
import {coursePIDContext} from "@/context/coursePIDContext";
import OkAlert from "@/components/okAlert";
import ErrorAlert from "@/components/errorAlert";
import Close from "@/components/icons/Close";

const CourseInfo = () => {
    //
    const [rating, setRating] = useState({"rate":0.0});
    const [hover, setHover] = useState(null);
    //
    const [edit , setEdit]=useState(false);
    const [okRate , setOkRate]=useState(false);
    const [accessRate , setAccessRate]=useState(false);
    const [okEdite , setOkEdit]=useState(false);
    const [accessEdit , setAccessEdit]=useState(false);
    const [editAccess , setEditAccess]=useState(false);
    const [textEdit , setTextEdit]=useState("");
    const [selectedCourse , setSelectedCourse]=useContext(coursePIDContext);
    const [rate , setRate]=useState(4.2);
    const [courseInfo , setCourseInfo]=useState({courseName:'cfvghjk' , courseProfessor:'bmdfghjk' ,rate_num:0, vahed:'3' , info:'توضیحات :هدف این درس آشنا نمودن دانشجویان با مفاهیم و اصول روشهای تحلیل هوشمند داده ها و روش های هوشمند حل مسایل مهندسی با استفاده از رویکرد های فازی ، تکاملی و شبکه های عصبی میباشد. درتحقق این هدف دانشجویان با ابزارهای نرمافزاری لازم برای استفاده از این روش ها اشنا میشوند.'})
    useEffect(() => {
        const fetchData = async () => {
            console.log('publicId:')
            console.log(selectedCourse)
            const jwtToken=localStorage.getItem('jwtToken');

            try {
                const response = await fetch(`http://localhost:8090/unipoll/v1/instructor-course/${selectedCourse.publicId}`);

                if (response.ok) {
                    const data = await response.json();
                    setCourseInfo(data.result);
                    setRate( courseInfo.rate);
                    setTextEdit(data.result.description)
                    console.log(data.result);
                } else {
                    console.log("Network response was not ok");
                }
                const response1 = await fetch(`http://localhost:8090/unipoll/v1/rate/${selectedCourse.publicId}`,{
                        method: 'GET',
                        headers: {
                            'Authorization': jwtToken
                        },
                    });

                if (response1.ok) {
                    const data = await response1.json();
                    //console.log(data.result)
                    setRating(data.result)

                } else {
                    console.log("Network response was not ok");
                }
                const response2 = await fetch(`http://localhost:8090/unipoll/v1/instructor-course/enable-to-edit/${selectedCourse.publicId}`,{
                    method: 'GET',
                    headers: {
                        'Authorization': jwtToken,
                        "Content-Type": "application/json"
                    },
                });

                if (response2.ok) {
                    setEditAccess(true)
                } else {
                   setEditAccess(false)
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [courseInfo.rate]);
    const editFinishClick = async (e) => {
        e.preventDefault();
        const jwtToken = localStorage.getItem('jwtToken');
        if (editAccess === true) {
            try {
                const response = await fetch(`http://Localhost:8090/unipoll/v1/instructor-course/edit-description/${selectedCourse.publicId}`, {
                    method: "PUT",
                    body: textEdit, headers: {"Content-Type": "application/json", 'Authorization': jwtToken}
                });
                if (response.ok) {
                    setEdit(false)
                    const response2 = await fetch(`http://localhost:8090/unipoll/v1/instructor-course/${selectedCourse.publicId}`);

                    if (response2.ok) {
                        const data = await response2.json();
                        setCourseInfo(data.result);
                        setOkEdit(true);
                        setTimeout(function(){
                            setOkEdit(false);
                        }, 2000);
                    } else {
                        console.log("Network response was not ok");
                    }

                } else {
                    console.log("Network response was not ok");
                }
            } catch (e) {
                console.error("we are GETTING ERROR", e)
            }
        }

    }
    const editClick = (e) => {
        e.preventDefault();
        if (editAccess===true){
            setEdit(true);
        }else {
            setAccessEdit(true);
            setTimeout(function(){
                setAccessEdit(false);
            }, 2000);
        }

    }
    const handleRating = async (rating) => {
        console.log(rating);
        const jwtToken=localStorage.getItem('jwtToken');

        try {
            const response = await fetch(`http://localhost:8090/unipoll/v1/rate/${selectedCourse.publicId}`, {
                method: 'POST',
                headers: {
                    'Authorization': jwtToken,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({rate:rating}),
            });
            const response1 = await fetch(`http://localhost:8090/unipoll/v1/instructor-course/${selectedCourse.publicId}`);

            if (response1.ok) {
                const data = await response1.json();
                console.log(data.result);
                setCourseInfo(prevState => ({
                    ...prevState,
                    rate: data.result.rate,
                    rate_num:data.result.rate_num
                }));
                setRate( courseInfo.rate);
                console.log(data.result);
            } else {
                console.log("Network response was not ok");
            }
            if (response.ok) {
                const data = await response.json();
                setOkRate(true);
                setTimeout(function(){
                    setOkRate(false);
                    }, 2000);

            } else if(response.status===401){
                setAccessRate(true);
              setTimeout(function(){
                   setAccessRate(false);
                }, 2000);
                console.log("Not ok");
            }
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    }

    return(
      <div className={'w-full h-full bg-[#E2F4FC] shadow-[0_0_60px_-15px_rgba(0,0,0,0.3)] flex flex-col p-5 gap-5 text-black'}>
          <div className={'w-full h-[24rem] flex flex-row gap-10'}>
              <img src={'images/CE1.png'} className={'h-auto w-auto rounded-2xl'} alt={'course'}/>
              <div className={'flex flex-col w-full gap-2 h-full items-start justify-evenly '}>
                  <div id={'show_rate'} className={'w-full flex flex-row-reverse justify-start'}>
                      {rate >= 1 ? <YellowStar/> : <Star/>}
                      {rate >= 2 ? <YellowStar/> : <Star/>}
                      {rate >= 3 ? <YellowStar/> : <Star/>}
                      {rate >= 4 ? <YellowStar/> : <Star/>}
                      {rate >= 5 ? <YellowStar/> : <Star/>}
                      <p className={'text-xs px-2'}>({rate})</p>
                      <p className={'text-xs'}>{courseInfo.rate_num} reviws</p>
                  </div>
                  <div className={'w-full flex flex-row gap-5 items-center'}>
                      <p className={'text-center text-darkBlue text-2xl whitespace-pre font-bold'}>مشخصات درس</p>
                      <div className={'h-0.5 w-full bg-darkBlue'}></div>
                  </div>
                  <div className={'flex flex-col gap-4 p-3 w-full'}>
                      <div className={'flex flex-row gap-1 items-center'}>
                          <p className={'text-lg font-bold text-black'}>نام درس:</p>
                          <p className={'text-lg text-black'}>{courseInfo.courseName}</p>
                      </div>
                      <div className={'flex flex-row gap-1 items-center'}>
                          <p className={'text-lg font-bold text-black'}>استاد درس:</p>
                          <p className={'text-lg text-black'}>{courseInfo.instructorCourseFirstname + ' ' + courseInfo.instructorCourseLastname}</p>
                      </div>
                      <div className={'flex flex-row gap-1 items-center'}>
                          <p className={'text-lg font-bold text-black'}>تعداد واحد:</p>
                          <p className={'text-lg text-black'}>{courseInfo.unit}</p>
                      </div>
                      <div className={'flex flex-row gap-1 w-full'}>
                          <p className={'text-lg font-bold text-black'}>توضیحات:</p>
                          {!edit && <p className={'text-lg text-black'}>{courseInfo.description}</p>}
                          {edit && <form onSubmit={editFinishClick} className={"w-full flex flex-row gap-3"}> <textarea id="infoText"
                            maxLength='500' className="block h-[6rem] w-full p-4  ps-10  text-black rounded-xl  bg-[#DFE8EF] text-lg placeholder:text-[#8B8C8D]
                             focus:outline-none  focus:ring-0 shadow-inner text-start"
                             placeholder="توضیحات برای این درس :"
                             required  onChange={(event) => {
                              setTextEdit(event.target.value)}
                          }>{courseInfo.description}</textarea><button type={"submit"}> <Close/></button></form>}
                      </div>
                  </div>
                  <div className={'h-0.5 w-full bg-darkBlue '}></div>
                  <div id={'rating'} className={'flex flex-row justify-between items-center w-full'}>
                      <p className={'text-lg text-black'}>امتیاز خودرا به این درس بدهید</p>
                      <div className={"flex flex-col"}>
                          <div dir={'ltr'}>
                              {[...Array(5)].map((star, index) => {
                                  const currentRating = index + 1;
                                  return (
                                      <label key={index}>
                                          <input className={'hidden '}
                                                 type="radio"
                                                 name="rating"
                                                 value={currentRating}
                                                 onChange={() => {
                                                     setRating((prevRating) => {
                                                         return {...prevRating, rate: currentRating};
                                                     });
                                                     handleRating(currentRating).then(r => {
                                                     });
                                                 }}
                                                 checked={currentRating === rating.rate}
                                          />
                                          <span
                                              className={`p-3 cursor-pointer text-3xl ${currentRating <= (hover || rating.rate) ? "text-[#ffc107]" : "text-gray-400 "}`}
                                              onMouseEnter={() => setHover(currentRating)}
                                              onMouseLeave={() => setHover(null)}
                                          >&#9733;
                                  </span>
                                      </label>
                                  );
                              })}
                          </div>
                          {okRate && <div className={"w-full"}><OkAlert text={"نظر شما با موفقیت ثبت شد."}/></div>}
                          {accessRate &&
                              <div className={"w-full"}><ErrorAlert text={"محدودیت دسترسی:به اکانت خود وارد شوید."}/>
                              </div>}
                          {okEdite && <div className={"w-full"}><OkAlert text={" ویرایش توضیحات با موفقیت ثبت شد."}/></div>}
                          {accessEdit &&
                              <div className={"w-full"}><ErrorAlert text={"محدودیت دسترسی:فقط استاد این درس اجازه ویرایش توضیحات را دارد"}/>
                              </div>}
                      </div>
                  </div>
              </div>
          </div>
          <div id={'edit'} className={'flex flex-row justify-between items-center'}>
              <p className={'text-xs text-gray-600'}> Last Update: {courseInfo.lastUpdate}</p>
              <div className={'flex gap-2'}>
                  <button onClick={editClick} className={'hover:scale-105'}>
                      <Edit/>
                  </button>
                  {edit && <p>
                  </p>}
              </div>

          </div>
      </div>
    )
}
export default CourseInfo;