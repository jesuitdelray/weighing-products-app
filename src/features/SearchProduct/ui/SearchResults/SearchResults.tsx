import { IProduct } from "entities/Product/model/types/productSchema"
import styles from "./SearchResults.module.scss"
import { IProductSectionSchema } from "entities/Section/model/types/sectionSchema"

interface ISearchResultsProps {
    filteredProducts: IProductSectionSchema[]
    onProductClick: (product: IProduct) => void
    onSectionClick: (section: IProductSection) => void
    className: string
}

export function SearchResults({
    filteredProducts,
    onProductClick,
    onSectionClick,
    className,
}: ISearchResultsProps) {
    return (
        <div className={className}>
            {filteredProducts.map(item => (
                <div key={item.id}>
                    <h3 onClick={() => onSectionClick(item)} className={styles.foundedSection}>
                        {item.name}
                    </h3>
                    {item.products &&
                        item.products.map(product => (
                            <div
                                key={product.id}
                                className={styles.foundedProduct}
                                onClick={() => onProductClick(product)}
                            >
                                {product.name} - ${product.cost}
                            </div>
                        ))}
                </div>
            ))}
        </div>
    )
}
