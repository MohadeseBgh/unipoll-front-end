import Header from "@/components/header";
import HeaderFooter from "@/layouts/headerFooter";
import Footer from "@/components/footer";

const AboutUs = () => {
  return(
          <HeaderFooter>
              <div className={'h-screen w-screen flex flex-col items-end py-10 pr-5 gap-5 bg-white'} dir='rtl'>
                  <div className={'flex flex-row w-full mb-6 gap-12'}>
                      <h1 className='font-bold text-2xl text-darkBlue w-1/12 '>دربـــاره مــــــا </h1>
                      <div className={'h-1 w-11/12 bg-darkBlue mt-5'}></div>
                  </div>

                  <p className='text-darkBlue text-3xl font-bold text-center self-center '>
                      UNIPOLL
                  </p>
                  <p className='text-black text-xl text-right px-8'>یونیپول سامانه انلاین جامع نظردهی اساتید
                      دانشگاهی و اشتراک گذاری جزوات به صورت متمرکز است و میخواهیم اطلاعات را به اشتراک بگذاریم
                      یونیپول سامانه انلاین جامع نظردهی اساتید دانشگاهی و اشتراک گذاری جزوات به صورت متمرکز است
                      و میخواهیم اطلاعات را به اشتراک بگذاریم یونیپول سامانه انلاین جامع نظردهی اساتید دانشگاهی
                      و اشتراک گذاری جزوات به صورت متمرکز است و میخواهیم اطلاعات را به اشتراک بگذاریم
                  </p>
              </div>
              <Footer/>
          </HeaderFooter>

  )
}
export default AboutUs;