import React from 'react'
import {useSelector} from 'react-redux';

import './css/Product.css'


const Product = () => {

  const product = useSelector((state:{auth: {product: any}}) => state.auth.product)

  console.log(product)

  return (
    <>

      <h1>{product.name}</h1>

      <div>
        <img src={product.image.image}/>
      </div>

      <div>{product.price}</div>


      <h2>Description:</h2>
      <div>{product.description}</div>

      <h2>Ingredients:</h2>
      <div>{product.ingredients}</div>

      <h2>Instructions:</h2>
      <div>{product.instructions}</div>

    </>
  )
}

export default Product