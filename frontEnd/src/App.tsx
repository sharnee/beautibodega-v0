import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';


function App() {

  const [brands, setBrands] = useState<any>([])
  // const [brandPic, setBrandPic] = useState<any>()

  const navigate = useNavigate();

useEffect( () => {

  axios.get('/getFrontPage')
  .then((response:any)=>{
    setBrands(response.data)
    console.log(brands,"brand")
  })

  // console.log(brand,"brand in use Effect")

  // axios.get(`/getImage/${brand.logo}`)
  // .then((response:any)=>{
  //   setBrandPic(response.data)
  // })
 

  // async function fetchData(){

  // let brandData = await axios.get('/getBrands/cf9ec97a-e451-4378-8419-0e9bba2d95ef');

  // }


}, [])

console.log(brands,"brand")

  return (
    <div className="bg-white font-Caslon">
    <div className="text-xl pt-5 pb-2">Shop The Beauti Aisles</div> 

    <div className='flex flex-row pt-3 pb-8 justify-center'>
      <button type="button" className="text-sm" onClick={()=>navigate("/shop")}><img src="placeholderAssets/Product-Image-6.png" className="w-[100px] h-[100px] object-scale-down " alt="" />Shop Skin</button>
      <button type="button" className="text-sm" onClick={()=>navigate("/shop")}><img src="placeholderAssets/Product-Image-9.png" className="w-[100px] h-[100px] object-scale-down" alt="" />Shop Beauti</button>
      <button type="button" className="text-sm" onClick={()=>navigate("/shop")}><img src="placeholderAssets/Product-Image-2.png" className="w-[100px] h-[100px] object-scale-down" alt="" />Shop Hair</button>
      <button type="button" className="text-sm" onClick={()=>navigate("/shop")}><img src="placeholderAssets/Product-Image-1.png" className="w-[100px] h-[100px] object-scale-down" alt="" />Shop Nails</button>


    </div>
    <div className=''>
      <img src="placeholderAssets/Landing-1.png" className="  object-cover top-10  object-top w-full h-[250px] rounded-lg" alt="" />
      <div className='text-xs font-light py-2'>The Article Tag</div>
      <div className='text-xl font-light'>Beauty, Haircare & Skincare</div>
      <div className='text-xl font-light'>For The Rest of Us.</div>
      <hr className="my-4  w-28 h-2 bg-tan "/>
      <div>Easily shop the products your favorite creators use every day so you can live the lifestyle.</div>

        <div className="py-4">
          <div className=" flex justify-center object-bottom  h-10 px-3 mt-auto text-sm font-medium bg-tan rounded hover:bg-gray-300"
            >
            <span className="ml-2 leading-none pt-3"> Shop the Beauti Aisles</span>
        </div>
        </div>
        <div className='text-xl font-light'>Shop Our Top Creators</div>
        <div className='flex pt-2 '>
        <img src="placeholderAssets/Social-Post-5.jpeg" className="  object-cover top-10  object-top w-[125px] h-[125px] p-1  rounded-xl" alt="" />
        <img src="placeholderAssets/IMG_1509.jpg" className="  object-cover top-10  object-top w-[125px] h-[125px] p-1 rounded-xl" alt="" />
        <img src="placeholderAssets/skin-30.png" className="  object-cover top-10   w-[125px] h-[125px] p-1 rounded-xl" alt="" />

        </div>
        <div className="py-4">
          <div className=" flex justify-center object-bottom  h-10 px-3 mt-auto text-sm font-medium bg-tan rounded hover:bg-gray-300"
            >
            <span className="ml-2 leading-none pt-3"> Shop the Beauti Creators</span>
        </div>
        <div className='text-xl font-light pt-8 pb-5'>Shop Our Top Brands</div>
        <div className='flex pb-4'>
        <div className='text-xs text-light text-gray-700'>Hair <img src="placeholderAssets/Social-Post-5.jpeg" className="  object-cover top-10 pr-1 object-top w-[200px] h-[100px]   rounded-xl" alt="" /></div>
        <div className='text-xs text-light text-gray-700'>Hair <img src="placeholderAssets/Social-Post-5.jpeg" className="  object-cover top-10 pr-1  object-top w-[200px] h-[100px]   rounded-xl" alt="" /></div>


        </div>
        <div className='flex pb-6'>
        <div className='text-xs text-light text-gray-700'>Hair <img src="placeholderAssets/Social-Post-5.jpeg" className="  object-cover top-10 pr-1 object-top w-[200px] h-[100px]   rounded-xl" alt="" /></div>
        <div className='text-xs text-light text-gray-700'>Hair <img src="placeholderAssets/Social-Post-5.jpeg" className="  object-cover top-10 pr-1  object-top w-[200px] h-[100px]   rounded-xl" alt="" /></div>


        </div>
        </div>
        
    </div>

    {/* {brands.map((brand:any)=>{
          return <a className="flex flex-col  items-center bg-white rounded-lg border shadow-md  md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={brand.image} alt=""/>
          <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{brand.brand_name}</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{brand.description}</p>
          </div>
          <button type="button" className=" inline-flex items-center py-2 px-3 text-sm font-medium text-centerfocus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900" onClick={()=>navigate("/shop")}>Visit The Shop</button>
        </a>
    })} */}

    </div>
  );
}

export default App;
