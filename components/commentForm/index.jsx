import {useContext, useEffect, useState} from "react";
import {coursePIDContext} from "@/context/coursePIDContext";
import CarouselCourse from "@/components/carouselCourse";

const CommentForm = (props) => {
    const [selectedCourse , setSelectedCourse]=useContext(coursePIDContext);
    const [filter, setFilter] = useState([]);
    useEffect(() => {
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
    return (
        <div className="w-[60%] m-auto" >
            <form className="flex flex-col text-black justify-between " dir='rtl'>
                <div className='flex flex-row my-8 '>
                    <div className='basis-3/4'>
                        <h3 className='text-xl  mr-2'>با ارسال دیدگاه خود در مورد این درس به بهبود عملکرد
                            ارائه ی دروس کمک کنید.</h3>
                    </div>
                    <div className='basis-1/4 justify-self-end'>
                        <select
                            data-twe-select-placeholder="ترم خود را انتخاب کنید"
                            className='appearance-none  w-60 h-12 pr-4 bg-[#DFE8EF]  focus:border-0 shadow-inner rounded-lg focus:outline-0 placeholder:text-yellow-300  peer-active:text-yellow-600'
                            required>
                            <option  value="" hidden selected className="checked:text-[#8B8C8D] peer-checked:text-yellow-300 text-2xl">ترم خود را انتخاب کنید...</option>
                            {filter.map(
                                (p , index)=> <option key={index} className="bg-white" >{p.name}</option>
                            )}
                        </select>
                    </div>

                </div>
                <textarea id="text" maxLength='500' className="block h-56 w-full p-4 ps-10  text-black-900 rounded-3xl  bg-[#DFE8EF] text-lg placeholder:text-[#8B8C8D]
                             focus:outline-none  focus:ring-0 shadow-inner text-start"
                          placeholder="دیدگاه خود را برای این درس بنویسید...." required/>

                <div className='flex flex-row my-8'>
                    <div className='basis-3/4 flex items-center mb-4'>
                        <input id="link-checkbox" type="checkbox" value=""
                               className="w-5 h-5 text-blue-600 bg-gray-700 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label htmlFor="link-checkbox"
                               className="ms-2 text-lg font-medium text-darkBlue">ارسال دیگاه به صورت ناشناس</label>
                    </div>
                    <div className='basis-1/4'>
                        <button type="submit"
                                className="px-4 bg-darkBlue text-white font-extralight rounded-xl w-60 h-12 text-xl   hover:drop-shadow-xl hover:shadow-teal-950 ">ارسال
                        </button>
                    </div>
                </div>
            </form>
        </div>

    );

}
export default CommentForm;