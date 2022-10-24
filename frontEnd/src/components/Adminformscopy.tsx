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

  const [compressedFile, setCompressedFile] = useState< File | Blob >()
  const [conpressedFileURL, setconpressedFileURL] = useState("")

  const dispatch = useDispatch()

  useEffect(() => {

    const getBrand = async() =>{

      let id: any = user.id

      let brand_res: any = await axios.get(`/getBrandByAdmin/${id}`)

      console.log(brand_res);

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
    
    if (compressedFile == null){

      alert( 'Product not submitted: \n\nThe Selected image has been rejected, or no image has been chosen. please select a different file!' )

      return;
    } 

    if( isNaN(parseFloat(quantity)) || isNaN(parseFloat(salesPrice)) || isNaN(parseFloat(price)) || parseFloat(quantity) % 1 != 0){

      alert( 'Product not submitted: \n\nPrice, sales price, or quantity has been set as a non-numeric value, or quantity is a decimal value.' )

      return;
    }

    let imageName = uuidv4()

    const imageRef = ref(storage, `images/${ imageName }`)
    let snapshot = await uploadBytes(imageRef, compressedFile);
    let imageURL = await getDownloadURL(snapshot.ref)

      
    dispatch(authActions.uploadProduct({imageName, imageURL, name, price, salesPrice, description, quantity, instructions, ingredients, category, brand}))

    alert('Your product has been successfully added!')

    window.location.reload();

  }

//   const fileSelectedHandler = (e: any) =>{

//     fileUploadHandler(e.target.files[0])
// }

const fileUploadHandler = (e: any) =>{

  new Compressor(e.target.files[0], {
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

  <div className="flex items-center justify-center flex-shrink-0 w-full h-16 p-10">
  {brand != "" ? 
    <img src={brand.image.image} />
    :
    <></>
  }
    </div>


  </div>


  <div className="overflow-x-auto relative  shadow-md sm:rounded-lg px-5  w-3/4">
  <div className="flex flex-col flex-grow">

  <div className="flex-grow py-6 overflow-auto bg-beige pt-20">
  <div className="grid grid-cols-5 gap-6">
                <div className="h-20 col-span-1 pl-5 pt-4 bg-white border border-gray-300 flex flex-col top-boxes-ap">Total Sales: (Currently for display purposes only)</div>
                <div className="h-20 col-span-1 pl-5 pt-4 bg-white border border-gray-300 flex flex-col top-boxes-ap">Online Sessions: <div>(Currently for display purposes only)</div></div>
                <div className="h-20 col-span-1 pl-5 pt-4 bg-white border border-gray-300 flex flex-col top-boxes-ap">Returning Customers: <div>(Currently for display purposes only)</div></div>
                <div className="h-20 col-span-1 pl-5 pt-4 bg-white border border-gray-300 flex flex-col top-boxes-ap">Abandon Cart: <div>(Currently for display purposes only)</div></div>
                <div className="h-20 col-span-1 pl-5 pt-4 bg-white border border-gray-300 flex flex-col top-boxes-ap">Sales Today: <div>(Currently for display purposes only)</div></div>
            </div>
  </div>
  </div>

  <div className=" bg-white background">

  <div className="grid grid-cols-3 gap-4 background pt-20">


    <div className='h-full col-span-1 bg-white background_main'>
      <div className=" pl-20 mb-8">
          <label className="block text-gray-700 text-sm font-bold pr-16 mb-2">
            Product Name
            <input className="bg-white focus:outline-none focus:shadow-outline border border-gray-300  py-1 px-4 mt-2 block w-72  appearance-none leading-normal" type="input" value={name} onChange={e=>setName(e.target.value)}></input>
          </label>
          <label className="block text-gray-700 text-sm font-bold pr-16 mb-2">
            Price
            <input className="bg-white focus:outline-none focus:shadow-outline border border-gray-300  py-1 px-4 mt-2 block w-72  appearance-none leading-normal" type="input" value={price} onChange={e=>setPrice(e.target.value)}></input>
          </label>
          <label className="block text-gray-700 text-sm font-bold pr-16 mb-2">
            Sales Price
            <input className="bg-white focus:outline-none focus:shadow-outline border border-gray-300  py-1 px-4 mt-2 block w-72  appearance-none leading-normal" type="input" value={salesPrice} onChange={e=>setSalesPrice(e.target.value)}></input>
          </label>
          <label className="block text-gray-700 text-sm font-bold pr-16 mb-2">
            Description
            <textarea className="bg-white focus:outline-none focus:shadow-outline border border-gray-300  py-2 px-4 mt-2 block w-72 appearance-none leading-normal" value={description} onChange={e=>setDescription(e.target.value)}></textarea>
          </label>
      </div>
    </div>

    <div className='h-full col-span-1 bg-white background'>
      <div className=" pl-20 mb-8">
          <label className="block text-gray-700 text-sm font-bold pr-16 mb-2">
            Quantitiy
            <input className="bg-white focus:outline-none focus:shadow-outline border border-gray-300  py-1 px-4 mt-2 block w-72  appearance-none leading-normal" type="input" value={quantity} onChange={e=>setQuantity(e.target.value)}></input>
          </label>
          <label className="block text-gray-700 text-sm font-bold pr-16 mb-2">
            image
            <input type="file" onChange={fileUploadHandler}/>
          </label>
          <label className="block text-gray-700 text-sm font-bold pr-16 mb-2">
            Instructions
            <textarea className="bg-white focus:outline-none focus:shadow-outline border border-gray-300  py-2 px-4 mt-2 block w-72 appearance-none leading-normal" value={instructions} onChange={e=>setInstructions(e.target.value)}></textarea>
          </label>
      </div>
    </div>
    
    <div className='h-full col-span-1 bg-white background'>
      <div className=" pl-20 mb-8">
          <label className="block text-gray-700 text-sm font-bold pr-16 mb-2">
            Categories
            <input className="bg-white focus:outline-none focus:shadow-outline border border-gray-300  py-1 px-4 mt-2 block w-72  appearance-none leading-normal" type="input" value={category} onChange={e=>setCategory(e.target.value)}></input>
          </label>
          <label className="block text-gray-700 text-sm font-bold pr-16 mb-2">
            Ingredients
            <textarea className="bg-white focus:outline-none focus:shadow-outline border border-gray-300  py-2 px-4 mt-2 block w-72 appearance-none leading-normal" value={ingredients} onChange={e=>setIngredients(e.target.value)}></textarea>
          </label>
      </div>
    </div>

  </div>

  <div className='p-12 flex justify-center '>
  <div className=" m-10 flex justify-center object-bottom w-80 h-10 px-3 mt-auto text-sm font-medium bg-gray-200 rounded hover:bg-gray-300"
              onClick={handleSubmit}>
              <span className="ml-2 leading-none pt-3"> Add New Product</span>
  </div>



  <Link to="/adminproducts" className=" m-10 flex justify-center object-bottom w-80 h-10 px-3 mt-auto text-sm font-medium bg-gray-200 rounded hover:bg-gray-300">
              <span className="ml-2 leading-none pt-3"> Go To Products Page</span>
  </Link>
  

  
  </div>

  </div>
  </div>




      <div className="brand-info">

         
          <div className="" >
            {brand != "" ? 
                <span className="\">
                  {brand.brand_name}
                </span>
            :
            <></>      
            }
          </div>

          
          
          <div className="" >
          {brand != "" ? 
                <span className="">
                  {brand.founder}
                </span>
            :
            <></>      
            }
          </div>
          <div className="" >
          {brand != "" ? 
                <span className="">
                  {brand.email}
                </span>
            :
            <></>      
            }
          </div>
          <div className="" >
          {brand != "" ? 
                <span className="">
                  {brand.verified}
                </span>
            :
            <></>      
            }
          </div>

          

      </div>

  </div>

    </>
  )
}

export default Adminforms