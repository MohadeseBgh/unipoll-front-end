import Index from "../../components/educationalGroupsHome";
import Search from "@/components/icons/Search";

import {useState} from  'react';
import TopBooklet from "@/components/topBooklet";
import EducationalGroupsHome from "../../components/educationalGroupsHome";
import Header from "@/components/header";
import TopCourse from "@/components/topCourse";
import LessonsSearch from "@/components/lessonsSearch";
const Home = () => {
    const [topBooklet, setTopBooklet] = useState([{courseName:"مبانی برنامه نویسی" ,professorName:"رضا رمضانی",semesterInfo:"پاییز 1400" ,like:20},
        {courseName:"مبانی برنامه نویسی" ,professorName:"رضا رمضانی",semesterInfo:"پاییز 1400" ,like:420},
        {courseName:"مبانی برنامه نویسی" ,professorName:"رضا رمضانی",semesterInfo:"پاییز 1400" ,like:320},
        {courseName:"مبانی برنامه نویسی" ,professorName:"رضا رمضانی",semesterInfo:"پاییز 1400" ,like:320},
        {courseName:"مبانی برنامه نویسی" ,professorName:"رضا رمضانی",semesterInfo:"پاییز 1400" ,like:320},
        {courseName:"مبانی برنامه نویسی" ,professorName:"رضا رمضانی",semesterInfo:"پاییز 1400" ,like:320},
        {courseName:"مبانی برنامه نویسی" ,professorName:"رضا رمضانی",semesterInfo:"پاییز 1400" ,like:320},
        {courseName:"مبانی برنامه نویسی" ,professorName:"رضا رمضانی",semesterInfo:"پاییز 1400" ,like:320},
        {courseName:"مبانی برنامه نویسی" ,professorName:"رضا رمضانی",semesterInfo:"پاییز 1400" ,like:320},
        {courseName:"مبانی برنامه نویسی" ,professorName:"رضا رمضانی",semesterInfo:"پاییز 1400" ,like:320},
        {courseName:"مبانی برنامه نویسی" ,professorName:"رضا رمضانی",semesterInfo:"پاییز 1400" ,like:320},
        {courseName:"مبانی برنامه نویسی" ,professorName:"رضا رمضانی",semesterInfo:"پاییز 1400" ,like:320},
        {courseName:"مبانی برنامه نویسی" ,professorName:"رضا رمضانی",semesterInfo:"پاییز 1400" ,like:320},
        {courseName:"مبانی برنامه نویسی" ,professorName:"رضا رمضانی",semesterInfo:"پاییز 1400" ,like:320},
        {courseName:"مبانی برنامه نویسی" ,professorName:"رضا رمضانی",semesterInfo:"پاییز 1400" ,like:320}]);
    const [topCourse, setTopCourse] = useState([ {courseName:"مبانی برنامه نویسی" ,professorName:"رضا رمضانی" ,rate:5},
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
    ]);
  return(
      <div className='h-screen w-screen flex flex-col bg-white gap-y-4 overflow-x-hidden'>
          <div className={'h-28 w-full '}>
              {/*//header*/}
              <Header/>
              {/*//header*/}
          </div>
          <div id="searchBar " className="   flex flex-col items-center justify-items-center min-h-[35rem] mb-24 laptop:w-screen mobile:w-auto"
               dir="rtl">
              <div
                  className={"min-h-[35rem] w-screen  bg-[url('/images/searchbar.png')] bg-no-repeat bg-cover justify-items-center "}>
                  <div className='laptop:pr-56 my-20 mobile:pr-4'>
                      <img src='/images/logo3.png' alt={'logo'}/>
                      <h2 className='laptop:text-3xl mobile:text-2xl text-white'>فضایی برای کسب اطلاعات در مورد دروس و
                          اساتید دانشکده</h2>
                  </div>
                  <form
                      className='laptop:px-24 mobile:px-3 laptop:flex-row mobile:flex flex-col items-center justify-items-center'>
                      <div
                          className='basis-1/4  flex flex-row h-14 w-80 rounded-3xl bg-white text-black  items-center justify-items-center '
                          dir="rtl">
                          <h5 className='text-xl font-bold text-black px-8 '>جستجو:</h5>
                          <div>
                              <label className="inline-flex items-center">
                                  <input type="radio" value="lessons"
                                         className="form-radio h-5 w-5 text-blue-600 ml-1 "
                                         name="options" required/>
                                  <span className="ml-2  text-xl text-black">دروس</span>
                              </label>

                              <label className="inline-flex items-center">
                                  <input type="radio" value="professor"
                                         className="form-radio h-5 w-5 text-blue-600 checked:bg-yellow-400 ml-1 mr-2"
                                         name="options" required/>
                                  <span className="ml-2 text-xl text-black">اساتید</span>
                              </label>
                          </div>
                      </div>
                      <div
                          className='laptop:basis-3/4  flex flex-row h-14 w-80 rounded-3xl bg-white text-black  items-center justify-items-center laptop:mr-16 mobile:mr-0 laptop:mt-0 mobile:mt-5'
                          dir="rtl">
                          <input type="search" id="default-search" className="block h-14 w-11/12 p-4 ps-10  text-black-900 rounded-3xl  text-black text-xl placeholder:text-[#8B8C8D]
                             focus:outline-none  focus:ring-0 "
                                 placeholder=" جستجو را شروع کن ....."/>
                          <button type="submit"
                                  className="px-4">
                              <Search/>
                          </button>
                      </div>


                  </form>

              </div>
          </div>
          <div id="whyUniPoll" className=' w-screen text-black laptop:flex-row  mobile: flex flex-col items-center mb-24'>
              <div className='basis-1/2 flex flex-col laptop:pl-72 mobile:pl-0 ' dir='rtl'>
                  <h3 className='text-5xl font-bold text-darkBlue  mb-12'>چرا UniPoll ؟</h3>
                  <h3 className='text-3xl font-bold text-black '> امکان نظر دهی به اساتید</h3>
                  <p className='text-[1.75rem]  text-black items-center mb-8'>با امتیاز دهی و ارسال نظر ،به اساتید در
                      بهبود عملکردشان کمک کنید.</p>
                  <h3 className='text-3xl font-bold text-black '> تسهیل گزینش اساتید</h3>
                  <p className='text-[1.75rem]  text-black  mb-8'>سامانه به گونه ای طراحی شده است که
                      دانشجویان هنگام انتخاب واحد بهترین دروس را انتخاب کنند.</p>
                  <h3 className='text-3xl font-bold text-black '> تسریع دست یابی به جزوه</h3>
                  <p className='text-[1.75rem]  text-black mb-8'>شما به اسانی میتوانید جزوات درس مورد نظر
                      خود را پیدا کنید.</p>
              </div>
              <div className='flex basis-1/2'><img src='/images/why.jpg' alt={'why UniPoll ?'}/></div>
          </div>
          <div id="topCourse" className="flex flex-col mb-24 " dir="rtl">
              <div
                  className={"min-h-[29rem]  w-screen bg-[#F2FBFF] justify-items-center gap-y-16 "}>
                  <div className="flex flex-row items-center justify-between" dir="rtl">
                      <hr className="my-12 laptop:w-4/12 table:w-0 h-1.5 border-t-0 bg-darkBlue "/>
                      <h3 className='text-5xl  font-bold text-black '>دروس پر طرفدار ارائه شده</h3>
                      <hr className="my-12 laptop:w-4/12 table:w-0 h-1.5 border-t-0 bg-darkBlue "/>
                  </div>
                  <TopCourse courses={topCourse}/>


              </div>
          </div>
          <div id="educationalGroups " className=" w-screen flex flex-col items-center justify-center mb-24 ">
              <h3 className='laptop:text-5xl tablet:text-[2rem]  font-bold text-black items-center '>گروه های آموزشی
                  دانشکده</h3>
              <div
                  className=' grid gap-12  laptop:grid-cols-4  tablet:grid-cols-2 mobile:grid-cols-1items-center my-24  '>
                  <EducationalGroupsHome name='نرم افزار'
                                         text='گروه مهندسی نرم‌افزار دانشگاه اصفهان همواره به عنوان یکی از باسابقه‌ترین گروه‌های کامپیوتری در سطح کشور شناخته می‌شده است ....'/>
                  <EducationalGroupsHome name='هوش مصنوعی'
                                         text='گروه مهندسی نرم‌افزار دانشگاه اصفهان همواره به عنوان یکی از باسابقه‌ترین گروه‌های کامپیوتری در سطح کشور شناخته می‌شده است....'
                                         mt='laptop:mt-28'/>
                  <EducationalGroupsHome name='سخت افزار'
                                         text='گروه مهندسی نرم‌افزار دانشگاه اصفهان همواره به عنوان یکی از باسابقه‌ترین گروه‌های کامپیوتری در سطح کشور شناخته می‌شده است....'/>
                  <EducationalGroupsHome name='شبکه '
                                         text='گروه مهندسی نرم‌افزار دانشگاه اصفهان همواره به عنوان یکی از باسابقه‌ترین گروه‌های کامپیوتری در سطح کشور شناخته می‌شده است ....'
                                         mt='laptop:mt-28'/>

              </div>
          </div>
          <div id="topBooklet" className="flex flex-col mb-24 " dir="rtl">
              <div
                  className={"min-h-[29rem]  w-screen bg-[#F2FBFF] justify-items-center gap-y-16 "}>
                  <div className="flex flex-row items-center justify-between" dir="rtl">
                      <hr className="my-12 laptop:w-4/12 table:w-0 h-1.5 border-t-0 bg-darkBlue "/>
                      <h3 className='text-5xl  font-bold text-black '>جزوه های برتر</h3>
                      <hr className="my-12 laptop:w-4/12 table:w-0 h-1.5 border-t-0 bg-darkBlue "/>
                  </div>
                  <TopBooklet booklets={topBooklet}/>


              </div>
            <LessonsSearch rate={3}/>
          </div>

      </div>
  );
};
export default Home;
