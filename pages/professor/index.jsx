import ProfInfo from "@/components/profInfo";
import Header from "@/components/header";
import Layout from "@/layouts/layout";
import Footer from "@/components/footer";
import {useContext, useEffect, useState} from "react";
import ProfessorSearch from "@/components/professorInfo";
import LessonSearch from "@/components/lessonsSearch";
import {getProfessorPIDContext} from "@/context/getProfessorPIDContext";


const Professor = () => {
    const [professorInfo,setProfessorInfo]=useState({})

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8090/unipoll/v1/instructor/${professorPId}`);
                const response2 = await fetch(`http://localhost:8090/unipoll/v1/instructor/${professorPId}/courses`);
                if (response.ok) {
                    const data = await response.json();
                    setProfessorInfo(data.result);
                } else {
                    console.log("Network response was not ok");
                }
                if (response2.ok) {
                    const data = await response2.json();
                    setCourse(data.result);
                    console.log(professorPId)
                } else {
                    console.log("Network response was not ok");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);
    const [professorPId , setProfessorPId]=useContext(getProfessorPIDContext)
    const [course,setCourse] = useState([
        {image:'images/searchbarPhoto.png', lessonName:'aaaa',profssorName:'d',description:'dd', rate:'4'},
        {image:'images/searchbarPhoto.png',
    lessonName:'aaaa',profssorName:'d',description:'dd', rate:'4'},{image:'images/searchbarPhoto.png',
    lessonName:'aaaa',profssorName:'d',description:'dd', rate:'4'},{image:'images/searchbarPhoto.png',
    lessonName:'aaaa',profssorName:'d',description:'dd', rate:'4'},{image:'images/searchbarPhoto.png',
    lessonName:'aaaa',profssorName:'d',description:'dd', rate:'4'}])

    return(

         <Layout>
             <div className={'h-screen w-screen bg-white overflow-x-hidden pt-10 flex flex-col items-center'}>
                <ProfInfo academicRank={professorInfo.academicRank} email={professorInfo.email} name={professorInfo.firstname+" "+professorInfo.lastname} phd={professorInfo.phd}
                          phoneNumber={professorInfo.phoneNumber} profilePhoto={professorInfo.profilePhoto} websiteLink={professorInfo.websiteLink} image={professorInfo.profilePhoto}/>
                 <div>
                     <div className={'flex flex-row w-full mt-20 gap-12 justify-center items-center '}>
                         <div className={'h-4 w-5/12 bg-darkBlue mt-5'}></div>
                         <h1 className='font-bold text-3xl text-darkBlue w-2/12 justify-center mb-2 ml-8'>دروس ارائه شده </h1>
                         <div className={'h-4 w-5/12 bg-darkBlue mt-5'}></div>
                     </div>
                     <div className={'bg-opacity-5 bg-[#1FAAEA] ml-10 mr-10  rounded-3xl'}>
                     <div className="flex flex-col overflow-y-auto overflow-x-hidden gap-x-20 w-screen overscroll-auto  scrollbar scrollbar-thumb-darkBlue scrollbar-track-[#D9EDFD] px-16 h-[36rem] py-4" >

                         {course.map((k,index) =>
                             <LessonSearch key={index} image={k.image} lessonName={k.courseName}  professorName={k.instructorCourseFirstname+" "+k.instructorCourseLastname}
                                           description={k.description} rate={k.rate} />
                         )}
                     </div>
                     </div>
                 </div>
                 <Footer/>
             </div>
         </Layout>
  )
}
export default Professor;