import CarouselCourse from "@/components/carouselCourse";

const TopCourse = (props) => {
    return (<>
        <div className="flex flex-row overflow-x-auto overflow-y-hidden gap-x-24 overscroll-auto  scrollbar scrollbar-thumb-darkBlue scrollbar-track-[#D9EDFD] px-16 h-[25rem] py-16" >{props.courses.map(
            (p , index)=> <CarouselCourse key={index} course={p.courseName} professor={p.professorName} rate={p.rate}/>
        )}
            </div>
    </>)
}
export default TopCourse;