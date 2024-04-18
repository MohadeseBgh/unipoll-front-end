import YellowStar from "@/components/icons/YellowStar";
import Star from "@/components/icons/Star";

const LessonSearch = (props) => {

    return (
        <div className="w-80% bg-blend-normal shadow-2xl bg-opacity-15 bg-[#1FAAEA] max-h-60 rounded-3xl flex flex-row m-12 drop-shadow-2xl p-5" dir="rtl">
            <div className="basis-2/12 border-t-0 drop-shadow-xl ">
                <img className={' h-full w-full rounded-3xl backdrop-contrast-50 scale-105 ' }
                     src={props.image} // آدرس گرفتن عکس هم فکر کنم باید از بک گرفته شود
                     alt={'why UniPoll ?'} />
            </div>
            <div className="basis-8/12 px-3 flex flex-row gap-12 ">
                <div className="flex flex-col gap-8 basis-4/12 justify-center items-center">
                    <div className={'flex flex-row'}>
                        <p className="font-bold  text-lg laptop: text-2xl  font-bold text-black pl-4 pr-6">نام درس:  </p>
                        <p className="   text-lg laptop: text-1xl  text-black  ">{props.lessonName}  </p>
                    </div>
                    <div className={'flex flex-row'}>
                        <p className="font-bold text-lg laptop: text-2xl  font-bold text-black pl-4 ">استاد درس: </p>
                        <p className="    text-lg laptop: text-1xl   text-black   ">{props.profssorName}   </p>
                    </div>

                </div>
                 <div className={'flex flex-row pt-12 basis-7/12'}>
                    <p className="font-bold    text-lg laptop: text-2xl  font-bold text-black  ">توضیحات:</p>
                    <p className="  text-lg laptop: text-1xl text-black pr-4 ">{props.description}  </p>

                 </div>

            </div>

            <div className="basis-2/12 scale-125 py-6   pr-20 ">
                <div className='flex flex-row basis-1/4 scale-150'  >
                    {props.rate >= 5 ? <YellowStar/> : <Star />}
                    {props.rate >= 4 ? <YellowStar/> : <Star/>}
                    {props.rate >= 3 ? <YellowStar/> : <Star/>}
                    {props.rate >= 2 ? <YellowStar/> : <Star/>}
                    {props.rate >= 1 ? <YellowStar/> : <Star/>}
                </div>
            </div>
        </div>
    );
}

export default LessonSearch;