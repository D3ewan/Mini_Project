import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../redux/slices/productSlice';


export default configureStore({
    reducer: {
        productReducer
    }
})