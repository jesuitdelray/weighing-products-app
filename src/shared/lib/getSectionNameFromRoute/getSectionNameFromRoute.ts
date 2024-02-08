export function getSectionNameFromRoute(path?: string) {
    if (!path) return null
    const parts = path?.split(/[/=]/)
    const target = parts?.[2]
    return target?.charAt(0).toUpperCase() + target?.slice(1)
}
