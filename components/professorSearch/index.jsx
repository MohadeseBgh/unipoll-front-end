import {useRouter} from "next/router";
import {useContext, useState} from "react";
import {getProfessorPIDContext} from "@/context/getProfessorPIDContext";

const ProfessorSearch = (props) => {
    const router = useRouter();
    const [professorPId , setProfessorPId]=useContext(getProfessorPIDContext)
    const handleClick = async (e) => {
        e.preventDefault();
        setProfessorPId(props.publicId)
        await router.push('/professor');
    }
    return (
        <div className="w-75% h-44 shadow-2xl bg-opacity-15 bg-[#1FAAEA] max-h-60 rounded-3xl flex flex-row m-12 drop-shadow-2xl p-5" dir="rtl"
        onClick={handleClick}
        >
            <div className="basis-1/12 border h-full shadow shadow-xl rounded-3xl">
                <img className={'h-full w-full rounded-3xl shadow ' }
                     src={props.image} // آدرس گرفتن عکس هم فکر کنم باید از بک گرفته شود
                     alt={''} />
            </div>
            <div className="basis-11/12 px-10 flex flex-row gap-12 ">
                <div className="flex flex-col gap-8 justify-center">
                    <div className={'flex flex-row gap-2'}>
                        <p className="font-bold  text-lg laptop: text-2xl font-bold text-black ">نام استاد:  </p>
                        <p className="text-lg laptop: text-xl text-black">{props.name} </p>
                    </div>
                    <div className={'flex flex-row gap-2'}>
                        <p className="font-bold text-lg laptop: text-2xl  font-bold text-black">مرتبه علمی: </p>
                        <p className="text-lg laptop: text-xl  text-black">{props.degree}   </p>
                    </div>

                </div>
                <div className={"flex flex-col gap-8 justify-center "}>
                    <div className={'flex flex-row gap-2'}>
                        <p className="font-bold  text-lg laptop: text-2xl  font-bold text-black  "> ایمیل: </p>
                        <a href={'#'} className=" pt-1 text-lg laptop: text-xl text-black">{props.email}  </a>
                    </div>
                     <div className={'flex flex-row gap-2'}>
                         <p className="font-bold text-lg laptop: text-2xl font-bold text-black  ">صفحه شخصی:</p>
                        < a href={'#'} className=" pt-1 text-lg laptop: text-xl text-black">{props.site}   </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfessorSearch;