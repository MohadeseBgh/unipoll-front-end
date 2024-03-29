import CarouselBooklet from "@/components/carouselBooklet";

const TopBooklet = (props) => {
    return (<>
        <div className="flex flex-row overflow-x-auto gap-x-16 overscroll-auto px-16 h-[25rem] py-16" >{props.booklets.map(
            (p , index)=> <CarouselBooklet key={index} course={p.courseName} professor={p.professorName} semester={p.semesterInfo} like={p.like}/>
        )}
            </div>
    </>)
}
export default TopBooklet;