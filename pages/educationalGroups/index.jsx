import TopCourse from "@/components/topCourse";
import {useState} from "react";
import ProfessorsOfGroups from "@/components/professorsOfGroups";
import Header from "@/components/header";
import ManagerAndAssistantInfo from "@/components/managerAndAssistantInfo";
import YellowStar from "@/components/icons/YellowStar";
import Star from "@/components/icons/Star";
import managerAndAssistantInfo from "@/components/managerAndAssistantInfo";
import ProfessorOfGroups from "@/components/professorOfGroups";
import GroupCourses from "@/components/groupCourses";


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
        {type:"manager",firstName:"رضا" ,lastName:"رمضانی",academicRank:"استاد یار" ,profilePhoto:"/images/temp.jpg",phd:"دکترای رشته مهندسی کامپیوتر" ,phoneNumber:"۳۷۹۳۵۶۲۱",email:"r.ramezani[at]eng.ui.ac.ir",websiteLink:"https://eng.ui.ac.ir/r.ramezani"},
        {type:"assistant",firstName:"ارش" ,lastName:"شفیعی",academicRank:"استاد یار" ,profilePhoto:"/images/temp.jpg",phd:"دکترای رشته مهندسی کامپیوتر" ,phoneNumber:"۳۷۹۳۵۶۲۱",email:"r.ramezani[at]eng.ui.ac.ir",websiteLink:"https://eng.ui.ac.ir/r.ramezani"}]);

    const [courses , setCourses]=useState([{publicId:'1',courseName:'مهندسی نرم افزار'},
        {publicId:'1',courseName:'مهندسی نرم افزار'},
        {publicId:'1',courseName:'مهندسی نرم افزار'},
        {publicId:'1',courseName:'مهندسی نرم افزار'},
        {publicId:'1',courseName:'مهندسی نرم افزار'},
        {publicId:'1',courseName:'مهندسی نرم افزار'},
        {publicId:'1',courseName:'مهندسی نرم افزار'},
        {publicId:'1',courseName:'مهندسی نرم افزار'},
        {publicId:'1',courseName:'مهندسی نرم افزار'},
        {publicId:'1',courseName:'مهندسی نرم افزار'},
        {publicId:'1',courseName:'مهندسی نرم افزار'},
        {publicId:'1',courseName:'مهندسی نرم افزار'},
        {publicId:'1',courseName:'مهندسی نرم افزار'},
        {publicId:'1',courseName:'مهندسی نرم افزار'},
        {publicId:'1',courseName:'مهندسی نرم افزار'},
        {publicId:'1',courseName:'مهندسی نرم افزار'},
        {publicId:'1',courseName:'مهندسی نرم افزار'},

    ])
    const [type, setType] = useState(0);

    return (
        <div className='h-screen w-screen flex flex-col bg-white gap-y-4 overflow-x-hidden'>
            <div className={'w-full h-24'}>
                <Header/>
            </div>
            <div>
                <div className='flex flex-col justify-center items-center w-screen '>
                    <div className={'text-center text-4xl text-white bg-darkBlue rounded-2xl w-4/12 py-6 translate-y-10 px-3 font-bold'}>
                        گروه مهندسی نرم افزار
                    </div>
                    <div className={'text-center text-2xl/10 text-black bg-[#E2F4FC] w-full px-10 py-20'} dir={'rtl'}>
                        گروه مهندسی نرم‌افزار دانشگاه اصفهان همواره به عنوان یکی از باسابقه‌ترین گروه‌های کامپیوتری در سطح کشور شناخته می‌شده است. سابقه‌ی این گروه به سال‌های ۱۳۵۰ الی ۱۳۶۴ بازمی‌گردد که کامپیوتر به عنوان یکی از گرایش‌های رشته‌ی ریاضی در دانشگاه اصفهان موجود و از وجود استادان به نام و شناخته ‌شده‌ای بهره می‌برد.
                    </div>
                </div>
                <div id="managerAndAssistant " className=" w-screen flex flex-col items-center justify-center">
                    {/*<div className={'flex flex-row w-full px-5 '}>*/}
                    {/*    <div className="flex  w-1/2 flex-row items-center justify-between py-8" dir="rtl">*/}
                    {/*        <div className="h-1 basis-4/12 bg-darkBlue "/>*/}
                    {/*        <h2 className='text-2xl font-bold text-darkBlue '>{managerAndAssistant[0].type}</h2>*/}
                    {/*        <div className="basis-4/12 h-1 bg-darkBlue "/>*/}
                    {/*    </div>*/}
                    {/*    <div className="flex  w-1/2 flex-row items-center justify-between py-8" dir="rtl">*/}
                    {/*        <div className="h-1 basis-4/12 bg-darkBlue "/>*/}
                    {/*        <h2 className='text-2xl font-bold text-darkBlue '>{managerAndAssistant[1].type}</h2>*/}
                    {/*        <div className="basis-4/12 h-1 bg-darkBlue "/>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className=' grid gap-20  min_laptop:grid-cols-2 tablet:grid-cols-1 items-center my-24 '>
                        <div className={'flex flex-col w-full'}>
                            <div className="flex  w-full flex-row items-center justify-between pb-20" dir="rtl">
                                <div className="h-1 basis-4/12 bg-darkBlue "/>
                                <h2 className='text-2xl font-bold text-darkBlue '>{managerAndAssistant[0].type}</h2>
                                <div className="basis-4/12 h-1 bg-darkBlue "/>
                            </div>
                            <ManagerAndAssistantInfo type={managerAndAssistant[0].type}
                                                     firstName={managerAndAssistant[0].firstName}
                                                     lastName={managerAndAssistant[0].lastName}
                                                     academicRank={managerAndAssistant[0].academicRank}
                                                     profilePhoto={managerAndAssistant[0].profilePhoto}
                                                     phd={managerAndAssistant[0].phd}
                                                     email={managerAndAssistant[0].email}
                                                     phoneNumber={managerAndAssistant[0].phoneNumber}
                                                     websiteLink={managerAndAssistant[0].websiteLink}
                            />
                        </div>
                        <div className={'flex flex-col w-full'}>
                            <div className="flex  w-full flex-row items-center justify-between pb-20" dir="rtl">
                                <div className="h-1 basis-4/12 bg-darkBlue "/>
                                <h2 className='text-2xl font-bold text-darkBlue '>{managerAndAssistant[1].type}</h2>
                                <div className="basis-4/12 h-1 bg-darkBlue "/>
                            </div>
                        <ManagerAndAssistantInfo type={managerAndAssistant[1].type}
                                                 firstName={managerAndAssistant[1].firstName}
                                                 lastName={managerAndAssistant[1].lastName}
                                                 academicRank={managerAndAssistant[1].academicRank}
                                                 profilePhoto={managerAndAssistant[1].profilePhoto}
                                                 phd={managerAndAssistant[1].phd}
                                                 email={managerAndAssistant[1].email}
                                                 phoneNumber={managerAndAssistant[1].phoneNumber}
                                                 websiteLink={managerAndAssistant[1].websiteLink}
                        />
                        </div>
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
                <div className='flex flex-col justify-center items-center w-screen mb-16'>
                    <div className={'text-center text-4xl text-white bg-darkBlue rounded-2xl w-4/12 py-6 translate-y-10 px-3 font-bold'}>
                        دروس ارائه شده
                    </div>
                    <div className={'bg-[#E2F4FC] w-8/12 px-10 shadow-xl rounded-2xl py-32'} dir={'rtl'}>
                        <div className={'border border-darkBlue border-opacity-15 grid grid-cols-2 justify-center items-center text-center'}>
                                {courses.map(
                                    (p , index)=> <GroupCourses key={index} publicId={p.publicId} courseName={p.courseName} index={index}/>
                                )}
                            <div className={` ${(courses.length)%2===0 ? 'hidden':''}`}>
                                <GroupCourses courseName={'.'}/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EducationalGroupsHome;
