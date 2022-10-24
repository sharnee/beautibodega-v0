import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import Compressor from 'compressorjs';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { storage } from '../../firebase';
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import {Tags} from '../../assets/Tags';


import {authActions} from '../../slice/AuthSlice';
import {updateProfile} from '../../slice/UserSlice';

const EditProfile = () => {

    

    const user = useSelector((state:{user: {user: any}}) => state.user.user)
    const pic = useSelector((state:{user: {pic: string}}) => state.user.pic)

    const [general, setGeneral] = useState<boolean>(true)

    const [tags, setTags] = useState<any>([])
    const [name, setName] = useState("")

    const [compressedFile, setCompressedFile] = useState< File | Blob | any>()
    const [conpressedFileURL, setconpressedFileURL] = useState("/default-placeholder-image.png")
    const [oldTags, setOldTags] = useState("")
    const [role, setRole] = useState(user.role)

    const dispatch = useDispatch()
    const navagate = useNavigate()

    useEffect(() => {
        if(user.tags !== null){
            console.log("inside set tags");
            setTags(user.tags.split(","))
        }
        console.log(pic, "pic")
        setconpressedFileURL(pic)
        setName(user.name)

    }, [])
    

    console.log(user.tags, "user.tags");
    console.log(tags,"tags")

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
              console.log(compressdResult, "compressedFile");
              
  
            } //setting compressedFile as the compressed file so can be use by the click handler
        })
        
    }

    // const removeTag = (tag:string)=>{
    //     setTags(tags.filter((e:string) => e !== tag))
    // }

    const generalSubmit = async(e:any) =>{

        e.preventDefault() 
        console.log(tags);
        const ID = user.id
        console.log(conpressedFileURL);
        // if (compressedFile == null) return;
        if(conpressedFileURL == pic){
            console.log("did not change pic just profile detail (in submit)");
            dispatch(updateProfile({ID, tags, conpressedFileURL, pic, name, role}))
            // console.log(ID, "id")
            // dispatch(getProfile({ID}))
            

        }
        else{
        console.log("New pic and profile details (in submit)");
        let imageName = uuidv4()
  
        const imageRef = ref(storage, `images/${ imageName }`)
        let snapshot = await uploadBytes(imageRef, compressedFile);
        let URL = await getDownloadURL(snapshot.ref)
  
        console.log('right befoire dispatch')

        // let response = await axios.post('/uploadImage', action.payload)
        
        dispatch(updateProfile({imageName, URL, ID, tags, conpressedFileURL, pic, name, role}))
        // console.log(ID, "id");
        // dispatch(getProfile({ID}))
        

        }
        console.log("updateProfile")
        // navagate(`/profile/${user.secondary_id}`)
        navagate(`/`)

      }

  return (
    <div className='font-Caslon'>

        <div className='pt-6 text-'><label className='cursor-pointer mt-6 underline' onClick={()=>navagate('/profile')}>Back</label> <label className='p-3 cursor-pointer underline' onClick={()=>setGeneral(true)}>General</label> <label className=' cursor-pointer underline' onClick={()=>setGeneral(false)}>Security</label> <button type="button" className="mt-4 mb-4 text-black bg-tan hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 " onClick={()=>setRole("Influencer")}>Register as Influencer</button></div>

        {general?
        <form onSubmit={generalSubmit}>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <img className="w-20 h-20 rounded-md m-5 border-gray-700" src={conpressedFileURL} alt="image description"/>
                    {/* <div className="rounded-full p-5 m-3 text-center bg-gray-300">round this, this is for the profile image</div> */}
                    <input type="file" onChange={fileSelectedHandler}/> 
                </div>
                <div className=''>
                    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Name</label>
                    <input type="text" id="name" onChange={e=>{setName(e.target.value)}} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder={user.name} />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">Tags</label>
                    <div>
                    {
                    Object.keys(Tags).map((key)=>{
                        console.log(key)
                        return <div>
                        {key.toString()}
                        <div>
                        {Tags[key].map((tag:string)=>{
                            return <div>{tags.includes(tag) ? 
                            <button type="button" onClick={()=>setTags(tags.filter((e:string) => e !== tag))} className="rounded-full m-1 text-white text-md bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium text-sm px-3 py-1 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">{tag}</button>
                             : 
                             <button type="button" onClick={()=>setTags([...tags, tag])} className="rounded-md m-1 text-white bg-greenish hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-3 py-1 text-center ">{tag}</button>}</div>
                        })}
                        </div>
                        </div>
                    })}
                    </div>
                </div>
            </div>
            <button type="submit" className="text-white bg-tan hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>
        </form>
         :
         <form>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Email address</label>
                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="john.doe@company.com" />
            </div> 
            <div className="mb-6">
                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">New Password</label>
                <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="•••••••••" />
            </div> 
            <div className="mb-6">
                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Confirm Password</label>
                <input type="password" id="confirm_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-md" placeholder="•••••••••" />
            </div> 
            <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                <input id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300  " />
                </div>
                <label  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
            </div>
            <button type="submit" className="text-white bg-tan hover:greenish focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center   ">Submit</button>
        </form>
         }
        
        <br /> <br /> <br />
        
        <br />


    </div>
  )
}

export default EditProfile