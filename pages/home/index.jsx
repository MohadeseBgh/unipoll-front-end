import EducationalGroupsHome from "../../component/educationalGroupsHome";
const Home = () => {
  return(
      <div className='h-full w-screen flex flex-col bg-white '>
          <div id="whyUniPoll" className='text-black flex flex-row items-center'>
              <div className='basis-1/2 flex flex-col pl-72' dir='rtl'>
                  <h3 className='text-5xl font-bold text-darkBlue items-center mb-12'>چرا UniPoll ؟</h3>
                  <h3 className='text-3xl font-bold text-black items-center'> امکان نظر دهی به اساتید</h3>
                  <p className='text-[1.75rem]  text-black items-center mb-8'>با امتیاز دهی و ارسال نظر ،به اساتید در
                      بهبود عملکردشان کمک کنید.</p>
                  <h3 className='text-3xl font-bold text-black items-center'> تسهیل گزینش اساتید</h3>
                  <p className='text-[1.75rem]  text-black items-center mb-8'>سامانه به گونه ای طراحی شده است که
                      دانشجویان هنگام انتخاب واحد بهترین دروس را انتخاب کنند.</p>
                  <h3 className='text-3xl font-bold text-black items-center'> تسریع دست یابی به جزوه</h3>
                  <p className='text-[1.75rem]  text-black items-center mb-8'>شما به اسانی میتوانید جزوات درس مورد نظر خود را پیدا کنید.</p>
              </div>
              <div className='basis-1/2'><img src='/images/why.jpg' alt={'logo'}/></div>
          </div>
          <div id="educationalGroups " className="flex flex-col items-center justify-center my-24">
              <h3 className='text-5xl font-bold text-black items-center'>گروه های آموزشی دانشکده</h3>
              <div className=' flex flex-row items-center my-24 space-x-16 '>
                  <EducationalGroupsHome name='نرم افزار' text='گروه مهندسی نرم‌افزار دانشگاه اصفهان همواره به عنوان یکی از باسابقه‌ترین گروه‌های کامپیوتری در سطح کشور شناخته می‌شده است ....'/>
                  <EducationalGroupsHome name='هوش مصنوعی' text='گروه مهندسی نرم‌افزار دانشگاه اصفهان همواره به عنوان یکی از باسابقه‌ترین گروه‌های کامپیوتری در سطح کشور شناخته می‌شده است....'mt='mt-28'/>
                  <EducationalGroupsHome name='سخت افزار' text='گروه مهندسی نرم‌افزار دانشگاه اصفهان همواره به عنوان یکی از باسابقه‌ترین گروه‌های کامپیوتری در سطح کشور شناخته می‌شده است....'/>
                  <EducationalGroupsHome name='شبکه ' text='گروه مهندسی نرم‌افزار دانشگاه اصفهان همواره به عنوان یکی از باسابقه‌ترین گروه‌های کامپیوتری در سطح کشور شناخته می‌شده است ....' mt='mt-28'/>

              </div>
          </div>
</div>
);
};
export default Home;