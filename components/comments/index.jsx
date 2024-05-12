import Comment from "@/components/comment";
import {useContext, useEffect, useState} from "react";
import {coursePIDContext} from "@/context/coursePIDContext";

const Comments = () => {
    const [comments, setComments] = useState([]);
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
                    const result=data.result
                    console.log(result)
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
                <button onClick={moreHandler}><p className={" text-darkBlue text-xl   font-bold"}>مشاهده بیشتر</p></button>
            </div>
            <div id={'lessCourse'}
                 className="hidden">
                <button onClick={lessHandler}><p className={"text-darkBlue  text-xl font-bold"}> نمایش کمتر</p></button>
            </div>
        </div>
    );

}
export default Comments;