import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import Compressor from 'compressorjs';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { storage } from '../../firebase';
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import {Tags} from '../../assets/Tags';

import {authActions} from '../../slice/AuthSlice';

const EditProfile = () => {

    const user = useSelector((state:{auth: {user: any}}) => state.auth.user)

    const [general, setGeneral] = useState<boolean>(true)

    const [compressedFile, setCompressedFile] = useState< File | Blob >()
    const [conpressedFileURL, setconpressedFileURL] = useState("/default-placeholder-image.png")

    const dispatch = useDispatch()

    const fileSelectedHandler = (e: any) =>{
        console.log(e.target.files[0]) // looking at file uploaded

        if (!e.target.files[0]) throw new Error('Failed to retrive file');
        new Compressor(e.target.files[0], {
            quality: 0.6,
            maxWidth: 250,
            success: (compressdResult)=>{ 
              setCompressedFile(compressdResult)
              setconpressedFileURL(URL.createObjectURL(compressdResult))
              console.log(conpressedFileURL);
              console.log(compressdResult);
              
  
            } //setting compressedFile as the compressed file so can be use by the click handler
        })
        
    }

    const fileUploadHandler = (e:any) =>{

        e.preventDefault()


      }

  return (
    <div>

        <label className='p-3' onClick={()=>setGeneral(true)}>General</label> <label className='p-3' onClick={()=>setGeneral(false)}>Security</label>

        {general?
        <form>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <img className="w-20 h-20 rounded-full m-5" src={conpressedFileURL} alt="image description"/>
                    {/* <div className="rounded-full p-5 m-3 text-center bg-gray-300">round this, this is for the profile image</div> */}
                    <input type="file" onChange={fileSelectedHandler}/> 
                </div>
                <div className=''>
                    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Name</label>
                    <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={user.name} />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Tags</label>
                    <div>
                    {
                    Object.keys(Tags).map((key)=>{
                        console.log(key)
                        return <div>
                        {key.toString()}
                        <div>
                        {Tags[key].map((tag:string)=>{
                            return <button className="rounded-full m-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-3 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{tag}</button>
                        })}
                        </div>
                        </div>
                    })}
                    </div>
                </div>
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
         :
         <form>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Email address</label>
                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" />
            </div> 
            <div className="mb-6">
                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">New Password</label>
                <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" />
            </div> 
            <div className="mb-6">
                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Confirm Password</label>
                <input type="password" id="confirm_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" />
            </div> 
            <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                <input id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" />
                </div>
                <label  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
         }
        
        <br /> <br /> <br />
        
        <br />


    </div>
  )
}

export default EditProfile