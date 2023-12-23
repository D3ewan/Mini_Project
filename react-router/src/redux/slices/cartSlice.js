import { createSlice } from "@reduxjs/toolkit"


const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: {
        cart: []
    },
    reducers: {
        addToCart: (state, action) => {
            // const cartItem:cart.find()
        }
    }
})