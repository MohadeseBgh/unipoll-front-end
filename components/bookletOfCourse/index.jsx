
import Like from "@/components/icons/Like";
import Like_fill from "@/components/icons/Like_fill";
import like from "@/components/icons/Like";
import Bookmark_fill from "@/components/icons/Bookmark_fill";
import Bookmark from "@/components/icons/Bookmark";
import {useContext, useEffect, useState} from "react";
import Donlowd from "@/components/icons/Donlowd";
import {useRouter} from "next/router";
import {bookletPIDContext} from "@/context/bookletPIDContext";
import {faveritebooklt} from "@/context/faveritebooklet";
import {topbooklt} from "@/context/topbooklet";
import {bookletOfCourseContext} from "@/context/bookletOfCourseContext";


const BookletOfCourse = (props) => {
    const [save , setSave]=useState(false);
    const [like , setLike]=useState(false);
    const [selectedBooklet , setSelectedBooklet]=useContext(bookletPIDContext);
    const router = useRouter();
    const [likeNum , setLikeNum]=useState(0);
    const [booklets, setBooklets] = useContext(bookletOfCourseContext);

    useEffect(() => {
        setLikeNum(props.like)
        if(props.isLiked!==null){
            setLike(props.isLiked);
            setSave(props.isSaved)
        }
    }, []);


    const handleSelectedBooklet = () => {
        setSelectedBooklet({publicId: props.publicId});
        router.push('/booklet').then(r => {});
    }
    const handleLike = async (event) => {
        const jwtToken=localStorage.getItem('jwtToken');
        try {
            if(like===false){
                const response = await fetch(`http://localhost:8090/unipoll/v1/booklet/like/${props.publicId}`, {
                    method: 'POST',
                    headers: {
                        'Authorization': jwtToken,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({like:!like}),
                });
                if (response.ok) {
                    const response2 = await fetch(`http://localhost:8090/unipoll/v1/instructor-course/booklets/${props.publicIdCourse}`,{
                        method: 'GET',
                        headers: {
                            "Content-Type": "application/json",
                            'Authorization': jwtToken
                        },
                    });
                    if (response2.ok) {
                        const data = await response2.json();
                        setBooklets([]);
                        setTimeout(function(){
                            setBooklets(data.result);
                        }, 1);
                    }
                } else if(response.status===401){
                    console.log("like Not ok 401");
                }
            }else{
                const response = await fetch(`http://localhost:8090/unipoll/v1/booklet/dislike/${props.publicId}`, {
                    method: 'DELETE',
                    headers: {
                        'Authorization': jwtToken,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({like:!like}),
                });
                if (response.ok) {
                    const response2 = await fetch(`http://localhost:8090/unipoll/v1/instructor-course/booklets/${props.publicIdCourse}`,{
                        method: 'GET',
                        headers: {
                            "Content-Type": "application/json",
                            'Authorization': jwtToken
                        },
                    });
                    if (response2.ok) {
                        const data = await response2.json();
                        setBooklets([]);
                        setTimeout(function(){
                            setBooklets(data.result);
                        }, 1);
                    }
                } else if(response.status===401){
                    console.log("like Not ok 401");
                }
            }
        } catch (error) {
            console.error('Error like file:', error);
        }
    }
    const handleSave = async (event) => {;
        const jwtToken=localStorage.getItem('jwtToken');
        try {
            if(save===false){
                const response = await fetch(`http://localhost:8090/unipoll/v1/booklet/save/${props.publicId}`, {
                    method: 'POST',
                    headers: {
                        'Authorization': jwtToken,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({save:!save}),
                });
                if (response.ok) {
                    const response2 = await fetch(`http://localhost:8090/unipoll/v1/instructor-course/booklets/${props.publicIdCourse}`,{
                        method: 'GET',
                        headers: {
                            "Content-Type": "application/json",
                            'Authorization': jwtToken
                        },
                    });
                    if (response2.ok) {
                        const data = await response2.json();
                        setBooklets([]);
                        setTimeout(function(){
                            setBooklets(data.result);
                        }, 1);
                    }
                } else if(response.status===401){
                    console.log("like Not ok 401");
                }
            }else{
                const response = await fetch(`http://localhost:8090/unipoll/v1/booklet/dissave/${props.publicId}`, {
                    method: 'DELETE',
                    headers: {
                        'Authorization': jwtToken,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({like:!like}),
                });
                if (response.ok) {
                    const response2 = await fetch(`http://localhost:8090/unipoll/v1/instructor-course/booklets/${props.publicIdCourse}`,{
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        'Authorization': jwtToken
                    },
                });
                    if (response2.ok) {
                        const data = await response2.json();
                        setBooklets([]);
                        setTimeout(function(){
                            setBooklets(data.result);
                        }, 1);
                    }
                } else if(response.status===401){
                    console.log("like Not ok 401");
                }
            }
        } catch (error) {
            console.error('Error like file:', error);
        }
    }
    const handleDownload= async (e) => {
        const jwtToken=localStorage.getItem('jwtToken');
        try {
            const response = await fetch(`http://localhost:8090/unipoll/v1/booklet/file/${props.publicId}`, {
                method: 'GET',
                headers: {
                    'Authorization': jwtToken,
                    "Content-Type": "application/json",
                },
            });
            if (response.ok) {
                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'booklet.pdf';
                a.click();
                window.URL.revokeObjectURL(url);
            }else if(response.status===401){
                setDownload(true)
                setTimeout(function(){
                    setDownload(false);
                }, 2000);
            }

        } catch (error) {
            console.error('Error uploading file:', error);
        }
    }

    return (
        <div className="w-75% h-44 shadow-xl bg-opacity-15 bg-[#1FAAEAbg-opacity-15 bg-[#1FAAEA] max-h-60 rounded-3xl flex flex-row  mx-12 drop-shadow-lg p-5 transition duration-500 ease-in-out hover:scale-105 cursor-pointer " dir="rtl" >
            <div onClick={handleSelectedBooklet} className="w-2/12 border-t-0 drop-shadow-xl ">
                <img className={' h-full rounded-3xl ' }
                     src={'./images/bookletImgInfo.png'}
                     alt={'booklet'} />
            </div>
            <div  onClick={handleSelectedBooklet} className="w-8/12 flex flex-row h-full items-center">
                <div className="flex flex-col gap-8 w-4/12">
                    <div className={'flex flex-row gap-2'}>
                        <p className="font-bold  text-lg laptop:text-lg   text-black ">منتشر کننده:  </p>
                        <p className="text-lg laptop: text-1xl text-black">{props.writer}</p>
                    </div>
                    <div className={'flex flex-row gap-2'}>
                        <p className="font-bold text-lg laptop:text-lg   text-black ">درس: </p>
                        <p className="    text-lg laptop: text-1xl   text-black   ">{props.courseName}   </p>
                    </div>

                </div>
                <div className="flex flex-col gap-8 w-4/12">
                    <div className={'flex flex-row gap-2'}>
                        <p className="font-bold  text-lg laptop:text-lg text-black ">استاد درس:  </p>
                        <p className="text-lg laptop: text-1xl text-black">{props.lessonPr}</p>
                    </div>
                    <div className={'flex flex-row gap-2'}>
                        <p className="font-bold text-lg laptop:text-lg   text-black ">ترم: </p>
                        <p className="    text-lg laptop: text-1xl   text-black   ">{props.term}   </p>
                    </div>

                </div>

            </div>

            <div className="w-3/12  py-6 ">
                <div className='flex flex-row  gap-2 justify-end ml-4'>


                <button className='flex flex-row pl-4 '
                        onClick={handleSave}>
                    {save && <Bookmark_fill/>}
                    {!save && <Bookmark/>}
                </button>
                    <p className="text-sm text-black ">{props.like}</p>
                    <button
                        className='flex flex-row '
                        onClick={handleLike}>
                        {!like && <Like/>}
                        {like && <Like_fill/>}
                    </button>
                    <button className='flex flex-row pr-4' onClick={handleDownload}>
                        <Donlowd color={"#102C51"}/>
                    </button>
                </div>

            </div>
        </div>
    );
}

export default BookletOfCourse;