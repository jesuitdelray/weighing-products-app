import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IProductSectionSchema } from "../types/sectionSchema"

const initialState: IProductSectionSchema = {
    id: 0,
    name: "",
    products: [],
    backgroundImg: "",
}

export const sectionSlice = createSlice({
    name: "section",
    initialState,
    reducers: {
        setProductSection: (state, action: PayloadAction<string>) => {
            state.name = action.payload
        },
        clearProductSection: state => {
            state.name = ""
        },
    },
})

export const { reducer: sectionReducer, actions: sectionActions } = sectionSlice
