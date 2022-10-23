import React, {useState, useEffect} from "react";
import { authActions } from "../slice/AuthSlice";
import axios from 'axios';
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux';
import { Link } from "react-router-dom";

import './css/Brand.css'


const Brand = () => {

  const brand = useSelector((state:{auth: {brand: any}}) => state.auth.brand)

  const [products, setProducts] = useState <any>([])

  

  const dispatch = useDispatch()


  useEffect(() => {

    window.scrollTo(0, 0)

    const getProducts = async() =>{

        let products = brand.products.split(', ')
        let productArr = []
    
        for(let i = 0; i < products.length; i++){
            
            if(products[i] != ''){
    
                let response = await axios.get(`/getProduct/${products[i]}`)
                productArr.push(response.data)
            }
        }

        for(let i = 0; i < productArr.length; i++){

            let response = await axios.get(`/getImage/${productArr[i].thumbnail}`)
            productArr[i]['image'] = response.data
        }

        setProducts([...productArr])

        
    }

    getProducts()
    

}, [])


  console.log(products)
  console.log(brand)

  return (
    <>
      <div className="container_">
            <h1 className="product_name">{brand.name}</h1>

            <div className="image_div_brand">
              <img className="image_brand" src={brand.image.image}/>
            </div>

            <iframe height="300" src={brand.video_link} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        

            <h2 className="sub_header">Description</h2>
            <div>{brand.description}</div>

            <h2 className="sub_header">CEO</h2>
            <div>{brand.founder}</div>

            <h2 className="sub_header">Email</h2>
            <div>{brand.email}</div>

            <h2 className="sub_header">Phone</h2>
            <div>{brand.phone}</div>

            <h2 className="sub_header">Products</h2>
            <div className="flex products">
                {products.map((obj:any)=>{

                    return(
                        <>
                            <div className="product">
                                <>
                                    <Link onClick={()=>dispatch(authActions.setProduct(obj))} to="/product">
                                            <img src={obj.image.image}/>
                                            <p>{obj.name}</p>
                                            <p>${obj.price}</p>
                                    </Link>
                                </>
                                
                            </div>
                        </>
                    );
                })}
                
                </div>




      </div>
      

    </>
  )
}

export default Brand