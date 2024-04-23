import { mockProductSections } from "../const/mockData"
import styles from "./ProductsSectionPage.module.scss"
import { useAppDispatch } from "@/shared/lib/useAppDispatch/useAppDispatch"
import { useNavigate } from "react-router-dom"
import { Section } from "@/entities/Section/ui/Section"
import { EPageRoutes } from "@/shared/const/Routes"
import { sectionActions } from "@/entities/Section/model/slice/sectionSlice"
import { IProductSectionSchema } from "@/entities/Section/model/types/sectionSchema"

export function ProductsSectionPage() {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    function onClick(section: IProductSectionSchema) {
        dispatch(sectionActions.setProductSection(section.name))
        navigate(EPageRoutes.getProductsPageRoute(`${section.name.toLowerCase()}=${section.id}`))
    }

    return (
        <div className={styles.productSectionContainer}>
            <div className={styles.productSectionBlock}>
                {mockProductSections.map((section, index) => (
                    <Section
                        onClick={onClick}
                        sectionData={section}
                        key={index}
                        test-id={`product-section`}
                        backgroundImage={`url(${section.backgroundImg})`}
                    />
                ))}
            </div>
        </div>
    )
}
