import { useSelector }  from 'react-redux'
import React, {useState, useEffect} from "react";
import {useDispatch} from 'react-redux'
import axios from 'axios';
import { storage } from '../firebase';
import { ref, uploadBytes, listAll, getDownloadURL }from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import {authActions} from '../slice/AuthSlice';
import Compressor from 'compressorjs';
import { Link } from 'react-router-dom'

import './css/Admin.css'


function Adminforms() {

  const user = useSelector((state:{user: {user: any}}) => state.user.user)

  console.log(user)

  const [brand, setBrand] = useState<any>('')

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [salesPrice, setSalesPrice] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [instructions, setInstructions] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [category, setCategory] = useState("");

  const [originalFile, setOriginalFile] = useState<File | Blob>()
  const [originalFileURL, setOriginalFileURL] = useState("")
  const [compressedFile, setCompressedFile] = useState< File | Blob >()
  const [conpressedFileURL, setconpressedFileURL] = useState("")

  const dispatch = useDispatch()

  useEffect(() => {

    const getBrand = async() =>{

      let id: any = user.id

      let brand_res: any = await axios.get(`/getBrandByAdmin/${id}`)

      let image = await axios.get(`getImage/${brand_res.data.logo}`)

      brand_res.data['image'] = image.data

      setBrand( brand_res.data )

    }

    getBrand()

  }, [])

  console.log(brand);

  function sleep(milliseconds: any) {

    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);

}
  

  const handleSubmit = async(e: any) => {

    e.preventDefault()
    
    if (compressedFile == null) return;

    let imageName = uuidv4()

    const imageRef = ref(storage, `images/${ imageName }`)
    let snapshot = await uploadBytes(imageRef, compressedFile);
    let imageURL = await getDownloadURL(snapshot.ref)

      
    dispatch(authActions.uploadProduct({imageName, imageURL, name, price, salesPrice, description, quantity, instructions, ingredients, category, brand}))



  }

  const fileSelectedHandler = (e: any) =>{
    console.log(e.target.files[0]) // looking at file uploaded
    setOriginalFile(e.target.files[0])
    setOriginalFileURL(URL.createObjectURL(e.target.files[0]))

    sleep(1000)

    console.log(originalFile);

    fileUploadHandler()

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
    <>
<div className="flex w-screen h-[100vh] text-gray-700 bg-beige bg-cover">

<div className="flex flex-col items-center w-72 pb-4 overflow-auto  border-gray-300">
    <a className="flex items-center justify-center flex-shrink-0 w-full h-16 " href="#">
      <img src="placeholderAssets/MissJessiesLogo.png" alt="" />
    </a>
    <a className="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded hover:bg-gray-300" href="#">
        <p>Products</p>
    </a>
    <a className="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded hover:bg-gray-300" href="#">
      <p>Customers</p>
    </a>
    <a className="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded hover:bg-gray-300" href="#">
        <p>Analytics</p>
    </a>
    <a className="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded hover:bg-gray-300" href="#">
        <p>Orders</p>
    </a>
    <a className="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded hover:bg-gray-300" href="#">
        <p>Beauti Aisle</p>
    </a>
    <a className="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded hover:bg-gray-300" href="#">
        <p></p>
    </a>
</div>
<div className=" left-1/2 -ml-0.5 w-0.5 h-5/6 bg-gray-500 mt-16"></div>

<div className="overflow-x-auto relative  shadow-md sm:rounded-lg px-5  w-3/4">
<div className="flex flex-col flex-grow">

<div className="flex-grow py-6 overflow-auto bg-beige pt-20">
<div className="grid grid-cols-5   gap-6">
<div className="h-20 col-span-1 pl-5 pt-4 bg-white border border-gray-300">Total Sales</div>
<div className="h-20 col-span-1 pl-5 pt-4 bg-white border border-gray-300">Online Sessions</div>
<div className="h-20 col-span-1 pl-5 pt-4 bg-white border border-gray-300">Returning Customers</div>
<div className="h-20 col-span-1 pl-5 pt-4 bg-white border border-gray-300">Abandon Cart</div>
<div className="h-20 col-span-1 pl-5 pt-4 bg-white border border-gray-300">Sales Today</div>


</div>
</div>
</div>

<div className=" bg-white">

<div className="grid grid-cols-3 gap-4">

  <div className="h-20 col-span-3 bg-white">
    <div className="bg-blue-400 w-96 h-20 "></div>
  </div>
  <div className='h-full col-span-1 bg-white'>
  <div className=" pl-20 mb-8">
      <label className="block text-gray-700 text-sm font-bold pr-16 mb-2">
        Input field
        <input className="bg-white focus:outline-none focus:shadow-outline border border-gray-300  py-1 px-4 mt-2 block w-72  appearance-none leading-normal" type="input"></input>
       </label>
       <label className="block text-gray-700 text-sm font-bold pr-16 mb-2">
        Text area
        <textarea className="bg-white focus:outline-none focus:shadow-outline border border-gray-300  py-2 px-4 mt-2 block w-72 appearance-none leading-normal"></textarea>
       </label>
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Input field
        <input className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 py-1 px-4 mt-2 block w-72 appearance-none leading-normal" type="input"></input>
       </label>
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Input field
        <input className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 py-1 px-4 mt-2 block w-72 appearance-none leading-normal" type="input"></input>
       </label>
       <label className="block text-gray-700 text-sm font-bold mb-2">
        Text area
        <textarea className="bg-white focus:outline-none focus:shadow-outline border border-gray-300  py-2 px-4 mt-2 block w-72 appearance-none leading-normal"></textarea>
       </label>
       <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-2 border border-blue-500 hover:border-transparent rounded">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
</button>
<label className="block text-gray-700 text-sm font-bold pr-16 mb-2">
        Input field
        <input className="bg-white focus:outline-none focus:shadow-outline border border-gray-300  py-1 px-4 mt-2 block w-72  appearance-none leading-normal" type="input"></input>
       </label>
       <label className="block text-gray-700 text-sm font-bold pr-16 mb-2">
        Input field
       </label>
       <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-2 border border-blue-500 hover:border-transparent rounded">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>

</button>
       <label className="block text-gray-700 text-sm font-bold pr-16 mb-2">
        Input field
       </label>
       <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-2 border border-blue-500 hover:border-transparent rounded">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>

</button>
<label className="block text-gray-700 text-sm font-bold pr-16 mb-2">
        Input field
        <input className="bg-white focus:outline-none focus:shadow-outline border border-gray-300  py-1 px-4 mt-2 block w-72  appearance-none leading-normal" type="input"></input>
       </label>
       <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-2 border border-blue-500 hover:border-transparent rounded">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>

</button>


     </div>
  </div>
  <div className='h-full col-span-1 bg-white'>
  <div className=" pl-20 mb-8">
      <label className="block text-gray-700 text-sm font-bold pr-16 mb-2">
        Input field
        <input className="bg-white focus:outline-none focus:shadow-outline border border-gray-300  py-1 px-4 mt-2 block w-72  appearance-none leading-normal" type="input"></input>
       </label>
       <label className="block text-gray-700 text-sm font-bold pr-16 mb-2">
        Text area
        <textarea className="bg-white focus:outline-none focus:shadow-outline border border-gray-300  py-2 px-4 mt-2 block w-72 appearance-none leading-normal"></textarea>
       </label>
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Input field
        <input className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 py-1 px-4 mt-2 block w-72 appearance-none leading-normal" type="input"></input>
       </label>
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Input field
        <input className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 py-1 px-4 mt-2 block w-72 appearance-none leading-normal" type="input"></input>
       </label>
       <label className="block text-gray-700 text-sm font-bold mb-2">
        Text area
        <textarea className="bg-white focus:outline-none focus:shadow-outline border border-gray-300  py-2 px-4 mt-2 block w-72 appearance-none leading-normal"></textarea>
       </label>
       <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-2 border border-blue-500 hover:border-transparent rounded">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
</button>
<label className="block text-gray-700 text-sm font-bold pr-16 mb-2">
        Input field
        <input className="bg-white focus:outline-none focus:shadow-outline border border-gray-300  py-1 px-4 mt-2 block w-72  appearance-none leading-normal" type="input"></input>
       </label>
       <label className="block text-gray-700 text-sm font-bold pr-16 mb-2">
        Input field
       </label>
       <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-2 border border-blue-500 hover:border-transparent rounded">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>

</button>
       <label className="block text-gray-700 text-sm font-bold pr-16 mb-2">
        Input field
       </label>
       <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-2 border border-blue-500 hover:border-transparent rounded">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>

</button>
<label className="block text-gray-700 text-sm font-bold pr-16 mb-2">
        Input field
        <input className="bg-white focus:outline-none focus:shadow-outline border border-gray-300  py-1 px-4 mt-2 block w-72  appearance-none leading-normal" type="input"></input>
       </label>
       <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-2 border border-blue-500 hover:border-transparent rounded">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>

</button>


     </div>

  </div>
  <div className='h-full col-span-1 bg-white'>
  <div className=" pl-20 mb-8">
      <label className="block text-gray-700 text-sm font-bold pr-16 mb-2">
        Input field
        <input className="bg-white focus:outline-none focus:shadow-outline border border-gray-300  py-1 px-4 mt-2 block w-72  appearance-none leading-normal" type="input"></input>
       </label>
       <label className="block text-gray-700 text-sm font-bold pr-16 mb-2">
        Text area
        <textarea className="bg-white focus:outline-none focus:shadow-outline border border-gray-300  py-2 px-4 mt-2 block w-72 appearance-none leading-normal"></textarea>
       </label>
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Input field
        <input className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 py-1 px-4 mt-2 block w-72 appearance-none leading-normal" type="input"></input>
       </label>
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Input field
        <input className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 py-1 px-4 mt-2 block w-72 appearance-none leading-normal" type="input"></input>
       </label>
       <label className="block text-gray-700 text-sm font-bold mb-2">
        Text area
        <textarea className="bg-white focus:outline-none focus:shadow-outline border border-gray-300  py-2 px-4 mt-2 block w-72 appearance-none leading-normal"></textarea>
       </label>
       <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-2 border border-blue-500 hover:border-transparent rounded">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
</button>
<label className="block text-gray-700 text-sm font-bold pr-16 mb-2">
        Input field
        <input className="bg-white focus:outline-none focus:shadow-outline border border-gray-300  py-1 px-4 mt-2 block w-72  appearance-none leading-normal" type="input"></input>
       </label>
       <label className="block text-gray-700 text-sm font-bold pr-16 mb-2">
        Input field
       </label>
       <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-2 border border-blue-500 hover:border-transparent rounded">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>

</button>
       <label className="block text-gray-700 text-sm font-bold pr-16 mb-2">
        Input field
       </label>
       <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-2 border border-blue-500 hover:border-transparent rounded">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>

</button>
<label className="block text-gray-700 text-sm font-bold pr-16 mb-2">
        Input field
        <input className="bg-white focus:outline-none focus:shadow-outline border border-gray-300  py-1 px-4 mt-2 block w-72  appearance-none leading-normal" type="input"></input>
       </label>
       <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-2 border border-blue-500 hover:border-transparent rounded">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>

</button>


     </div>

  </div>
</div>

<div className='p-12 flex justify-center '>
<a className=" flex justify-center object-bottom w-80 h-10 px-3 mt-auto text-sm font-medium bg-gray-200 rounded hover:bg-gray-300"
            href="#">
            <span className="ml-2 leading-none pt-3"> Add New Customer</span>
        </a>
        </div>

</div>
</div>

<div className=" left-1/2 -ml-0.5 w-0.5 h-5/6 bg-gray-500 mt-16"></div>
<div className="flex flex-col w-72   border-gray-300">


    <div className="flex flex-col flex-grow p-4 overflow-auto">
        <a className="flex items-center  h-10 px-2 text-sm font-medium rounded hover:bg-gray-300" href="#">
            <span className="leading-none"></span>
        </a>
        <a className="flex items-center  h-10 px-2 text-sm font-medium rounded hover:bg-gray-300" href="#">
            <span className="leading-none"></span>
        </a>
        <a className="flex items-center  h-10 px-2 text-sm font-medium rounded hover:bg-gray-300" href="#">
            <span className="leading-none"></span>
        </a>
        <a className="flex items-center  h-10 px-2 text-sm font-medium rounded hover:bg-gray-300" href="#">
            <span className="leading-none"></span>
        </a>
        <a className="flex items-center  h-10 px-2 text-sm font-medium rounded hover:bg-gray-300" href="#">
            <span className="leading-none"></span>
        </a>
        <a className="flex items-center  h-10 px-2 text-sm font-medium rounded hover:bg-gray-300" href="#">
            <span className="leading-none"></span>
        </a>

    </div>

  </div>

  <div className='p-12 flex justify-center '>
  <a className=" m-10 flex justify-center object-bottom w-80 h-10 px-3 mt-auto text-sm font-medium bg-gray-200 rounded hover:bg-gray-300"
              onClick={handleSubmit}>
              <span className="ml-2 leading-none pt-3"> Add New Product</span>
          </a>


  <a className=" m-10 flex justify-center object-bottom w-80 h-10 px-3 mt-auto text-sm font-medium bg-gray-200 rounded hover:bg-gray-300"
              onClick={handleSubmit}>
  <Link to="/adminproducts">
              <span className="ml-2 leading-none pt-3"> Go To Products Page</span>
  </Link>
          </a>

  
  </div>

  </div>
  </div>

  <div className=" left-1/2 -ml-0.5 w-0.5 h-5/6 bg-gray-500 mt-16"></div>
  <div className="flex flex-col w-72   border-gray-300">


      <div className="flex flex-col flex-grow p-4 overflow-auto">
          <a className="flex items-center  h-10 px-2 text-sm font-medium rounded hover:bg-gray-300" href="#">
            {brand != "" ? 
                <span className="leading-none">
                  {brand.brand_name}
                </span>
            :
            <></>      
            }
          </a>
          <a className="flex items-center  h-10 px-2 text-sm font-medium rounded hover:bg-gray-300" href="#">
          {brand != "" ? 
                <span className="leading-none">
                  {brand.brand_name}
                </span>
            :
            <></>      
            }
          </a>
          <a className="flex items-center  h-10 px-2 text-sm font-medium rounded hover:bg-gray-300" href="#">
          {brand != "" ? 
                <span className="leading-none">
                  {brand.description}
                </span>
            :
            <></>      
            }
          </a>
          <a className="flex items-center  h-10 px-2 text-sm font-medium rounded hover:bg-gray-300" href="#">
          {brand != "" ? 
              <img src={brand.image.image} />
            :
            <></>      
            }
          </a>
          <a className="flex items-center  h-10 px-2 text-sm font-medium rounded hover:bg-gray-300" href="#">
              <span className="leading-none"></span>
          </a>
          <a className="flex items-center  h-10 px-2 text-sm font-medium rounded hover:bg-gray-300" href="#">
              <span className="leading-none"></span>
          </a>

      </div>

  </div>


</div>
    </>
  )
}

export default Adminforms