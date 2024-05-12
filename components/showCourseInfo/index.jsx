const ShowCourseInfo = (props) => {
  return(
      <div className={'flex flex-col gap-4 p-3 w-full'}>
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
          <div className={'flex flex-row gap-1 w-full'}>
              <p className={'text-lg font-bold text-black'}>توضیحات:</p>
              {!props.editButton && <p className={'text-lg text-black'}>{props.info}</p>}
              {props.editButton && <textarea  className={'resize-none w-full h-20 text-black rounded-xl p-2 bg-[#EEEEEE] text-md ' +
                  'focus:outline-none focus:ring-0 shadow-inner'}>{props.info}</textarea>}
          </div>
      </div>
  )
}
export default ShowCourseInfo;