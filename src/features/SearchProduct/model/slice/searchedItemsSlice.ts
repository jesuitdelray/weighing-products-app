import { IProduct } from "entities/Product/model/types/productSchema"
import { IProductSectionSchema } from "entities/Section/model/types/sectionSchema"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState = {
    sections: [] as IProductSectionSchema[],
    allProducts: [] as IProduct[],
}

export const searchedItemsSlice = createSlice({
    name: "searchedItems",
    initialState,
    reducers: {
        setSearchedSections: (state, action: PayloadAction<IProductSectionSchema[]>) => {
            state.sections = action.payload
        },
        setSearchedProducts: (state, action: PayloadAction<IProduct[]>) => {
            state.allProducts = action.payload
        },
        setAllSearchedItems: (
            state,
            action: PayloadAction<{ sections: IProductSectionSchema[]; allProducts: IProduct[] }>
        ) => {
            state.sections = action.payload.sections
            state.allProducts = action.payload.allProducts
        },
        clearSearchedItems: state => {
            state.sections = []
            state.allProducts = []
        },
    },
})

export const { reducer: searchedItemsReducer, actions: searchedItemsActions } = searchedItemsSlice
