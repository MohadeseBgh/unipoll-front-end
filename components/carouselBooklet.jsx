import Saved from "@/components/icons/Saved";
import UnLike from "@/components/icons/UnLike";

const CarouselBooklet = (props) => {
    return (<div
        className={`flex flex-col   min-h-72 rounded-[2.4rem] w-48  shadow-lg bg-[#D9D9D9] text-center`}>
        <div className='flex basis-1/4 item '><img src='/images/img.png' alt={'why UniPoll ?'}/></div>
        <div className='flex flex-col basis-2/4 space-y-0'>
        <h3 className='m-2 text-lg font-bold text-darkBlue'>{props.course}</h3>
        <h4 className='m-2 text-base font-bold text-black'>{["دکتر ",props.professor]}</h4>
        <h4 className='m-2 text-base font-medium text-[#5D6369]'>{["ترم ",props.semester]}</h4>
        </div>
        <div className='flex flex-row basis-1/4  justify-end gap-3 mt-5 ml-6'>
            <div className='flex flex-row justify-end gap-1 '>
                <p className="text-sm text-black ">{props.like}</p>
                <UnLike/>
            </div>
            <Saved/>
        </div>
    </div>);

}

export default CarouselBooklet;