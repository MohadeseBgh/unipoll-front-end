import {createContext, useState} from "react";

const defaultValue = undefined;
export const edGroupMAndAContext = createContext(defaultValue);

const edGroupMAndAProvider = (props) => {
    const [managerAndAssistant, setManagerAndAssistant] = useState([
        {type:"manager",firstName:"رضا" ,lastName:"رمضانی",academicRank:"استاد یار" ,profilePhoto:"/images/temp.jpg",phd:"دکترای رشته مهندسی کامپیوتر" ,phoneNumber:"۳۷۹۳۵۶۲۱",email:"r.ramezani[at]eng.ui.ac.ir",websiteLink:"https://eng.ui.ac.ir/r.ramezani"},
        {type:"assistant",firstName:"ارش" ,lastName:"شفیعی",academicRank:"استاد یار" ,profilePhoto:"/images/temp.jpg",phd:"دکترای رشته مهندسی کامپیوتر" ,phoneNumber:"۳۷۹۳۵۶۲۱",email:"r.ramezani[at]eng.ui.ac.ir",websiteLink:"https://eng.ui.ac.ir/r.ramezani"}]);

    return (
        <edGroupMAndAContext.Provider value={[managerAndAssistant, setManagerAndAssistant]}>
            {props.children}
        </edGroupMAndAContext.Provider>
    );
}
export default edGroupMAndAProvider;