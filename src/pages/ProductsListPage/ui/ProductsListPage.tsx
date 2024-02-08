import { useState } from "react"
import styles from "./ProductsListPage.module.scss"
import { ProductModal } from "@/entities/Product/ui/ProductModal/ui/ProductModal"
import { useParams } from "react-router-dom"
import { mockProductSections } from "@/pages/ProductsSectionPage/const/mockData"
import { Product } from "@/entities/Product"
import { IProduct } from "@/entities/Product/model/types/productSchema"

export function ProductsListPage() {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState(null)

    const { id } = useParams()

    const currentProductList =
        mockProductSections.find(item => {
            return `${item.name.toLowerCase()}=${item.id}` === id
        })?.products || []

    function handleProductClick(product: any) {
        setSelectedProduct(product)
        setIsOpen(true)
    }

    const content = (
        <div className={styles.productListBlock}>
            {currentProductList.map((product: IProduct) => (
                <Product
                    key={`${product.id}${product.name}`}
                    productData={product}
                    handleProductClick={() => handleProductClick(product)}
                    className={styles.product}
                />
            ))}
        </div>
    )

    return (
        <div className={styles.productsListContainer}>
            {content}
            {selectedProduct && (
                <ProductModal
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    productData={selectedProduct}
                />
            )}
        </div>
    )
}
