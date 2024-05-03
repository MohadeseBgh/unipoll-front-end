import Footer from "@/components/footer";
import Layout from "@/layouts/layout";

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
                  <div id={'send booklet'} className={'bg-pink-200'}>
                      send booklet
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