import Upload from "@/components/icons/Upload";
import {useContext, useEffect, useState} from "react";
import {coursePIDContext} from "@/context/coursePIDContext";
import ErorrIcon from "@/components/icons/ErorrIcon";
import OkIcon from "@/components/icons/okIcon";

const UploadBooklet = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [bookletRequest, setBookletRequest] = useState({file:"",text:"",termPublicId:"",instCoursePublicId:""});
    const [formValue, setFormValue] = useState({file:"",bookletRequest:""});
    const [selectedCourse , setSelectedCourse]=useContext(coursePIDContext);
    const [filter, setFilter] = useState([]);
    useEffect(() => {
        setBookletRequest({...bookletRequest,instCoursePublicId : selectedCourse.publicId});
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:8090/unipoll/v1/term");

                if (response.ok) {
                    const data = await response.json();
                    setFilter(data.result);
                    console.log("term ok")

                } else {
                    console.log("Network response was not ok");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);
    const sendFile = async (e) => {
        e.preventDefault()
        const jwtToken=localStorage.getItem('jwtToken');
        const myHeaders = new Headers();
        myHeaders.append("Authorization", jwtToken);
        const formdata = new FormData();
        formdata.append("file", selectedFile, "[PROXY]");
        formdata.append("text", bookletRequest.text);
        formdata.append("termPublicId", bookletRequest.termPublicId);
        formdata.append("instCoursePublicId", bookletRequest.instCoursePublicId);

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: formdata,
            redirect: "follow"
        };

        fetch("http://localhost:8090/unipoll/v1/booklet/file", requestOptions)
            .then((response) =>{
                response.text();
                if(response.ok){
                    document.getElementById('bookletText').value="";
                    document.getElementById("okAlert").className = " transition duration-1000 ease-in-out flex mt-5 bg-green-100 items-center px-6 py-4 text-sm border-t-2 rounded-b shadow-sm border-green-500 ";
                    setTimeout(function(){
                        document.getElementById("okAlert").className = ' hidden';
                        setSelectedFile();
                    }, 3000);

                } else if (response.status===401) {
                    document.getElementById("erorrAcsess").className = ' mt-5 flex bg-red-100 items-center px-6 py-4 text-sm border-t-2 rounded-b shadow-sm border-red-500 ';
                    setTimeout(function(){
                        document.getElementById("erorrAcsess").className = ' hidden';
                    }, 5000);
                    console.log("not ok")
                }
            } )
            .then((result) => console.log(result))
            .catch((error) => console.error(error));

    };
    const formSubmitHandler = async (e) =>{
        e.preventDefault();
        console.log(bookletRequest);
        console.log(selectedFile);
        setBookletRequest({...bookletRequest,file:selectedFile.toString()});
        console.log(bookletRequest);
        try {
            const jwtToken=localStorage.getItem('jwtToken');
            const response = await fetch("http://Localhost:8090/unipoll/v1/booklet/file", {
                method: "POST",
                body: JSON.stringify(bookletRequest), headers: {
                    "Content-Type": "application/json",
                    'Authorization':`${jwtToken}`},
            });
            console.log(bookletRequest)
            if (response.ok) {
                console.log("upload OK");
            } else{
                console.log(" upload not ok")
            }
        }catch (e) {
            console.error("we are GETTING ERROR", e)
        }
    }
    const handleFileChange = (event) => {
        event.preventDefault();
        setSelectedFile(event.target.files[0]);

    };
  return(
      <div className={'flex justify-center items-center w-full text-black mb-28'}>
          <form className='flex flex-col gap-4 w-full justify-center items-center' dir={'rtl'} encType={"multipart/form-data"}
          onSubmit={sendFile}
          >
              <div className={'flex flex-row gap-3 justify-center items-center'}>
                  <label className={'transition hover:scale-105 pointer flex flex-row gap-2 bg-[#CBFEFF] py-2 px-4 justify-center items-center rounded-2xl shadow-md cursor-pointer'}>
                      آپلود جزوه
                      <Upload/>
                      <input id="inputTag" type="file" name="uploadFile" accept=".pdf" required
                             className={'hidden'} onChange={handleFileChange}/>
                  </label>
                  {selectedFile && <p className={'text-gray-600 text-xs'}>{selectedFile.name}</p>}
              </div>
              {selectedFile && <textarea id="bookletText"  style={{resize:'none'}} className="block h-40 w-1/3 p-4 ps-10  text-black-900 rounded-3xl  bg-[#DFE8EF] text-lg placeholder:text-[#8B8C8D]
                             focus:outline-none  focus:ring-0 shadow-inner text-start"
                        placeholder="توضیحات :" required onChange={(event) => {
                  setBookletRequest({...bookletRequest, text: event.target.value})
              }}/>}
              {selectedFile && <div className={'w-1/3 flex flex-row px-2 justify-between'}>
                  <div className={"flex flex-col w-full"}>
                      <button type="submit"
                              className=" transition hover:scale-105 w-5/12 py-2 bg-darkBlue text-white rounded-lg text-lg hover:drop-shadow-xl hover:shadow-teal-950 ">
                          ارسال
                      </button>
                      <div id={"erorrAcsess"}
                           className=" transition duration-1000 ease-in-out opacity-0 hidden mt-5 bg-red-100 items-center px-6 py-4 text-sm border-t-2 rounded-b shadow-sm border-red-500 ">
                          <ErorrIcon/>
                          <div className=" mr-3" dir='rtl'>
                              <div className="font-bold text-lg text-right text-black ">محدودیت دسترسی</div>
                              <div className="w-full text-lg text-gray-900  mt-1">برای رفع این محدودیت لطفا <span
                                  className="font-bold text-lg "><a href={'/login'}>وارد </a> </span>شوید
                              </div>
                          </div>
                      </div>
                      <div id={"okAlert"}
                           className=" transition duration-1000 ease-in-out hidden mt-5 bg-green-100 items-center px-6 py-4 text-sm border-t-2 rounded-b shadow-sm border-green-500 ">
                          <OkIcon/>
                          <div className=" mr-3" dir='rtl'>
                              <div className="font-bold  text-right text-lg text-black ">موفقیت آمیز</div>
                              <div className="w-full text-lg text-gray-900  mt-1">جزوه با موفقیت ثبت شد.
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className=''>
                      <select
                          data-twe-select-placeholder="ترم خود را انتخاب کنید"
                          className='appearance-none  w-60 h-12 pr-4 bg-[#DFE8EF]  focus:border-0 shadow-inner rounded-lg focus:outline-0 placeholder:text-yellow-300  peer-active:text-yellow-600'
                          required onChange={(event) => {
                          setBookletRequest({...bookletRequest, termPublicId: event.target.value})
                      }}>
                          <option value="" hidden selected
                                  className="checked:text-[#8B8C8D] peer-checked:text-yellow-300 text-2xl">ترم خود را
                              انتخاب کنید...
                          </option>
                          {filter.map(
                              (p, index) => <option key={index} value={p.publicId}
                                                    className="bg-white">{p.name}</option>
                          )}
                      </select>
                  </div>
              </div>}

          </form>

      </div>
  );
};
export default UploadBooklet;