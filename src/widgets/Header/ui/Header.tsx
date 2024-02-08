import { useLocation, useNavigate } from "react-router-dom"
import { useAppDispatch } from "shared/lib/useAppDispatch/useAppDispatch"
import { useAppSelector } from "shared/lib/useAppSelector/useAppSelector"
import { Button } from "shared/ui/Button/Button"
import { SearchProduct } from "features/SearchProduct"
import styles from "./Header.module.scss"
import { searchedItemsActions } from "features/SearchProduct/model/slice/searchedItemsSlice"
import { useMemo, useState } from "react"
import { EPageRoutes } from "shared/const/Routes"
import { getSectionNameFromRoute } from "shared/lib/getSectionNameFromRoute/getSectionNameFromRoute"
import { sectionActions } from "entities/Section/model/slice/sectionSlice"
import { selectCurrentProductSection } from "entities/Section/model/selectors/sectionSelectors"

export function Header() {
    const productSection = useAppSelector(selectCurrentProductSection)
    const [searchValue, setSearchValue] = useState("")
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const location = useLocation()

    function changeSectionToInitial() {
        dispatch(sectionActions.clearProductSection())
        dispatch(searchedItemsActions.clearSearchedItems())
        setSearchValue("")
        navigate(EPageRoutes.getSectionPageRoute())
    }

    const sectionName = getSectionNameFromRoute(location.pathname)
    const isOnProductSectionPage = location.pathname === EPageRoutes.getSectionPageRoute()

    const displayedSectionTitle = useMemo(() => {
        switch (location.pathname) {
            case EPageRoutes.getSectionPageRoute():
                return "Products"
            case EPageRoutes.getSearchedListPageRoute():
                return "Searched Products"
            default:
                return productSection || sectionName
        }
    }, [location.pathname, productSection])

    return (
        <div className={styles.wrapper}>
            {!isOnProductSectionPage && (
                <Button className={styles.goBackButton} onClick={changeSectionToInitial}>
                    Back
                </Button>
            )}
            <p className={styles.currentProductSection}>{"hui" || displayedSectionTitle}</p>

            <SearchProduct
                className={styles.searchContainer}
                searchValue={searchValue || ""}
                onChange={e => setSearchValue(e)}
            />
        </div>
    )
}
