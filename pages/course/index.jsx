import Footer from "@/components/footer";
import Layout from "@/layouts/layout";
import CourseInfo from "@/components/courseInfo";
import UploadBooklet from "@/components/uploadBooklet";
import CommentForm from "@/components/commentForm";
import {useState} from "react";
import Comments from "@/components/comments";

const Course = () => {
   return(
      <div>
          <Layout>
              <div className={'h-screen w-screen bg-white overflow-x-hidden pt-10 flex flex-col items-center'}>
                  <div id={'course information'} className={'w-full  pb-10'}>
                      <CourseInfo/>
                  </div>
                  <div id={'booklets'} className={'w-full bg-darkBlue'}>
                      booklet
                  </div>
                  <div id={'send booklet'} className={'w-full my-10 flex flex-col justify-center items-center gap-4'}>
                      <p className={'text-darkBlue text-2xl '}>
                          (; جزوه خودتون رو بفرستید برامون
                      </p>
                      <UploadBooklet/>
                  </div>
                  <div id={'comments'} className='w-screen'>
                      <div className="flex flex-row items-center justify-between">
                          <hr className="w-4/12 h-1 bg-darkBlue "/>
                          <h3 className='desktop:text-3xl text-2xl font-bold text-black'>نظرات</h3>
                          <hr className="w-4/12 h-1 bg-darkBlue "/>
                      </div>
                      <Comments/>
                      <CommentForm/>
                  </div>
                  <Footer/>
              </div>
          </Layout>
      </div>
  )
}
export default Course;