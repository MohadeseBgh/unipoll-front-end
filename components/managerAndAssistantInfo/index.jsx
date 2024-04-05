const ManagerAndAssistantInfo = (props) => {
    return (
        <div className={`max-h-[34.375rem] rounded-xl max-w-[39rem] border-4 shadow-md border-darkBlue text-center`}>
            <div className="flex flex-col  min-h-[34.375rem] rounded-xl min-w-[39rem] border-4 shadow-md border-[#2C83BF] mt-4 ml-4 items-center pt-16" dir="rtl">
                <div className="flex flex-row items-center space-x-32 gap-3 ">
                    <img className="h-36 w-36  border-2 border-darkBlue rounded-[100%]" src={props.profilePhoto} alt={'profile'}/>
                    <h2 className="text-3xl font-bold text-black my-4 ">{["دکتر ",props.firstName, " ", props.lastName]}</h2>
                </div>
                <div className={'flex flex-col items-start justify-start text-start py-5 gap-5'}>
                    <p className='text-2xl text-black font-bold'>{[props.phd]}</p>
                    <div className='text-xl text-black flex flex-row gap-2'>
                        <p className={'text-black font-bold text-xl'}>مرتبه علمی: </p>
                        {props.academicRank}
                    </div>
                    <div className='text-xl text-black flex flex-row gap-2'>
                        <p className={'text-black font-bold text-xl'}>تلفن:</p>
                        { props.phoneNumber}
                    </div>
                    <div className='text-xl text-black flex flex-row gap-2'>
                        <p className={'text-black font-bold text-xl'}>پست الکترونیک:</p>
                        { props.email}
                    </div>
                    <div className='text-xl text-black flex flex-row gap-2'>
                        <p className={'text-black font-bold text-xl'}>صفحه استاد: </p>
                        {props.websiteLink}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ManagerAndAssistantInfo;
