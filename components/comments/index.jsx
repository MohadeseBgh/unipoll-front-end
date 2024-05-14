import Comment from "@/components/comment";
import {useContext, useEffect, useState} from "react";
import {coursePIDContext} from "@/context/coursePIDContext";
import Close from "@/components/icons/Close";
import Close2 from "@/components/icons/Close2";

const Comments = () => {
    const [comments, setComments] = useState([]);
    const [totalComments, setTotalComments] = useState([]);
    const [selectedCourse , setSelectedCourse]=useContext(coursePIDContext);
    const [filterList, setFilterList] = useState([]);
    const [filter, setFilter] = useState({publicId:""});
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
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:8090/unipoll/v1/term");

                if (response.ok) {
                    const data = await response.json();
                    setFilterList(data.result);
                    console.log("term ok")

                } else {
                    console.log("Network response was not ok");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);
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
    const filterHandler = async (e) => {
        e.preventDefault();
        setFilter({publicId: e.target.value});
        const fetchData = async () => {
            try {
                const response3 = await fetch(`http://localhost:8090/unipoll/v1/comment-c/${selectedCourse.publicId}?filterTopFive=`+false+`&term=${filter.publicId}` ,{
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                });
                if (response3.ok) {
                    console.log("filter OK");
                    const data3=await response3.json();
                    const result3=data3.result;
                    const temp=result3;
                    console.log(result3);
                    setComments(result3);
                    const temp2=comments;
                    setComments(result3);
                    document.getElementById("moreCourse").className = 'hidden';
                    document.getElementById("lessCourse").className = 'hidden';
                    document.getElementById("noComment").className = 'hidden';
                    document.getElementById("deleteFilter").className = 'flex flex-col basis-1/4 items-end';
                    if(result3.length===0){
                        document.getElementById("noComment").className = 'text-darkBlue  text-2xl font-bold text-center my-10';
                    }
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
            <div className={"flex flex-row justify-between "}>
                <div className='flex flex-col base-3/4 items-end text-black'>
                    <select
                        data-twe-select-placeholder="فیلتر بر اساس سر ترم"
                        className='appearance-none  w-60 h-12 pr-4 bg-[#DFE8EF]  focus:border-0 shadow-inner rounded-lg focus:outline-0 placeholder:text-yellow-300  peer-active:text-yellow-600' onChange={filterHandler}>
                        <option value="" hidden selected
                                className="checked:text-[#8B8C8D] peer-checked:text-yellow-300 text-2xl">فیلتر بر اساس  ترم
                        </option>
                        {filterList.map(
                            (p, index) => <option key={index} value={p.publicId} className="bg-white">{p.name}</option>
                        )}
                    </select>
                </div>
                <div id={"deleteFilter"} className='hidden'>
                    <button type="submit"
                            className=" flex flex-row  items-center text-center px-4 bg-darkBlue text-white font-extralight rounded-xl w-40 h-12 text-xl   hover:drop-shadow-xl hover:shadow-teal-950 pr-8 "><Close2/><p className={"mr-2"}>حذف فیلتر</p>
                    </button>
                </div>
            </div>
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
            <p id={"noComment"} className={"hidden"}> نظری برای این درس ثبت نشده است</p>
        </div>
    );

}
export default Comments;