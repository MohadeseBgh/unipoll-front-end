import {createContext, useState} from "react";

const defaultValue = undefined;
export const edGroupDescpContext = createContext(defaultValue);

const edGroupdescriptionProvider = (props) => {
    const [edGroupdescription, setEdGroupdescription]=useState({name:'',description:''})

    return (
        <edGroupDescpContext.Provider value={[edGroupdescription, setEdGroupdescription]}>
            {props.children}
        </edGroupDescpContext.Provider>
    );
}
export default edGroupdescriptionProvider;