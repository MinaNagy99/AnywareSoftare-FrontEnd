import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import globalVarible from "../../../GlobalVaribale.js";

let token = localStorage.getItem('token')
let initialState={user:[],isLoading:false}
export let getUserData = createAsyncThunk("user/getUserData",async()=>{
    try {
        let {data} = await axios.get(`${globalVarible.baseURL}/user/spasificUser`,{
            headers:{token}
        })
        return data
    } catch (error) {
        
    }
})
let userSlice = createSlice({
    name:'user',
    initialState,
    extraReducers:{
        [getUserData.pending]:(state)=>{
            state.isLoading=true
        },
        [getUserData.fulfilled]:(state,action)=>{
            state.user=action.payload
            state.isLoading=false

        }
    }
})

export let userReducer = userSlice.reducer