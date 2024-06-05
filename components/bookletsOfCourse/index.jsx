import Comment from "@/components/comment";
import {useContext, useEffect, useRef, useState} from "react";
import {coursePIDContext} from "@/context/coursePIDContext";
import Close from "@/components/icons/Close";
import Close2 from "@/components/icons/Close2";
import BookletOfCourse from "@/components/bookletOfCourse";
import {bookletOfCourseContext} from "@/context/bookletOfCourseContext";

const BookletsOfCourse = () => {
    const [booklets, setBooklets] = useContext(bookletOfCourseContext);
    const [ref, setRef] = useState([]);
    const [totalComments, setTotalComments] = useState([]);
    const [selectedCourse , setSelectedCourse]=useContext(coursePIDContext);
    const [filterList, setFilterList] = useState([]);
    const [filter, setFilter] = useState({publicId:""});
    useEffect(() => {
        const fetchData = async () => {
                let jwtToken=localStorage.getItem('jwtToken');
                try {
                    if (jwtToken.length > 3) {
                        const response1 = await fetch(`http://localhost:8090/unipoll/v1/instructor-course/booklets/${selectedCourse.publicId}`,{
                            method: 'GET',
                            headers: {
                                "Content-Type": "application/json",
                                'Authorization': jwtToken
                            },
                        });

                        if (response1.ok) {
                            console.log("booklet info")
                            const data = await response1.json();
                            setBooklets(data.result);

                        } else {
                            console.log("Network response was not ok");
                        }
                    } else {
                        const response2 = await fetch(`http://localhost:8090/unipoll/v1/instructor-course/booklets/${selectedCourse.publicId}`, {
                            method: 'GET',
                            headers: {
                                "Content-Type": "application/json",

                            },
                        });

                        if (response2.ok) {
                            console.log("booklet info")
                            const data = await response2.json();
                            setBooklets(data.result);
                        } else {
                            console.log("Network response was not ok");
                        }
                    }
                } catch (error) {
                    console.error("Error fetching data:", error);
                }


        };

        fetchData();
    }, []);
    return (
        <div className="relative bg-white p-6 flex flex-col gap-16 mx-40  my-12">
            {booklets.map(
                (p, index) => <BookletOfCourse key={index} courseName={p.courseName}
                                       text={p.text}
                                               lessonPr={[p.instructorFirstname," ",p.instructorLastname]} term={p.term} writer={[p.uploaderFirstname," ",p.uploaderLastname]}  like={p.likeNumber} publicId={p.publicId}
                                               isLiked={p.isLiked} isSaved={p.isSaved} publicIdCourse={selectedCourse.publicId}/>
            )}
        </div>
    );

}
export default BookletsOfCourse;