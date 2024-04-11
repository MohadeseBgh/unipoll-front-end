import CarouselBooklet from "@/components/carouselBooklet";

const TopBooklet = (props) => {
    return (<>
        <div className="flex flex-row overflow-x-auto w-screen overflow-y-hidden gap-x-20 overscroll-auto scrollbar scrollbar-thumb-darkBlue scrollbar-track-[#D9EDFD] p-14 " >
            {props.booklets.map(
            (p , index)=> <CarouselBooklet key={index} course={p.courseName} professor={p.professorName} semester={p.semesterInfo} like={p.like}/>
        )}
            </div>
    </>)
}
export default TopBooklet;