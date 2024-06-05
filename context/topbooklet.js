import {createContext, useState} from "react";


const defaultValue = undefined;
export const topbooklt = createContext(defaultValue);

const topbookltProvider = (props) => {
    const [topBooklt , setTopBooklt]=useState([]);

    return (
        <topbooklt.Provider value={ [topBooklt , setTopBooklt]}>
            {props.children}
        </topbooklt.Provider>
    );
}
export default topbookltProvider;