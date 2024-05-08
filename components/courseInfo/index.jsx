import YellowStar from "@/components/icons/YellowStar";
import Star from "@/components/icons/Star";
import {useContext, useEffect, useState} from "react";
import ShowCourseInfo from "@/components/showCourseInfo";
import Edit from "@/components/icons/Edit";
import {coursePIDContext} from "@/context/coursePIDContext";

const CourseInfo = () => {
    const [selectedCourse , setSelectedCourse]=useContext(coursePIDContext);
    const [rate , setRate]=useState(4.2);
    const [courseInfo , setCourseInfo]=useState({courseName:'cfvghjk' , courseProfessor:'bmdfghjk' , vahed:'3' , info:'توضیحات :هدف این درس آشنا نمودن دانشجویان با مفاهیم و اصول روشهای تحلیل هوشمند داده ها و روش های هوشمند حل مسایل مهندسی با استفاده از رویکرد های فازی ، تکاملی و شبکه های عصبی میباشد. درتحقق این هدف دانشجویان با ابزارهای نرمافزاری لازم برای استفاده از این روش ها اشنا میشوند.'})
    useEffect(() => {
        const fetchData = async () => {
            console.log('publicId:')
            console.log(selectedCourse)
            try {
                const response = await fetch(`http://localhost:8090/unipoll/v1/instructor-course/${selectedCourse.publicId}`);

                if (response.ok) {
                    const data = await response.json();
                    setCourseInfo(data.result);
                    setRate(courseInfo.rate)

                } else {
                    console.log("Network response was not ok");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);
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
                      <p className={'text-xs'}>3 reviws</p>
                  </div>
                  <div className={'w-full flex flex-row gap-5 items-center'}>
                      <p className={'text-center text-darkBlue text-2xl whitespace-pre font-bold'}>مشخصات درس</p>
                      <div className={'h-0.5 w-full bg-darkBlue'}></div>
                  </div>
                  <ShowCourseInfo courseName={courseInfo.courseName} rate={courseInfo.rate} courseProfessor={courseInfo.instructorCourseFirstname +' '+ courseInfo.instructorCourseLastname} vahed={courseInfo.unit} info={courseInfo.description}/>
                  <div className={'h-0.5 w-full bg-darkBlue '}></div>
                  <div id={'rating'}>
                        <p className={'text-lg text-black'}>امتیاز خودرا به این درس بدهید</p>
                  </div>
              </div>
          </div>
          <div id={'edit'} className={'flex flex-row justify-between items-center'}>
              <p className={'text-xs text-gray-600'}> Last Update: {courseInfo.lastUpdate}</p>
              <button>
                  <Edit/>
              </button>
          </div>
      </div>
  )
}
export default CourseInfo;