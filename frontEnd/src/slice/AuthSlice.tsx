import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const authSlice = createSlice({ 
    name: 'auth',
    initialState: {
        token: "",
        error: ""
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
                    console.log(response)
                    let jwt = response.data.token

                    state.token = jwt

                } catch (error) {
                   
                    console.log(error);

                }
            }
            name()
        },
        login: (state,action)=>{

            console.log("token timeout and forgot password needs to be setup")

            async function name() {

                try {
                    
                    let response = await axios.post('/login', action.payload)
                    console.log(response)
                    let jwt = response.data.token
    
                    state.token = jwt

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