import { useState } from "react"
import styles from "./SearchedListPage.module.scss"
import { ProductModal } from "@/entities/Product/ui/ProductModal/ui/ProductModal"
import { useAppSelector } from "@/shared/lib/useAppSelector/useAppSelector"
import { selectAllSearchedItemsData } from "@/features/SearchProduct/model/selectors/searchedItemsSelectors"
import { Product } from "@/entities/Product"
import { Section } from "@/entities/Section/ui/Section"
import { useAppDispatch } from "@/shared/lib/useAppDispatch/useAppDispatch"
import { useNavigate } from "react-router-dom"
import { EPageRoutes } from "@/shared/const/Routes"
import { sectionActions } from "@/entities/Section/model/slice/sectionSlice"
import { IProductSectionSchema } from "@/entities/Section/model/types/sectionSchema"
import { IProduct } from "@/entities/Product/model/types/productSchema"

export function SearchedListPage() {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState(null)

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const searchedData = useAppSelector(selectAllSearchedItemsData)

    function handleProductClick(product: any) {
        setSelectedProduct(product)
        setIsOpen(true)
    }

    function onClick(section: IProductSectionSchema) {
        navigate(EPageRoutes.getProductsPageRoute(`${section.name.toLowerCase()}=${section.id}`))
        dispatch(sectionActions.setProductSection(section.name))
    }

    return (
        <div className={styles.searchedItemsContainer}>
            <div className={styles.searchedItemsBlock}>
                <div className={styles.searchedSectionsBlock}>
                    {searchedData.sections &&
                        searchedData?.sections.map((item: IProductSectionSchema) => {
                            return (
                                <Section
                                    onClick={() => onClick(item)}
                                    sectionData={item}
                                    backgroundImage={`url(${item.backgroundImg})`}
                                    key={item.id}
                                />
                            )
                        })}
                </div>
                <div className={styles.searchedProductsBlock}>
                    {searchedData.allProducts &&
                        searchedData?.allProducts.map((item: IProduct) => {
                            return (
                                <Product
                                    productData={item}
                                    handleProductClick={() => handleProductClick(item)}
                                    className={styles.searchedItems}
                                    key={item.id}
                                />
                            )
                        })}
                </div>
            </div>
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
