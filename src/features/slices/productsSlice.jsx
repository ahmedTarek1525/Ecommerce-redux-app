import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/dummyData";

export const productsSlice = createSlice({
    name: "products",
    initialState: {
        filteredProducts: JSON.parse(sessionStorage.getItem("filteredData")) || storeData,
        singleProduct: JSON.parse(sessionStorage.getItem("filteredData")) || storeData,
    },
    reducers: {
        filteredProducts(state , action) {
            try {
                const filter = storeData.filter((product) => product.type === action.payload);
                state.filteredProducts = filter;
                console.log("filter" , filter);
                const saveState = JSON.stringify(filter);
                sessionStorage.setItem("filteredData" , saveState);      
            } catch (err) {
                return err;
            }
        },
        singleProduct(state , action) {
            try {
                const oneProduct = storeData.filter((product) => product.id === action.payload);
                state.singleProduct = oneProduct;
                const saveState = JSON.stringify(oneProduct);
                sessionStorage.setItem("oneProduct" , saveState); 
            } catch (err) {
                return err;
            }
        }
    }
})

export const {filteredProducts , singleProduct} = productsSlice.actions;
export default productsSlice.reducer;