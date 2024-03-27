import User from "@/component/icons/User";

const Header = () => {

    const onClickHandler=()=>{

    }
  return(
      <div className={'flex flex-row h-full w-full '}>
          <div className={'flex flex-col h-full w-1/12 justify-center items-center gap-2'}>
              <User/>
              <p className='text-xs'>نام کاربری</p>
          </div>
          <div className={'h-full w-1/12 flex items-center justify-start'}>
              <button className=' border border-blue2 text-blue2 xl:text-xs text-[0.65rem] rounded-3xl xl:px-4 py-3 px-2 font-bold hover:bg-blue2 hover:opacity-60 hover:text-white
                      transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300
                      '>
                  جزوه های من
              </button>
          </div>
          <div className={'h-full w-8/12 flex justify-center items-center'}>
              <div className=' flex flex-row-reverse h-3/6 w-full bg-blue1 rounded-full grid grid-cols-5 '>
                  <div className='flex justify-center items-center'>
                      <button className='text-black text-sm font-bold hover:text- hover:text-blue2
                               transition ease-in-out hover:-translate-y hover:scale-110 duration-100
                              '
                      onClick={onClickHandler}
                      >
                          خانه
                      </button>
                  </div>
                  <div className='flex justify-center items-center'>
                      <button className='text-black text-sm font-bold hover:text- hover:text-blue2
                               transition ease-in-out hover:-translate-y hover:scale-110 duration-100
                              '>                                  گروه های آموزشی
                      </button>
                  </div>
                  <div className='flex justify-center items-center'>
                      <button className='text-black text-sm font-bold hover:text- hover:text-blue2
                               transition ease-in-out hover:-translate-y hover:scale-110 duration-100
                              '>                                  انجمن ها
                      </button>
                  </div>
                  <div className='flex justify-center items-center'>
                      <button className='text-black text-sm font-bold hover:text- hover:text-blue2
                               transition ease-in-out hover:-translate-y hover:scale-110 duration-100
                              '>
                          درباره ما
                      </button>
                  </div>
                  <div className='flex justify-center items-center'>
                      <button className='text-black text-sm font-bold hover:text- hover:text-blue2
                               transition ease-in-out hover:-translate-y hover:scale-110 duration-100
                              '>
                          ارتباط با ما
                      </button>
                  </div>
              </div>
          </div>
          <div className={'flex h-full w-2/12 justify-center items-center'}>
              <img src='/images/logo2.png' alt={'logo'}/>
          </div>
      </div>
  );
}
export default Header;