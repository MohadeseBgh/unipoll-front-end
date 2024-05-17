import ErorrIcon from "@/components/icons/ErorrIcon";
import OkIcon from "@/components/icons/okIcon";

const OkAlert = (props) => {
    return (<div
                 className="transition duration-1000 ease-in-out opacity-100 flex flex-row mt-2 bg-green-100 items-center px-6 py-2 text-sm border-t-2 rounded-b shadow-sm border-green-500 ">
            <OkIcon/>
            <div className=" mr-3" dir='rtl'>
                <div className="font-bold  text-right text-sm text-black ">{props.title}</div>
                <div className="w-full text-sm text-gray-900  mt-1">{props.text}
                </div>
            </div>
        </div>
    )
}
export default OkAlert;