
const ProfessorSearch = (props) => {

    return (
        <div className="w-80% bg-blend-normal shadow-2xl bg-opacity-15 bg-[#1FAAEA] max-h-60 rounded-3xl flex flex-row m-12 drop-shadow-2xl p-5" dir="rtl">
            <div className="basis-2/12 border-t-0 drop-shadow-xl ">
                <img className={' h-full w-full rounded-3xl backdrop-contrast-50 scale-105 ' }
                     src={propos.professorImage} // آدرس گرفتن عکس هم فکر کنم باید از بک گرفته شود
                     alt={'why UniPoll ?'} />
            </div>
            <div className="basis-10/12 px-3 flex flex-row gap-12 ">
                <div className="flex flex-col gap-8 justify-center items-center">
                    <div className={'flex flex-row'}>
                        <p className="font-bold  text-2xl  font-bold text-black pl-4 pr-4">نام استاد:  </p>
                        <p className="   text-1xl text-black   ">{props.professorNamee} </p>
                    </div>
                    <div className={'flex flex-row'}>
                        <p className="font-bold text-2xl  font-bold text-black pl-4 pr-8">مرتبه علمی: </p>
                        <p className="    text-1xl  text-black    ">{props.profssorDegree}   </p>
                    </div>

                </div>
                <div className={"flex flex-col"}>
                    <div className={'flex flex-row pt-11'}>
                        <p className="font-bold    text-2xl  font-bold text-black  "> ایمیل: </p>
                        <a href={'#'} className=" pt-1 text-1xl text-black pr-4 ">{props.professorEmail}  </a>
                    </div>
                     <div className={'flex flex-row pt-8'}>
                         <p className="font-bold    text-2xl  font-bold text-black  ">صفحه شخصی:</p>
                        <a    href={'#'} className=" pt-1 text-1xl text-black pr-4 ">{props.professorSite}   </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfessorSearch;