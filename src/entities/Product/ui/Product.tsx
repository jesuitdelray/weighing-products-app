import { IProduct } from "../model/types/productSchema"
import styles from "./Product.module.scss"

interface IProductProps {
    productData: IProduct
    className: string
    handleProductClick: (product: any) => void
}

export function Product({ productData, className, handleProductClick }: IProductProps) {
    const { name, id, cost } = productData
    return (
        <div
            key={`${name}${id}`}
            className={className}
            onClick={product => handleProductClick(product)}
        >
            <p className={styles.productName}>{name}</p>
            <p className={styles.productName}>{cost}$</p>
        </div>
    )
}
