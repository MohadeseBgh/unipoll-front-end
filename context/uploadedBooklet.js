import {createContext, useState} from "react";


const defaultValue = undefined;
export const uploadedBooklet = createContext(defaultValue);

const uploadedBookletProvider = (props) => {
    const [uploadedBooklt , setUploadedBooklt]=useState([]);

    return (
        <uploadedBooklet.Provider value={ [uploadedBooklt , setUploadedBooklt]}>
            {props.children}
        </uploadedBooklet.Provider>
    );
}
export default uploadedBookletProvider;