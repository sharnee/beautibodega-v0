import React, {useState, useEffect} from "react";
import { Link, useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import axios from 'axios'

import {authActions} from '../slice/AuthSlice';

import { LoginDB } from '../slice/UserSlice';


import loginImg from '../assets/login.jpg'

export default function Login() {

    const user = useSelector((state:{user: {user: any}}) => state.user.user)
    console.log(user, "token")

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
      
        if(Object.keys(user).length > 0){
            navigate("/")
        }
        
    }, [user])
    

    const handleSubmit = async (e: any)=>{
    
        e.preventDefault()
        console.log("");
        dispatch(LoginDB({email, password})).then(()=>{
        // await axios.post('/login', {email: email, password: password})
        // .then(response =>{
        //     console.log(response);
        //     dispatch(authActions.login(response))
        console.log(user, "user in submit")
        console.log(email)
        if(email === user.email){
            navigate("/")
        }
        else{
            setLoginError(true)
        }
     })
        // 
        // })
        
        // // this might cause trouble with async... if it does we can do 2 disbatchs as a work around
    
      }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full font-Caslon antialiased'>


        <div className=' flex flex-col justify-center lg:pl-52 '>
            <form className='max-w-[500px] w-full mx-auto rounded-lg  pt-24 px-8' onSubmit={(e)=>handleSubmit(e)}>
                <h2 className='text-2xl  font-semibold font-Caslon text-center'>Welcome to Beauti Bodega</h2>
                <h3 className='text-md  text-center  pb-12 font-light '>Please enter your details</h3>
                <button className='w-full my-5 py-3 bg-gradient-to-t from-newPink to-newOrange hover:bg-blue-500 text-white  rounded-md'>Sign in with Instagram</button>
                <div className=" flex py-5 justify-center  items-center">
            <div className=" border-t w-20 border-tan"></div>
                <span className=" mx-4 text-gray-400 text-sm">or</span>
                <div className=" border-t w-20 border-tan"></div>
            </div>
                <div className='flex flex-col text-gray-500 py-2 text-sm'>
                    <label>Email</label>
                    <input className='rounded-lg border-2 border-zinc-500 mt-2 p-2 focus:border-gray-200 ' type="email" onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className='flex flex-col text-gray-500 py-2 text-sm'>
                    <label>Password</label>
                    <input className='p-2 rounded-lg border-2 border-zinc-500 mt-2 focus:border-gray-200  ' type="password" onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                {/* <div className='flex flex-col text-gray-500 py-2 text-sm'>
                    <label >Re-Enter Password</label>
                    <input className='p-2 rounded-lg border-2 border-zinc-500 mt-2 focus:border-gray-200  ' type="password" onChange={(e)=>setRePassword(e.target.value)}/>
                </div> */}
                <div className='flex justify-between text-gray-400 py-2'>
                    <p className='flex items-center text-sm'><input className='mr-2' type="checkbox" /> Remember Me</p>
                    <p className='text-sm'>Forgot Password </p>  
                </div>
                <button className='w-full my-5 py-3 bg-olive shadow-lg  hover:bg-tan text-white  rounded-md' onClick={(e)=>handleSubmit(e)}>Login</button>
                <div className="text-sm">Don't have an account? <Link to='/signup'><a className="text-gray-500 hover:text-blue-700 font-semibold">Sign Up</a></Link></div>
                {loginError ? <div>LOGIN ERROR</div> : null }
                
            </form>
            
        </div>
        <div className='hidden sm:block'>
            <img className='w-3/4 h-full py-20' src='placeholderAssets/Login-1.png' alt="" />
        </div>
    </div>
  )
}
