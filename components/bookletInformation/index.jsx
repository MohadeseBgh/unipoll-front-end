import Like from "@/components/icons/Like";
import Like_fill from "@/components/icons/Like_fill";
import like from "@/components/icons/Like";
import {useState} from "react";
import Edit from "@/components/icons/Edit";
import Delete from "@/components/icons/Delete";


const BookletInformation = (props) => {
    const [ formValue, setFormValue]=useState("");
    return(

    <div className={"pr-4 my-10 w-[45rem] mx-auto h-[38rem] shadow-2xl rounded-3xl bg-opacity-15 bg-[#1FAAEA] py-3 px-5"} dir={'rtl'}>

        <div className={"flex flex-col h-1/12  "} >
            <div className={" flex mt-4 justify-end mx-6"}>
                <button><Delete/></button>
            </div>

            <div className={"flex flex-row h-2/12  justify-between"} >
            <p className={"font-bold text-black text-2xl"}>مشخصات جزوه</p>
            <div className={'h-1 w-8/12  bg-darkBlue mt-6 mr-3 '} dir={'ltr'}></div>
        </div>
        <div className={"flex flex-col h-2/12 gap-6 "} >
            <div className={"flex flex-row gap-2 mt-8 "}>
                <p className="font-bold text-lg  text-black">انتشار دهنده:  </p>
                <p className="   text-lg laptop: text-1xl text-black   "> {props.writerName} </p>
            </div>
            <div className={"flex flex-row gap-2 "}>
                <p className="font-bold text-lg   text-black">درس مربوطه:  </p>
                <p className="   text-lg laptop: text-1xl text-black   "> {props.course} </p>
            </div>
            <div className={"flex flex-row gap-2 "}>
                <p className="font-bold text-lg text-black">استاد درس:  </p>
                <p className="   text-lg laptop: text-1xl text-black   "> {props.professor} </p>
            </div>
            <div className={"flex flex-row gap-4 "}>
                <p className="font-bold text-lg text-black">ترم:  </p>
                <p className="   text-lg laptop: text-1xl text-black   "> {props.semester} </p>
            </div>
            <div className={"flex gap-8 "}>
                <p className="font-bold text-lg text-black">توضیحات:  </p>
                <div className={" w-full ml-12"}>
                                 <textarea id="commentText" maxLength='500' className="block h-[11rem] w-full p-4  ps-10  text-black-900 rounded-3xl  bg-[#DFE8EF] text-lg placeholder:text-[#8B8C8D]
                             focus:outline-none  focus:ring-0 shadow-inner text-start"
                                           placeholder="توضیحات برای این جزوه :" required
                                           onChange={(event) => {
                                               setFormValue( event.target.value)
                                           }}>{props.info}</textarea>

                </div>
            </div>
        </div>
            <div className={"flex flex-col h-2/12 "}>
                <div className={'h-1 w-11/12  bg-darkBlue mt-6 mr-3 '} dir={'ltr'}></div>
                <div className={"mt-4 flex justify-end mx-12" }>
                    <button  className={'hover:scale-105'}>
                        <Edit/>
                    </button>
                </div>
            </div>
        </div>

    </div>

    )
}

export default BookletInformation;