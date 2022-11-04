import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


const cartSlice = createSlice({ 
    name: 'cart',
    initialState: {
        cart:[]
        // shopFilters:{


    },
    reducers: {
        setCart: (state: any, action: any)=>{

            state.cart = [...state.cart, action.payload]

            state.cartTotal = state.cart.reduce((prev:any, product:any) =>{

                return parseFloat(prev + product.quantityInCart * product.price)
            }, 0)
        },
        setCartQuantity: (state: any, action: any)=>{

            console.log('in state');

            for(let i = 0; i < state.cart.length; i++){

                console.log('in state');
                console.log(state.cart[i].name);
                console.log(action.payload.name)

                if(state.cart[i].name == action.payload.name){

                    console.log('in if')
                  
                    state.cart[i].quantityInCart = action.payload.quantity
                    break
                }

            }

            state.cartTotal = state.cart.reduce((prev:any, product:any) =>{

                return parseFloat(prev + product.quantityInCart * product.price)
            }, 0)
        },
        cartTotal: (state: any, action: any)=>{
            
        state.cartTotal = state.cart.reduce((prev:any, product:any) =>{

            return parseFloat(prev + product.quantityInCart * product.price)
        }, 0)
            
        },

        deleteCartItem: (state: any, action: any)=>{
            

            for(let i = 0; i < state.cart.length; i++){


                if(state.cart[i].name == action.payload.name){


                    state.cart.splice(i, 1)
                    
                    break
                }

            }


            state.cartTotal = state.cart.reduce((prev:any, product:any) =>{

                return parseFloat(prev + product.quantityInCart * product.price)
            }, 0)
        }
    },

 })

 export const cartActions = cartSlice.actions

 export default cartSlice.reducer