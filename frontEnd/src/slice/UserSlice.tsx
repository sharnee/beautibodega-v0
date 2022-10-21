import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProfile:any = createAsyncThunk('user/getProfile', (data:any)=>{
    console.log(data, "inside get profile slice");
    const {ID} = data
    return axios.post('/getProfile',{ID: ID} )
})


export const LoginDB:any = createAsyncThunk('user/loginDB', (data:any)=>{
    const {email, password} = data
    return axios.post('/login',{email: email, password: password} )
    
})

const userSlice = createSlice({ 
    name: 'auth',
    initialState: {
        token: "",
        error: "",
        user: {},
        pic: "",
        loading: false
    },
    reducers: {
        loadUserToken: (state,action)=>{
            state.token = action.payload
        },
        error: (state,action)=>{
            state.error = action.payload
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
        }
    },
    extraReducers: builder =>{
        builder.addCase(LoginDB.pending, state=>{
            state.loading = true
        })
        builder.addCase(LoginDB.fulfilled, (state,action)=>{
            console.log(action.payload , "login payload");
            state.loading = false
            state.token = action.payload.data.token
            state.user = action.payload.data.user[0]
            state.pic = action.payload.data.profilePic
            state.error = ''

        })
        builder.addCase(LoginDB.rejected, (state, action)=>{
            state.loading = false
            state.token = ''
            state.user = {}
            state.pic = ''
            state.error = ''

        })
        builder.addCase(getProfile.fulfilled, (state,action)=>{
            console.log(action.payload , "login payload");
            state.loading = false
            state.user = action.payload.data.user[0]
            state.pic = action.payload.data.profilePic
            state.error = ''

        })

    }
 })

 export const authActions = userSlice.actions

 export default userSlice.reducer