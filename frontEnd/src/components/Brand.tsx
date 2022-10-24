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
        let productsArr: any = []

    
        for(let i = 0; i < products.length; i++){
            
            if(products[i] != ''){

              productsArr.push(products[i])
            }
        }

        let product = await axios.post('/getProductsForBrand', {productsArr})
        let imageArr: any = []

        for(let i = 0; i < product.data.length; i++){

          imageArr.push(product.data[i].thumbnail)

        }

        console.log(imageArr);

        let images = await axios.post('/getImages', {imageArr})

        console.log(images);

        let cache:any = {}

        for(let i = 0; i < images.data.length; i++){
        
            cache[images.data[i].id] = images.data[i]
        }

        for(let i = 0; i < product.data.length; i++){

          product.data[i]['image'] = cache[product.data[i].thumbnail]
        }

        setProducts([...product.data])

        // for(let i = 0; i < productArr.length; i++){

        //     let response = await axios.get(`/getImage/${productArr[i].thumbnail}`)
        //     productArr[i]['image'] = response.data
        // }

        // setProducts([...productArr])

        
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