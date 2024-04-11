import Saved from "@/components/icons/Saved";
import UnLike from "@/components/icons/UnLike";

const CarouselBooklet = (props) => {
    // eslint-disable-next-line @next/next/no-html-link-for-pages
    return (
        <div className={`flex flex-col h-72 rounded-[2.4rem] min-w-48 shadow-lg bg-[#D9D9D9]`}>
            <img src='/images/booklet.png' className='flex h-2/4 w-full'/>
        <div className='flex flex-col gap-1 text-center pt-2 h-1/4'>
            <h3 className='text-lg font-bold text-darkBlue'>{props.course}</h3>
            <h4 className='text-base font-bold text-black'>{["دکتر ",props.professor]}</h4>
            <h4 className='text-base font-medium text-[#5D6369]'>{["ترم ",props.semester]}</h4>
        </div>
        <div className='flex flex-row justify-end gap-3 items-end h-1/4 p-5 '>
            <div className='flex flex-row justify-end gap-1 '>
                <p className="text-sm text-black ">{props.like}</p>
                <UnLike/>
            </div>
            <Saved/>
        </div>
    </div>);

}

export default CarouselBooklet;