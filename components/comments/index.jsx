import Comment from "@/components/comment";
import {useContext, useEffect, useState} from "react";
import {coursePIDContext} from "@/context/coursePIDContext";

const Comments = () => {
    const [comments, setComments] = useState([]);
    const [totalComments, setTotalComments] = useState([]);
    const [selectedCourse , setSelectedCourse]=useContext(coursePIDContext);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8090/unipoll/v1/comment-c/${selectedCourse.publicId}?filterTopFive=`+true ,{
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                });
                if (response.ok) {
                    console.log("OK");
                    const data=await response.json();
                    const result=data.result;
                    setComments(result)
                } else {
                    console.log("not ok")
                }

            }catch (e) {
                console.error("we are GETTING ERROR", e)
            }
        };

        fetchData();
    }, []);
    useEffect(() => {
        const fetchData2 = async () => {
            try {
                const response2 = await fetch(`http://localhost:8090/unipoll/v1/comment-c/${selectedCourse.publicId}?filterTopFive=`+false ,{
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                });
                if (response2.ok) {
                    console.log("OK");
                    const data2=await response2.json();
                    console.log(data2.result);
                    const result2=data2.result;
                    console.log(result2);
                    setTotalComments(result2);
                    console.log(totalComments);
                    if(result2.length<6){
                        console.log("6");
                        document.getElementById("moreCourse").className = 'hidden';
                        document.getElementById("lessCourse").className = 'hidden';
                    }
                    if(result2.length===0){
                        console.log("0");
                        document.getElementById("noComment").className = 'text-darkBlue  text-2xl font-bold text-center my-10';
                        document.getElementById("lessCourse").className = 'hidden';
                        document.getElementById("moreCourse").className = 'hidden';
                    }
                } else {
                    console.log("not ok")
                }

            }catch (e) {
                console.error("we are GETTING ERROR", e)
            }
        };

        fetchData2();
    }, []);
    const moreHandler = async (e) => {
        e.preventDefault();
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8090/unipoll/v1/comment-c/${selectedCourse.publicId}?filterTopFive=`+false ,{
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                });
                if (response.ok) {
                    console.log("OK");
                    const data=await response.json();
                    const result=data.result
                    console.log(result)
                    setComments(result)
                    document.getElementById("moreCourse").className = ' hidden';
                    document.getElementById("lessCourse").className = '  mt-3 flex justify-center';
                } else {
                    console.log("not ok")
                }

            }catch (e) {
                console.error("we are GETTING ERROR", e)
            }
        };

        fetchData();

    }
    const lessHandler = async (e) => {
        e.preventDefault();
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8090/unipoll/v1/comment-c/${selectedCourse.publicId}?filterTopFive=`+true ,{
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                });
                if (response.ok) {
                    console.log("OK");
                    const data=await response.json();
                    const result=data.result
                    console.log(result)
                    setComments(result)
                    document.getElementById("moreCourse").className = 'flex absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-b from-transparent to-white items-end justify-center';
                    document.getElementById("lessCourse").className = 'hidden';
                } else {
                    console.log("not ok")
                }

            }catch (e) {
                console.error("we are GETTING ERROR", e)
            }
        };

        fetchData();

    }
    return (
        <div className="relative bg-white p-6 flex flex-col  mx-60 gap-12 my-20">
            {comments.map(
                (p, index) => <Comment key={index} name={p.writerName}
                                       text={p.text}
                                       date={p.createdDate} term={p.term} role={p.writerType}/>
            )}
            <div id={'moreCourse'}
                 className="flex absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-b from-transparent to-white items-end justify-center">
                <button onClick={moreHandler}><p className={" text-darkBlue text-xl   font-bold"}>مشاهده بیشتر</p>
                </button>
            </div>
            <div id={'lessCourse'}
                 className="hidden">
                <button onClick={lessHandler}><p className={"text-darkBlue  text-xl font-bold"}> نمایش کمتر</p></button>
            </div>
            <p id={"noComment"}className={"hidden"}> نظری برای این درس ثبت نشده است</p>
        </div>
    );

}
export default Comments;