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
    <div className='p-5 lg:justify-end flex'>
        <form className="flex items-center">   
            <label className="sr-only">Search</label>
            <div className="relative pr-3 w-full">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                </div>
                <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-beige focus:border-beige block w-72 pl-10 p-2.5  " placeholder="Search" required/>
            </div>

        </form>

        <Link to="/cart">
            <button className="cart-button">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10 ">
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