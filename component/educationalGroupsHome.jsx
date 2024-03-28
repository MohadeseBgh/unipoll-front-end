const EducationalGroupsHome = (props) => {
    return (<div className={`flex basis-3/12  max-h-80 rounded-xl max-w-72 border-4 shadow-md border-darkBlue text-center ${props.mt}`}>
        <div
            className="flex flex-col  min-h-80 rounded-xl min-w-72 border-4 shadow-md border-[#2C83BF] mt-2 ml-4"
            dir="rtl">
            <h2 className="text-3xl font-bold text-darkBlue my-4 ">{props.name}</h2>
            <p className='text-xl text-black mr-12 ml-10 '>{props.text}</p>
        </div>
    </div>)
}
export default EducationalGroupsHome;
