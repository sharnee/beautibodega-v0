import React, {useState, useEffect} from 'react';
import Compressor from 'compressorjs';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { storage } from '../../firebase';
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';

import {authActions} from '../../slice/AuthSlice';
import { userInfo } from 'os';

const UploadImage = () => {

    const [originalFile, setOriginalFile] = useState<File | Blob>()
    const [originalFileURL, setOriginalFileURL] = useState("")
    const [compressedFile, setCompressedFile] = useState< File | Blob >()
    const [conpressedFileURL, setconpressedFileURL] = useState("")

    const dispatch = useDispatch()

    // useEffect(() => {
      
      

    // }, [])


    const handleSubmit = async(e: any) => {

      e.preventDefault()
      
      if (compressedFile == null) return;

      let imageName = uuidv4()

      const imageRef = ref(storage, `images/${ imageName }`)
      let snapshot = await uploadBytes(imageRef, compressedFile);
      let URL = await getDownloadURL(snapshot.ref)


      dispatch(authActions.uploadImage({imageName, URL}))

    }
    

    const fileSelectedHandler = (e: any) =>{
        console.log(e.target.files[0]) // looking at file uploaded
        setOriginalFile(e.target.files[0])
        setOriginalFileURL(URL.createObjectURL(e.target.files[0]))

        console.log(originalFile);

        
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
        {compressedFile ?  <img src={conpressedFileURL} alt="uploadedImage" width="500"/>:<img src="/default-placeholder-image.png" alt="placeholderImage" width="500" />}
        <button onClick={handleSubmit}>SubmitToBackend</button>
        
    </div>
  )
}

export default UploadImage