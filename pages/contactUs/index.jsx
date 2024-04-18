import Header from "@/components/header";
import BlueTelegram from "@/components/icons/BlueTelegram";
import BluePhone from "@/components/icons/BluePhone";
import {useState} from "react";
import Layout from "@/layouts/layout";
import Footer from "@/components/footer";

const ContactUs = () => {
  const [formValue, setFormValue] = useState({firstname: "", lastname: "",email:"",text:""});
  const formSubmitHandler = async (e) =>{
    e.preventDefault();
    console.log(formValue)
    try {
      const response = await fetch("http://localhost:8090/unipoll/v1/comment", {
        method: "POST",
        body: JSON.stringify(formValue), headers: {"Content-Type": "application/json"}
      });
      if (response.ok) {
        console.log("OK");
        document.getElementById('text').value="";
        document.getElementById('email').value="";
        document.getElementById('lastName').value="";
        document.getElementById('firstName').value="";
        document.getElementById("ok").innerHTML = "پیام شما با موفقیت ارسال شد";
        setTimeout(function(){
          document.getElementById("ok").innerHTML = '';
        }, 3000);

      } else {
        document.getElementById("ok").innerHTML = "متاسفانه پیام ارسال نشد.دوباره امتحان کنید.";
        setTimeout(function(){
          document.getElementById("ok").innerHTML = '';
        }, 3000);
        console.log("not ok")
      }
    }catch (e) {
      console.error("we are GETTING ERROR", e)
    }
  }
  return (
      <Layout>


      <div className={"h-screen w-screen flex flex-col bg-white gap-y-4 overflow-x-hidden items-center"}>
        <h1 className='z-0 text-5xl font-bold text-darkBlue mt-16'>راه های ارتباطی با ما</h1>
        <div className=" flex flex-col  gap-y-4  items-center my-32">
          <hr className=" laptop:w-full table:w-0 h-1.5 border-t-0 bg-darkBlue "/>
          <div id="contacUs"
               className='w-screen text-black laptop:flex-row  mobile: flex flex-col items-center justify-items-center max-h-96'>
            <div className='basis-1/2 flex laptop:pl-72 mobile:pl-0 items-center'>
              <div
                  className={"z-10 min-h-[34rem] rounded-3xl min-w-[40rem] shadow-md bg-[#E2F4FC] justify-items-center text-center px-6"}>
                <form className="space-y-12" dir='rtl' onSubmit={formSubmitHandler}>
                  <h3 className='text-3xl font-bold text-black mt-8'>پذیرای نظرات شما هستیم
                    :)</h3>
                  <div className="space-y-6">
                    <div className=' flex flex-row  items-center gap-x-4'>
                      <input type="text " id="firstName" className="block h-12 w-1/2 p-4 ps-10  text-black-900 rounded-3xl  bg-[#DFE8EF] text-lg placeholder:text-[#8B8C8D]
                             focus:outline-none  focus:ring-0 shadow-inner" placeholder="نام" required
                             onChange={(event) => {
                               setFormValue({...formValue, firstname: event.target.value})
                             }}/>
                      <input type="text " id="lastName" className="block h-12 w-1/2 p-4 ps-10  text-black-900 rounded-3xl  bg-[#DFE8EF] text-lg placeholder:text-[#8B8C8D]
                             focus:outline-none  focus:ring-0 shadow-inner" placeholder="نام خانوادگی" required
                             onChange={(event) => {
                               setFormValue({...formValue, lastname: event.target.value})
                             }}/>
                    </div>
                    <input type="email" id="email" className="block h-12 w-full p-4 ps-10  text-black-900 rounded-3xl  bg-[#DFE8EF] text-lg placeholder:text-[#8B8C8D]
                             focus:outline-none  focus:ring-0 shadow-inner" placeholder="ایمیل" required
                           onChange={(event) => {
                             setFormValue({...formValue, email: event.target.value})
                           }}/>
                    <textarea id="text" className="block h-36 w-full p-4 ps-10  text-black-900 rounded-3xl  bg-[#DFE8EF] text-lg placeholder:text-[#8B8C8D]
                             focus:outline-none  focus:ring-0 shadow-inner text-start"
                              placeholder="پیام خود را برای ما بنویسید...." required onChange={(event) => {
                      setFormValue({...formValue, text: event.target.value})
                    }}/>
                  </div>
                  <div>
                    <button type="submit"
                            className="px-4 bg-darkBlue text-white font-extralight rounded-[1.2rem] w-48 h-12 text-xl   hover:drop-shadow-xl hover:shadow-teal-950 ">ارسال
                    </button>
                    <h3 id="ok" className='text-sm font-bold  text-darkBlue mt-2'></h3>
                  </div>

                </form>
              </div>
            </div>
            <div className=' flex flex-col  basis-1/2 items-center' dir='rtl'>
              <p className='text-xl  text-black text-center font-medium mb-8 mx-32'>جهت ارتباط با ما شامل ارسال
                نظر،انتقاد،سوال و درخواست پشتیبانی میتوانید از یکی از راه های زیر استفاده کنید با از طریق فرم
                با ما در ارتباط باشید.</p>
              <div className='flex flex-row gap-x-24'>
                <div className='flex flex-col items-center'>
                  <div className='border-2 p-8 border-darkBlue shadow-md rounded-[100%]'><BlueTelegram w="81.56" h="60.33"/></div>
                  <h3 className='text-xl  text-darkBlue text-center font-bold mt-4  '>telegram</h3>
                  <a className='text-xl  text-black text-center font-medium ' dir="ltr">@UniPoll</a>
                </div>
                <div className='flex flex-col items-center'>
                  <div className='border-2 p-8 border-darkBlue shadow-md rounded-[100%]'><BluePhone w="75" h="60.33"/></div>
                  <h3 className='text-xl  text-darkBlue text-center font-bold mt-4 '>phone</h3>
                  <a className='text-xl  text-black text-center font-medium ' dir="ltr">0313123456</a>
                </div>

              </div>
            </div>
          </div>
          <hr className="z-0 laptop:w-full table:w-0 h-1.5 border-t-0 bg-darkBlue "/>
        </div>
        <Footer/>
      </div>
      </Layout>
  )
}
export default ContactUs;