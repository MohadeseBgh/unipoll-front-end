import {createContext, useState} from "react";

const defaultValue = undefined;
export const bookletPIDContext = createContext(defaultValue);

const bookletPIDProvider = (props) => {
    const [selectedBooklet , setSelectedBooklet]=useState({publicId:"0"});

    return (
        <bookletPIDContext.Provider value={ [selectedBooklet , setSelectedBooklet]}>
            {props.children}
        </bookletPIDContext.Provider>
    );
}
export default bookletPIDProvider;