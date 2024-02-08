import { IProductSectionSchema } from "../model/types/sectionSchema"
import styles from "./Section.module.scss"

interface SectionProps {
    sectionData: IProductSectionSchema
    onClick: (section: IProductSectionSchema) => void
    backgroundImage: any
}

export function Section({ sectionData, backgroundImage, onClick }: SectionProps) {
    const { name } = sectionData

    return (
        <div
            style={{ backgroundImage }}
            className={styles.productSection}
            onClick={() => onClick(sectionData)}
        >
            <h2 className={styles.sectionName}>{name}</h2>
        </div>
    )
}
