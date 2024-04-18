const ProfessorInformation = (props) => {

    return (
<div className={"h-[40rem] w-full bg-blend-normal shadow-2xl bg-opacity-15 bg-[#1FAAEA]  flex flex-row-"} dir={'rtl'} >
    <div className={'flex basis-2/4 p-4 h-5/6 w-5/6 rounded-3xl pt-24 '}>
        <img src={'images/searchbarPhoto.png'} className={'   rounded-3xl' }  />
    </div>
    <div className={'flex flex-col basis-6/12  '} >
        <div className={'flex flex-row w-full mt-24 gap-4'}>
            <h1 className='font-bold text-3xl text-black w-4/12 mr-5  text-lg laptop: text-3xl block '>اطلاعات استاد </h1>
            <div className={'h-0.5 w-7/12 bg-darkBlue mt-5 mr-1'}></div>
        </div>
        <div className={'flex flex-col mr-4'}>
            <div className={'mt-8'}>
                <p className="font-bold  text-lg laptop: text-2xl  font-bold text-black pl-4 pr-8">نام و نام خانوادگی:</p>
                <p className="   text-1xl text-black   ">{ props.professorNamee} </p>
            </div>
            <div className={'mt-8'}>
                <p className="font-bold  text-lg laptop: text-2xl  font-bold text-black pl-4 pr-8">مدرک:  </p>
                <p className="   text-lg laptop: text-1xl text-black   ">{ props.professorMadrak} </p>
            </div>
            <div className={'mt-8'}>
                <p className="font-bold text-lg laptop: text-2xl  font-bold text-black pl-4 pr-8">مرتبه علمی:  </p>
                <p className="   text-lg laptop: text-1xl text-black   ">{ props.professorDegree} </p>
            </div>                    <div className={'mt-8'}>
            <p className="font-bold  text-lg laptop: text-2xl  font-bold text-black pl-4 pr-8">تلفن:  </p>
            <p className="   text-lg laptop: text-1xl text-black   ">{ props.professorPhone} </p>
        </div>                    <div className={'mt-8'}>
            <p className="font-bold  text-lg laptop: text-2xl  font-bold text-black pl-4 pr-8">پست الکترونیکی:  </p>
            <p className="   text-lg laptop: text-1xl text-black   ">{ props.professorEamil} </p>
        </div>
            <div className={'mt-8'}>
                <p className="font-bold  text-lg laptop: text-2xl  font-bold text-black pl-4 pr-8">صفحه شخصی:  </p>
                <p className="   text-lg laptop: text-1xl text-black   ">{ props.professorSite} </p>
            </div>
        </div>
        <div className={'h-0.5 w-11/12 bg-darkBlue mt-8 mr-11'}></div>

    </div>
</div>
    );}
export default  ProfessorInformation;