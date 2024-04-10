const Footer = () => {
  return(

      <div className={'h-96 w-full bg-gradient-to-r from-cyan-900 to-blue-900  flex flex-row '}>
          <div className={' text-2xl  text-white basis-5/12  flex flex-col pt-8'} >
              <div className={'flex pr-12     '}>
                  <img src={'/images/logo3.png'}/>
              </div>
          <div className={'p-0 8 text-center'}>
              <p className={'p-3 mr-2 '}>یونیپول سامانه انلاین جامع نظردهی اساتید دانشگاهی و اشتراک گذاری جزوات به صورت متمرکز است .
                  هدف از ساخت این سامانه  کمک به دانشجویان
                  و اساتید در روند های اموزشی است  </p>

          </div>
          </div>
        <div className={' text-2xl  text-white basis-4/12  flex flex-col pt-8 pr-16'}>
          <p className={'font-bold text-2xl '} >پیوند های مهم</p>
              <div className={'mt-6 mr-3'}>
                  <div className={'flex flex-row'}>
                      <img className={'size-4 mt-3 ml-2  '} src={'/favicon.ico'}/>
                      <a href={'#'} className={'pd-3 block'}>خانه</a>
                  </div>
                  <div className={'flex flex-row pt-6'}>
                      <img className={'size-4 mt-3 ml-2  '} src={'/favicon.ico'}/>
                      <a href={'#'} className={' block '}>گروه آموزشی</a>
                  </div>
                  <div className={'flex flex-row pt-6'}>
                      <img className={'size-4 mt-3 ml-2 '} src={'/favicon.ico'}/>
                      <a href={'#'} className={' block '}>جزوه های من</a>
                  </div>
                  <div className={'flex flex-row pt-6'}>
                      <img className={'size-4 mt-3 ml-2  '} src={'/favicon.ico'}/>
                      <a href={'#'} className={' block'}>انجمن ها</a>
                  </div>

                <a  className={'p-3 block '}></a>
                <a  className={'p-3 block '}></a>
                <a  className={'p-3 block '}></a>
              </div>

        </div>
        <div className={' text-2xl  text-white basis-4/12  flex flex-col pt-8'}>
          <p className={'font-bold text-2xl '} >ارتباط با ما </p>
          <div className={'pt-8'}>
              <div className={'flex flex-row pt-6'}>
                  <img className={'size-4 mt-3 ml-2  '} src={'/favicon.ico'}/>
                  <a href={'#'} className={' block'}>تلفن: 091300000</a>
              </div>
              <div className={'flex flex-row pt-6'}>
                  <img className={'size-4 mt-3 ml-2  '} src={'/favicon.ico'}/>
                  <a href={'#'} className={' block'}> تلگرام:@unipoll</a>
              </div>
              <div className={'flex flex-row pt-6'}>
                  <img className={'size-4 mt-3 ml-2  '} src={'/favicon.ico'}/>
                  <a href={'#'} className={' block'}>ایمیل: unipoll@gmail.com</a>
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