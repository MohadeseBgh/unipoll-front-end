import YellowStar from "@/components/icons/YellowStar";
import Star from "@/components/icons/Star";
import {useState} from "react";
import ShowCourseInfo from "@/components/showCourseInfo";
import Edit from "@/components/icons/Edit";

const CourseInfo = () => {
    const [rate , setRate]=useState(4.2);
    const [courseInfo , setCourseInfo]=useState({courseName:'cfvghjk' , courseProfessor:'bmdfghjk' , vahed:'3' , info:'توضیحات :هدف این درس آشنا نمودن دانشجویان با مفاهیم و اصول روشهای تحلیل هوشمند داده ها و روش های هوشمند حل مسایل مهندسی با استفاده از رویکرد های فازی ، تکاملی و شبکه های عصبی میباشد. درتحقق این هدف دانشجویان با ابزارهای نرمافزاری لازم برای استفاده از این روش ها اشنا میشوند.'})
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
                  <ShowCourseInfo courseName={courseInfo.courseName} courseProfessor={courseInfo.courseProfessor} vahed={courseInfo.vahed} info={courseInfo.info}/>
                  <div className={'h-0.5 w-full bg-darkBlue '}></div>
                  <div id={'rating'}>
                        <p className={'text-lg text-black'}>امتیاز خودرا به این درس بدهید</p>
                  </div>
              </div>
          </div>
          <div id={'edit'} className={'flex flex-row justify-between items-center'}>
              <p className={'text-xs text-gray-600'}> last edit 2month ago</p>
              <button>
                  <Edit/>
              </button>
          </div>
      </div>
  )
}
export default CourseInfo;