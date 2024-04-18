import CarouselCourse from "@/components/carouselCourse";

const TopCourse = (props) => {
    return (
        <div className="flex flex-row overflow-x-auto w-screen overflow-y-hidden gap-x-20 overscroll-auto scrollbar scrollbar-thumb-darkBlue scrollbar-track-[#D9EDFD] p-14 " >
            {props.courses.map(
            (p , index)=> <CarouselCourse key={index} course={p.courseName} instructorCourseFirstname={p.instructorCourseFirstname} instructorCourseLastname={p.instructorCourseLastname} rate={p.rate}/>
        )}
        </div>
    )
}
export default TopCourse;