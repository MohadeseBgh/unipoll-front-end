import Bookmark_fill from "@/components/icons/Bookmark_fill";
import Like from "@/components/icons/Like";
import {useState} from "react";
import Bookmark from "@/components/icons/Bookmark";
import Like_fill from "@/components/icons/Like_fill";

const CarouselBooklet = (props) => {
        const [save , setSave]=useState(false);
        const [like , setLike]=useState(false);
    return (
        <div className={`flex flex-col h-72 rounded-[2.4rem] min-w-48 shadow-lg bg-[#D9D9D9]`}>
            <img src='/images/booklet.png' className='flex h-2/4 w-full'/>
        <div className='flex flex-col gap-1 text-center pt-2 h-1/4'>
            <h3 className='text-lg font-bold text-darkBlue'>{props.course}</h3>
            <h4 className='text-base font-bold text-black'>{["دکتر ",props.instructorFirstname , props.instructorLastname]}</h4>
            <h4 className='text-base font-medium text-[#5D6369]'>{["ترم ",props.term]}</h4>
        </div>
        <div className='flex flex-row justify-end gap-2 h-1/4 p-5 pb-2'>
            <div className='flex flex-row gap-1 justify-center items-center'>
                <p className="text-sm text-black ">{props.like}</p>
                <button
                    className='flex flex-row justify-center items-center'
                        onClick={()=>{
                            setLike(!like)
                        }}>
                    {!like && <Like/>}
                    {like && <Like_fill/>}
                </button>
            </div>
            <button className='flex flex-row justify-center items-center'
                onClick={()=>{
                setSave(!save)
            }}>
                {save && <Bookmark_fill/>}
                {!save && <Bookmark/>}
            </button>

        </div>
    </div>);

}

export default CarouselBooklet;