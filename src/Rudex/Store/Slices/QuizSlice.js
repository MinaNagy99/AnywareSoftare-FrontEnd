import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import globalVarible from "../../../GlobalVaribale.js";

let token = localStorage.getItem('token')
let initialState={quizes:[],isLoading:false}
export let getQuizes = createAsyncThunk("quiz/getQuizes",async()=>{
    try {
        let {data} = await axios.get(`${globalVarible.baseURL}/quiz`,{
            headers:{token}
        })
        return data
    } catch (error) {
        
    }
})
let quizSlice = createSlice({
    name:'quiz',
    initialState,
    extraReducers:{
        [getQuizes.pending]:(state)=>{
            state.isLoading=true
        },
        [getQuizes.fulfilled]:(state,action)=>{
            state.quizes=action.payload
            state.isLoading=false

        }
    }
})

export let quizReducer = quizSlice.reducer