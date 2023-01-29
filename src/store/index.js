import { configureStore } from "@reduxjs/toolkit"
import coinsSlice from "./coins-slice"

const store = configureStore({
    reducer: {
        coins: coinsSlice.reducer,
    },
})

export default store
