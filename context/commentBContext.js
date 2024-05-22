import {createContext, useState} from "react";


const defaultValue = undefined;
export const commentBContext = createContext(defaultValue);

const commentBProvider = (props) => {
    const [bComments , setBComments]=useState([]);

    return (
        <commentBContext.Provider value={ [bComments , setBComments]}>
            {props.children}
        </commentBContext.Provider>
    );
}
export default commentBProvider;