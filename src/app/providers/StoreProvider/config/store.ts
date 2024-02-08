import { configureStore } from "@reduxjs/toolkit"
import { StateSchema } from "./StateSchema"
import { sectionReducer } from "@/entities/Section/model/slice/sectionSlice"
import { productReducer } from "@/entities/Product/model/slice/productSlice"
import { searchedItemsReducer } from "@/features/SearchProduct/model/slice/searchedItemsSlice"

export function createReduxStore(initialState?: StateSchema) {
    return configureStore({
        reducer: {
            product: productReducer,
            section: sectionReducer,
            searchedItems: searchedItemsReducer,
        },
        preloadedState: initialState,
    })
}
export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"]
