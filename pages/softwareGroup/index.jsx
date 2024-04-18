import { useContext, useEffect } from "react";
import { educationalGroupPIdContext } from "@/context/educationalGroupPIdContext";
import { edGroupDescpContext } from "@/context/edGroupDescpContext";
import { edGroupCoursesContext } from "@/context/edGroupCoursesContext";
import { edGroupProfessorsContext } from "@/context/edGroupProfessorsContext";
import { edGroupMAndAContext } from "@/context/edGroupM&AContext";
import EducationalGroups from "@/components/educationalGroups";

const SoftwareGroup = () => {
    const [educationalGroupPId, setEducationalGroupPId] = useContext(educationalGroupPIdContext);
    const [edGroupdescription, setEdGroupdescription] = useContext(edGroupDescpContext);
    const [courses, setCourses] = useContext(edGroupCoursesContext);
    const [professor, setProfessor] = useContext(edGroupProfessorsContext);
    const [managerAndAssistant, setManagerAndAssistant] = useContext(edGroupMAndAContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:8090/unipoll/v1/academic-department");
                if (response.ok) {
                    const data = await response.json();
                    setEducationalGroupPId(data.result);

                    if (data.result.length > 0) {
                        const group = data.result[0];
                        const groupResponse = await fetch(`http://localhost:8090/unipoll/v1/academic-department/${group.publicId}`);
                        const coursesResponse = await fetch(`http://localhost:8090/unipoll/v1/academic-department/${group.publicId}/courses`);
                        const professorsResponse = await fetch(`http://localhost:8090/unipoll/v1/academic-department/${group.publicId}/instructors`);
                        const managerAndAssistantResponse = await fetch(`http://localhost:8090/unipoll/v1/academic-department/${group.publicId}/manger-and-assistant`);

                        if (groupResponse.ok) {
                            const groupData = await groupResponse.json();
                            setEdGroupdescription(groupData.result);
                        }
                        if (coursesResponse.ok) {
                            const coursesData = await coursesResponse.json();
                            setCourses(coursesData.result);
                        }
                        if (professorsResponse.ok) {
                            const professorsData = await professorsResponse.json();
                            setProfessor(professorsData.result);
                        }
                        if (managerAndAssistantResponse.ok) {
                            const managerAndAssistantData = await managerAndAssistantResponse.json();
                            setManagerAndAssistant(managerAndAssistantData.result);
                        }
                    }
                } else {
                    console.log("Network response was not ok");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <EducationalGroups des={'گروه مهندسی نرم‌افزار دانشگاه اصفهان همواره به عنوان یکی از باسابقه‌ترین گروه‌های کامپیوتری در سطح کشور شناخته می‌شده است. سابقه‌ی این گروه به سال‌های ۱۳۵۰ الی ۱۳۶۴ بازمی‌گردد که کامپیوتر به عنوان یکی از گرایش‌های رشته‌ی ریاضی در دانشگاه اصفهان موجود و از وجود استادان به نام و شناخته ‌شده‌ای بهره می‌برد. در سال ۱۳۶۴ برای اولین بار رشته‌ی کامپیوتر به طور مستقل از طریق کنکور سراسری دانشجو پذیرفت و در سال ۱۳۶۷ دو رشته‌ی مهندسی کامپیوتر با گرایش‌های نرم افزار و سخت‌افزار در این دانشگاه راه‌اندازی گردید. در سال ۱۳۹۱، گروه مهندسی نرم‌افزار به عنوان یک گروه مستقل در دانشکده‌ی مهندسی کامپیوتر در دانشگاه اصفهان شکل گرفت.'}/>
        </div>
    );
};

export default SoftwareGroup;
