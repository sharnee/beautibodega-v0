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
    <div className="bg-white">
    <div className="text-2xl">Shop The Beauty Aisles</div> 

    <div className='flex flex-row pt-3'>
      <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={()=>navigate("/shop")}>Shop Skin</button>
      <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={()=>navigate("/shop")}>Shop Makeup</button>
      <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={()=>navigate("/shop")}>Shop Hair</button>
      <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={()=>navigate("/shop")}>Shop Nails</button>
    </div>
    
    <div className='flex flex-row pt-3'>

    </div>
    {brands.map((brand:any)=>{
          return <a className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={brand.image} alt=""/>
          <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{brand.brand_name}</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{brand.description}</p>
          </div>
          <button type="button" className=" inline-flex items-center py-2 px-3 text-sm font-medium text-centerfocus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900" onClick={()=>navigate("/shop")}>Visit The Shop</button>
        </a>
    })}

    </div>
  );
}

export default App;
