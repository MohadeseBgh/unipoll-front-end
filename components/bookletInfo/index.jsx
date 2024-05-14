import YellowStar from "@/components/icons/YellowStar";
import Star from "@/components/icons/Star";
import {useContext, useEffect, useState} from "react";
import ShowCourseInfo from "@/components/showCourseInfo";
import Edit from "@/components/icons/Edit";
import {coursePIDContext} from "@/context/coursePIDContext";
import Bookmark_fill from "@/components/icons/Bookmark_fill";
import Bookmark from "@/components/icons/Bookmark";
import Report from "@/components/icons/Report";

const BookletInfo = () => {
    const [save , setSave]=useState(false);
    const [like , setLike]=useState(false);
    const [selectedCourse , setSelectedCourse]=useContext(coursePIDContext);
    const [rate , setRate]=useState(4.2);
    const [bookletInfo , setBookletInfo]=useState({writerName:'cfvghjk' , courseProfessor:'bmdfghjk' , course:'مبانی برنامه نویسی',term:"ترم پاییز 1400" , info:'توضیحات :هدف این درس آشنا نمودن دانشجویان با مفاهیم و اصول روشهای تحلیل هوشمند داده ها و روش های هوشمند حل مسایل مهندسی با استفاده از رویکرد های فازی ، تکاملی و شبکه های عصبی میباشد. درتحقق این هدف دانشجویان با ابزارهای نرمافزاری لازم برای استفاده از این روش ها اشنا میشوند.'})
    return(
      <div className={'w-full h-full bg-[#E2F4FC] shadow-[0_0_60px_-15px_rgba(0,0,0,0.3)] flex flex-col p-5 gap-5'}>
          <div className={'w-full h-[24rem] flex flex-row gap-10'}>
              <img src={'images/bookletImgInfo.png'} className={'h-auto w-auto rounded-2xl'} alt={'booklet'}/>
              <div className={'flex flex-col w-full gap-2 h-full items-start justify-evenly '}>
                  <div id={'icons'} className={'w-full flex flex-row-reverse justify-start'}>
                      <button><Report/></button>
                      <button className='flex flex-row justify-center items-center'
                              onClick={() => {
                                  setSave(!save)
                              }}>
                          {save && <Bookmark_fill/>}
                          {!save && <Bookmark/>}
                      </button>
                  </div>
                  <div className={'w-full flex flex-row gap-5 items-center'}>
                      <p className={'text-center text-darkBlue text-2xl whitespace-pre font-bold'}>مشخصات جزوه</p>
                      <div className={'h-0.5 w-full bg-darkBlue'}></div>
                  </div>
              <div className={'h-0.5 w-full bg-darkBlue '}></div>

              </div>
          </div>
      </div>
  )
}
export default BookletInfo;