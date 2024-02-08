export function useAsyncFunction(fn: () => void) {
    setTimeout(() => {
        fn()
    }, 0)
}
