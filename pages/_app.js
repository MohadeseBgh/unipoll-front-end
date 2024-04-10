import "@/styles/globals.css";
import EducationalGroupPIdProvider from "@/context/educationalGroupPIdContext";
import EdGroupDescpContext from "@/context/edGroupDescpContext";
import EdGroupCoursesContext from "@/context/edGroupCoursesContext";
import EdGroupProfessorsContext from "@/context/edGroupProfessorsContext";
import EdGroupMAContext from "@/context/edGroupM&AContext";

export default function App({ Component, pageProps }) {
  return (
      <>
        <EducationalGroupPIdProvider>
            <EdGroupDescpContext>
                <EdGroupCoursesContext>
                    <EdGroupProfessorsContext>
                        <EdGroupMAContext>
                            <Component {...pageProps} />
                        </EdGroupMAContext>
                    </EdGroupProfessorsContext>
                </EdGroupCoursesContext>
            </EdGroupDescpContext>
        </EducationalGroupPIdProvider>
      </>

  );
}
