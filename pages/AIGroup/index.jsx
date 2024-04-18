import { useContext, useEffect, useState } from "react";
import { educationalGroupPIdContext } from "@/context/educationalGroupPIdContext";
import { edGroupDescpContext } from "@/context/edGroupDescpContext";
import { edGroupCoursesContext } from "@/context/edGroupCoursesContext";
import { edGroupProfessorsContext } from "@/context/edGroupProfessorsContext";
import { edGroupMAndAContext } from "@/context/edGroupM&AContext";
import EducationalGroups from "@/components/educationalGroups";

const AIGroup = () => {
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
                        const group = data.result[1];
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
            <EducationalGroups des={'هوش مصنوعی شاخه‌­ای از علوم و مهندسی کامپیوتر بوده که هدف آن طراحی و ساخت ماشین‌ها و برنامه‌­های هوشمند است. می­‌توان هوش را قابلیت یک عامل در دستیابی به اهداف در جهان پیرامون پس از ادراک محیط دانست. گستره کاربرد این دانش و اهمیت آن در فعالیت­‌های متنوع بشری از زندگی روزمره گرفته تا پژوهش­‌ها و کاوش­‌های عمیق و چالش برانگیز علمی روز به روز در حال افزایش است. با هدف تربیت نیروی انسانی متخصص در زمینه هوش مصنوعی و احاطه هرچه جامع­تر بر شاخه‌­ها و زمینه­‌های مختلف مطرح در این علم، دوره کارشناسی ­ارشد هوش مصنوعی در سال ۱۳۸۳ در دو شیوه‌ی «آموزشی/پژوهشی»‌ و «آموزش محور» در دو گرایش تخصصی «سیستم­‌های هوشمند» و «مهندسی دانش» تشکیل شد. این گروه اولین بار در سال ۱۳۸۳ اقدام به پذیرش دانشجوی دوره کارشناسی ارشد در رشته مهندسی کامپیوتر گرایش هوش مصنوعی نمود. همچنین این گروه در سال ۱۳۸۷ اقدام به پذیرش اولین دوره دانشجو در مقطع دکتری مهندسی کامپیوتر در گرایش هوش مصنوعی نمود.'}/>
        </div>
    );
};

export default AIGroup;
