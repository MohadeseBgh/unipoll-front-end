import CommentProfile from "@/components/icons/CommentProfile";
import Report from "@/components/icons/Report";

const Comment = (props) => {
    return (
        <div className='flex flex-row bg-[#E0F1FD] min-h-36 w-full shadow-lg rounded-lg p-4' dir='rtl'>
            <div className='basis-2/12 flex items-center justify-center  '><CommentProfile/></div>
            <div className='basis-10/12 flex flex-col'>
                <div className='basis-1/4 flex flex-row justify-between'>
                    <div className='basis-2/8 flex flex-row'>
                        <div>
                            <h4 className='text-black font-bold text-xl'>{props.name}</h4>
                            <p className='text-[#4D4A4A] text-lg mt-1'>{props.term}</p>
                        </div>
                        <div className='bg-[#4D4A4A] flex items-center text-center text-sm font-bold h-6 px-5  rounded-xl mt-1 mr-2'>
                            <p>{props.role}</p>
                        </div>
                    </div>
                    <div className='basis-6/8 flex flex-row' >
                        <p className='text-[#4D4A4A] text-sm mt-1 ml-2'>{props.date}</p>
                        <Report/>
                    </div>
                </div>
                <div className='basis-3/4'>
                    <p className='text-darkBlue text-lg mt-1 ml-2'>{props.text}</p>
                </div>
            </div>

        </div>
    );

}
export default Comment;