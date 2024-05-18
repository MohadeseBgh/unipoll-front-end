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



const MyBooklet = (props) => {

    let save;
    return (<>
        <Layout>
        <div>
            <div className={'flex  flex-row w-full mt-20 gap-12 justify-center items-center '}>
                <div className={'h-2.5 w-3/12 bg-darkBlue mt-1'}></div>
                <h1 className='font-bold text-center text-3xl text-darkBlue w-6/12 justify-center mb-2 ml-8 pb-2'>جزوه‌هایی که من به اشتراک گذاشتم</h1>
                <div className={'h-2.5 w-3/12 bg-darkBlue mt-1'}>
                </div>

            </div>

            <div className={"flex flex-row overflow-x-scroll overflow-y-hidden overflow-y-auto gap-24 overscroll-auto scrollbar scrollbar-thumb-darkBlue scrollbar-track-[#D9EDFD]"}>
                <div className={"flex flex-nowrap  gap-x-56"}>

                    <BookletInformation/>
                <BookletInformation/>
                <BookletInformation/><BookletInformation/>
                <BookletInformation/>
                <BookletInformation/> /* این آزمایشی برای تست نمایش است. یکی از آنها مفایت میکند  /*
                </div>
            </div>
            <div className={'flex flex-row w-full mt-2 gap-12 justify-center items-center '}>
                <div className={'h-2.5 w-3/12 bg-darkBlue mt-1'}></div>
                <h1 className='font-bold text-3xl text-center text-darkBlue w-6/12 justify-center mb-2 ml-8 pb-2'>جزوه های موردعلاقه من</h1>
                <div className={'h-2.5 w-3/12 bg-darkBlue mt-1'}>
                </div>





               </div>
            <div id="topBooklet" className="flex flex-col mb-24  " dir="rtl">
                <div
                    className={"min-h-[32rem]  w-screen bg-[#F2FBFF] justify-items-center gap-y-16 "}>
                    <TopBooklet booklets={topBooklet}/>
                </div>
            </div>

        <footer/>
        </div>

        </Layout>
   </> )
}
export default MyBooklet;