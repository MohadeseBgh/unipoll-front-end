const ShowBookletInfo = (props) => {
  return(
      <div className={'flex flex-col gap-4 p-3'}>
          <div className={'flex flex-row gap-1 items-center'}>
              <p className={'text-lg font-bold text-black'}>انتشار دهنده:</p>
              <p className={'text-lg text-black'}>{props.writerName}</p>
          </div>
          <div className={'flex flex-row gap-1 items-center'}>
              <p className={'text-lg font-bold text-black'}>درس مربوطه:</p>
              <p className={'text-lg text-black'}>{props.courseName}</p>
          </div>
          <div className={'flex flex-row gap-1 items-center'}>
              <p className={'text-lg font-bold text-black'}>استاد درس:</p>
              <p className={'text-lg text-black'}>{props.courseProfessor}</p>
          </div>
          <div className={'flex flex-row gap-1 items-center'}>
              <p className={'text-lg font-bold text-black'}>ترم:</p>
              <p className={'text-lg text-black'}>{props.term}</p>
          </div>
          <div className={'flex flex-row gap-1 '}>
              <p className={'text-lg font-bold text-black'}>توضیحات:</p>
              <p className={'text-lg text-black'}>{props.info}</p>
          </div>
      </div>
  )
}
export default ShowBookletInfo;