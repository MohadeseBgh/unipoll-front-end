const ProfessorInformation = (props) => {

    return (
        <div className={"h-[35rem] w-4/6 bg-blend-normal shadow-2xl bg-opacity-15 bg-[#1FAAEA] flex flex-row rounded-3xl flex flex-col p-10"} dir={'rtl'} >
            <div className={'flex flex-row w-full '}>
                <h1 className='font-bold text-black w-4/12 text-xl laptop:text-3xl block text-darkBlue text-center'>اطلاعات استاد </h1>
                <div className={'h-0.5 w-8/12 bg-darkBlue mt-5 mr-1'}></div>
            </div>
            <div className={'flex flex-row'}>
                <div className={'flex p-4  w-2/6 rounded-3xl justify-center items-start'}>
                    <img src={props.image} className={'rounded-3xl h-full w-full' }  />
                </div>
                <div className={'flex flex-col h-full w-4/6'} >

                    <div className={'flex flex-col mr-10 pt-8 gap-8'}>
                        <div className={'flex flex-row gap-3'}>
                            <p className="font-bold  text-xl laptop: text-2xl  font-bold text-black">نام و نام خانوادگی:</p>
                            <p className="   text-lg text-black   ">{ props.name} </p>
                        </div>
                        <div className={'flex flex-row gap-3'}>
                            <p className="font-bold  text-xl laptop: text-2xl  font-bold text-black ">مدرک:  </p>
                            <p className="   text-lg laptop: text-1xl text-black   ">{ props.phd} </p>
                        </div>
                        <div className={'flex flex-row gap-3'}>
                            <p className="font-bold text-xl laptop: text-2xl  font-bold text-black">مرتبه علمی:  </p>
                            <p className="   text-lg laptop: text-1xl text-black   ">{ props.academicRank} </p>
                        </div>
                        <div className={'flex flex-row gap-3'}>
                            <p className="font-bold  text-xl laptop: text-2xl  font-bold text-black">تلفن:  </p>
                            <p className="   text-lg laptop: text-1xl text-black   ">{ props.phoneNumber} </p>
                        </div>
                        <div className={'flex flex-row gap-3'}>
                            <p className="font-bold  text-xl laptop: text-2xl  font-bold text-black">پست الکترونیکی:  </p>
                            <p className="   text-lg laptop: text-1xl text-black   ">{ props.email} </p>
                        </div>
                        <div className={'flex flex-row gap-3'}>
                            <p className="font-bold  text-xl laptop: text-2xl  font-bold text-black ">صفحه شخصی:  </p>
                            <p className="   text-lg laptop: text-1xl text-black   ">{ props.websiteLink} </p>
                        </div>
                    </div>
                    <div className={'h-0.5 w-11/12 bg-darkBlue mt-8 mr-11'}>

                    </div>

                </div>
            </div>

        </div>
    );}
export default  ProfessorInformation;