import {createContext, useState} from "react";

const defaultValue = undefined;
export const educationalGroupPIdContext = createContext(defaultValue);

const EducationalGroupPIdProvider = (props) => {
    const [educationalGroupPId , setEducationalGroupPId]=useState([{publicId:'',name:'',description:''}])

    return (
        <educationalGroupPIdContext.Provider value={[educationalGroupPId , setEducationalGroupPId]}>
            {props.children}
        </educationalGroupPIdContext.Provider>
    );
}
export default EducationalGroupPIdProvider;