import { StateSchema } from "app/providers/StoreProvider"

export const selectProductData = (state: StateSchema) => state?.product.product
