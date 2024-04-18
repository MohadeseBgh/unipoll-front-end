import { useContext, useEffect, useState } from "react";
import { educationalGroupPIdContext } from "@/context/educationalGroupPIdContext";
import { edGroupDescpContext } from "@/context/edGroupDescpContext";
import { edGroupCoursesContext } from "@/context/edGroupCoursesContext";
import { edGroupProfessorsContext } from "@/context/edGroupProfessorsContext";
import { edGroupMAndAContext } from "@/context/edGroupM&AContext";
import EducationalGroups from "@/components/educationalGroups";

const NetworkGroup = () => {
    const [educationalGroupPId , setEducationalGroupPId]=useContext(educationalGroupPIdContext);
    const [edGroupdescription, setEdGroupdescription]=useContext(edGroupDescpContext );
    const [courses , setCourses]=useContext(edGroupCoursesContext);
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
                        const group = data.result[2];
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
            <EducationalGroups des={'گروه مهندسی فنآوری اطلاعات (IT) در سال ۱۳۸۳ با هدف تربیت نیروی انسانی متخصص در زمینه فناوری اطلاعات تشکیل شد و با پذیرش ۳۵ نفر دانشجوی دوره کارشناسی، آغاز به کار نمود. این گروه در سال ۱۳۹۰ اقدام به پذیرش اولین دوره دانشجویان در مقطع کارشناسی ارشد گرایش شبکه های کامپیوتری نمود و از سال تحصیلی ۹۲-۹۱ نیز مقطع کارشناسی ارشد را در گرایش­های امنیت اطلاعات و تجارت الکترونیکی دائر کرده است. همچنین گروه مهندسی فناوری اطلاعات از بهمن ماه سال ۱۳۹۲ اقدام به پذیرش دانشجوی دکترا در گرایش امنیت اطلاعات نمود.'}/>
        </div>
    );
};

export default NetworkGroup;
