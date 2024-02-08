import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IProductSchema } from "../types/productSchema"

const initialState: IProductSchema = {
    product: {
        id: 0,
        name: "",
        cost: 0,
    },
}

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setChosenProduct: (state, action: PayloadAction<IProductSchema>) => {
            state = action.payload
        },
    },
})

export const { reducer: productReducer, actions: productActions } = productSlice
