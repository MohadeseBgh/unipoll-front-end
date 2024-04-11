import {useContext, useEffect, useState} from "react";
import ProfessorsOfGroups from "@/components/professorsOfGroups";
import ManagerAndAssistantInfo from "@/components/managerAndAssistantInfo";
import GroupCourses from "@/components/groupCourses";
import HeaderFooter from "@/layouts/headerFooter";
import Footer from "@/components/footer";
import {edGroupDescpContext} from "@/context/edGroupDescpContext";
import {edGroupCoursesContext} from "@/context/edGroupCoursesContext";
import {edGroupProfessorsContext} from "@/context/edGroupProfessorsContext";
import {edGroupMAndAContext} from "@/context/edGroupM&AContext";


const EducationalGroupsHome = () => {

    const [professor, setProfessor] = useContext(edGroupProfessorsContext);
    const [managerAndAssistant, setManagerAndAssistant] = useContext(edGroupMAndAContext)
    const [courses , setCourses]=useContext(edGroupCoursesContext);
    const [edGroupdescription, setEdGroupdescription]=useContext(edGroupDescpContext)

    return (
        <HeaderFooter>
        <div className='h-screen w-screen flex flex-col bg-white gap-y-4 overflow-x-hidden'>
            <div>
                <div className='flex flex-col justify-center items-center w-screen '>
                    <div className={'text-center text-4xl text-white bg-darkBlue rounded-2xl w-4/12 py-6 translate-y-10 px-3 font-bold'}>
                        {edGroupdescription.name}
                    </div>
                    <div className={'text-center text-2xl/10 text-black bg-[#E2F4FC] w-full px-10 py-20'} dir={'rtl'}>
                        {edGroupdescription.description}
                    </div>
                </div>
                <div id="managerAndAssistant " className=" w-screen flex flex-col items-center justify-center">
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
                                <GroupCourses courseName={'______'}/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
        </HeaderFooter>
    )
}
export default EducationalGroupsHome;
