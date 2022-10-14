import React, {useState, useEffect} from 'react';
import Compressor from 'compressorjs';
import axios from 'axios';

const UploadImage = () => {

    const [originalFile, setOriginalFile] = useState<File | Blob>()
    const [originalFileURL, setOriginalFileURL] = useState("")
    const [compressedFile, setCompressedFile] = useState<File | Blob>()
    const [conpressedFileURL, setconpressedFileURL] = useState("")

    useEffect(() => {
      
    

    }, [])
    

    const fileSelectedHandler = (e: any) =>{
        console.log(e.target.files[0]) // looking at file uploaded
        setOriginalFile(e.target.files[0])
        setOriginalFileURL(URL.createObjectURL(e.target.files[0]))

        
    }

    const fileUploadHandler = () =>{
      if (!originalFile) throw new Error('Failed to retrive file');
      new Compressor(originalFile, {
          quality: 0.6,
          maxWidth: 400,
          success: (compressdResult)=>{ 
            setCompressedFile(compressdResult)
            setconpressedFileURL(URL.createObjectURL(compressdResult))
            console.log(conpressedFileURL);
            console.log(compressdResult);
          } //setting compressedFile as the compressed file so can be use by the click handler
      })
    }

  return (
    <div>
      {originalFile ? <img src={originalFileURL} alt="uploadedImage" width="400"/>:<img src="/default-placeholder-image.png" alt="placeholderImage" width="400"/>}
        <input type="file" onChange={fileSelectedHandler}/>
        <button onClick={fileUploadHandler}>Upload</button>
        {compressedFile ?  <img src={conpressedFileURL} alt="uploadedImage" width="400"/>:<img src="/default-placeholder-image.png" alt="placeholderImage" width="400" />}
        
    </div>
  )
}

export default UploadImage