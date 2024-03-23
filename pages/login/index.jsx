import Telegram from "@/component/icons/Telegram";
import Phone from "@/component/icons/Phone";
import Mail from "@/component/icons/Mail";
import {useState} from "react";
import  {useRouter}  from 'next/router';
import Logo from "@/component/icons/Logo";
import Arrow from "@/component/icons/Arrow";



const Login = () => {
    const router = useRouter();

    const [formValue, setFormValue] = useState({userName: "", password: ""});
    let [login , setLogin]=useState(false);
    const formSubmitHandler = async (e) =>{
        e.preventDefault();
        console.log(formValue)
        try {
            const response = await fetch("http://localhost:8090/unipoll/v1/login", {
                method: "GET",
                headers: {
                    'Authorization': `Basic ${ btoa(`${formValue.userName}:${formValue.password}`)}`,
                    "Content-Type": "application/json"
                },
            });


            if (response.ok) {
                setLogin(false);
                console.log("OK");
                localStorage.setItem('jwtToken',response.headers.get('Authorization'));
                const jwtToken=localStorage.getItem('jwtToken');
                console.log(jwtToken);
                await router.push('/home');
                //navigate("/home");
                //redirect('/home');



            } else {
                setLogin(true);
                console.log("not ok")
            }

        }catch (e) {
            console.error("we are GETTING ERROR", e)
        }
    }

    return(
    <div className={"h-screen w-screen flex flex-row bg-white"}>

        <div className={"flex basis-4/12 bg-[url('/images/uni3.png')] bg-no-repeat bg-cover"} >
            {/*<img src={"/images/uni.png"}*/}
            {/*className={'w-full h-full backdrop-opacity-10 backdrop-invert'}*/}
            {/* alt={"uni"}/>*/}
        </div>
        <div className={"flex flex-col items-center basis-8/12 bg-white justify-between mt-9 mb-4 px-5"}>
            <div className={'flex flex-row self-start'}>
                <Arrow/>
                <a  href={'/home'} className='text-start text-darkBlue text-sm'>خانه</a>
            </div>

            <img src='/images/logo.png' alt={'logo'}/>
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
                {login && <p className={'text-red-700 text-[0.75rem] mt-2'}>
                    .رمز ورود یا نام کاربری اشتباه است
                </p>}

            </form>
            <p className={"text-xs text-gray-500"}>
                . ورود به سایت به منزله رعایت تمام
                <span className='text-black'>
                    <a  href={'/rules'} > مقررات </a>
                </span>
                ذکر شده است
            </p>
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