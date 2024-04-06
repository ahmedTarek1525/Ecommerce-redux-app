import { createSlice } from "@reduxjs/toolkit";

export const createSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
        amount: 0,
        totalAmount: 0,
        totalPrice: 0,
    },
    reducers: {
        addToCart(state, action){

        }
    }
});

export const {addToCart} = createSlice.actions;
export default createSlice.reducer