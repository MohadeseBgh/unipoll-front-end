import Saved from "@/components/icons/Saved";
import UnLike from "@/components/icons/UnLike";
import YellowStar from "@/components/icons/YellowStar";
import Star from "@/components/icons/Star";

const CarouselCourse = (props) => {
    // eslint-disable-next-line @next/next/no-html-link-for-pages
    return (<a href='/home'
        className={`flex flex-col h-68 rounded-[2rem] min-w-48  shadow-lg bg-[#D9D9D9] text-center`}>
        <div className='flex basis-1/4 item '><img src='/images/course.png' alt={'top course'}/></div>
        <div className='flex flex-col basis-2/4 space-y-0'>
        <h3 className='m-2 text-lg font-bold text-darkBlue'>{props.course}</h3>
        <h4 className='m-2 text-base font-bold text-black'>{["دکتر ",props.professor]}</h4>
        </div>
        <div className='flex flex-row basis-1/4  justify-end  mt-5 ml-6'>
            {props.rate >= 5 ? <YellowStar/> : <Star/>}
            {props.rate >= 4 ? <YellowStar/> : <Star/>}
            {props.rate >= 3 ? <YellowStar/> : <Star/>}
            {props.rate >= 2 ? <YellowStar/> : <Star/>}
            {props.rate >= 1 ? <YellowStar/> : <Star/>}

        </div>
    </a>);

}

export default CarouselCourse;