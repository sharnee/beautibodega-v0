import React, {useState, useEffect} from "react";
import { authActions } from "../slice/AuthSlice";
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux';

import './css/Product.css'


const Product = () => {

  const product = useSelector((state:{auth: {product: any}}) => state.auth.product)

  const dispatch = useDispatch()

  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    window.scrollTo(0, 0)

  }, [])

  const handleAddCart = () => {
    
    let productAltered = {...product}

    productAltered['quantityInCart'] = quantity

    dispatch(authActions.setCart(productAltered))
  }
  

  console.log(product)

  return (
    <>
      <div className="container_">
            <h1 className="product_name">{product.name}</h1>

            <div className="image_div">
              <img className="image" src={product.image.image}/>
            </div>

            <div className="price">
              ${product.price}
            </div>

            <div className="quantity_selector">
              <button className="quant_button" onClick={()=>setQuantity(quantity -1)}>-</button>
              <div className="quant">{quantity}</div>
              <button className="quant_button" onClick={()=>setQuantity(quantity +1)}>+</button>
            </div>
            
            <div className="add_to_cart_cont">
              <button onClick={handleAddCart} className="add_to_cart">Add To Cart</button>
            </div>

            <h2 className="sub_header">Description:</h2>
            <div>{product.description}</div>

            <h2 className="sub_header">Ingredients:</h2>
            <div>{product.ingredients}</div>

            <h2 className="sub_header">Instructions:</h2>
            <div>{product.instructions}</div>
      </div>
      

    </>
  )
}

export default Product