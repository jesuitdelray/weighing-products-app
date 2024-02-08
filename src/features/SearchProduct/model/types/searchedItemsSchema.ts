import { IProduct } from "entities/Product/model/types/productSchema"
import { IProductSectionSchema } from "entities/Section/model/types/sectionSchema"

export interface ISearchedItemsSchema {
    allProducts: IProduct[]
    sections: IProductSectionSchema[]
}
