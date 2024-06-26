import  {useRouter}  from 'next/router';
import {useContext} from "react";
import {getProfessorPIDContext} from "@/context/getProfessorPIDContext";

const ProfessorOfGroups = (props) => {
    const router = useRouter();

    const [professorPId , setProfessorPId]=useContext(getProfessorPIDContext)
    const handleClick = async (e) => {
        e.preventDefault();
        setProfessorPId(props.publicId)
        await router.push('/professor');
    }
    return (
        <div className={`flex flex-col rounded-[1.25rem] min-w-44 h-5/6 shadow-lg bg-[#D9D9D9] `} onClick={handleClick}>
            <img  className=" h-2/3 w-full rounded-t-[1.25rem]" src={props.profilePhoto} alt={'profile img'}/>
            <div className='flex flex-col text-center justify-center gap-3 pt-2 p-5'>
                <h3 className=' text-xs font-bold text-darkBlue'>{[props.firstName ," ",props.lastName]}</h3>
                <h4 className='text-xs text-base font-bold text-[#2C83BF]'>{["مرتبه علمی: ",props.academicRank]}</h4>
            </div>
        </div>
    );
}

export default ProfessorOfGroups;