import Bookmark_fill from "@/components/icons/Bookmark_fill";
import Like from "@/components/icons/Like";
import {useContext, useEffect, useState} from "react";
import Bookmark from "@/components/icons/Bookmark";
import Like_fill from "@/components/icons/Like_fill";
import {bookletPIDContext} from "@/context/bookletPIDContext";
import {useRouter} from "next/router";

const CarouselBooklet = (props) => {
        const [save , setSave]=useState(false);
        const [like , setLike]=useState(false);
    const [likeNum , setLikeNum]=useState(0);
    const [selectedBooklet , setSelectedBooklet]=useContext(bookletPIDContext);
    const router = useRouter();
    useEffect(() => {
        setLikeNum(props.like)
        if(props.isLiked===null){
            console.log("hi")
            console.log(props)
            setLike(props.isLiked);
        }
    }, []);
    const handleSelectedBooklet = () => {
        setSelectedBooklet({publicId: props.publicId});
        router.push('/booklet').then(r => {});
    }
    const handleLike = async (event) => {
        console.log(event);
        const jwtToken=localStorage.getItem('jwtToken');

        try {
            const response = await fetch(`http://localhost:8090/unipoll/v1/booklet/like/${props.publicId}`, {
                method: 'POST',
                headers: {
                    'Authorization': jwtToken,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({like:!like}),
            });
            if (response.ok) {
                setLike(!like);
                const response1 = await fetch(`http://localhost:8090/unipoll/v1/booklet/${props.publicId}`);

                if (response1.ok) {
                    const data = await response1.json();
                    console.log(data.result);
                    setLikeNum(data.result.likeNumber);
                } else {
                    console.log("Network response was not ok");
                }

            } else if(response.status===401){

                console.log("Not ok");
            }
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    }
    return (
        <div className={`flex flex-col h-72 rounded-[2.4rem] min-w-56 shadow-lg bg-[#D9D9D9] transition duration-200 ease-in-out hover:scale-105 cursor-pointer`}>
            <img src='/images/booklet.png' className='flex h-2/4 w-full'onClick={handleSelectedBooklet}/>
        <div className='flex flex-col gap-1 text-center pt-2 h-1/4' onClick={handleSelectedBooklet}>
            <h3 className='text-lg font-bold text-darkBlue'>{props.course}</h3>
            <h4 className='text-base font-bold text-black'>{["دکتر ",props.professor]}</h4>
            <h4 className='text-base font-medium text-[#5D6369]'>{["ترم ",props.semester]}</h4>
        </div>
        <div className='flex flex-row justify-end gap-2 h-1/4 p-5 pb-2'>
            <div className='flex flex-row gap-1 justify-center items-center'>
                <p className="text-sm text-black ">{likeNum}</p>
                <button
                    className='flex flex-row justify-center items-center'
                        onClick={handleLike}>
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