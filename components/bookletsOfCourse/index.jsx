import Comment from "@/components/comment";
import {useContext, useEffect, useRef, useState} from "react";
import {coursePIDContext} from "@/context/coursePIDContext";
import Close from "@/components/icons/Close";
import Close2 from "@/components/icons/Close2";
import BookletOfCourse from "@/components/bookletOfCourse";

const BookletsOfCourse = () => {
    const [booklets, setBooklets] = useState([]);
    const [ref, setRef] = useState([]);
    const [totalComments, setTotalComments] = useState([]);
    const [selectedCourse , setSelectedCourse]=useContext(coursePIDContext);
    const [filterList, setFilterList] = useState([]);
    const [filter, setFilter] = useState({publicId:""});
    useEffect(() => {
        const fetchData = async () => {
            try {
                const jwtToken=localStorage.getItem('jwtToken');
                const response = await fetch(`http://localhost:8090/unipoll/v1/instructor-course/booklets/${selectedCourse.publicId}` ,{
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                });
                if (response.ok) {
                    console.log("OK booklet");
                    const data=await response.json();
                    const result=data.result;
                    setBooklets(result)
                    console.log(result)
                } else {
                    console.log("not ok booklet")
                }

            }catch (e) {
                console.error("we are GETTING ERROR", e)
            }
        };

        fetchData();
    }, []);
    return (
        <div className="relative bg-white p-6 flex flex-col gap-16 mx-40  my-12">
            {booklets.map(
                (p, index) => <BookletOfCourse key={index} courseName={p.courseName}
                                       text={p.text}
                                               lessonPr={[p.instructorFirstname," ",p.instructorLastname]} term={p.term} writer={[p.uploaderFirstname," ",p.uploaderLastname]} like={p.likeNumber}/>
            )}
        </div>
    );

}
export default BookletsOfCourse;