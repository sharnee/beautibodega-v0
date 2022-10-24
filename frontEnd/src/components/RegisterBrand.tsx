import { useSelector }  from 'react-redux'
import React, {useState, useEffect} from "react";
import {useDispatch} from 'react-redux'
import axios from 'axios';
import { storage } from '../firebase';
import { ref, uploadBytes, listAll, getDownloadURL }from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import {authActions} from '../slice/AuthSlice';
import Compressor from 'compressorjs';
import { Link, useNavigate } from 'react-router-dom'

import loginImg from '../assets/login.jpg'

export default function RegisterBrand() {

    const user = useSelector((state:{user: {user: any}}) => state.user.user)

    const [brandName, setBrandName] = useState("")
    const [email, setEmail] = useState("");
    const [description, setDescription] = useState("");
    const [logo, setLogo] = useState<File | Blob>();
    const [founder, setFounder] = useState("");
    const [phone, setPhone] = useState("");
    const [websiteURL, setWebsiteURL] = useState("");
    const [videoLink, setVideoLink] = useState("");


    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handleSubmit = async()=>{

        console.log('lol');

        if(brandName == ""){

            alert('Brand name field is required!')
            return

        } else if(email == ""){

            alert('Email field is required!')
            return

        } else if(description == ""){

            alert('Description field is required!')
            return

        } else if(logo == null){

            alert('A image upload is required!')
            return

        } else if(founder== ""){

            alert('A founder name is required!')
            return

        } else if(phone == ""){

            alert('Phone number field is required!')
            return
            
        } else if(websiteURL == ""){

            alert('Website URL field is required!')
            return

        } else {

            let logoName = uuidv4()
    
            const imageRef = ref(storage, `images/${ logoName}`)
            let snapshot = await uploadBytes(imageRef, logo);
            let imageURL = await getDownloadURL(snapshot.ref)

            dispatch(authActions.signUpBrand({logoName, imageURL, brandName, email, description, founder, phone, websiteURL, videoLink, admin: user.id}))

            navigate('/')
        }
    
      }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full font-Caslon antialiased'>


        <div className=' flex flex-col justify-center lg:pl-52 '>
            <div className='max-w-[500px] w-full mx-auto rounded-lg  pt-24 px-8'>
                <h2 className='text-2xl  font-semibold font-Caslon text-center pb-10'>Welcome to Beauti Bodega</h2>
                
            <div className='flex flex-col text-gray-500 py-2 text-sm'>
                    <label>Brand Name</label>
                    <input name="email" className='rounded-lg border-2 border-zinc-500 mt-2 p-2 focus:border-gray-200 ' type="text" onChange={(e)=>setBrandName(e.target.value)}/>
                </div>
                <div className='flex flex-col text-gray-500 py-2 text-sm'>
                    <label>Email</label>
                    <input  className='rounded-lg border-2 border-zinc-500 mt-2 p-2 focus:border-gray-200 ' type="text" onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className='flex flex-col text-gray-500 py-2 text-sm'>
                    <label>Brand Description:</label>
                    <textarea  className='p-2 rounded-lg border-2 border-zinc-500 mt-2 focus:border-gray-200 ' onChange={(e)=>setDescription(e.target.value)}/>
                </div>
                <div className='flex flex-col text-gray-500 py-2 text-sm'>
                    <label>Brand Founder:</label>
                    <input className='p-2 rounded-lg border-2 border-zinc-500 mt-2 focus:border-gray-200  ' type="textarea" onChange={(e)=>setFounder(e.target.value)}/>
                </div>
                <div className='flex flex-col text-gray-500 py-2 text-sm'>
                    <label>Brand Phone:</label>
                    <input className='p-2 rounded-lg border-2 border-zinc-500 mt-2 focus:border-gray-200  ' type="text" onChange={(e)=>setPhone(e.target.value)}/>
                </div>
                <div className='flex flex-col text-gray-500 py-2 text-sm'>
                    <label>Company Website URL:</label>
                    <input className='p-2 rounded-lg border-2 border-zinc-500 mt-2 focus:border-gray-200  ' type="text" onChange={(e)=>setWebsiteURL(e.target.value)}/>
                </div>
                <div className='flex flex-col text-gray-500 py-2 text-sm'>
                    <label>Youtube Video Link to be displayed (Optional)</label>
                    <input placeholder='ensure the link is an embed link' className='p-2 rounded-lg border-2 border-zinc-500 mt-2 focus:border-gray-200  ' type="text" onChange={(e)=>setWebsiteURL(e.target.value)}/>
                </div>
                <div className='flex flex-col text-gray-500 py-2 text-sm'>
                    <label> Upload Brand Logo </label>
                    <input className='p-2 rounded-lg border-2 border-zinc-500 mt-2 focus:border-gray-200  ' type="file" onChange={(e: any)=>{

                        new Compressor(e.target.files[0], {
                            quality: 0.6,
                            maxWidth: 400,
                            success: (compressdResult)=>{ 
                            setLogo(compressdResult)
                            console.log(compressdResult);
                        
                            } //setting compressedFile as the compressed file so can be use by the click handler
                        })
                    }}/>
                </div>
                {/* <div className='flex justify-between text-gray-400 py-2'>
                    <p className='flex items-center text-sm'><input className='mr-2' type="checkbox" /> Remember Me</p>
                    <p className='text-sm'>Forgot Password</p>
                </div> */}
                <button className='w-full my-5 py-3 bg-olive shadow-lg  hover:bg-tan text-white  rounded-md' onClick={handleSubmit}>Register Brand</button>
                {/* <div className="text-sm">Already have an account? <Link to='/login'><a className="text-gray-500 hover:text-blue-700 font-semibold">Login</a></Link></div> */}
                
            </div>
            
        </div>
        <div className='hidden sm:block'>
            <img className='w-3/4 h-full py-20' src={loginImg} alt="" />
        </div>
    </div>
  )
}
