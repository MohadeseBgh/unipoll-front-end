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
            <EducationalGroups />
        </div>
    );
};

export default SoftwareGroup;
