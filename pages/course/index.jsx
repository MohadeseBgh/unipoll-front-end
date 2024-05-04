import Footer from "@/components/footer";
import Layout from "@/layouts/layout";
import UploadBooklet from "@/components/uploadBooklet";

const Course = () => {

  return(
      <div>
          <Layout>
              <div className={'h-screen w-screen bg-white overflow-x-hidden pt-10 flex flex-col items-center'}>
                  <div id={'course information'} className={'w-full h-80 bg-blue2 opacity-50'}>

                  </div>
                  <div id={'booklets'} className={'w-full bg-darkBlue'}>
                        booklet
                  </div>
                  <div id={'send booklet'} className={'my-10 flex flex-col justify-center items-center gap-4'}>
                      <p className={'text-darkBlue text-2xl '}>
                          (; جزوه خودتون رو بفرستید برامون
                      </p>
                      <UploadBooklet/>
                  </div>
                  <div id={'comments'}>

                  </div>
                  <Footer/>
              </div>
          </Layout>
      </div>
  )
}
export default Course;