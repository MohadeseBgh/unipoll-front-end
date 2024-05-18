import YellowStar from "@/components/icons/YellowStar";
import Star from "@/components/icons/Star";
import {useContext, useEffect, useState} from "react";
import ShowCourseInfo from "@/components/showCourseInfo";
import Edit from "@/components/icons/Edit";
import {coursePIDContext} from "@/context/coursePIDContext";
import Bookmark_fill from "@/components/icons/Bookmark_fill";
import Bookmark from "@/components/icons/Bookmark";
import Report from "@/components/icons/Report";
import ShowBookletInfo from "@/components/showBookletInfo";
import Like from "@/components/icons/Like";
import Like_fill from "@/components/icons/Like_fill";
import Close2 from "@/components/icons/Close2";
import Donlowd from "@/components/icons/Donlowd";

const BookletInfo = () => {
    const [save , setSave]=useState(false);
    const [like , setLike]=useState(false);
    const [professorLike , setProfessorLike]=useState(true);
    const [selectedCourse , setSelectedCourse]=useContext(coursePIDContext);
    const [rate , setRate]=useState(4.2);
    const [bookletInfo , setBookletInfo]=useState({writerName:'جعفر کریمی' , courseProfessor:'رضا رمضانی' , course:'مبانی برنامه نویسی',term:"ترم پاییز 1400" , info:'توضیحات :هدف این درس آشنا نمودن دانشجویان با مفاهیم و اصول روشهای تحلیل هوشمند داده ها و روش های هوشمند حل مسایل مهندسی با استفاده از رویکرد های فازی ، تکاملی و شبکه های عصبی میباشد. درتحقق این هدف دانشجویان با ابزارهای نرمافزاری لازم برای استفاده از این روش ها اشنا میشوند.'})
    return(
      <div className={'w-full h-full bg-[#E2F4FC] shadow-[0_0_60px_-15px_rgba(0,0,0,0.3)] flex flex-col p-5 gap-5 text-black'}>
          <div className={'w-full h-[27rem] flex flex-row gap-10'}>
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
                  <ShowBookletInfo courseName={bookletInfo.course} term={bookletInfo.term}
                                   courseProfessor={bookletInfo.courseProfessor} writerName={bookletInfo.writerName}
                                   info={bookletInfo.info}/>
                  <div className={'h-0.5 w-full bg-darkBlue '}></div>
                  <div className={"flex flex-row w-full items-center justify-between justify-items-stretch"}>
                      <div className="flex flex-col ">
                          <div className="flex flex-row ">
                              <button
                                  className='flex flex-row justify-center items-center'
                                  onClick={() => {
                                      setLike(!like)
                                  }}>
                                  {!like && <Like/>}
                                  {like && <Like_fill/>}
                              </button>
                              <p className="mr-2 text-black ">4</p>
                          </div>
                          {professorLike && <p className={"text-sm font-bold"}>لایک شده توسط استاد</p>}
                      </div>
                      <div className="flex flex-row  items-center">
                          <button
                              className=" flex flex-row   items-center text-center  bg-darkBlue text-white font-normal rounded-xl  h-8 text-sm   hover:drop-shadow-xl hover:shadow-teal-950 px-4 ">
                              <p className={"ml-2"}>دانلود جزوه</p><Donlowd color={"white"}/>
                          </button>
                      </div>
                  </div>

              </div>
          </div>
      </div>
    )
}
export default BookletInfo;