import Footer from "@/components/footer";
import Layout from "@/layouts/layout";
import CommentForm from "@/components/commentForm";
import {useState} from "react";
import Comments from "@/components/comments";

const Course = () => {
    const [comments, setComments] = useState([{role:"دانشجو",term:"ترم بهار1400 ",date:"1399/06/12",text: "جزوه خوب بودجزوه خوب بودجزوه خوب بودجزوه خوب بودجزوه خوب بودجزوه خوب بود جزوه خوب بودجزوه خوب بودجزوه خوب بودجزوه خوب بودجزوه خوب بودجزوه خوب بود", name: "ناشناس"},
        {role:"دانشجو",term:"ترم بهار1400 ",date:"1399/06/12",text: "جزوه خوب بودجزوه خوب بودجزوه خوب بودجزوه خوب بودجزوه خوب بودجزوه خوب بود جزوه خوب بودجزوه خوب بودجزوه خوب بودجزوه خوب بودجزوه خوب بودجزوه خوب بود نننننننننننننننننننننننننننننننننننننننننننننننننننننننننننننننننننننننننننننننننننننننننننن تبسمیتیسنمبتن م شمنبتینمسبت تسمنبتیسنم یتسنمبتشسمیتبمنستبنمستبنستبمستبمیستبمستبنمستبیمبتسیتنبتبنیستبنیشب  بستبمسبتمسیهبتسمتهبتهقتب مسینتبسمتبکسبتمستنبتهقهالرئئطزدمدنتیب ستبهخحثتبمستمبتسمنب  ستبنستمشتبهثت", name: "ناشناس"},
        {role:"دانشجو",term:"ترم بهار1400 ",date:"1399/06/12",text: "جزوه خوب بودجزوه خوب بودجزوه خوب بودجزوه خوب بودجزوه خوب بودجزوه خوب بود جزوه خوب بودجزوه خوب بودجزوه خوب بودجزوه خوب بودجزوه خوب بودجزوه خوب بود", name: "ناشناس"},
        {role:"دانشجو",term:"ترم بهار1400 ",date:"1399/06/12",text: "جزوه خوب بودجزوه خوب بودجزوه خوب بودجزوه خوب بودجزوه خوب بودجزوه خوب بود جزوه خوب بودجزوه خوب بودجزوه خوب بودجزوه خوب بودجزوه خوب بودجزوه خوب بود", name: "ناشناس"},
        {role:"دانشجو",term:"ترم بهار1400 ",date:"1399/06/12",text: "جزوه خوب بودجزوه خوب بودجزوه خوب بودجزوه خوب بودجزوه خوب بودجزوه خوب بود جزوه خوب بودجزوه خوب بودجزوه خوب بودجزوه خوب بودجزوه خوب بودجزوه خوب بود", name: "ناشناس"},
        {role:"دانشجو",term:"ترم بهار1400 ",date:"1399/06/12",text: "جزوه خوب بودجزوه خوب بودجزوه خوب بودجزوه خوب بودجزوه خوب بودجزوه خوب بود جزوه خوب بودجزوه خوب بودجزوه خوب بودجزوه خوب بودجزوه خوب بودجزوه خوب بود", name: "ناشناس"},]);
  return(
      <div>
          <Layout>
              <div className={'h-screen w-screen bg-white overflow-x-hidden pt-10 flex flex-col items-center'}>
                  <div id={'course information'} className={'w-full h-80 bg-blue2 opacity-50'}>

                  </div>
                  <div id={'booklets'} className={'w-full bg-darkBlue'}>
                        booklet
                  </div>
                  <div id={'send booklet'} className={'bg-pink-200'}>
                      send booklet
                  </div>
                  <div id={'comments'} className='w-screen'>
                      <div className="flex flex-row items-center justify-between">
                          <hr className="w-4/12 h-1 bg-darkBlue "/>
                          <h3 className='desktop:text-3xl text-2xl font-bold text-black'>نظرات</h3>
                          <hr className="w-4/12 h-1 bg-darkBlue "/>
                      </div>
                      <Comments comment={comments}/>
                      <CommentForm/>
                  </div>
                  <Footer/>
              </div>
          </Layout>
      </div>
  )
}
export default Course;