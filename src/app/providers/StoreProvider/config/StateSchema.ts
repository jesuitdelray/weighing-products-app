import { ISearchedItemsSchema } from "features/SearchProduct/model/types/searchedItemsSchema"
import { IProductSchema } from "entities/Product/model/types/productSchema"
import { IProductSectionSchema } from "entities/Section/model/types/sectionSchema"

export interface StateSchema {
    product: IProductSchema
    section: IProductSectionSchema
    searchedItems: ISearchedItemsSchema
}
