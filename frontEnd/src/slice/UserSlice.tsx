 import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


// export const getProfile:any = createAsyncThunk('user/getProfile', (data:any)=>{ //outdated
//     console.log(data)
//     console.log(data, "inside get profile slice");
//     console.log(data);
//     const {ID} = data
//     return axios.post('/getProfile',{ID: ID} )
// })

export const updateProfile:any = createAsyncThunk('user/getProfile', (data:any)=>{
    
    console.log(data, "inside get update profile slice");
    const {ID, tags, conpressedFileURL, pic, name, role, imageName, URL} = data
    return axios.post('/updateProfile',{ID, tags, conpressedFileURL, pic, name, role, imageName, URL} )
})

export const LoginDB:any = createAsyncThunk('user/loginDB', (data:any)=>{
    console.log(data , "login data");
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
        logout: (state,action)=>{
            state.token = action.payload
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
        // builder.addCase(getProfile.fulfilled, (state,action)=>{
        //     console.log(action.payload , "getProgile payload");
        //     state.loading = false
        //     state.user = action.payload.data.user[0]
        //     state.pic = action.payload.data.profilePic
        //     state.error = ''

        // })
        builder.addCase(updateProfile.fulfilled, (state, action)=>{
            console.log(action.payload , "updateProfile payload");
            state.loading = false
            state.user = action.payload.data.user[0]
            state.pic = action.payload.data.profilePic
            state.error = ''
        })

    }
 })

 export const userActions = userSlice.actions

 export default userSlice.reducer