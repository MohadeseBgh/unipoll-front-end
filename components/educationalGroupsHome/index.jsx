import {useRouter} from "next/router";


const EducationalGroupsHome = (props) => {
    const router = useRouter();
    const handleSelected = () => {
        if(props.name==='نرم افزار')
        router.push('/softwareGroup').then(r => {});
        if(props.name==='معماری کامپیوتر')
            router.push('/hardwareGroup').then(r => {});
        if(props.name==='فناوری اطلاعات')
            router.push('/networkGroup').then(r => {});
        if(props.name==='هوش مصنوعی')
            router.push('/AIGroup').then(r => {});
    }
    return (
        <div className={`max-h-80 rounded-xl max-w-72 border-4 shadow-md border-darkBlue text-center transition duration-200 ease-in-out hover:scale-105 cursor-pointer ${props.mt}`} onClick={handleSelected}>
            <div
                className="flex flex-col  min-h-80 rounded-xl min-w-72 border-4 shadow-md border-[#2C83BF] mt-2 mr-2"
                dir="rtl">
                <h2 className="text-3xl font-bold text-darkBlue my-4 ">{props.name}</h2>
                <p className='line-clamp-6 text-xl text-black mr-12 ml-10 '>{props.text}</p>
            </div>

        </div>)
}
export default EducationalGroupsHome;
