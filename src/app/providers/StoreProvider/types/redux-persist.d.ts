declare module "redux-persist/lib/storage" {
    interface WebStorage extends Storage {
        getItem(key: string): Promise<string | null>
        setItem(key: string, item: string): Promise<void>
        removeItem(key: string): Promise<void>
    }

    const storage: WebStorage
    export default storage
}
declare module "redux-persist/lib/persistReducer" {
    import { Reducer, Action } from "redux"

    interface PersistConfig<S, A extends Action = AnyAction> {
        key: string
        storage: Storage
        blacklist?: string[]
        whitelist?: string[]
    }

    export function persistReducer<S, A extends Action = AnyAction>(
        config: PersistConfig<S, A>,
        baseReducer: Reducer<S, A>
    ): Reducer<S, A>
}

declare module "redux-persist/integration/react" {
    import { Component, ReactNode } from "react"
    import { Persistor } from "redux-persist"

    interface PersistGateProps {
        loading?: ReactNode
        persistor: Persistor
        onBeforeLift?: () => void | Promise<void>
    }

    export class PersistGate extends Component<PersistGateProps> {}
}
