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
import { setConstantValue } from 'typescript';


function Adminproducts() {

    const [brand, setBrand] = useState<any>('')
    const [brandProducts, setBrandProducts] = useState<any>([])
    const [selectedProducts, setSelectedProducts] = useState<any>([])
    
    const user = useSelector((state:{user: {user: any}}) => state.user.user)

    const dispatch = useDispatch()
    
    useEffect(() => {
          
    
        const getBrand = async() =>{
            
            let id: any = user.id
            
            let brand_res: any = await axios.get(`/getBrandByAdmin/${id}`)
            
            let image = await axios.get(`getImage/${brand_res.data.logo}`)
            
            brand_res.data['image'] = image.data

            console.log(brand_res.data)
            
            setBrand( brand_res.data )
            
            getProducts( brand_res.data )
        }
    

        const getProducts = async( brandData: any ) =>{
            
            let products = brandData.products.split(', ')
            let arr: any= []

            for(let i = 0; i < products.length; i++){
                
                if(products[i] != ""){

                    let product: any = await axios.get(`/getProduct/${products[i]}`)
    

                    arr.push(product)
                }

            }

            setBrandProducts([...arr])
            
        }

        getBrand()

    
      }, [])

      const handleDelete = () =>{

        console.log('clicked');
        
        for(let i = 0; i < selectedProducts.length; i++){
            
            for(let j = 0; j < brandProducts.length; j++){

                console.log('in the for loop')

                if(brandProducts[j].data.name == selectedProducts[i]){

                    console.log('in the if statement');

                    dispatch(authActions.handleDelete({user, product: brandProducts[j].data}))

                    break
                }
            }
        }

        window.location.reload();
      }

      const selectObj = (e: any) => {

        let arr = [...selectedProducts]

        if(selectedProducts.includes(e.target.id)){

            let index = selectedProducts.indexOf(e.target.id)

            console.log(index)

            let newArr = arr.splice(index, 1)

            console.log(newArr);

            setSelectedProducts([...arr])


        } else {

            arr.push(e.target.id)

            setSelectedProducts([...arr])

        }
      }
    

      console.log(brandProducts)



  return (
    <>
<div className="flex w-screen h-[100vh] text-gray-700 bg-beige bg-cover font-Caslon font-light">
<div className="flex flex-col items-center w-72 pb-4 overflow-auto  border-gray-300">
    <div className="flex items-center justify-center flex-shrink-0 w-full h-16 p-10">
    {brand != "" ? 
    <img src={brand.image.image} />
    :
    <></>
  }

    </div>
</div>

{/* <button onClick={()=> console.log(selectedProducts)}>Test</button> */}

<div className=" left-1/2 -ml-0.5 w-0.5 h-5/6 bg-gray-500 mt-16"></div>

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

<div className=" ">
<div className="main-table-ap">
<table className="w-full text-sm text-left  text-gray-500 dark:text-gray-400 overflow-auto">
<caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white ">
  Products
  <p className="mt-1 text-sm font-normal flex justify-end text-gray-500 dark:text-gray-400">      
  
<Link to="/adminforms">

    <button className="  font-semibold hover:text-white py-2 px-2 border bg-olive hover:border-transparent rounded">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
    </button>

</Link>

</p>


</caption>
<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:text-gray-400">
  <tr>
      <th scope="col" className="p-4">
      </th>
      <th scope="col" className="py-3 px-6">
          Product name
      </th>
      <th scope="col" className="py-3 px-6">
          Price
      </th>
      <th scope="col" className="py-3 px-6">
          Sales Price
      </th>
      <th scope="col" className="py-3 px-6">
          Quantity
      </th>
      <th scope="col" className="py-3 px-6">
          Action
      </th>
  </tr>
</thead>
<tbody>

    {brandProducts.map((obj: any)=>{


       return( 
       <>
            <tr className="bg-white border-b  dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="p-4 w-4">
                    <div className="flex items-center">
                        <input onChange={selectObj} id={obj.data.name} type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                        <label  className="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
                    {obj.data.name}
                </th>
                <td className="py-4 px-6">
                    {obj.data.price}
                </td>
                <td className="py-4 px-6">
                    {obj.data.sales_price}
                </td>
                <td className="py-4 px-6">
                    {obj.data.product_type}
                </td>
                <td className="py-4 px-6">
                    {obj.data.quantity}
                </td>
                <td className="py-4 px-6">
                    <Link onClick={()=>dispatch(authActions.setEditProduct(obj.data))} to="/editProducts" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                </td>
            </tr>
        </>
    );

    })}
  
</tbody>

</table>
<div className='p-12 flex justify-center '>

<div onClick={handleDelete} className=" flex justify-center object-bottom w-80 h-10 px-3 mt-auto text-sm font-medium bg-gray-200 rounded hover:bg-gray-300">
        <span onClick={handleDelete} className="ml-2 leading-none pt-3"> Delete Selected Products</span>
</div>

        </div>

</div>
</div>
</div>

<div className=" left-1/2 -ml-0.5 w-0.5 h-5/6 bg-gray-500 mt-16"></div>


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

export default Adminproducts