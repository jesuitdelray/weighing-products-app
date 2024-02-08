export function createBarcodeValue(uniqueNumber: number, weight: number) {
    const convertedWeightValue = Number(weight) > 9 ? weight : `0${weight}`
    const barcodeValue = `380048${uniqueNumber}${convertedWeightValue}`
    const barcodeValueWithoutDot = barcodeValue.replace(/\./g, "")
    return barcodeValueWithoutDot.split("")
}
