import { useState } from "react"
import { Input, InputType } from "@/shared/ui/Input/Input"
import { Modal } from "@/shared/ui/Modal"
import styles from "./ProductModal.module.scss"
import { Button, ButtonVariant } from "@/shared/ui/Button/Button"
import { CreateBarcode } from "@/features/CreateBarcode"
import { valueRoundConverter } from "@/shared/lib/valueRoundConverter/valueRoundConverter"
import { handleDownloadBarcode } from "@/features/DownloadBarcode/ui/downloadBarcode"
import { IProduct } from "@/entities/Product/model/types/productSchema"

interface IProductModalProps {
    isOpen: boolean
    onClose: () => void
    productData: IProduct
}

export function ProductModal({ isOpen, onClose, productData }: IProductModalProps) {
    const { name, cost } = productData
    const [value, setValue] = useState(0)

    function onChange(e: string) {
        const convertedValue = valueRoundConverter(e)
        return setValue(convertedValue as number)
    }

    function downloadHandler() {
        handleDownloadBarcode()
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className={styles.modalWrapper}>
                <div className={styles.modalContainer}>
                    <Button
                        variant={ButtonVariant.CLEAR}
                        className={styles.closeModalBtn}
                        onClick={() => {
                            setValue(0)
                            onClose()
                        }}
                    >
                        ×
                    </Button>
                    <p>Product: {name}</p>
                    <p>Cost : {cost}$</p>
                    <div className={styles.title}>Enter weight ( kg ) :</div>
                    <Input
                        value={`${value}`}
                        onChange={onChange}
                        className={styles.modalInput}
                        type={InputType.NUMBER}
                        step={0.01}
                        min={0}
                        max={99}
                    />
                </div>
                <Button className={styles.printBtn} onClick={downloadHandler}>
                    Print barcode
                </Button>
            </div>
            <CreateBarcode value={value} elementId={"barcode"} productData={productData} />
        </Modal>
    )
}
