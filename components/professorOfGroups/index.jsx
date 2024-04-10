
const ProfessorOfGroups = (props) => {
    // eslint-disable-next-line @next/next/no-html-link-for-pages
    return (
        <div className={`flex flex-col rounded-[1.25rem] min-w-36 h-5/6 shadow-lg bg-[#D9D9D9] `}>
            <img  className=" h-2/3 w-full rounded-t-[1.25rem]" src={props.profilePhoto} alt={'profile img'}/>
            <div className='flex flex-col text-center justify-center gap-3 pt-2 p-5'>
                <h3 className=' text-xs font-bold text-darkBlue'>{[props.firstName ," ",props.lastName]}</h3>
                <h4 className='text-xs text-base font-bold text-[#2C83BF]'>{["مرتبه علمی: ",props.academicRank]}</h4>
            </div>
    </div>
    );
}

export default ProfessorOfGroups;