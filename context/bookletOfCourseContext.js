import {createContext, useState} from "react";


const defaultValue = undefined;
export const bookletOfCourseContext = createContext(defaultValue);

const bookletOfCourseProvider = (props) => {
    const [booklets , setBooklets]=useState([]);

    return (
        <bookletOfCourseContext.Provider value={ [booklets , setBooklets]}>
            {props.children}
        </bookletOfCourseContext.Provider>
    );
}
export default bookletOfCourseProvider;