import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'



const authSlice = createSlice({ 
    name: 'auth',
    initialState: {
        token: "",
        error: "",
        user: {},
        pic: "",
        brand: [],
        product: [],
        editProduct: [],
        cart:[]
        // shopFilters:{
        //     makeup: true,
        //     hair: true,
        //     nails: true,
        //     skin: true
        // }

    },
    reducers: {
        loadUserToken: (state,action)=>{
            state.token = action.payload
        },
        error: (state,action)=>{
            state.error = action.payload
        },
        setEditProduct: (state,action)=>{
            state.editProduct = action.payload
        },
        signUp: (state,action)=>{
            async function name() {
                try {
                    console.log(action.payload, "payload")
                    let response = await axios.post('/register', action.payload)
                    // console.log(response)
                    // let jwt = response.data.token

                    // state.token = jwt

                } catch (error) {
                   
                    console.log(error);

                }
            }
            name()
        },
        logout: (state,action)=>{
            state.user = {}
        },
        signUpA: (state,action)=>{
            async function name() {
                try {
                    console.log(action.payload, "payload")
                    let response = await axios.post('/registerAdmin', action.payload)
                    // console.log(response)
                    // let jwt = response.data.token

                    // state.token = jwt

                } catch (error) {
                   
                    console.log(error);

                }
            }
            name()
        },
        signUpBrand: (state,action)=>{
            async function name() {
                try {
                    console.log(action.payload, "payload")
                    let response = await axios.post('/registerBrand', action.payload)
                    // console.log(response)
                    // let jwt = response.data.token

                    // state.token = jwt

                } catch (error) {
                   
                    console.log(error);

                }
            }
            name()
        },
        uploadImage: (state,action)=>{
            async function name() {
                try {

                    let response = await axios.post('/uploadImage', action.payload)

                } catch (error) {
                   
                    console.log(error);

                }
            }
            name()
        },
        uploadProduct: (state, action)=>{
            async function name() {
                try {

                    let response = await axios.post('/uploadProduct', action.payload)

                    alert("Product successfully added!")

                } catch (error) {

                    alert("Product was not added!" +
                    "\n" + error)

                    console.log(error);
                   
                    

                }
            }
            name()
        },
        editProduct: (state, action)=>{
            async function name() {
                try {

                    let response = await axios.post('/editProduct', action.payload)

                    alert("Product successfully edited!")

                } catch (error) {

                    alert("Product was not added!" +
                    "\n" + error)

                    console.log(error);
                   
                    

                }
            }
            name()
        },
        handleDelete: (state, action)=>{
            async function name() {
                try {

                    let response = await axios.post('/deleteProduct', action.payload)

                } catch (error) {

                    console.log(error);
                   
                }
            }
            name()
        },
        updateProfile: (state,action)=>{
            async function name() {
                try {
                    console.log("inside update profile auth")
                    console.log(action.payload);
                    let response = await axios.post('/updateProfile', action.payload)

                    // console.log(response.data.user[0], "response")

                    // state.user = response.data.user[0]

                    // state.pic = response.profilePic
                    
                } catch (error) {
                   
                    console.log(error);

                }
            }
            name()
        },
        login: (state,action)=>{

            console.log("token timeout and forgot password needs to be setup")

            function name() {

                try {
                    
                    console.log(action.payload)
                    // let response = await axios.post('/login', action.payload)
                    // console.log(response)
                    let jwt = action.payload.data.token
                    let user = action.payload.data.user[0]
                    let pic = action.payload.data.profilePic

                    console.log(pic)
                    console.log(action.payload.data.user);
                    console.log(jwt)
                    // console.log(user[0]);
                    state.pic = pic

                    state.user = user

                    // console.log(state.user);
    
                    state.token = jwt

                    
                    console.log(state.token)

                } catch (error) {
                    
                    console.log(error);

                }

            }
            name()
        },
        updateGeneral: (state,action)=>{
            
        },
        setProduct: (state, action)=>{
            
            state.product = action.payload
        },
        setBrand: (state, action)=>{
            
            state.brand = action.payload
        },
        setCart: (state: any, action: any)=>{

            state.cart = [...state.cart, action.payload]
        },
        setCartQuantity: (state: any, action: any)=>{

            for(let i = 0; i < state.cart.length; i++){



                if(state.cart[i].name == action.payload.name){

                  
                    state.cart[i].quantityInCart = action.payload.quantity
                }

                break
            }
        },
        deleteCartItem: (state: any, action: any)=>{
            

            for(let i = 0; i < state.cart.length; i++){


                if(state.cart[i].name == action.payload.name){

                    console.log('fuck you again')

                    state.cart.splice(i, 1)
                    
                    break
                }

            }
        }
    },

 })

 export const authActions = authSlice.actions

 export default authSlice.reducer