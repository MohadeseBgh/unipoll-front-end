import { useContext, useEffect, useState } from "react";
import { educationalGroupPIdContext } from "@/context/educationalGroupPIdContext";
import { edGroupDescpContext } from "@/context/edGroupDescpContext";
import { edGroupCoursesContext } from "@/context/edGroupCoursesContext";
import { edGroupProfessorsContext } from "@/context/edGroupProfessorsContext";
import { edGroupMAndAContext } from "@/context/edGroupM&AContext";
import EducationalGroups from "@/components/educationalGroups";

const HardwareGroup = () => {
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
                        const group = data.result[3];
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
        console.log(managerAndAssistant)
    }, []);

    return (
        <div>
            <EducationalGroups des={'فعالیت گروه معماری کامپیوتر دانشگاه اصفهان در سال ۱۳۶۷ با هدف تربیت نیروی انسانی متخصص در زمینه سخت افزار شروع شد و با پذیرش ۳۵ نفر دانشجوی دوره کارشناسی، آغاز به کار نمود. این گروه در سال ۱۳۷۶ اقدام به پذیرش اولین دوره دانشجویان در مقطع کارشناسی ارشد و در سال ۱۳۸۳ اقدام به پذیرش دانشجوی دکترا نمود. در سال ۱۳۹۱ گروه مهندسی معماری کامپیوتر به عنوان یک گروه مستقل تشکیل شد. این گروه هم اکنون دارای ۱۰۰ دانشجو در مقطع کارشناسی، ۳۰ دانشجو در مقطع کارشناسی ارشد و ۴۲ دانشجو در مقطع دکترا می‌باشد و تا کنون بیش از ۸۶۰ دانشجوی کارشناسی، ۲۲۰ کارشناسی ارشد و ۳۰ دکترا فارغ التحصیل داشته است. اساتید گروه مهندسی معماری کامپیوتر در مقطع تحصیلات تکمیلی روی مباحث عمیق معماری کامپیوتر، سیستمهای رایانشی-فیزیکی و اینترنت اشیاء، فناوری نانو، کامپیوترهای زیستی و امنیت سخت افزاری پژوهش‌های بنیادی و توسعه‌ای ارزشمندی انجام داده‌اند که نتایج آنها در مجلات و کنفرانس‌های معتبر علمی به چاپ رسیده است. در حال حاضر گروه مهندسی معماری کامپیوتر گروهی پویا بوده و با ترکیب اساتیدی با تجربه و جوان دارای ۷ عضو هیات علمی شامل چهار دانشیار و سه استادیار می‌باشد.'}/>
        </div>
    );
};

export default HardwareGroup;
