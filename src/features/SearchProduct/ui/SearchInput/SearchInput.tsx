import { SearchIcon } from "@/shared/assets/icons/SearchIcon"
import { Input } from "@/shared/ui/Input/Input"
import styles from "./SearchInput.module.scss"

export interface SearchInputProps {
    searchValue: string
    className: string
    onChange: (e: string) => void
}

export function SearchInput({ searchValue, className, onChange }: SearchInputProps) {
    return (
        <div className={className}>
            <SearchIcon className={styles.inputSearchIcon} />
            <Input
                value={searchValue}
                onChange={e => onChange?.(e)}
                className={styles.searchInput}
            />
        </div>
    )
}
