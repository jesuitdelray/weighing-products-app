import { StateSchema } from "@/app/providers/StoreProvider"

export const selectCurrentProductSection = (state: StateSchema) => state?.section
