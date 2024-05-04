import Upload from "@/components/icons/Upload";
import {useState} from "react";

const UploadBooklet = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };
  return(
      <div className={'flex justify-center items-center'}>
          <form className='flex flex-col gap-4'>
              <div className={'flex flex-row-reverse gap-3 justify-center items-center'}>
                  <label className={'pointer flex flex-row-reverse gap-2 bg-[#CBFEFF] py-2 px-4 justify-center items-center rounded-2xl '}>
                      آپلود جزوه
                      <Upload/>
                      <input id="inputTag" type="file" name="uploadFile" accept=".pdf" required
                             className={'hidden'} onChange={handleFileChange}/>
                  </label>
                  {selectedFile && <p className={'text-gray-600 text-xs'}>{selectedFile.name}</p>}
              </div>

              <input type="submit"/>
          </form>

      </div>
  );
};
export default UploadBooklet;