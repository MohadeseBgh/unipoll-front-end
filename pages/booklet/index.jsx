import Footer from "@/components/footer";
import Layout from "@/layouts/layout";
import CommentForm from "@/components/commentForm";
import {useState} from "react";
import Comments from "@/components/comments";
import BookletInfo from "@/components/bookletInfo";
import BookletCommentForm from "@/components/bookletCommentForm";
import BookletComments from "@/components/bookletComments";

const Booklet = () => {
   return(
      <div>
          <Layout>
              <div className={'h-screen w-screen bg-white overflow-x-hidden pt-10 flex flex-col items-center'}>
                  <div id={'booklet information'} className={'w-full  pb-10'}>
                      <BookletInfo/>
                  </div>
                  <div id={'comments'} className='w-screen'>
                      <div className="flex flex-row items-center justify-between">
                          <hr className="w-4/12 h-1 bg-darkBlue "/>
                          <h3 className='desktop:text-3xl text-2xl font-bold text-black'>نظرات</h3>
                          <hr className="w-4/12 h-1 bg-darkBlue "/>
                      </div>
                      <BookletComments/>
                      <BookletCommentForm/>
                  </div>
                  <Footer/>
              </div>
          </Layout>
      </div>
  )
}
export default Booklet;