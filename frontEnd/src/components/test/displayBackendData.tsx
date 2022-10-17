import React, {useState} from "react";
import { Link, useNavigate } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import loginImg from '../assets/login.jpg'
import axios from 'axios';

export default function displayBackendData () {

  const getData = async() =>{

    let allProductData = await axios.get('/getAllProducts');
    let productData = await axios.get('/getProduct/41814b55-0985-49b5-8835-77761bce5bc1');
    let allBrandsData = await axios.get('/getAllBrands');
    let brandData = await axios.get('/getBrands/cf9ec97a-e451-4378-8419-0e9bba2d95ef');
    let image = await axios.get('/getImage/0d83649e-ae79-4aa1-ac69-310013138705')
  
    console.log(allProductData.data);
    console.log(productData.data);
    console.log(allBrandsData.data);
    console.log(brandData.data);
    console.log(image.data);

  }

  getData()


  return (
    <>
    </>
  )
}