import BookletInformation from "@/components/bookletInformation";
import Like from "@/components/icons/Like";
import Like_fill from "@/components/icons/Like_fill";
import Bookmark_fill from "@/components/icons/Bookmark_fill";
import Bookmark from "@/components/icons/Bookmark";
import like from "@/components/icons/Like";
import CarouselBooklet from "@/components/carouselBooklet";
import TopBooklet from "@/components/topBooklet";
import topBooklet from "@/components/topBooklet";
import Layout from "@/layouts/layout";
import {useState} from "react";



const MyBooklet = (props) => {
    const [topBooklet, setTopBooklet] = useState([{courseName:"مبانی برنامه نویسی" ,instructorLastname:"رمضانی" ,instructorFirstname:"رضا",term:"پاییز 1400" ,likeNumber:120},
        {courseName:"مبانی برنامه نویسی" ,instructorLastname:"فاطمی" ,instructorFirstname:"افسانه",term:"پاییز 1401" ,likeNumber:120},
        {courseName:"مبانی برنامه نویسی" ,instructorLastname:"ماهوش" ,instructorFirstname:"حسین",term:"پاییز 1399" ,likeNumber:50},
        {courseName:"مبانی برنامه نویسی" ,instructorLastname:"زجاجی" ,instructorFirstname:"زهرا",term:"پاییز 1400" ,likeNumber:20},
        {courseName:"مبانی برنامه نویسی" ,instructorLastname:"رمضانی" ,instructorFirstname:"رضا",term:"پاییز 1400" ,likeNumber:20},
        {courseName:"مبانی برنامه نویسی" ,instructorLastname:"ادیبی" ,instructorFirstname:"پیمان",term:"پاییز 1398" ,likeNumber:20},
        {courseName:"مبانی برنامه نویسی" ,instructorLastname:"رمضانی" ,instructorFirstname:"رضا",term:"پاییز 1400" ,likeNumber:20},
        {courseName:"مبانی برنامه نویسی" ,instructorLastname:"رمضانی" ,instructorFirstname:"رضا",term:"پاییز 1400" ,likeNumber:20},]);
    let save;
    return (<>
        <Layout>
        <div className={"h-screen w-screen  bg-white text-black  overflow-x-hidden"}>
            <div className={'flex  flex-row w-full  mt-20 gap-12 justify-center items-center '}>
                <div className={'h-1 w-3/12 bg-darkBlue mt-1'}></div>
                <h1 className='font-bold text-center text-3xl text-darkBlue w-6/12 justify-center mb-2 ml-8 pb-2'>جزوه‌هایی که به اشتراک گذاشته اید</h1>
                <div className={'h-1 w-3/12 bg-darkBlue mt-1'}>
                </div>

            </div>

            <div className={"flex flex-row  overflow-y-hidden overflow-x-auto gap-24 overscroll-auto scrollbar scrollbar-thumb-darkBlue scrollbar-track-[#D9EDFD]"}>
                <div className={"flex flex-row  h-full gap-x-56"}>

                    <BookletInformation/>
                <BookletInformation/>
                <BookletInformation/><BookletInformation/>
                <BookletInformation/>
                <BookletInformation/> /* این آزمایشی برای تست نمایش است. یکی از آنها مفایت میکند  /*
                </div>
            </div>
            <div className={'flex flex-row w-full mt-40 gap-12 justify-center items-center bg-white '}>
                <div className={'h-1 w-3/12 bg-darkBlue mt-1'}></div>
                <h1 className='font-bold text-3xl text-center text-darkBlue w-6/12 justify-center mb-2 ml-8 pb-2'>جزوه های موردعلاقه شما</h1>
                <div className={'h-1 w-3/12 bg-darkBlue mt-1'}>
                </div>

               </div>
            <div id="topBooklet" className="flex flex-row justify-center justify-items-center items-center text-center  bg-white " dir="rtl">
                <div
                    className="flex flex-wrap gap-20  justify-start  p-16">
                    {topBooklet.map(
                    (p, index) => <CarouselBooklet key={index} course={p.courseName}
                                                   professor={[p.instructorFirstname, " ", p.instructorLastname]}
                                                   semester={p.term} like={p.likeNumber} publicId={p.publicId}
                                                   isLiked={p.isLiked}/>
                )}
                </div>
            </div>

            <footer/>
        </div>

        </Layout>
    </>)
}
export default MyBooklet;