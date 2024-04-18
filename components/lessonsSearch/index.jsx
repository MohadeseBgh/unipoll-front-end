import YellowStar from "@/components/icons/YellowStar";
import Star from "@/components/icons/Star";

const LessonSearch = (props) => {

    return (
        <div className="w-75% h-44 shadow-2xl bg-opacity-15 bg-[#1FAAEA] max-h-60 rounded-3xl flex flex-row m-12 drop-shadow-2xl p-5 " dir="rtl">
            <div className="w-2/12 border-t-0 drop-shadow-xl ">
                <img className={' h-full rounded-3xl ' }
                     src={'./images/CE11.png'}
                     alt={'course'} />
            </div>
            <div className="w-8/12 flex flex-row h-full ">
                <div className="flex flex-col gap-8 w-4/12">
                    <div className={'flex flex-row gap-2'}>
                        <p className="font-bold  text-lg laptop: text-2xl  font-bold text-black ">نام درس:  </p>
                        <p className="text-lg laptop: text-1xl text-black">{props.lessonName}</p>
                    </div>
                    <div className={'flex flex-row gap-2'}>
                        <p className="font-bold text-lg laptop: text-2xl  font-bold text-black ">استاد درس: </p>
                        <p className="    text-lg laptop: text-1xl   text-black   ">{props.professorName}   </p>
                    </div>

                </div>
                 <div className={'flex flex-row h-full w-8/12 gap-2'}>
                    <p className="font-bold text-lg laptop: text-2xl  font-bold text-black ">توضیحات:</p>
                    <p className="text-lg laptop:text-xl text-black break-all">{props.description}</p>
                 </div>
            </div>

            <div className="w-2/12 scale-125 py-6 pr-20 ">
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