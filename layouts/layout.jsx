import Header from "@/components/header";

const Layout = (props ) => {
  return(
      <div className={' w-screen h-screen flex flex-col bg-white '}>
          <div className={'  w-full h-24'}>
              <Header/>
          </div>
          {props.children}
      </div>
  )
}
export default Layout;