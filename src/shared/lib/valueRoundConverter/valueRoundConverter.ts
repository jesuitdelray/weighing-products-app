export function valueRoundConverter(value: string) {
    const convertedValue = value.length > 4 ? Number(value).toFixed(2) : Number(value)
    if (Number(value) >= 0 && Number(value) <= 50) {
        return convertedValue
    }
    return value
}
