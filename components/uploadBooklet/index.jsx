import Upload from "@/components/icons/Upload";
import {useContext, useState} from "react";
import {coursePIDContext} from "@/context/coursePIDContext";

const UploadBooklet = () => {
    const [selectedFile, setSelectedFile] = useState();
    const [formValue, setFormValue] = useState({termPublicId:'712ad8c2-5946-4459-82f5-2b528aa804db',text:"a"});
    const [selectedCourse , setSelectedCourse]=useContext(coursePIDContext);

    const sendFile = async (e) => {
        e.preventDefault()
        // const formData = new FormData();
        // formData.append('file', selectedFile);
        // const jwtToken=localStorage.getItem('jwtToken');
        //  console.log(jwtToken)
        // // const bookletRequest = {
        // //     text: formValue.text,
        // //     termPublicId: formValue.termPublicId,
        // //     instCoursePublicId: selectedCourse.publicId
        // // };
        // //
        // // formData.append('bookletRequest', JSON.stringify(bookletRequest));
        //
        // try {
        //     const response = await fetch('http://localhost:8090/unipoll/v1/booklet/file', {
        //         method: 'POST',
        //         headers: {
        //             "Content-Type": "multipart/form-data",
        //             'Authorization':`${jwtToken}`
        //
        //         },
        //         body: formData,
        //     });
        //     if (response.ok) {
        //         const data = await response.json();
        //         console.log('ok');
        //         console.log(data);
        //
        //     } else {
        //         console.log("Not ok");
        //     }
        // }
        // catch (error) {
        //     console.error('Error uploading file:', error);
        // }
        ////////
        // const formData = new FormData();
        // formData.append("file", selectedFile);
        // // formData.append("text", formValue.text);
        // // formData.append("termPublicId", formValue.termPublicId);
        // // formData.append("instCoursePublicId", selectedCourse.publicId);
        // //formData.append("file", selectedFile);
        // console.log(formData)
        // const jwtToken=localStorage.getItem('jwtToken');
        // console.log(jwtToken)
        // const response = await fetch("http://localhost:8090/unipoll/v1/booklet/file", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //         'Authorization':`${jwtToken}`
        //     },
        //     body:
        //         {
        //             file:formData,
        //             bookletRequest: {
        //                 text: formValue.text,
        //                 termPublicId: formValue.termPublicId,
        //                 instCoursePublicId: selectedCourse.publicId
        //             }
        //         },
        // });
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJVbmlQb2xsIiwic3ViIjoiandUb2tlbiIsInVzZXJuYW1lIjoiTS1CYWdoYmFuaSIsImF1dGhvcml0aWVzIjoiUk9MRV9TVFVERU5UIiwiaWF0IjoxNzE1NjMyNjgzLCJleHAiOjE3MTU2NjI2ODN9.Q2m8QYM4O9jPRd1vDuq5Omiq7aY82ooO10k0JfGTjUCiyXBVQIc1-1-vONyEReAMHYF5Zftj7mYKPZ0-zeXk8w");

        const formdata = new FormData();
        formdata.append("file", selectedFile, "/D:/UNI/06/بازی/present.pdf");
        formdata.append("text", "hi");
        formdata.append("termPublicId", "712ad8c2-5946-4459-82f5-2b528aa804db");
        formdata.append("instCoursePublicId", "d1e55258-d437-4dc2-9b66-0e2641a7b3f4");

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: formdata,
            redirect: "follow"
        };

        fetch("http://localhost:8090/unipoll/v1/booklet/file", requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.error(error));

    };
    const handleFileChange = (event) => {
        event.preventDefault();
        setSelectedFile(event.target.files[0]);
        //console.log(selectedFile);
    };
  return(
      <div className={'flex justify-center items-center w-full'}>
          <form className='flex flex-col gap-4 w-full justify-center items-center' dir={'rtl'} encType={"multipart/form-data"}
          onSubmit={sendFile}
          >
              <div className={'flex flex-row gap-3 justify-center items-center'}>
                  <label className={'pointer flex flex-row gap-2 bg-[#CBFEFF] py-2 px-4 justify-center items-center rounded-2xl '}>
                      آپلود جزوه
                      <Upload/>
                      <input id="inputTag" type="file" name="uploadFile" accept=".pdf" required
                             className={'hidden'} onChange={handleFileChange}/>
                  </label>
                  {selectedFile && <p className={'text-gray-600 text-xs'}>{selectedFile.name}</p>}
              </div>
              {selectedFile && <textarea id="text"  style={{resize:'none'}} className="block h-40 w-1/3 p-4 ps-10  text-black-900 rounded-3xl  bg-[#DFE8EF] text-lg placeholder:text-[#8B8C8D]
                             focus:outline-none  focus:ring-0 shadow-inner text-start"
                        placeholder="توضیحات :" required onChange={(event) => {
                  setFormValue({...formValue, text: event.target.value})
              }}/>}
              {selectedFile && <div className={'w-1/3 flex flex-row px-2 justify-between'}>
                  <button type="submit"
                          className=" transition hover:scale-105 w-5/12 py-2 bg-darkBlue text-white rounded-lg text-lg hover:drop-shadow-xl hover:shadow-teal-950 ">
                      ارسال
                  </button>
                  <div className=''>
                      <select
                          data-twe-select-placeholder="ترم خود را انتخاب کنید"
                          className='rounded-2xl appearance-none text-sm text-gray-600 w-60 h-12 pr-4 bg-[#DFE8EF]  focus:border-0 shadow-inner rounded-lg focus:outline-0 placeholder:text-yellow-300  peer-active:text-yellow-600'
                          required>
                          <option  value="" hidden selected className="checked:text-[#8B8C8D] peer-checked:text-yellow-300 text-2xl">یک مورد را انتخاب کنید...</option>
                          <option className='bg-white text-black  ' >نیمسال اول 1400</option>
                          <option className='bg-white text-black'>نیمسال دوم 1400</option>
                          <option className='bg-white text-black'>نیمسال اول 1401</option>
                          <option className='bg-white text-black'>نیمسال دوم 1401</option>
                      </select>
                  </div>
              </div>}

          </form>

      </div>
  );
};
export default UploadBooklet;