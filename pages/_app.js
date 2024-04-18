import "@/styles/globals.css";
import EducationalGroupPIdProvider from "@/context/educationalGroupPIdContext";
import EdGroupDescpContext from "@/context/edGroupDescpContext";
import EdGroupCoursesContext from "@/context/edGroupCoursesContext";
import EdGroupProfessorsContext from "@/context/edGroupProfessorsContext";
import EdGroupMAContext from "@/context/edGroupM&AContext";
import GetProfessorPIDContext from "@/context/getProfessorPIDContext";

export default function App({ Component, pageProps }) {
  return (
      <>
        <EducationalGroupPIdProvider>
            <EdGroupDescpContext>
                <EdGroupCoursesContext>
                    <EdGroupProfessorsContext>
                        <EdGroupMAContext>
                            <GetProfessorPIDContext>
                                <Component {...pageProps} />
                            </GetProfessorPIDContext>
                        </EdGroupMAContext>
                    </EdGroupProfessorsContext>
                </EdGroupCoursesContext>
            </EdGroupDescpContext>
        </EducationalGroupPIdProvider>
      </>

  );
}
