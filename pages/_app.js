import "@/styles/globals.css";
import EducationalGroupPIdProvider from "@/context/educationalGroupPIdContext";
import EdGroupDescpContext from "@/context/edGroupDescpContext";
import EdGroupCoursesContext from "@/context/edGroupCoursesContext";
import EdGroupProfessorsContext from "@/context/edGroupProfessorsContext";
import EdGroupMAContext from "@/context/edGroupM&AContext";
import GetProfessorPIDContext from "@/context/getProfessorPIDContext";
import CoursePIDContext from "@/context/coursePIDContext";
import BookletPIDContext from "@/context/bookletPIDContext";
import CommentC from "@/context/commentCContext";
import CommentCProvider from "@/context/commentCContext";
import BookletOfCourseProvider from "@/context/bookletOfCourseContext";
import CommentBProvider from "@/context/commentBContext";
import FaveritebookltProvider from "@/context/faveritebooklet";
import Topbooklet from "@/context/topbooklet";
import UploadedBooklet from "@/context/uploadedBooklet";


export default function App({ Component, pageProps }) {

  return (
      <>
        <EducationalGroupPIdProvider>
            <EdGroupDescpContext>
                <EdGroupCoursesContext>
                    <EdGroupProfessorsContext>
                        <EdGroupMAContext>
                            <GetProfessorPIDContext>
                                <CoursePIDContext>
                                    <BookletPIDContext>
                                        <CommentCProvider>
                                            <BookletOfCourseProvider>
                                                <CommentBProvider>
                                                    <FaveritebookltProvider>
                                                        <Topbooklet>
                                                            <UploadedBooklet>
                                                                <Component {...pageProps} />

                                                            </UploadedBooklet>
                                                        </Topbooklet>
                                                    </FaveritebookltProvider>
                                                </CommentBProvider>
                                            </BookletOfCourseProvider>
                                        </CommentCProvider>

                                    </BookletPIDContext>
                                </CoursePIDContext>
                            </GetProfessorPIDContext>
                        </EdGroupMAContext>
                    </EdGroupProfessorsContext>
                </EdGroupCoursesContext>
            </EdGroupDescpContext>
        </EducationalGroupPIdProvider>
      </>

  );
}
