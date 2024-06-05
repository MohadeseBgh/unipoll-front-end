import {createContext, useState} from "react";


const defaultValue = undefined;
export const faveritebooklt = createContext(defaultValue);

const faveritebookltProvider = (props) => {
    const [feveriteBooklt , setFeveriteBooklt]=useState([]);

    return (
        <faveritebooklt.Provider value={ [feveriteBooklt , setFeveriteBooklt]}>
            {props.children}
        </faveritebooklt.Provider>
    );
}
export default faveritebookltProvider;