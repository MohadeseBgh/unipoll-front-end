import YellowStar from "@/components/icons/YellowStar";
import Star from "@/components/icons/Star";
import {useContext, useEffect, useState} from "react";
import ShowCourseInfo from "@/components/showCourseInfo";
import Edit from "@/components/icons/Edit";
import {coursePIDContext} from "@/context/coursePIDContext";

const CourseInfo = () => {
    //
    const [rating, setRating] = useState({"rate":0.0});
    const [hover, setHover] = useState(null);
    //
    const [edit , setEdit]=useState(false);
    const [editAccess , setEditAccess]=useState(false);
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
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [courseInfo.rate]);
    const editClick = (e) => {
      e.preventDefault();
      if (editAccess===true)
        setEdit(true);
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
            if (response.ok) {
                const data = await response.json();
                console.log('ok');
                console.log(data);

            } else {
                console.log("Not ok");
            }
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    }
    // useEffect( () => {
    //     const fetchData = async () => {
    //         console.log(rating);
    //     const jwtToken = localStorage.getItem('jwtToken');
    //
    //     try {
    //         const response = await fetch(`http://localhost:8090/unipoll/v1/rate/${selectedCourse.publicId}`, {
    //             method: 'POST',
    //             headers: {
    //                 'Authorization': jwtToken,
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify(rating),
    //         });
    //         if (response.ok) {
    //             const data = await response.json();
    //             console.log('ok');
    //             console.log(data);
    //
    //         } else {
    //             console.log("Not ok");
    //         }
    //     } catch (error) {
    //         console.error('Error uploading file:', error);
    //     }
    //         }
    //     fetchData();
    //
    // }, [rating]);
    return(
      <div className={'w-full h-full bg-[#E2F4FC] shadow-[0_0_60px_-15px_rgba(0,0,0,0.3)] flex flex-col p-5 gap-5'}>
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
                  <ShowCourseInfo editButton={edit} courseName={courseInfo.courseName} rate={courseInfo.rate} courseProfessor={courseInfo.instructorCourseFirstname +' '+ courseInfo.instructorCourseLastname} vahed={courseInfo.unit} info={courseInfo.description}/>
                  <div className={'h-0.5 w-full bg-darkBlue '}></div>
                  <div id={'rating'} className={'flex flex-row justify-between items-center w-full'}>
                      <p className={'text-lg text-black'}>امتیاز خودرا به این درس بدهید</p>
                        <div dir={'ltr'}>
                            {[...Array(5)].map((star, index) => {
                                const currentRating = index + 1;
                                return (
                                    <label key={index} >
                                        <input className={'hidden '}
                                               type="radio"
                                               name="rating"
                                               value={currentRating}
                                               onChange={() => {
                                                   setRating((prevRating) => {
                                                       return { ...prevRating, rate: currentRating };
                                                   });
                                                   handleRating(currentRating).then(r => {});
                                               }}
                                               checked={currentRating === rating.rate}
                                        />
                                        <span
                                            className={`p-5 cursor-pointer text-3xl ${currentRating <= (hover || rating.rate) ? "text-[#ffc107]" : "text-white "}`}
                                            onMouseEnter={() => setHover(currentRating)}
                                            onMouseLeave={() => setHover(null)}
                                        >&#9733;
                                  </span>
                                    </label>
                                );
                            })}
                        </div>

                      {/*<div id={'show_rate'} className={'flex flex-row-reverse items-center'}>*/}
                      {/*    <div onClick={handleRating} >*/}
                      {/*        {rating >= 1 ? <YellowStar/> : <Star/>}*/}
                      {/*    </div>*/}
                      {/*    <div>*/}
                      {/*        {rating >= 2 ? <YellowStar/> : <Star/>}*/}
                      {/*    </div>*/}
                      {/*    <div>*/}
                      {/*        {rating >= 3 ? <YellowStar/> : <Star/>}*/}
                      {/*    </div>*/}
                      {/*    <div>*/}
                      {/*        {rating >= 4 ? <YellowStar/> : <Star/>}*/}
                      {/*    </div>*/}
                      {/*    <div>*/}
                      {/*        {rating >= 5 ? <YellowStar/> : <Star/>}*/}
                      {/*    </div>*/}
                      {/*</div>*/}
                  </div>
              </div>
          </div>
          <div id={'edit'} className={'flex flex-row justify-between items-center'}>
              <p className={'text-xs text-gray-600'}> Last Update: {courseInfo.lastUpdate}</p>
              <div className={'flex gap-2'}>
                  <button onClick={editClick} className={'hover:scale-105'}>
                      <Edit/>
                  </button>
                  { edit && <p>

                  </p>}
              </div>

          </div>
      </div>
  )
}
export default CourseInfo;