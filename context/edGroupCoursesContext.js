import {createContext, useState} from "react";

const defaultValue = undefined;
export const edGroupCoursesContext = createContext(defaultValue);

const edGroupCoursesProvider = (props) => {
    const [courses , setCourses]=useState([{publicId:'',courseName:''}])

    return (
        <edGroupCoursesContext.Provider value={[courses , setCourses]}>
            {props.children}
        </edGroupCoursesContext.Provider>
    );
}
export default edGroupCoursesProvider;