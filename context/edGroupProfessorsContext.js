import {createContext, useState} from "react";

const defaultValue = undefined;
export const edGroupProfessorsContext = createContext(defaultValue);

const edGroupProfessorsProvider = (props) => {
    const [professor, setProfessor] = useState([{firstname:"ارش" ,lastname:"شفیعی",academicRank:"استاد یار" ,profilePhoto:"/images/temp.jpg"}]);

    return (
        <edGroupProfessorsContext.Provider value={[professor, setProfessor]}>
            {props.children}
        </edGroupProfessorsContext.Provider>
    );
}
export default edGroupProfessorsProvider;