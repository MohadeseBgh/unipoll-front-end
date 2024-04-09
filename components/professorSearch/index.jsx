
const ProfessorSearch = (props) => {

    return (
        <div className="w-80% bg-blend-normal shadow-2xl bg-opacity-15 bg-[#1FAAEA] max-h-25% rounded-3xl flex flex-row m-12 drop-shadow-2xl p-5" dir="rtl">
            <div className="basis-2/12 border-t-4 drop-shadow-xl ">
                <img className={' h-full w-full rounded-3xl backdrop-contrast-50 scale-105 ' }
                     src='/images/why.jpg' // آدرس گرفتن عکس هم فکر کنم باید از بک گرفته شود
                     alt={'why UniPoll ?'} />
            </div>
            <div className="basis-10/12 px-3 flex flex-row gap-12 ">
                <div className="flex flex-col gap-8 justify-center bg items-center">
                    <div className={'flex flex-row'}>
                        <p className="font-bold  text-3xl  font-bold text-black pl-4 pr-4">نام استاد:  </p>
                        <p className="   text-2xl    ">{props.professorNamee} حعفر </p>
                    </div>
                    <div className={'flex flex-row'}>
                        <p className="font-bold text-3xl  font-bold text-black pl-4 pr-8">مرتبه علمی: </p>
                        <p className="    text-2xl      ">{props.profssorDegree}  استادیار </p>
                    </div>

                </div>
                <div className={"flex flex-col"}>
                    <div className={'flex flex-row pt-11'}>
                        <p className="font-bold    text-3xl  font-bold text-black  "> ایمیل: </p>
                        <a href={'#'} className=" pt-1 text-2xl  pr-4 ">{props.professorEmail} saeedranjbar586@gmail.com </a>
                    </div>
                     <div className={'flex flex-row pt-8'}>
                         <p className="font-bold    text-3xl  font-bold text-black  ">صفحه شخصی:</p>
                        <a    href={'#'} className=" pt-1 text-2xl  pr-4 ">{props.professorSite} www.mio.com   </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfessorSearch;