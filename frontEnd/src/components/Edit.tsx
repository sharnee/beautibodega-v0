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


function Edit() {

  const user = useSelector((state:{user: {user: any}}) => state.user.user)
  const product = useSelector((state:{auth: {editProduct: any}}) => state.auth.editProduct)
  
  console.log(user)
  console.log(product);

  const [brand, setBrand] = useState<any>('')

  const [id, setId] = useState<any>(product.id)
  const [imageURL, setImageURL] = useState<any>('')
  const [imageName, setImageName] = useState<any>(product.thumbnail)

  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(String(product.price));
  const [salesPrice, setSalesPrice] = useState(String(product.sales_price));
  const [description, setDescription] = useState(product.description);
  const [quantity, setQuantity] = useState(product.quantity);
  const [instructions, setInstructions] = useState(product.instructions);
  const [ingredients, setIngredients] = useState(product.ingredients);
  const [category, setCategory] = useState(product.product_type);

  const [originalFile, setOriginalFile] = useState<File | Blob>()
  const [originalFileURL, setOriginalFileURL] = useState("")
  const [compressedFile, setCompressedFile] = useState< File | Blob >()
  const [conpressedFileURL, setconpressedFileURL] = useState("")
  const [changedPhoto, setChangedPhoto] = useState(false)

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

    const getImage = async() => {

        let getImage = await axios.get(`/getImage/${imageName}`)

        console.log(getImage);

        setImageURL(getImage.data.image)
    }

    getImage()

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
    
    if (compressedFile == null)

    if(changedPhoto && compressedFile != null){

        setImageName(uuidv4())
    
        const imageRef = ref(storage, `images/${ imageName }`)
        let snapshot = await uploadBytes(imageRef, compressedFile);
        setImageURL(await getDownloadURL(snapshot.ref)) 
    }
      
    dispatch(authActions.editProduct({changedPhoto, id, imageName, imageURL, name, price, salesPrice, description, quantity, instructions, ingredients, category, brand}))


  }

  const fileSelectedHandler = (e: any) =>{

    setChangedPhoto(true)
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
        <p></p>
      </a>
      <a className="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded hover:bg-gray-300" href="#">
          <p></p>
      </a>
      <a className="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded hover:bg-gray-300" href="#">
        <p></p>
      </a>
      <a className="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded hover:bg-gray-300" href="#">
          <p></p>
      </a>
      <a className="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded hover:bg-gray-300" href="#">
          <p></p>
      </a>
      <a className="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded hover:bg-gray-300" href="#">
          <p></p>
      </a>
      <a className="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 mt-auto rounded hover:bg-gray-300" href="#">
          <p></p>
      </a>
  </div>


  <div className="overflow-x-auto relative  shadow-md sm:rounded-lg px-5  w-3/4">
  <div className="flex flex-col flex-grow">

  <div className="flex-grow py-6 overflow-auto bg-beige pt-20">
  <div className="grid grid-cols-5   gap-6">
  <div className="h-20 col-span-1 bg-white border border-gray-300"></div>
  <div className="h-20 col-span-1 bg-white border border-gray-300"></div>
  <div className="h-20 col-span-1 bg-white border border-gray-300"></div>
  <div className="h-20 col-span-1 bg-white border border-gray-300"></div>
  <div className="h-20 col-span-1 bg-white border border-gray-300"></div>


  </div>
  </div>
  </div>

  <div className=" bg-white background">

  <div className="grid grid-cols-3 gap-4 background">

    <div className="h-20 col-span-3 bg-white">
      <div className="bg-blue-400 w-96 h-20 "></div>
    </div>


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
            <input type="file" onChange={fileSelectedHandler}/>
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
  <a className=" m-10 flex justify-center object-bottom w-80 h-10 px-3 mt-auto text-sm font-medium bg-gray-200 rounded hover:bg-gray-300"
              onClick={handleSubmit}>
              <span className="ml-2 leading-none pt-3"> Edit Product </span>
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

export default Edit