import { IProduct } from "entities/Product/model/types/productSchema"

export interface IProductSectionSchema {
    id: number
    name: string
    products?: IProduct[]
    backgroundImg: any
}
