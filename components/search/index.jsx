import {useState} from "react";
import LessonSearch from "@/components/lessonsSearch";
import ProfessorSearch from "@/components/professorSearch";
import CarouselBooklet from "@/components/carouselBooklet";

const Search = (props) => {

  return(
      <div className='w-screen h-full bg-[#F2FAFD] p-8 overflow-x-hidden scrollbar scrollbar-thumb-darkBlue scrollbar-track-[#D9EDFD] scrollbar-thumb-rounded-full'>
          <div className={'flex flex-row w-full '} dir={'rtl'}>
              <h1 className='font-bold text-2xl text-darkBlue w-2/12 '>نتایج جستجو </h1>
              <div className={'h-1 w-10/12 bg-darkBlue mt-5'}></div>
          </div>
            <div>
                {props.professor===true? props.result.map( (p , index)=>
                        <ProfessorSearch key={index} name={p.firstname+" "+p.lastname} degree={p.academicRank} email={p.email} site={p.websiteLink} image={p.profilePhoto} publicId={p.publicId}/>):
                    props.result.map( (p , index)=>
                        <LessonSearch key={index} lessonName={p.courseName} professorName={[p.instructorCourseFirstname," ",p.instructorCourseLastname]} description={p.description} rate={p.rate}/>)}
            </div>
      </div>
  )
}
export default Search;