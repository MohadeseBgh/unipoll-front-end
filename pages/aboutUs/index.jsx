import Header from "@/components/header";
import HeaderFooter from "@/layouts/headerFooter";
import Footer from "@/components/footer";

function Logo() {
    return null;
}

const AboutUs = () => {
  return(
          <HeaderFooter>
              <div className={'h-screen w-screen flex flex-col items-end pt-16 mb-32 pr-5 gap-4 bg-white'} dir='rtl'>
                  <div className={'flex flex-row w-full mb-6 gap-12'}>
                      <div className={'h-1 w-5/12 bg-darkBlue mt-5'}></div>
                      <img src={'/images/logo2.png'}/>
                      <div className={'h-1 w-5/12 bg-darkBlue mt-5'}></div>
                  </div>
                  <div className={' bg-opacity-15 bg-[#1FAAEA] shadow-2xl  rounded-3xl mx-8   '}>
                      <h1 className='font-bold mb-8 mt-4 text-lg laptop: text-2xl text-center self-center text-darkBlue w-12/12 '>دربـــاره مــــــا </h1>

                      <p className='text-black mb-12 text-lg laptop: text-xl text-right px-8'>یونیپول سامانه انلاین جامع نظردهی اساتید
                          دانشگاهی و اشتراک گذاری جزوات به صورت متمرکز است. این سامانه حاصل تلاش یک تیم شش نفره از دانشکده کامیپوتر دانشگاه اصفهان است. به منظور ایجاد سامانه ای جامع، دردسترس، به روز و شفاف ما یونیپول را طراحی و آماده کرده ایم. امیدوارم این سامانه برای دانشجویان مفید واقع شود.
                          <p className={'text-black font-bold mb-12 mt-10 text-lg laptop: text-2xl text-right'}>
                              تیم طراحی
                              <div className={'h-0.5 w-5/12 bg-darkBlue mt-5 mb-4'}></div>
                          </p>
                      </p>
                      <div className={'flex flex-row m-2 '}>
                          <div className={' basis-2/12 px-4 mb-12 m-1 shadow-xl rounded-3xl text-center justify-center' }>
                              <img src={'images/kimm.png'} className={' rounded-full size-32 mx-auto'} />
                              <p className={'font-bold text-black mt-4 text-xl'}>Kimia Arjmand</p>
                              <a href={'#'}> Linkdin </a>
                          </div>
                          <div className={' basis-2/12 mb-12 shadow-xl m-1 px-4 rounded-3xl text-center'}>
                              <img src={'images/mary1.png'} className={' rounded-full size-32  mx-auto '} />
                              <p className={'font-bold text-black mt-4  text-xl'}>Maryam Hosseinpoor</p>
                              <a href={'#'}> Linkdin </a>
                          </div>
                          <div className={' basis-2/12 mb-12 shadow-xl m-1 px-4 rounded-3xl text-center'}>
                              <img src={'images/nas1.png'} className={' rounded-full size-32  mx-auto '} />
                              <p className={'font-bold text-black mt-4  text-xl'}>Nastaran Sarkhosh</p>
                              <a href={'#'}> Linkdin </a>
                          </div>
                          <div className={' basis-2/12 mb-12 shadow-xl m-1 px-4 rounded-3xl text-center'}>
                              <img src={'images/mo.png'} className={'rounded-full size-32 mx-auto'} />
                              <p className={'font-bold text-black mt-4 text-xl'}>Mohadese Baghbani</p>
                              <a href={'#'}> Linkdin </a>
                          </div>
                          <div className={' basis-2/12 mb-12  shadow-xl m-1 px-4 rounded-3xl text-center'}>
                              <img src={'images/image (18).png'} className={'rounded-full size-32 mx-auto'} />
                              <p className={'font-bold text-black mt-4 text-xl'}>Hossein Aghaii</p>
                              <a href={'#'}> Linkdin </a>
                          </div>
                          <div className={' basis-2/12 mb-12 shadow-xl m-1 px-4 rounded-3xl text-center '}>
                              <img src={'images/image (10).png'} className={'rounded-full size-32 mx-auto'} />
                              <p className={'font-bold text-black mt-4 text-xl'}>Saeed Ranjbar Bafqi</p>
                              <a href={'#'}> Linkdin </a>
                          </div>
                      </div>
                  </div>


              </div>
              <Footer/>
          </HeaderFooter>

  )
}
export default AboutUs;