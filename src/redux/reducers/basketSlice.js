
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getBasketThunk = createAsyncThunk('api/basket', async () => {
    const response = await axios.get('http://localhost:3000/basket')
    return response.data
})


export const basketSlice = createSlice({
    name: 'basket',
    initialState:{
        products:[]
    },
    reducers:{},
    extraReducers:builder => {
        builder
        //get
        .addCase(getBasketThunk.fulfilled, (state, action) => {
            state.loading = false
            state.basket = action.payload
        })
        .addCase(getBasketThunk.pending, (state) => {
            state.loading = true
        })
        .addCase(getBasketThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
      
    }
})

export default basketSlice.reducer