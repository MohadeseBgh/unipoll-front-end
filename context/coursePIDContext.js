import {createContext, useState} from "react";

const defaultValue = undefined;
export const coursePIDContext = createContext(defaultValue);

const coursePIDProvider = (props) => {
    const [selectedCourse , setSelectedCourse]=useState({publicId:"0"})

    return (
        <coursePIDContext.Provider value={ [selectedCourse , setSelectedCourse]}>
            {props.children}
        </coursePIDContext.Provider>
    );
}
export default coursePIDProvider;