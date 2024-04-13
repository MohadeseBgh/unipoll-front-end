import Header from "@/components/header";
import HeaderFooter from "@/layouts/headerFooter";
import Footer from "@/components/footer";

function Logo() {
    return null;
}

const AboutUs = () => {
  return(
          <HeaderFooter>
              <div className={'h-screen w-screen flex flex-col items-end py-10 pr-5 gap-5 bg-white'} dir='rtl'>
                  <div className={'flex flex-row w-full mb-6 gap-12'}>
                      <div className={'h-1 w-5/12 bg-darkBlue mt-5'}></div>
                      <img src={'/images/logo2.png'}/>
                      <div className={'h-1 w-5/12 bg-darkBlue mt-5'}></div>
                  </div>
                  <div className={' bg-opacity-15 bg-[#1FAAEA] shadow-2xl  rounded-3xl m-4 '}>
                      <h1 className='font-bold mb-8 mt-4 text-2xl text-center self-center text-darkBlue w-12/12 '>دربـــاره مــــــا </h1>

                      <p className='text-black mb-12 text-xl text-right px-8'>یونیپول سامانه انلاین جامع نظردهی اساتید
                          دانشگاهی و اشتراک گذاری جزوات به صورت متمرکز است. این سامانه حاصل تلاش یک تیم شش نفره از دانشکده کامیپوتر دانشگاه اصفهان است. به منظور ایجاد سامانه ای جامع، دردسترس، به روز و شفاف ما یونیپول را طراحی و آماده کرده ایم. امیدوارم این سامانه برای دانشجویان مفید واقع شود.
                          <p className={'text-black font-bold mb-12 mt-10 text-2xl text-right'}>
                              تیم طراحی
                              <div className={'h-0.5 w-5/12 bg-darkBlue mt-5 mb-40'}></div>
                          </p>
                      </p>
                  </div>

              </div>
              <Footer/>
          </HeaderFooter>

  )
}
export default AboutUs;