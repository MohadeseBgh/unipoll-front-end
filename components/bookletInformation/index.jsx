import Like from "@/components/icons/Like";
import Like_fill from "@/components/icons/Like_fill";
import like from "@/components/icons/Like";
import {useContext, useEffect, useState} from "react";
import Edit from "@/components/icons/Edit";
import Delete from "@/components/icons/Delete";
import Close from "@/components/icons/Close";
import {uploadedBooklet} from "@/context/uploadedBooklet";
import OkAlert from "@/components/okAlert";
import {bookletPIDContext} from "@/context/bookletPIDContext";
import {useRouter} from "next/router";


const BookletInformation = (props) => {
    const [ formValue, setFormValue]=useState("");
    const [uploadedBooklt , setUploadedBooklt]=useContext(uploadedBooklet);
    const [okEdite , setOkEdit]=useState(false);
    const [selectedBooklet , setSelectedBooklet]=useContext(bookletPIDContext);
    const router = useRouter();
    useEffect(() => {
       setFormValue(props.info);
    }, []);
    const editFinishClick = async (e) => {
        e.preventDefault();
        const jwtToken = localStorage.getItem('jwtToken');
            try {
                const response = await fetch(`http://Localhost:8090/unipoll/v1/booklet/edit-description/${props.publicId}`, {
                    method: "PUT",
                    body: formValue, headers: {"Content-Type": "application/json", 'Authorization': jwtToken}
                });
                if (response.ok) {
                    const response1 = await fetch("http://localhost:8090/unipoll/v1/booklet/uploaded-booklet",{
                        method: 'GET',
                        headers: {
                            "Content-Type": "application/json",
                            'Authorization': jwtToken
                        },
                    });if (response1.ok) {
                        const data = await response1.json();
                        setOkEdit(true);
                        setTimeout(function(){
                            setOkEdit(false);
                        }, 1000);
                    } else {
                        console.log("Network response was not ok");
                    }

                } else {
                    console.log("Network response was not ok");
                }
            } catch (e) {
                console.error("we are GETTING ERROR", e)
            }


    }
    const handeldelete = async (e) => {
        e.preventDefault();
        const jwtToken = localStorage.getItem('jwtToken');
        try {
            const response = await fetch(`http://Localhost:8090/unipoll/v1/booklet/delete/${props.publicId}`, {
                method: "DELETE",
                body: formValue, headers: {"Content-Type": "application/json", 'Authorization': jwtToken}
            });
            if (response.ok) {
                const response1 = await fetch("http://localhost:8090/unipoll/v1/booklet/uploaded-booklet",{
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        'Authorization': jwtToken
                    },
                });if (response1.ok) {
                    const data = await response1.json();
                    setUploadedBooklt([])
                    setTimeout(function(){
                        setUploadedBooklt(data.result)
                    }, 10);
                } else {
                    console.log("Network response was not ok");
                }

            } else {
                console.log("Network response was not ok");
            }
        } catch (e) {
            console.error("we are GETTING ERROR", e)
        }


    }
    const handleSelectedBooklet = () => {
        setSelectedBooklet({publicId: props.publicId});
        router.push('/booklet').then(r => {});
    }
    return(

    <div className={"pr-4 my-10 pb-10 w-[45rem] mx-auto h-[38rem] shadow-2xl rounded-3xl bg-opacity-15 bg-[#1FAAEA] py-3 px-5"} dir={'rtl'}>

        <div className={"flex flex-col h-1/12  "} >
            <div className={" flex mt-4 justify-end mx-6"}>
                <button onClick={handeldelete}><Delete/></button>
            </div>

            <div className={"flex flex-row h-2/12  justify-between"} >
            <p className={"font-bold text-black text-2xl"}>مشخصات جزوه</p>
            <div className={'h-1 w-8/12  bg-darkBlue mt-6 mr-3 '} dir={'ltr'}></div>
        </div>
        <div className={"flex flex-col h-2/12 gap-6 "} >
            <div className={'flex flex-col  gap-6'} onClick={handleSelectedBooklet}>
                <div className={"flex flex-row gap-2 mt-8 "}>
                    <p className="font-bold text-lg  text-black">انتشار دهنده: </p>
                    <p className="   text-lg laptop: text-1xl text-black   "> {props.writerName} </p>
                </div>
                <div className={"flex flex-row gap-2 "}>
                    <p className="font-bold text-lg   text-black">درس مربوطه: </p>
                    <p className="   text-lg laptop: text-1xl text-black   "> {props.course} </p>
                </div>
                <div className={"flex flex-row gap-2 "}>
                    <p className="font-bold text-lg text-black">استاد درس: </p>
                    <p className="   text-lg laptop: text-1xl text-black   "> {props.professor} </p>
                </div>
                <div className={"flex flex-row gap-4 "}>
                    <p className="font-bold text-lg text-black">ترم: </p>
                    <p className="   text-lg laptop: text-1xl text-black   "> {props.semester} </p>
                </div>
            </div>
            <div className={"flex gap-8 "}>
                <p className="font-bold text-lg text-black">توضیحات: </p>
                <div className={" w-full ml-12 flex flex-row gap-3 items-start"}>
                                 <textarea id="commentText" maxLength='500' className="block h-[11rem] w-full p-4  ps-10  text-black-900 rounded-3xl  bg-[#DFE8EF] text-lg placeholder:text-[#8B8C8D]
                             focus:outline-none  focus:ring-0 shadow-inner text-start"
                                           placeholder="توضیحات برای این جزوه :" required
                                           onChange={(event) => {
                                               setFormValue(event.target.value)
                                           }}>{props.info}</textarea>
                    <button onClick={editFinishClick}><Edit/></button>
                </div>
            </div>
        </div>
            <div className={"flex flex-col h-2/12 "}>
            <div className={'h-1 w-11/12  bg-darkBlue mt-6 mr-3 '} dir={'ltr'}></div>
                <div className={"my-2 flex justify-end mx-12" }>
                    {okEdite && <div className={"w-full mx-20 mb-10"}><OkAlert text={" ویرایش توضیحات با موفقیت ثبت شد."}/></div>}
                </div>
            </div>
        </div>

    </div>

    )
}

export default BookletInformation;