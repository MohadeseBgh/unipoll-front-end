const ManagerAndAssistantInfo = (props) => {
    return (
        <div className={` rounded-xl border-4 shadow-md border-darkBlue text-center mx-16`}>
            <div className="  flex flex-col rounded-xl border-4 shadow-md border-[#2C83BF] -translate-x-8 -translate-y-8 items-center p-10" dir="rtl">
                <div className="flex flex-row items-center desktop:space-x-32 gap-3 ">
                    <img className="h-36 w-36 border-2 border-darkBlue rounded-[100%]" src={props.profilePhoto} alt={'profile'}/>
                    <h2 className="desktop:text-3xl laptop:text-2xl text-xl font-bold text-black ">{"دکتر "+props.firstName+ " "+ props.lastName}</h2>
                </div>
                <div className={'flex flex-col items-start justify-start text-start py-5 gap-5'}>
                    <p className='laptop:text-2xl text-xl text-black font-bold'>{[props.phd]}</p>

                    <div className='laptop:text-xl text-lg text-black flex flex-row gap-2'>
                        <p className={'text-black font-bold text-xl'}>مرتبه علمی: </p>
                        {props.academicRank}
                    </div>
                    <div className='laptop:text-xl text-lg text-black flex flex-row gap-2'>
                        <p className={'text-black font-bold laptop:text-xl text-lg'}>تلفن:</p>
                        { props.phoneNumber}
                    </div>
                    <div className='laptop:text-xl text-lg text-black flex flex-row gap-2'>
                        <p className={'text-black font-bold laptop:text-xl text-lg'}>پست الکترونیک:</p>
                        { props.email}
                    </div>
                    <div className='laptop:text-xl text-lg text-black flex flex-row gap-2'>
                        <p className={'text-black font-bold laptop:text-xl text-lg'}>صفحه استاد: </p>
                        {props.websiteLink}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ManagerAndAssistantInfo;
