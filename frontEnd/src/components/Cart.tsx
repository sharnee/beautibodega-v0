import React, {useState, useEffect} from "react";
import {authActions} from '../slice/AuthSlice';
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux';

import './css/Cart.css'




const Cart = () => {

    const cart = useSelector((state:{auth: {cart: any}}) => state.auth.cart)

    const dispatch = useDispatch()

    const [empty, setEmpty] = useState(false)
    const [total, setTotal] = useState(0)

    const [copy, setCopy] = useState<any>([])
    
    
    useEffect(() => {
        window.scrollTo(0, 0)
    
        if(cart.length == 0){
            setEmpty(true)
        }

        setCopy([...cart])

        const setTotalCost = () => {

            let runningTotal = 0

            cart.forEach((obj: any)=>{

                runningTotal += obj.price * obj.quantityInCart
            })

            setTotal(runningTotal)
        }

        setTotalCost()

      
    }, [])

    console.log(cart);
    console.log(total)

    
  return (
    <>
    {empty ? <div className="emptyMsg">There are no items in your cart</div> : 
    
    
    <>
<div className="_container">

    {cart.map((obj: any, index: any)=>{

        return (
                <div className="productDiv">
                    <img className="imag" src={obj.image.image}/>
                    <div className="productName">
                        {obj.name}
                    <div title={index} className="priceDiv"> ${obj.quantityInCart * obj.price}</div>
                    </div>
                   
                    
                    <div className="quantity_selector1">

                        <button title={index} id='increase' onClick={
                            ()=>{dispatch(authActions.setCartQuantity({quantity: obj.quantityInCart + 1, name: obj.name}))
                            
                            window.location.reload();
                        }
                        
                    } className="quant_button1">+</button>

                            <div className="quant1">{obj.quantityInCart}</div>

                    <button title={index} id='increase' onClick={
                        ()=>{dispatch(authActions.setCartQuantity({quantity: obj.quantityInCart - 1, name: obj.name}))

                        window.location.reload();
                    }
                        
                        } className="quant_button1">-</button>
                    </div>

                    <button onClick={
                        ()=>{dispatch(authActions.deleteCartItem({name: obj.name}))

                        window.location.reload();

                    }
                        } className="close">x</button>
                </div>
        );
    })}

    <div className="check-total-sc">
        Total: {total}
    </div>

    </div>
    </>
    
    
    }
    </>
  )
}

export default Cart