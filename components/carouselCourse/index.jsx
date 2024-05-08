import Bookmark_fill from "@/components/icons/Bookmark_fill";
import Like from "@/components/icons/Like";
import YellowStar from "@/components/icons/YellowStar";
import Star from "@/components/icons/Star";
import {coursePIDContext} from "@/context/coursePIDContext";
import {useRouter} from "next/router";
import {useContext} from "react";

const CarouselCourse = (props) => {
    const [selectedCourse , setSelectedCourse]=useContext(coursePIDContext);
    const router = useRouter();
    const handleSelectedCourse = () => {
        setSelectedCourse({publicId: props.publicId});
        router.push('/course').then(r => {});
    }
    return (
        <div className={`flex flex-col rounded-[2rem] min-w-64 shadow-lg bg-[#D9D9D9] `}
        onClick={handleSelectedCourse}>
            <img src='/images/course.png' alt={'top course'} className={'h-2/4 w-full'}/>
            <div className='flex flex-col basis-2/4 justify-center items-center p-3'>
                <h3 className=' laptop:text-lg text-sm font-bold text-darkBlue'>{props.course}</h3>
                <h4 className=' laptop:text-base text-sm font-bold text-black'>{["دکتر ",props.instructorCourseFirstname ," ", props.instructorCourseLastname]}</h4>
            </div>
            <div className='flex flex-row basis-1/4 justify-end pl-4 mb-2'>
                {props.rate >= 5 ? <YellowStar/> : <Star/>}
                {props.rate >= 4 ? <YellowStar/> : <Star/>}
                {props.rate >= 3 ? <YellowStar/> : <Star/>}
                {props.rate >= 2 ? <YellowStar/> : <Star/>}
                {props.rate >= 1 ? <YellowStar/> : <Star/>}

            </div>
    </div>
    );
}

export default CarouselCourse;