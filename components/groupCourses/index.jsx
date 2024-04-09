const groupCourses = (props) => {
  return(
      <div className={` ${(props.index)%2===0 &&(props.index)%4===0 ? 'bg-white':'bg-[#D9EDFD]'} ${(props.index+1)%2===0 &&(props.index-1)%4===0 ? 'bg-white':'bg-[#D9EDFD]'} bg-opacity-45 border border-darkBlue border-opacity-20 text-darkBlue p-3 text-lg`}>
          {props.courseName}
      </div>
  )
}
export default groupCourses;