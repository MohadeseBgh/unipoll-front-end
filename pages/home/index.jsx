import EducationalGroupsHome from "../../components/educationalGroupsHome";
import Search from "@/components/icons/Search";
import CarouselBooklet from "@/components/carouselBooklet";
import TopBooklet from "@/components/topBooklet";
import {useState} from  'react';
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
  return(
      <div className='h-full w-screen flex flex-col bg-white gap-y-16 '>
          <div id="searchBar " className="flex flex-col items-center justify-items-center " dir="rtl">
              <div
                  className={"min-h-[35rem]  w-screen bg-[url('/images/searchbar.png')] bg-no-repeat bg-cover justify-items-center "}>
                  <div className='pr-56 my-20'>
                      <img src='/images/logo3.png' alt={'logo'}/>
                      <h2 className='text-3xl  text-white'>فضایی برای کسب اطلاعات در مورد دروس و اساتید دانشکده</h2>
                  </div>
                  <form className='px-24 flex flex-row'>
                      <div
                          className='basis-1/4  flex flex-row h-14 w-80 rounded-3xl bg-white text-black  items-center justify-items-center '
                          dir="rtl">
                          <h5 className='text-xl font-bold text-black px-8'>جستجو:</h5>
                          <div>
                              <label className="inline-flex items-center">
                                  <input type="radio" value="lessons"
                                         className="form-radio h-5 w-5 text-blue-600 ml-1 "
                                         name="options" required/>
                                  <span className="ml-2 text-xl text-black">دروس</span>
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
                          className='basis-3/4  flex flex-row h-14 w-80 rounded-3xl bg-white text-black  items-center justify-items-center mr-16'
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
          <div id="whyUniPoll" className=' w-screen text-black flex flex-row items-center'>
              <div className='basis-1/2 flex flex-col pl-72 ' dir='rtl'>
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
          <div id="educationalGroups " className=" w-screen flex flex-col items-center justify-center ">
              <h3 className='text-5xl font-bold text-black items-center '>گروه های آموزشی دانشکده</h3>
              <div className=' flex flex-row items-center my-24 space-x-16 '>
                  <EducationalGroupsHome name='نرم افزار'
                                         text='گروه مهندسی نرم‌افزار دانشگاه اصفهان همواره به عنوان یکی از باسابقه‌ترین گروه‌های کامپیوتری در سطح کشور شناخته می‌شده است ....'/>
                  <EducationalGroupsHome name='هوش مصنوعی'
                                         text='گروه مهندسی نرم‌افزار دانشگاه اصفهان همواره به عنوان یکی از باسابقه‌ترین گروه‌های کامپیوتری در سطح کشور شناخته می‌شده است....'
                                         mt='mt-28'/>
                  <EducationalGroupsHome name='سخت افزار'
                                         text='گروه مهندسی نرم‌افزار دانشگاه اصفهان همواره به عنوان یکی از باسابقه‌ترین گروه‌های کامپیوتری در سطح کشور شناخته می‌شده است....'/>
                  <EducationalGroupsHome name='شبکه '
                                         text='گروه مهندسی نرم‌افزار دانشگاه اصفهان همواره به عنوان یکی از باسابقه‌ترین گروه‌های کامپیوتری در سطح کشور شناخته می‌شده است ....'
                                         mt='mt-28'/>

              </div>
          </div>
          <div id="topBooklet" className="flex flex-col " dir="rtl">
              <div
                  className={"min-h-[29rem]  w-screen bg-[#E2F4FC] justify-items-center gap-y-16 "}>
                  <div className="flex flex-row items-center justify-between" dir="rtl">
                      <hr className="my-12 w-4/12 h-1.5 border-t-0 bg-darkBlue "/>
                      <h3 className='text-5xl  font-bold text-black '>جزوه های برتر</h3>
                      <hr className="my-12 w-4/12 h-1.5 border-t-0 bg-darkBlue "/>
                  </div>
                  <TopBooklet booklets={topBooklet}/>


              </div>
          </div>

      </div>
  );
};
export default Home;