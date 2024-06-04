import {useContext, useEffect, useState} from "react";
import Bookmark_fill from "@/components/icons/Bookmark_fill";
import Bookmark from "@/components/icons/Bookmark";
import Report from "@/components/icons/Report";
import ShowBookletInfo from "@/components/showBookletInfo";
import Like from "@/components/icons/Like";
import Like_fill from "@/components/icons/Like_fill";
import Donlowd from "@/components/icons/Donlowd";
import {bookletPIDContext} from "@/context/bookletPIDContext";
import ErrorAlert from "@/components/errorAlert";

const BookletInfo = () => {
    const [save , setSave]=useState(false);
    const [like , setLike]=useState(false);
    const [download , setDownload]=useState(false);
    const [professorLike , setProfessorLike]=useState(true);
    const [selectedBooklet , setSelectedBooklet]=useContext(bookletPIDContext);
    const [rate , setRate]=useState(4.2);
    const [bookletInfo , setBookletInfo]=useState({writerName:'جعفر کریمی' , courseProfessor:'رضا رمضانی' , course:'مبانی برنامه نویسی',term:"ترم پاییز 1400" , info:'توضیحات :هدف این درس آشنا نمودن دانشجویان با مفاهیم و اصول روشهای تحلیل هوشمند داده ها و روش های هوشمند حل مسایل مهندسی با استفاده از رویکرد های فازی ، تکاملی و شبکه های عصبی میباشد. درتحقق این هدف دانشجویان با ابزارهای نرمافزاری لازم برای استفاده از این روش ها اشنا میشوند.'})
    useEffect(() => {
        const fetchData = async () => {
            let jwtToken=localStorage.getItem('jwtToken');
            try {
                if (jwtToken.length > 3) {
                    const response1 = await fetch(`http://localhost:8090/unipoll/v1/booklet/${selectedBooklet.publicId}`,{
                        method: 'GET',
                        headers: {
                            "Content-Type": "application/json",
                            'Authorization': jwtToken
                        },
                    });

                    if (response1.ok) {
                        console.log("booklet info")
                        const data = await response1.json();
                        setBookletInfo(data.result);
                        setProfessorLike(data.result.teacherLike)
                        console.log(data.result);

                    } else {
                        console.log("Network response was not ok");
                    }
                } else {
                const response2 = await fetch(`http://localhost:8090/unipoll/v1/booklet/${selectedBooklet.publicId}`, {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",

                    },
                });

                if (response2.ok) {
                    console.log("booklet info")
                    const data = await response2.json();
                    setBookletInfo(data.result);
                    setProfessorLike(data.result.teacherLike)
                    console.log(data.result);

                } else {
                    console.log("Network response was not ok");
                }
               }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);
    const handleDownload= async (e) => {
        const jwtToken=localStorage.getItem('jwtToken');
        try {
            const response = await fetch(`http://localhost:8090/unipoll/v1/booklet/file/${selectedBooklet.publicId}`, {
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

    return(
     <div> <div className={'w-full h-full bg-[#E2F4FC] shadow-[0_0_60px_-15px_rgba(0,0,0,0.3)] flex flex-col p-5 gap-5 text-black'}>
         <div className={'w-full h-[27rem] flex flex-row gap-10'}>
             <img src={'images/bookletImgInfo.png'} className={'h-auto w-auto rounded-2xl'} alt={'booklet'}/>
             <div className={'flex flex-col w-full gap-2 h-full items-start justify-evenly '}>
                 <div id={'icons'} className={'w-full flex flex-row-reverse justify-start'}>
                     <button><Report/></button>
                     <button className='flex flex-row justify-center items-center'
                             onClick={() => {
                                 setSave(!save)
                             }}>
                         {save && <Bookmark_fill/>}
                         {!save && <Bookmark/>}
                     </button>
                 </div>
                 <div className={'w-full flex flex-row gap-5 items-center'}>
                     <p className={'text-center text-darkBlue text-2xl whitespace-pre font-bold'}>مشخصات جزوه</p>
                     <div className={'h-0.5 w-full bg-darkBlue'}></div>
                 </div>
                 <ShowBookletInfo courseName={bookletInfo.courseName} term={bookletInfo.term}
                                  courseProfessor={[bookletInfo.instructorFirstname," ",bookletInfo.instructorLastname]} writerName={[bookletInfo.uploaderFirstname," ",bookletInfo.uploaderLastname]}
                                  info={bookletInfo.description}/>
                 <div className={'h-0.5 w-full bg-darkBlue '}></div>
                 <div className={"flex flex-row w-full items-center justify-between justify-items-stretch"}>
                     <div className="flex flex-col ">
                         <div className="flex flex-row ">
                             <button
                                 className='flex flex-row justify-center items-center'
                                 onClick={() => {
                                     setLike(!like)
                                 }}>
                                 {!like && <Like/>}
                                 {like && <Like_fill/>}
                             </button>
                             <p className="mr-2 text-black ">{bookletInfo.likeNumber}</p>
                         </div>
                         {professorLike && <p className={"text-sm font-bold"}>لایک شده توسط استاد</p>}
                     </div>
                     <div className="flex flex-row  items-center">
                         <button onClick={handleDownload}
                                 className=" flex flex-row   items-center text-center  bg-darkBlue text-white font-normal rounded-xl  h-8 text-sm   hover:drop-shadow-xl hover:shadow-teal-950 px-4 ">
                             <p className={"ml-2"}>دانلود جزوه</p><Donlowd color={"white"}/>
                         </button>
                     </div>
                 </div>

             </div>
         </div>
     </div>
         { download && <div  className={" ml-4  flex flex-row-reverse justify-start"} ><ErrorAlert text={"محدودیت دسترسی: به اکانت خود وارد شوید"}/></div>}</div>
    )
}
export default BookletInfo;