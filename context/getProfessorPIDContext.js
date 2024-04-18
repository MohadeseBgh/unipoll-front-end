import {createContext, useState} from "react";

const defaultValue = undefined;
export const getProfessorPIDContext = createContext(defaultValue);

const GetProfessorPIDProvider = (props) => {
    const [professorPId , setProfessorPId]=useState({publicId:''})

    return (
        <getProfessorPIDContext.Provider value={[professorPId , setProfessorPId]}>
            {props.children}
        </getProfessorPIDContext.Provider>
    );
}
export default GetProfessorPIDProvider;