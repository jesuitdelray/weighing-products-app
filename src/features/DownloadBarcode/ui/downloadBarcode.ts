import html2canvas from "html2canvas"

export const handleDownloadBarcode = async () => {
    const barcodeElement = document.getElementById("barcode")
    if (barcodeElement) {
        const canvas = await html2canvas(barcodeElement)
        const image = canvas.toDataURL("image/png", 1.0)
        downloadImage(image, "barcode.png")
    }
}

const downloadImage = (blob: any, fileName: any) => {
    const fakeLink = window.document.createElement("a")
    fakeLink.setAttribute("href", blob)
    fakeLink.setAttribute("download", fileName)

    document.body.appendChild(fakeLink)
    fakeLink.click()
    document.body.removeChild(fakeLink)
}
