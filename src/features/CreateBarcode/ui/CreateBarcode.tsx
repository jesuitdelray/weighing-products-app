import { IProduct } from "entities/Product/model/types/productSchema"
import styles from "./CreateBarcode.module.scss"
import { createBarcodeValue } from "shared/lib/createBarcodeValue/createBarcodeValue"

interface ICreateBarcode {
    value: number
    productData: IProduct
    elementId: string
}

export function CreateBarcode({ value, productData, elementId }: ICreateBarcode) {
    const { cost, name } = productData

    const formattedValue = createBarcodeValue(productData.id, value)

    return (
        <div className={styles.wrapper} id={elementId}>
            {formattedValue.map((item, index) => {
                const stripWidthSetting = Number(item) + 1
                return (
                    <div className={styles.cell} key={`${item}-${index}`}>
                        <div className={styles.strip} style={{ width: stripWidthSetting }} />
                        <p className={styles.number}>{item}</p>
                    </div>
                )
            })}
            <div className={styles.productDescriptionBlock}>
                <p>
                    {name} : {value} kg
                </p>
                <p>Cost : {(cost * Number(value)).toFixed(2)} $</p>
            </div>
        </div>
    )
}
