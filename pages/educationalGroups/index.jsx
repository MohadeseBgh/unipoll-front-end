import TopCourse from "@/components/topCourse";
import {useState} from "react";
import ProfessorsOfGroups from "@/components/professorsOfGroups";
import Header from "@/components/header";
import ManagerAndAssistantInfo from "@/components/managerAndAssistantInfo";
import YellowStar from "@/components/icons/YellowStar";
import Star from "@/components/icons/Star";
import managerAndAssistantInfo from "@/components/managerAndAssistantInfo";


const EducationalGroupsHome = (props) => {

    const [professor, setProfessor] = useState([{firstName:"ارش" ,lastName:"شفیعی",academicRank:"استاد یار" ,profilePhoto:"/images/temp.jpg"},
        {firstName:"ارش" ,lastName:"شفیعی",academicRank:"استاد یار" ,profilePhoto:"/images/temp.jpg"},
        {firstName:"ارش" ,lastName:"شفیعی",academicRank:"استاد یار" ,profilePhoto:"/images/temp.jpg"},
        {firstName:"ارش" ,lastName:"شفیعی",academicRank:"استاد یار" ,profilePhoto:"/images/temp.jpg"},
        {firstName:"ارش" ,lastName:"شفیعی",academicRank:"استاد یار" ,profilePhoto:"/images/temp.jpg"},
        {firstName:"ارش" ,lastName:"شفیعی",academicRank:"استاد یار" ,profilePhoto:"/images/temp.jpg"},
        {firstName:"ارش" ,lastName:"شفیعی",academicRank:"استاد یار" ,profilePhoto:"/images/temp.jpg"},
        {firstName:"ارش" ,lastName:"شفیعی",academicRank:"استاد یار" ,profilePhoto:"https://salamatiancar.com/wp-content/uploads/elementor/thumbs/VX-qez9madm6wxipbvvurwlrc8vy77kmypuxufvkc6c10.png"}]);

    const [managerAndAssistant, setManagerAndAssistant] = useState([
        {type:"manager",firstName:"ارش" ,lastName:"شفیعی",academicRank:"استاد یار" ,profilePhoto:"/images/temp.jpg",phd:"مهندسی کامپیوتر" ,phoneNumber:"۳۷۹۳۵۶۲۱",email:"r.ramezani[at]eng.ui.ac.ir",websiteLink:"https://eng.ui.ac.ir/r.ramezani"},
        {type:"assistant",firstName:"ارش" ,lastName:"شفیعی",academicRank:"استاد یار" ,profilePhoto:"/images/temp.jpg",phd:"مهندسی کامپیوتر" ,phoneNumber:"۳۷۹۳۵۶۲۱",email:"r.ramezani[at]eng.ui.ac.ir",websiteLink:"https://eng.ui.ac.ir/r.ramezani"}]);

    const [type, setType] = useState(0);

    return (
        <div className='h-screen w-screen flex flex-col bg-white gap-y-4 overflow-x-hidden'>
            <div className={'w-full h-24'}>
                <Header/>
            </div>
            <div>
                <div className='flex justify-center items-center'>
                    گروه مهندسی نرم افزار
                </div>
                <div id="managerAndAssistant " className=" w-screen flex flex-col items-center justify-center">
                    <div className=' grid gap-20  laptop:grid-cols-2  tablet:grid-cols-2 mobile:grid-cols-1 items-center my-24  '>
                        <ManagerAndAssistantInfo type={"s"} firstName={managerAndAssistant[type].firstName} lastName={managerAndAssistant[type].lastName} academicRank={managerAndAssistant[type].academicRank} profilePhoto={managerAndAssistant[type].profilePhoto}/>
                        <ManagerAndAssistantInfo name='هوش مصنوعی'
                                                 text='گروه مهندسی نرم‌افزار دانشگاه اصفهان همواره به عنوان یکی از باسابقه‌ترین گروه‌های کامپیوتری در سطح کشور شناخته می‌شده است....'
                                                 mt='laptop:mt-28'/>

                    </div>
                </div>
                <div id="professor" className="flex flex-col mb-24 w-screen" dir="rtl">
                    <div className={" w-screen bg-[#F2FBFF] justify-items-center h-86"}>
                        <div className="flex flex-row items-center justify-between py-8" dir="rtl">
                            <hr className="h-1 basis-5/12 bg-darkBlue "/>
                            <h3 className='text-4xl font-bold text-darkBlue '>اساتید</h3>
                            <hr className="basis-5/12 h-1  bg-darkBlue "/>
                        </div>
                        <ProfessorsOfGroups professors={professor}/>
                    </div>
                </div>
                <div>
                    دروس ارایه شده
                </div>
            </div>
        </div>
    )
}
export default EducationalGroupsHome;
