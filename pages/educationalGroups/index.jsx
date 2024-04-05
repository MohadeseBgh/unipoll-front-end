import TopCourse from "@/components/topCourse";
import {useState} from "react";
import ProfessorsOfGroups from "@/components/professorsOfGroups";
import Header from "@/components/header";
import ManagerAndAssistantInfo from "@/components/managerAndAssistantInfo";


const EducationalGroupsHome = (props) => {
    const [professor, setProfessor] = useState([{firstName:"ارش" ,lastName:"شفیعی",academicRank:"استاد یار" ,profilePhoto:"/images/temp.jpg"},
        {firstName:"ارش" ,lastName:"شفیعی",academicRank:"استاد یار" ,profilePhoto:"/images/temp.jpg"},
        {firstName:"ارش" ,lastName:"شفیعی",academicRank:"استاد یار" ,profilePhoto:"/images/temp.jpg"},
        {firstName:"ارش" ,lastName:"شفیعی",academicRank:"استاد یار" ,profilePhoto:"/images/temp.jpg"},
        {firstName:"ارش" ,lastName:"شفیعی",academicRank:"استاد یار" ,profilePhoto:"/images/temp.jpg"},
        {firstName:"ارش" ,lastName:"شفیعی",academicRank:"استاد یار" ,profilePhoto:"/images/temp.jpg"},
        {firstName:"ارش" ,lastName:"شفیعی",academicRank:"استاد یار" ,profilePhoto:"/images/temp.jpg"},
        {firstName:"ارش" ,lastName:"شفیعی",academicRank:"استاد یار" ,profilePhoto:"/images/temp.jpg"}]);
    return (<div className='h-screen w-screen flex flex-col bg-white gap-y-4 overflow-x-hidden'>
        <div className={'w-full h-24'}>
            <Header/>
        </div>
        <div id="managerAndAssistant " className=" w-screen flex flex-col items-center justify-center mb-24 ">
        <div
            className=' grid gap-12  laptop:grid-cols-2  tablet:grid-cols-2 mobile:grid-cols-1 items-center my-24  '>
            <ManagerAndAssistantInfo name='نرم افزار'
                                   text='گروه مهندسی نرم‌افزار دانشگاه اصفهان همواره به عنوان یکی از باسابقه‌ترین گروه‌های کامپیوتری در سطح کشور شناخته می‌شده است ....'/>
            <ManagerAndAssistantInfo name='هوش مصنوعی'
                                   text='گروه مهندسی نرم‌افزار دانشگاه اصفهان همواره به عنوان یکی از باسابقه‌ترین گروه‌های کامپیوتری در سطح کشور شناخته می‌شده است....'
                                   mt='laptop:mt-28'/>

        </div>
        </div>
        <div id="professor" className="flex flex-col mb-24 " dir="rtl">
            <div
                className={"min-h-[29rem]  w-screen bg-[#F2FBFF] justify-items-center gap-y-16 "}>
                <div className="flex flex-row items-center justify-between" dir="rtl">
                    <hr className="my-12 laptop:w-4/12 table:w-0 h-1.5 border-t-0 bg-darkBlue "/>
                    <h3 className='text-5xl  font-bold text-black '>اساتید</h3>
                    <hr className="my-12 laptop:w-4/12 table:w-0 h-1.5 border-t-0 bg-darkBlue "/>
                </div>
                <ProfessorsOfGroups professors={professor}/>
            </div>
        </div>
    </div>)
}
export default EducationalGroupsHome;
