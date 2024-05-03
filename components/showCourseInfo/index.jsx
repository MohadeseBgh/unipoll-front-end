const ShowCourseInfo = (props) => {
  return(
      <div className={'flex flex-col gap-4 '}>
          <div className={'flex flex-row gap-1 items-center'}>
              <p className={'text-lg font-bold text-black'}>نام درس:</p>
              <p className={'text-lg text-black'}>{props.courseName}</p>
          </div>
          <div className={'flex flex-row gap-1 items-center'}>
              <p className={'text-lg font-bold text-black'}>استاد درس:</p>
              <p className={'text-lg text-black'}>{props.courseProfessor}</p>
          </div>
          <div className={'flex flex-row gap-1 items-center'}>
              <p className={'text-lg font-bold text-black'}>تعداد واحد:</p>
              <p className={'text-lg text-black'}>{props.vahed}</p>
          </div>
          <div className={'flex flex-row gap-1 '}>
              <p className={'text-lg font-bold text-black'}>توضیحات:</p>
              <p className={'text-lg text-black'}>{props.info}</p>
          </div>
      </div>
  )
}
export default ShowCourseInfo;