import BookletInformation from "@/components/bookletInformation";
import Like from "@/components/icons/Like";
import Like_fill from "@/components/icons/Like_fill";
import Bookmark_fill from "@/components/icons/Bookmark_fill";
import Bookmark from "@/components/icons/Bookmark";
import like from "@/components/icons/Like";
import CarouselBooklet from "@/components/carouselBooklet";
import TopBooklet from "@/components/topBooklet";
import topBooklet from "@/components/topBooklet";
import Layout from "@/layouts/layout";
import {useContext, useEffect, useState} from "react";
import {faveritebooklt} from "@/context/faveritebooklet";

const MyBooklet = (props) => {
    const [feveriteBooklt , setFeveriteBooklt]=useContext(faveritebooklt);
    let save;
    useEffect(() => {
        const fetchData = async () => {
            let jwtToken=localStorage.getItem('jwtToken');
            try {
                    const response2 = await fetch("http://localhost:8090/unipoll/v1/booklet/favorite",{
                            method: 'GET',
                            headers: {
                                "Content-Type": "application/json",
                                'Authorization': jwtToken
                            },
                        });
                if (response2.ok) {
                    const data = await response2.json();
                    setFeveriteBooklt(data.result);

                }else {
                    console.log("Network response was not ok");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    return (<>
        <Layout>
        <div className={"h-screen w-screen  bg-white text-black  overflow-x-hidden"}>
            <div className={'flex  flex-row w-full  mt-20 gap-12 justify-center items-center '}>
                <div className={'h-1 w-3/12 bg-darkBlue mt-1'}></div>
                <h1 className='font-bold text-center text-3xl text-darkBlue w-6/12 justify-center mb-2 ml-8 pb-2'>جزوه‌هایی که به اشتراک گذاشته اید</h1>
                <div className={'h-1 w-3/12 bg-darkBlue mt-1'}>
                </div>

            </div>

            <div className={"flex flex-row  overflow-y-hidden overflow-x-auto gap-24 overscroll-auto scrollbar scrollbar-thumb-darkBlue scrollbar-track-[#D9EDFD]"}>
                <div className={"flex flex-row  h-full px-16 gap-x-56"}>
                    {feveriteBooklt.map(
                        (p, index) => <BookletInformation key={index} course={p.courseName}
                                                       professor={[p.instructorFirstname, " ", p.instructorLastname]}
                                                       semester={p.term} like={p.likeNumber} publicId={p.publicId} publisher={[p.instructorFirstname, " ", p.instructorLastname]}
                                                          writerName={[p.uploaderFirstname," ",p.uploaderLastname]} info={p.description}/>)}
                </div>
            </div>
            <div className={'flex flex-row w-full mt-40 gap-12 justify-center items-center bg-white '}>
                <div className={'h-1 w-3/12 bg-darkBlue mt-1'}></div>
                <h1 className='font-bold text-3xl text-center text-darkBlue w-6/12 justify-center mb-2 ml-8 pb-2'>جزوه های موردعلاقه شما</h1>
                <div className={'h-1 w-3/12 bg-darkBlue mt-1'}>
                </div>

               </div>
            <div id="topBooklet" className="flex flex-row justify-center justify-items-center items-center text-center  bg-white " dir="rtl">
                <div
                    className="flex flex-wrap gap-20  justify-start  p-16">
                    {feveriteBooklt.map(
                    (p, index) => <CarouselBooklet key={index} course={p.courseName}
                                                   professor={[p.instructorFirstname, " ", p.instructorLastname]}
                                                   semester={p.term} like={p.likeNumber} publicId={p.publicId}
                                                   isLiked={p.isLiked} isSaved={p.isSaved} top={false}/>
                )}
                </div>
            </div>

            <footer/>
        </div>

        </Layout>
    </>)
}
export default MyBooklet;