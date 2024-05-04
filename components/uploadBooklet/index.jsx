import Upload from "@/components/icons/Upload";
import {useState} from "react";

const UploadBooklet = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [formValue, setFormValue] = useState({firstname: "", lastname: "",email:"",text:""});
    const sendFile = async () => {
        const formData = new FormData();
        formData.append("file", selectedFile);

        // const response = await fetch("/upload", {
        //     method: "POST",
        //     body: formData,
        // });
        //
        // const data = await response.json();

        // console.log(data);

    };
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
        //console.log(selectedFile);
    };
  return(
      <div className={'flex justify-center items-center w-full'}>
          <form className='flex flex-col gap-4 w-full justify-center items-center' dir={'rtl'}
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
              {selectedFile && <div className={'w-1/3 flex flex-row px-2'}>
                  <button type="submit"
                          className=" transition hover:scale-105 w-5/12 py-2 bg-darkBlue text-white rounded-lg text-lg hover:drop-shadow-xl hover:shadow-teal-950 ">
                      ارسال
                  </button>
              </div>}

          </form>

      </div>
  );
};
export default UploadBooklet;