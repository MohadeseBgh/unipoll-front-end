import EducationalGroupsHome from "../../component/educationalGroupsHome";
const Home = () => {
  return(
      <div className='h-full w-screen flex flex-col bg-white'>
          <div id="whyUniPoll" className='text-black flex flex-row items-center '></div>
          <div id="educationalGroups " className="flex flex-col items-center justify-center my-24">
              <h3 className='text-5xl font-bold text-black items-center'>گروه های آموزشی دانشکده</h3>
              <div className=' flex flex-row items-center my-24 space-x-16 '>
                  <EducationalGroupsHome name='نرم افزار' text='گروه مهندسی نرم‌افزار دانشگاه اصفهان همواره به عنوان یکی از باسابقه‌ترین گروه‌های کامپیوتری در سطح کشور شناخته می‌شده است ....'/>
                  <EducationalGroupsHome name='هوش مصنوعی' text='گروه مهندسی نرم‌افزار دانشگاه اصفهان همواره به عنوان یکی از باسابقه‌ترین گروه‌های کامپیوتری در سطح کشور شناخته می‌شده است....'/>
                  <EducationalGroupsHome name='سخت افزار' text='گروه مهندسی نرم‌افزار دانشگاه اصفهان همواره به عنوان یکی از باسابقه‌ترین گروه‌های کامپیوتری در سطح کشور شناخته می‌شده است....'/>
                  <EducationalGroupsHome name='شبکه ' text='گروه مهندسی نرم‌افزار دانشگاه اصفهان همواره به عنوان یکی از باسابقه‌ترین گروه‌های کامپیوتری در سطح کشور شناخته می‌شده است ....'/>

              </div>
          </div>
</div>
);
};
export default Home;