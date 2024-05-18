
import Like from "@/components/icons/Like";
import Like_fill from "@/components/icons/Like_fill";
import like from "@/components/icons/Like";
import Bookmark_fill from "@/components/icons/Bookmark_fill";
import Bookmark from "@/components/icons/Bookmark";

const CourseInformation = (props) => {

    let save;
    return (
        <div className="w-75% h-44 shadow-2xl bg-opacity-15 bg-[#1FAAEAbg-opacity-15 bg-[#1FAAEA] max-h-60 rounded-3xl flex flex-row m-12 drop-shadow-2xl p-5 " dir="rtl">
            <div className="w-2/12 border-t-0 drop-shadow-xl ">
                <img className={' h-full rounded-3xl ' }
                     src={'./images/CE11.png'}
                     alt={'course'} />
            </div>
            <div className="w-8/12 flex flex-row h-full ">
                <div className="flex flex-col gap-8 w-4/12">
                    <div className={'flex flex-row gap-2'}>
                        <p className="font-bold  text-lg laptop: text-2xl  font-bold text-black ">منتشر کننده:  </p>
                        <p className="text-lg laptop: text-1xl text-black">{props.lessonName}</p>
                    </div>
                    <div className={'flex flex-row gap-2'}>
                        <p className="font-bold text-lg laptop: text-2xl  font-bold text-black ">درس: </p>
                        <p className="    text-lg laptop: text-1xl   text-black   ">{props.professorName}   </p>
                    </div>

                </div>
                <div className="flex flex-col gap-8 w-4/12">
                    <div className={'flex flex-row gap-2'}>
                        <p className="font-bold  text-lg laptop: text-2xl  font-bold text-black ">استاد درس:  </p>
                        <p className="text-lg laptop: text-1xl text-black">{props.lessonName}</p>
                    </div>
                    <div className={'flex flex-row gap-2'}>
                        <p className="font-bold text-lg laptop: text-2xl  font-bold text-black ">ترم: </p>
                        <p className="    text-lg laptop: text-1xl   text-black   ">{props.professorName}   </p>
                    </div>

                </div>

            </div>

            <div className="w-3/12 scale-125 py-6 ">
                <div className='flex flex-row scale-125 gap-2 ml-4 '>


                <button className='flex flex-row pl-12 '
                        onClick={()=>{
                            setSave(!save)
                        }}>
                    {save && <Bookmark_fill/>}
                    {!save && <Bookmark/>}
                </button>
                    <p className="text-sm text-black ">320{props.like}</p>
                    <button
                        className='flex flex-row '
                        onClick={()=>{
                            setLike(!like)
                        }}>
                        {!like && <Like/>}
                        {like && <Like_fill/>}
                    </button>
                    <button className='flex flex-row pr-12'
                            onClick={()=>{
                                setSave(!save)
                            }}>
                        {save && <Bookmark_fill/>}
                        {!save && <Bookmark/>}
                    </button>
                </div>

            </div>
        </div>
    );
}

export default CourseInformation;