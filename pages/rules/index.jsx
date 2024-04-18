import Header from "@/components/header";
import User from "@/components/icons/User";
import Footer from "@/components/footer";
import Layout from "@/layouts/layout";

const Rules = () => {
  return(
      <Layout>
      <div className='h-screen w-screen bg-white'>
          <div className={'h-28 w-full '}>
              {/*//header*/}
              <Header/>
              {/*//header*/}
          </div>
          <div className={'flex flex-col items-end py-10 pr-5 gap-3 '} dir='rtl'>
              <div className={'flex flex-row w-full mb-6'}>
                  <h1 className='font-bold text-2xl text-right text-darkBlue w-1/6'>   قوانین و مقررات سایت  </h1>
                  <div className={'h-1 w-5/6 bg-darkBlue mt-5'}></div>
              </div>

              <p className='text-darkBlue font-bold text-right mx-6'>لطفا قوانین و شرایط استفاده ذکر شده در این متن را پیش از شروع به استفاده از سایت با دقت مطالعه فرمایید . استفاده از وب‌سایت، ورود در وب‌سایت و به این معناست که شما قوانین و مقررات استفاده و خط مشی‌های مربوط به حریم خصوصی در یونیپول را متوجه شده و پذیرفته‌اید
              </p>
              <p className='text-right mx-8'>ورود در یونیپول برای تمامی افراد با عنوان دانشجو و استاد دانشکده مهندسی کامپیوتر دانشگاه اصفهان امکان پذیر است.
                  یونیپول به کاربران اطمینان می‌دهد که از اطلاعات هویتی آن‌ها هیچگونه سو استفاده ای نمی‌شود.
                  هرگونه برخورد غیر حرفه ای ، فحاشی و اخلال در قوانین سایت تخلف محسوب شده و یونیپول حق برخورد را برای خود محفوظ میدارد.
                  یونیپول حق برخورد با خاطیان و متخلفین را از طریق مسدودی موقت ، دایمی ، ارجاع به مراجع ذیصلاح قانونی و سایر روشها را برای خود محفوظ میدارد.
                  کاربران باید به قوانین و مقررات سایت توجه کرده و ابهامات را از طریق ایمیل و پشتیبانی  سایت برطرف کنند. عدم اطلاع از قوانین به معنای مستثنی شدن از قوانین نمی باشد.
                  کاربران نباید اطلاعات اشتباه و گمراه کننده در سایت یونیپول منتشر کنند در صورت مشاهده یونیپول حق برخورد را برای خود محفوظ میدارد
              </p>
          </div>
          <Footer/>
      </div>
      </Layout>

  )
}
export default Rules;