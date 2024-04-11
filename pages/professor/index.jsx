import ProfInfo from "@/components/profInfo";
import Header from "@/components/header";
import HeaderFooter from "@/layouts/headerFooter";
import Footer from "@/components/footer";
import {useState} from "react";
import ProfessorSearch from "@/components/professorInfo";
import LessonSearch from "@/components/lessonsSearch";


const Professor = () => {
const [course,setCourse] = useState([{image:'images/searchbarPhoto.png',
    lessonName:'aaaa',profssorName:'d',description:'dd', rate:'4'},{image:'images/searchbarPhoto.png',
    lessonName:'aaaa',profssorName:'d',description:'dd', rate:'4'},{image:'images/searchbarPhoto.png',
    lessonName:'aaaa',profssorName:'d',description:'dd', rate:'4'},{image:'images/searchbarPhoto.png',
    lessonName:'aaaa',profssorName:'d',description:'dd', rate:'4'},{image:'images/searchbarPhoto.png',
    lessonName:'aaaa',profssorName:'d',description:'dd', rate:'4'}])

    return(

         <HeaderFooter>
             <div className={'h-screen w-screen bg-white'}>
                <ProfInfo/>
                 <div>
                     <div className={'flex flex-row w-full mt-20 gap-12 justify-center   items-center '}>
                         <div className={'h-4 w-5/12 bg-darkBlue mt-5'}></div>
                         <h1 className='font-bold text-3xl text-darkBlue w-2/12 justify-center ml-8'>دروس ارائه شده </h1>
                         <div className={'h-4 w-5/12 bg-darkBlue mt-5'}></div>
                     </div>
                     <div className={'bg-opacity-5 bg-[#1FAAEA] ml-10 mr-10  rounded-3xl'}>
                     <div className="flex flex-col overflow-y-auto overflow-x-hidden gap-x-20
                         overscroll-auto  scrollbar scrollbar-thumb-darkBlue scrollbar-track-[#D9EDFD] px-16 h-[36rem] py-4" >


                         {course.map((k,index) =>
                             <LessonSearch key={index} image={k.image} lessonName={k.lessonName}  profssorName={k.profssorName}
                                           description={k.description} rate={k.rate} />
                         )}
                     </div>
                     </div>
                 </div>
                 <Footer/>
             </div>
         </HeaderFooter>





  )
}
export default Professor;