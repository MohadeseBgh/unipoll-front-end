import {createContext, useState} from "react";


const defaultValue = undefined;
export const commentCContext = createContext(defaultValue);

const commentCProvider = (props) => {
    const [comments , setComments]=useState([]);

    return (
        <commentCContext.Provider value={ [comments , setComments]}>
            {props.children}
        </commentCContext.Provider>
    );
}
export default commentCProvider;