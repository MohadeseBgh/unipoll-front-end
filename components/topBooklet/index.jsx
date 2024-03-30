import CarouselBooklet from "@/components/carouselBooklet";

const TopBooklet = (props) => {
    return (<>
        <div className="flex flex-row overflow-x-auto overflow-y-hidden gap-x-24 overscroll-auto  scrollbar scrollbar-thumb-darkBlue scrollbar-track-[#D9EDFD] px-16 h-[25rem] py-16" >{props.booklets.map(
            (p , index)=> <CarouselBooklet key={index} course={p.courseName} professor={p.professorName} semester={p.semesterInfo} like={p.like}/>
        )}
            </div>
    </>)
}
export default TopBooklet;