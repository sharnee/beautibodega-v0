import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const authSlice = createSlice({ 
    name: 'auth',
    initialState: {
        token: "",
        error: "",
        user: {}
    },
    reducers: {
        loadUserToken: (state,action)=>{
            state.token = action.payload
        },
        error: (state,action)=>{
            state.error = action.payload
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
        login: (state,action)=>{

            console.log("token timeout and forgot password needs to be setup")

            function name() {

                try {
                    
                    console.log(action.payload)
                    // let response = await axios.post('/login', action.payload)
                    // console.log(response)
                    let jwt = action.payload.data.token
                    let user = action.payload.data.user[0]

                    console.log(action.payload.data.user);
                    console.log(jwt)
                    // console.log(user[0]);
                    
                    state.user = user

                    // console.log(state.user);
    
                    state.token = jwt

                    
                    console.log(state.token)

                } catch (error) {
                    
                    console.log(error);

                }

            }
            name()
        }
    }
 })

 export const authActions = authSlice.actions

 export default authSlice.reducer