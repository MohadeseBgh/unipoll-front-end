import YellowStar from "@/components/icons/YellowStar";
import Star from "@/components/icons/Star";

const LessonSearch = (props) => {

    return (
        <div className="w-[85rem] bg-blend-normal shadow-2xl bg-opacity-15 bg-[#1FAAEA] max-h-60 rounded-3xl flex flex-row m-12 drop-shadow-2xl p-5" dir="rtl">
            <div className="basis-2/12 border-t-0 drop-shadow-xl ">
                <img className={' h-full w-full rounded-3xl backdrop-contrast-50 scale-105 ' }
                     src='/images/why.jpg' // آدرس گرفتن عکس هم فکر کنم باید از بک گرفته شود
                     alt={'why UniPoll ?'} />
            </div>
            <div className="basis-8/12 px-3 flex flex-row gap-12 ">
                <div className="flex flex-col gap-8 basis-4/12 justify-center items-center">
                    <div className={'flex flex-row'}>
                        <p className="font-bold  text-3xl  font-bold text-black pl-4 pr-6">نام درس:  </p>
                        <p className="   text-2xl    ">{props.lessonsName}  برنامه نویسی </p>
                    </div>
                    <div className={'flex flex-row'}>
                        <p className="font-bold text-3xl  font-bold text-black pl-4 ">استاد درس: {props.lessonsName}</p>
                        <p className="    text-2xl      ">{props.profssorName}  رمضانی </p>
                    </div>

                </div>
                 <div className={'flex flex-row pt-11 basis-7/12'}>
                    <p className="font-bold    text-3xl  font-bold text-black  ">توضیحات: {props.lessonsName}</p>
                    <p className="  text-2xl  pr-4 ">{props.descriptionn}  توضیحات درس است این جا است  </p>

                 </div>

            </div>

            <div className="basis-2/12 scale-125 py-7   pr-24 ">
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