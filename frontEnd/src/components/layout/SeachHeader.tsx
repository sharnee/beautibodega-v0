import React, {useState, useEffect} from "react";
import {authActions} from '../../slice/AuthSlice';
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom'

import '../css/CartIcon.css'

const SeachHeader = () => {
  const cart = useSelector((state:{auth: {cart: any}}) => state.auth.cart)

  const [cartQuant, setCartQuant] = useState(0)

  useEffect(() => {

    setCartQuant(cart.length)
 

  }, [])
  

  return (
    <div className=' lg:justify-end p-1 flex font-Cursive '>

<img src="Beauty_Bodega.png" alt="Logo" className='w-[50px] h-[50px]'/>
<div className="text-3xl font-semibold pt-3 px-10 ">Beauti Bodega</div>
        <Link to="/cart">
            <button className=' cart-button'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-12 h-12">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
          {cartQuant != 0 ?
                    <div className="shopping-cart-icon">{cartQuant}</div>
                    :
                    <></>
          }
          </button>
        
        </Link>
    </div>
  )
}

export default SeachHeader