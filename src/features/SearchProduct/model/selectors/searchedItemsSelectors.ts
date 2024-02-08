import { StateSchema } from "@/app/providers/StoreProvider"

export const selectAllSearchedItemsData = (state: StateSchema) => state.searchedItems
export const selectCurrentProductsSection = (state: StateSchema) => state.searchedItems?.allProducts
