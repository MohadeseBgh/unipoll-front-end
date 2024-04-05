
const ProfessorOfGroups = (props) => {
    // eslint-disable-next-line @next/next/no-html-link-for-pages
    return (<a href='/home'
        className={`flex flex-col min-h-68 rounded-[1.25rem] min-w-48  shadow-lg bg-[#D9D9D9] text-center`}>
        <div className='flex basis-1/4 item'><img  className="h-40 w-full rounded-t-[1.25rem]" src={props.profilePhoto} alt={'profile img'}/></div>
        <div className='flex flex-col basis-2/4 space-y-0'>
        <h3 className='m-2 text-lg font-bold text-darkBlue'>{[props.firstName ," ",props.lastName]}</h3>
        <h4 className='m-2 text-base font-bold text-[#2C83BF]'>{["مرتبه علمی: ",props.academicRank]}</h4>
        </div>
    </a>);
}

export default ProfessorOfGroups;