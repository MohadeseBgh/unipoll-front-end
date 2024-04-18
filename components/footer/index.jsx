import Polygon from "@/components/icons/polygon";
import Phone from "@/components/icons/Phone";
import BluePhone from "@/components/icons/BluePhone";
import BlueTelegram from "@/components/icons/BlueTelegram";
import Mail from "@/components/icons/Mail";
import Mail2 from "@/components/icons/Mail2";


const Footer = () => {
  return(

      <div className={'h-80 w-full bg-gradient-to-r from-[#2C83BF] to-[#102C51] flex flex-row p-5 gap-10'} dir={"rtl"}>
          <div className={'w-5/12 h-full flex flex-col justify-center items-center'} >
              <div className={''}>
                  <img src={'/images/logo3.png'} alt={'logo'}/>
              </div>
                <p className={'text-white text-lg laptop:text-xl text-center'}>یونیپول سامانه انلاین جامع نظردهی اساتید دانشگاهی و اشتراک گذاری جزوات به صورت متمرکز است .
                  هدف از ساخت این سامانه  کمک به دانشجویان
                  و اساتید در روند های اموزشی است
                </p>
          </div>
        <div className={'w-4/12 h-full flex flex-col justify-center gap-5'}>
            <p className={'font-bold text-xl laptop:text-2xl text-white'} >
              پیوند های مهم
            </p>
            <div className={'flex flex-col gap-5'}>
                  <div className={'flex flex-row'}>
                      <div className={'pl-2 pt-2'}>
                          <Polygon/>
                      </div>
                      <a href={'#'} className={'pd-3 text-white block text-lg laptop: text-xl'}>خانه</a>
                  </div>
                  <div className={'flex flex-row '}>
                      <div className={'pl-2 pt-2'}>
                          <Polygon/>
                      </div>
                      <a href={'#'} className={' block text-white text-lg laptop: text-xl'}>گروه آموزشی</a>
                  </div>
                  <div className={'flex flex-row items-center '}>
                      <div className={'pl-2 pt-2'}>
                          <Polygon/>
                      </div>


                      <a href={'#'} className={' block text-white text-lg laptop: text-xl  '}>جزوه های من</a>
                  </div>
                  <div className={'flex flex-row '}>
                      <div className={'pl-2 pt-2'}>
                          <Polygon/>
                      </div>
                      <a href={'#'} className={'text-white  block text-lg laptop: text-xl'}>انجمن ها</a>
                  </div>
            </div>
        </div>
        <div className={'w-4/12 h-full flex flex-col gap-5 '}>
          <p className={'font-bold text-2xl text-white laptop: text-xl'} >
              ارتباط با ما
          </p>
          <div className={'flex flex-col gap-8'}>
              <div className={'flex flex-row'}>
                  <div className={'justify-center pt-1 pl-3'}>
                      <BluePhone h={'25'} w={'25'}  />
                  </div>
                  <a href={'#'} className={'text-white block text-lg laptop: text-xl'}>تلفن: 091300000</a>
              </div>
              <div className={'flex flex-row'}>
                  <div className={'justify-center pt-1 pl-3'}>
                      <BlueTelegram h={'25'} w={'25'}  />
                  </div>
                  <a href={'#'} className={'text-white block text-lg laptop: text-xl'}> تلگرام:@unipoll</a>
              </div>
              <div className={'flex flex-row'}>
                  <div className={'justify-center pt-2 pl-2'}>
                      <Mail2/>
                  </div>
                  <a href={'#'} className={'text-white block text-lg laptop: text-xl'}>ایمیل: unipoll@gmail.com</a>
              </div>
          </div>
        </div>
           {/*واقعا برای این هیچ ایده ای ندارم*/}
        {/*<span className={''} >
            <p className={'pt-[22.5rem] pl-[50rem] inline-block '}>
               تمامی حقوق متعلق به دانشگاه اصفهان است
            </p>
        </span>*/}
  </div>

  );
};
export default Footer;