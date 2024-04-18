import ProfessorOfGroups from "@/components/professorOfGroups";

const  ProfessorsOfGroups= (props) => {
    return (
        <div className="flex flex-row h-80 px-10 w-screen overflow-x-auto overflow-y-hidden gap-x-14 overscroll-auto scrollbar scrollbar-thumb-darkBlue scrollbar-track-[#D9EDFD] " >
            {props.professors.map(
            (p , index)=> <ProfessorOfGroups key={index} firstName={p.firstname} lastName={p.lastname} academicRank={p.academicRank} profilePhoto={p.profilePhoto} publicId={p.publicId}/>
        )}
            </div>
    )
}
export default ProfessorsOfGroups;