import React, {useState, useEffect} from "react";
import { authActions } from "../slice/AuthSlice";
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux';

import './css/Brand.css'


const Brand = () => {

  const brand = useSelector((state:{auth: {brand: any}}) => state.auth.brand)

  const dispatch = useDispatch()


  useEffect(() => {
    window.scrollTo(0, 0)

  }, [])



  console.log(brand)

  return (
    <>
      <div className="container_">
            <h1 className="product_name">{brand.name}</h1>

            <div className="image_div_brand">
              <img className="image_brand" src={brand.image.image}/>
            </div>
        

            <h2 className="sub_header">Description:</h2>
            <div>{brand.description}</div>

      </div>
      

    </>
  )
}

export default Brand