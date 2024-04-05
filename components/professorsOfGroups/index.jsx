import ProfessorOfGroups from "@/components/professorOfGroups";

const  ProfessorsOfGroups= (props) => {
    return (<>
        <div className="flex flex-row overflow-x-auto overflow-y-hidden gap-x-24 overscroll-auto  scrollbar scrollbar-thumb-darkBlue scrollbar-track-[#D9EDFD] px-16 h-[25rem] py-16" >
            {props.professors.map(
            (p , index)=> <ProfessorOfGroups key={index} firstName={p.firstName} lastName={p.lastName} academicRank={p.academicRank} profilePhoto={p.profilePhoto}/>
        )}
            </div>
    </>)
}
export default ProfessorsOfGroups;