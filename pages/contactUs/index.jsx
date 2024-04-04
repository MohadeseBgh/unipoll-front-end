import Header from "@/components/header";

const ContactUs = () => {
  return (
      <div className={"h-screen w-screen flex flex-col bg-white gap-y-4 overflow-x-hidden items-center"}>
        <div className={'w-full h-24'}>
          <Header/>
        </div>
        <h1 className='z-0 text-5xl font-bold text-darkBlue mt-16'>راه های ارتباطی با ما</h1>
        <div className=" flex flex-col  gap-y-4  items-center my-32">
          <hr className=" laptop:w-full table:w-0 h-1.5 border-t-0 bg-darkBlue "/>
          <div id="contacUs"
               className='w-screen text-black laptop:flex-row  mobile: flex flex-col items-center justify-items-center max-h-96'>
            <div className='basis-1/2 flex laptop:pl-72 mobile:pl-0 items-center'>
              <div
                  className={"z-10 min-h-[34rem] rounded-3xl min-w-[40rem] shadow-md bg-[#E2F4FC] justify-items-center text-center px-6"}>
                <form className="space-y-12" dir='rtl'>
                  <h3 className='text-3xl font-bold text-black mt-8'>پذیرای نظرات شما هستیم
                    :)</h3>
                  <div className="space-y-6">
                    <div className=' flex flex-row  items-center gap-x-4'>
                      <input type="text " id="firstName" className="block h-12 w-1/2 p-4 ps-10  text-black-900 rounded-3xl  bg-[#DFE8EF] text-lg placeholder:text-[#8B8C8D]
                             focus:outline-none  focus:ring-0 shadow-inner" placeholder="نام" required/>
                      <input type="text " id="lastName" className="block h-12 w-1/2 p-4 ps-10  text-black-900 rounded-3xl  bg-[#DFE8EF] text-lg placeholder:text-[#8B8C8D]
                             focus:outline-none  focus:ring-0 shadow-inner" placeholder="نام خانوادگی" required/>
                    </div>
                    <input type="email" id="email" className="block h-12 w-full p-4 ps-10  text-black-900 rounded-3xl  bg-[#DFE8EF] text-lg placeholder:text-[#8B8C8D]
                             focus:outline-none  focus:ring-0 shadow-inner" placeholder="ایمیل" required/>
                    <textarea id="text" className="block h-36 w-full p-4 ps-10  text-black-900 rounded-3xl  bg-[#DFE8EF] text-lg placeholder:text-[#8B8C8D]
                             focus:outline-none  focus:ring-0 shadow-inner text-start"
                              placeholder="پیام خود را برای ما بنویسید...." required/>
                  </div>
                  <button type="submit"
                          className="px-4 bg-darkBlue text-white font-extralight rounded-[1.2rem] w-48 h-12 text-xl  hover:bg-blue-950 ">ارسال
                  </button>
                </form>
              </div>
            </div>
            <div className=' flex flex-col  basis-1/2 items-center' dir='rtl'>
              <p className='text-xl  text-black text-center font-bold mb-8 mx-32'>جهت ارتباط با ما شامل ارسال
                نظر،انتقاد،سوال و درخواست پشتیبانی میتوانید از یکی از راه های زیر استفاده کنید با از طریق فرم
                با ما در ارتباط باشید.</p>
            </div>
          </div>
          <hr className="z-0 laptop:w-full table:w-0 h-1.5 border-t-0 bg-darkBlue "/>
        </div>
      </div>
  )
}
export default ContactUs;