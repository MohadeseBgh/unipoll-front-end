import Telegram from "@/component/icons/Telegram";
import Phone from "@/component/icons/Phone";
import Mail from "@/component/icons/Mail";
import {useState} from "react";

const Login = () => {
    const [formValue, setFormValue] = useState({userName: "", password: ""})

    const formSubmitHandler = async (e) =>{
        e.preventDefault();
        console.log(formValue)
    }

    return(
    <div className={"h-screen w-screen flex flex-row bg-white"}>

        <div className={"flex basis-4/12 bg-[url('/images/uni2.png')] bg-no-repeat bg-cover"} >
            {/*<img src={"/images/uni.png"}*/}
            {/*className={'w-full h-full backdrop-opacity-10 backdrop-invert'}*/}
            {/* alt={"uni"}/>*/}
        </div>
        <div className={"flex flex-col items-center basis-7/12 bg-white justify-between mt-16 mb-4 px-5"}>
            <h1 className={"text-6xl"}> UNIPOLL </h1>
            <p className={"text-base "}>با نام کاربری و رمز ورود گلستان خود وارد شوید</p>
            <form style={{display: "flex", alignItems: "center", justifyContent: "center"} }
                  onSubmit={formSubmitHandler}
            className={"border-gray-700 flex flex-col align-items-center justify-between"}>
                <div className={'flex flex-col w-80 mb-12'}>
                    <p className={'text-xl pb-2 text-end pr-5'}> نام کاربری</p>
                    <input
                        name={"userName"}
                        onChange={(event) => {
                            setFormValue({...formValue, userName: event.target.value})
                        }}
                        className=' h-14 block bg-blue1 w-full border border-slate-300 rounded-2xl
                        pr-3 pl-3 shadow-lg focus:outline-none focus:border-slate-400 focus:ring-slate-400 focus:ring-1 '
                        type="text"/>
                </div>
                <div className={'flex flex-col w-80'}>
                    <p className={'text-xl pb-2 text-end pr-5'}>رمز ورود</p>
                    <input
                        name={"password"}
                        onChange={(event) => {
                            setFormValue({...formValue, password: event.target.value})
                        }}
                        className=' h-14 block bg-blue1 w-full border border-slate-300 rounded-2xl
                        pr-3 pl-3 shadow-lg focus:outline-none focus:border-slate-400 focus:ring-slate-400 focus:ring-1 '
                        type="password"/>
                </div>
                <button className=' drop-shadow-md text-white text-center mt-20 rounded-3xl bg-darkBlue px-16 py-2 pb-3 shadow-lg shadow-gray-600 '
                        type={"submit"}>
                    ورود
                </button>

            </form>
            <p className={"text-sm text-gray-500"}>. ورود به سایت به منزله رعایت تمام مقررات ذکر شده است</p>
            <div className={"flex flex-row gap-6"}>
                <Telegram/>
                <Phone/>
                <Mail/>
             </div>
        </div>
    </div>
  );
};
export default Login;