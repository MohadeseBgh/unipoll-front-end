import {useState} from "react";
import LessonSearch from "@/components/lessonsSearch";
import ProfessorSearch from "@/components/professorSearch";
import CarouselBooklet from "@/components/carouselBooklet";

const Search = (props) => {
    const [lesson , setLesson]=useState([ {courseName:"مبانی برنامه نویسی" ,professorName:"رضا رمضانی" ,rate:5},
        {courseName:"مبانی برنامه نویسی" ,professorName:"رضا رمضانی" ,rate:5},
        {courseName:"مبانی برنامه نویسی" ,professorName:"رضا رمضانی" ,rate:4},
        {courseName:"مبانی برنامه نویسی" ,professorName:"رضا رمضانی" ,rate:3},
        {courseName:"مبانی برنامه نویسی" ,professorName:"رضا رمضانی" ,rate:5},
        {courseName:"مبانی برنامه نویسی" ,professorName:"رضا رمضانی" ,rate:5},
        {courseName:"مبانی برنامه نویسی" ,professorName:"رضا رمضانی" ,rate:5},
        {courseName:"مبانی برنامه نویسی" ,professorName:"رضا رمضانی" ,rate:5},
        {courseName:"مبانی برنامه نویسی" ,professorName:"رضا رمضانی" ,rate:5},
        {courseName:"مبانی برنامه نویسی" ,professorName:"رضا رمضانی" ,rate:5},
        {courseName:"مبانی برنامه نویسی" ,professorName:"رضا رمضانی" ,rate:5},
        {courseName:"مبانی برنامه نویسی" ,professorName:"رضا رمضانی" ,rate:5},
    ])
  return(
      <div className='w-screen h-full bg-[#F2FAFD] p-8 overflow-x-hidden scrollbar scrollbar-thumb-darkBlue scrollbar-track-[#D9EDFD] scrollbar-thumb-rounded-full'>
          <div className={'flex flex-row w-full '} dir={'rtl'}>
              <h1 className='font-bold text-2xl text-darkBlue w-2/12 '>نتایج جستجو </h1>
              <div className={'h-1 w-10/12 bg-darkBlue mt-5'}></div>
          </div>
            <div>
                {props.professor===true? props.result.map( (p , index)=> <ProfessorSearch key={index} professorNamee={p.firstname+" "+p.lastname} profssorDegree={p.academicRank} professorEmail={p.email} professorSite={p.websiteLink}/>):
                    props.result.map( (p , index)=> <LessonSearch key={index} lessonsName={p.courseName} profssorName={[p.instructorCourseFirstname," ",p.instructorCourseLastname]} descriptionn={p.description} rate={p.rate}/>)}
            </div>
      </div>
  )
}
export default Search;