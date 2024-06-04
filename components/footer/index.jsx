import Polygon from "@/components/icons/polygon";
import Phone from "@/components/icons/Phone";
import BluePhone from "@/components/icons/BluePhone";
import BlueTelegram from "@/components/icons/BlueTelegram";
import Mail from "@/components/icons/Mail";
import Mail2 from "@/components/icons/Mail2";


const Footer = () => {
  return(
      <div>
          <div className={'h-80 w-full bg-gradient-to-r from-[#2A6ABE] to-[#102C51] flex flex-row p-5 gap-10'}
               dir={"rtl"}>
              <div className={'w-5/12 h-full flex flex-col justify-center items-center'}>
                  <div className={''}>
                      <img src={'/images/logo3.png'} className={'h-16'} alt={'logo'}/>
                  </div>
                  <p className={'text-white text-lg  text-center px-14'}>یونیپول سامانه انلاین جامع نظردهی اساتید
                      دانشگاهی و اشتراک گذاری جزوات به صورت متمرکز است .
                      هدف از ساخت این سامانه کمک به دانشجویان
                      و اساتید در روند های اموزشی است
                  </p>
              </div>
              <div className={'w-4/12 h-full flex flex-col justify-center gap-5'}>
                  <p className={'font-bold text-xl laptop:text-xl text-white'}>
                      پیوند های مهم
                  </p>
                  <div className={'flex flex-col gap-5'}>
                      <div className={'flex flex-row'}>
                          <div className={'pl-2 pt-2'}>
                              <Polygon/>
                          </div>
                          <a href={'#'} className={'pd-3 text-white block text-lg '}>خانه</a>
                      </div>
                      <div className={'flex flex-row '}>
                          <div className={'pl-2 pt-2'}>
                              <Polygon/>
                          </div>
                          <a href={'#'} className={' block text-white text-lg '}>گروه آموزشی</a>
                      </div>
                      <div className={'flex flex-row items-center '}>
                          <div className={'pl-2 pt-2'}>
                              <Polygon/>
                          </div>


                          <a href={'#'} className={' block text-white text-lg '}>جزوه های من</a>
                      </div>
                      <div className={'flex flex-row '}>
                          <div className={'pl-2 pt-2'}>
                              <Polygon/>
                          </div>
                          <a href={'#'} className={'text-white  block text-lg '}>انجمن ها</a>
                      </div>
                  </div>
              </div>
              <div className={'w-4/12 h-full flex flex-col gap-5 justify-center '}>
                  <p className={'font-bold text-xl text-white pb-3'}>
                      ارتباط با ما
                  </p>
                  <div className={'flex flex-col gap-8'}>
                      <div className={'flex flex-row'}>
                          <div className={'justify-center pt-1 pl-3'}>
                              <BluePhone h={'25'} w={'25'}/>
                          </div>
                          <a href={'#'} className={'text-white block text-lg '}>تلفن: 091300000</a>
                      </div>
                      <div className={'flex flex-row'}>
                          <div className={'justify-center pt-1 pl-3'}>
                              <BlueTelegram h={'25'} w={'25'}/>
                          </div>
                          <a href={'#'} className={'text-white block text-lg '}> تلگرام:@unipoll</a>
                      </div>
                      <div className={'flex flex-row'}>
                          <div className={'justify-center pt-2 pl-2'}>
                              <Mail2/>
                          </div>
                          <a href={'#'} className={'text-white block text-lg '}>ایمیل: unipoll@gmail.com</a>
                      </div>
                  </div>
              </div>
          </div>
          <div className={'bg-darkBlue h-6 text-center'}>
              <p className={'text-sm'}>
                  تمامی حقوق مادی معنوی این سایت متعلق به دانشگاه اصفهان است
              </p>
          </div>
      </div>

  );
};
export default Footer;