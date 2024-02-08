import { useState, useMemo } from "react"
import styles from "./SearchProduct.module.scss"
import { ProductModal } from "@/entities/Product/ui/ProductModal/ui/ProductModal"
import { IProduct } from "@/entities/Product/model/types/productSchema"
import { mockProductSections } from "@/pages/ProductsSectionPage/const/mockData"
import { classNames } from "@/shared/lib/classNames/classNames"
import { Button, ButtonColor, ButtonVariant } from "@/shared/ui/Button/Button"
import { useNavigate } from "react-router-dom"
import { useAppDispatch } from "@/shared/lib/useAppDispatch/useAppDispatch"
import { searchedItemsActions } from "../model/slice/searchedItemsSlice"
import { useAppSelector } from "@/shared/lib/useAppSelector/useAppSelector"
import { selectAllSearchedItemsData } from "../model/selectors/searchedItemsSelectors"
import { SearchInput } from "./SearchInput/SearchInput"
import { SearchResults } from "./SearchResults/SearchResults"
import { EPageRoutes } from "@/shared/const/Routes"
import { useAsyncFunction } from "@/shared/lib/useAsyncFunction/useAsyncFunction"
import { sectionActions } from "@/entities/Section/model/slice/sectionSlice"

interface ISearchProduct {
    className?: string
    searchValue?: string
    onChange?: (e: string) => void
}

export function SearchProduct({ searchValue = "", className, onChange }: ISearchProduct) {
    const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null)
    const [isModalShown, setIsModalShown] = useState(false)

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const searchedData = useAppSelector(selectAllSearchedItemsData)

    const filteredProducts = useMemo(() => {
        const searchValueLower = searchValue.toLowerCase()
        const result = mockProductSections.flatMap(section => {
            const sectionMatches = section.name.toLowerCase().includes(searchValueLower)
            const productMatches = section.products?.filter((product: IProduct) =>
                product.name.toLowerCase().includes(searchValueLower)
            )

            if (sectionMatches) {
                return [{ ...section, products: [] }]
            } else if (productMatches.length > 0) {
                return [{ ...section, products: productMatches }]
            }
            return []
        })

        useAsyncFunction(() => {
            dispatch(
                searchedItemsActions.setAllSearchedItems({
                    sections: result,
                    allProducts: result.flatMap(section => section.products),
                })
            )
        })

        return result
    }, [searchValue, mockProductSections])

    function handleProductClick(product: IProduct) {
        setSelectedProduct(product)
        setIsModalShown(true)
    }

    function handleSectionClick(id: string, name: string) {
        navigate(EPageRoutes.getProductsPageRoute(id))
        dispatch(sectionActions.setProductSection(name))
    }

    function handleDisplayingSearchedItems() {
        if (searchValue) {
            dispatch(sectionActions.clearProductSection())
            navigate(EPageRoutes.getSearchedListPageRoute())
        }
    }

    function onCloseHandler() {
        setSelectedProduct(null)
    }

    return (
        <div className={className}>
            <div className={styles.inputContainer}>
                <SearchInput
                    onChange={e => onChange?.(e)}
                    searchValue={searchValue || ""}
                    className={styles.searchInput}
                />

                <SearchResults
                    filteredProducts={filteredProducts}
                    onProductClick={handleProductClick}
                    onSectionClick={section =>
                        handleSectionClick(
                            `${section.name.toLowerCase()}=${section.id}`,
                            section.name
                        )
                    }
                    className={classNames(styles.searchList, {
                        [styles.isShownSearchList]:
                            !!searchValue &&
                            (!!searchedData.allProducts.length || filteredProducts.length > 0),
                    })}
                />
            </div>
            {selectedProduct && (
                <ProductModal
                    isOpen={isModalShown}
                    onClose={onCloseHandler}
                    productData={selectedProduct}
                />
            )}
            <Button
                variant={ButtonVariant.FILLED}
                color={ButtonColor.ACCENT}
                className={styles.searchButton}
                onClick={handleDisplayingSearchedItems}
            >
                Search
            </Button>
        </div>
    )
}
