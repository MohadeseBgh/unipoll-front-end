import {useContext, useEffect, useState} from "react";
import {coursePIDContext} from "@/context/coursePIDContext";
import CarouselCourse from "@/components/carouselCourse";
import Error from "next/error";
import ErorrIcon from "@/components/icons/ErorrIcon";
import OkIcon from "@/components/icons/okIcon";

const CommentForm = (props) => {
    const [selectedCourse , setSelectedCourse]=useContext(coursePIDContext);
    const [filter, setFilter] = useState([]);
    const [formValue, setFormValue] = useState({text:"",icPublicId:"",termPublicId:"",unknown:false});
    useEffect(() => {
        setFormValue({...formValue, icPublicId: selectedCourse.publicId})
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:8090/unipoll/v1/term");

                if (response.ok) {
                    const data = await response.json();
                    setFilter(data.result);
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
    const formSubmitHandler = async (e) =>{
        e.preventDefault();
        try {
            const jwtToken=localStorage.getItem('jwtToken');
            const response = await fetch("http://Localhost:8090/unipoll/v1/comment-c", {
                method: "POST",
                body: JSON.stringify(formValue), headers: {
                    "Content-Type": "application/json",
                    'Authorization':`${jwtToken}`}
            });
            console.log(formValue)
            if (response.ok) {
                console.log("comment OK");
                document.getElementById('commentText').value="";
                document.getElementById("okAlert").className = " transition duration-1000 ease-in-out flex mt-5 bg-green-100 items-center px-6 py-4 text-sm border-t-2 rounded-b shadow-sm border-green-500 ";
                setTimeout(function(){
                    document.getElementById("okAlert").className = ' hidden';
                }, 4000);

            } else if (response.status===401) {
                document.getElementById("erorrAcsess").className = ' mt-5 flex bg-red-100 items-center px-6 py-4 text-sm border-t-2 rounded-b shadow-sm border-red-500 ';
                setTimeout(function(){
                    document.getElementById("erorrAcsess").className = ' hidden';
                }, 5000);
                console.log("not ok")
            }
        }catch (e) {
            console.error("we are GETTING ERROR", e)
        }
    }
    return (
        <div className="w-[60%] m-auto mb-10" >
            <form className="flex flex-col text-black justify-between " dir='rtl' onSubmit={formSubmitHandler}>
                <div className='flex flex-row my-8 '>
                    <div className='basis-3/4'>
                        <h3 className='text-xl  mr-2'>با ارسال دیدگاه خود در مورد این درس به بهبود عملکرد
                            ارائه ی دروس کمک کنید.</h3>
                    </div>
                    <div className='flex flex-col basis-1/4 justify-self-end items-end'>
                        <select
                            data-twe-select-placeholder="ترم خود را انتخاب کنید"
                            className='appearance-none  w-60 h-12 pr-4 bg-[#DFE8EF]  focus:border-0 shadow-inner rounded-lg focus:outline-0 placeholder:text-yellow-300  peer-active:text-yellow-600'
                            required onChange={(event) => {
                            setFormValue({...formValue, termPublicId: event.target.value})
                        }}>
                            <option  value="" hidden selected className="checked:text-[#8B8C8D] peer-checked:text-yellow-300 text-2xl">ترم خود را انتخاب کنید...</option>
                            {filter.map(
                                (p , index)=> <option key={index} value={p.publicId} className="bg-white" >{p.name}</option>
                            )}
                        </select>
                    </div>

                </div>
                <textarea id="commentText" maxLength='500' className="block h-56 w-full p-4 ps-10  text-black-900 rounded-3xl  bg-[#DFE8EF] text-lg placeholder:text-[#8B8C8D]
                             focus:outline-none  focus:ring-0 shadow-inner text-start"
                          placeholder="دیدگاه خود را برای این درس بنویسید...." required onChange={(event) => {
                    setFormValue({...formValue, text: event.target.value})
                }}/>

                <div className='flex flex-row my-8'>
                    <div className='basis-8/12 flex items-center mb-4'>
                        <input id="link-checkbox" type="checkbox"
                               className="w-5 h-5 text-blue-600 bg-gray-700 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" checked={formValue.unknown}  onChange={(event) => {
                                   setFormValue({...formValue, unknown: event.target.checked})
                        }}/>
                        <label htmlFor="link-checkbox"
                               className="ms-2 text-lg font-medium text-darkBlue">ارسال دیگاه به صورت ناشناس</label>
                    </div>
                    <div className='flex flex-col basis-4/12 items-end'>
                        <button type="submit"
                                className=" px-4 bg-darkBlue text-white font-extralight rounded-xl w-60 h-12 text-xl   hover:drop-shadow-xl hover:shadow-teal-950 ">ارسال
                        </button>
                        <div id={"erorrAcsess"}
                             className=" transition duration-1000 ease-in-out opacity-0 hidden mt-5 bg-red-100 items-center px-6 py-4 text-sm border-t-2 rounded-b shadow-sm border-red-500 ">
                            <ErorrIcon/>
                            <div className=" mr-3" dir='rtl'>
                                <div className="font-bold text-lg text-right text-black ">محدودیت دسترسی</div>
                                <div className="w-full text-lg text-gray-900  mt-1">برای رفع این محدودیت لطفا <span
                                    className="font-bold text-lg "><a href={'/login'}>وارد </a> </span>شوید
                                </div>
                            </div>
                        </div>
                        <div id={"okAlert"}
                             className=" transition duration-1000 ease-in-out hidden mt-5 bg-green-100 items-center px-6 py-4 text-sm border-t-2 rounded-b shadow-sm border-green-500 ">
                             <OkIcon/>
                            <div className=" mr-3" dir='rtl'>
                                <div className="font-bold  text-right text-lg text-black ">موفقیت آمیز</div>
                                <div className="w-full text-lg text-gray-900  mt-1">نظر شما با موفقیت ثبت شد.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>

    );

}
export default CommentForm;