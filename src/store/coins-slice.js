import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const coinsSlice = createSlice({
    name: "coins",
    initialState: {
        page: "1",
        data: null,
        loading: false,
        error: "",
    },
    reducers: {
        switchPage(state, action) {
            state.page = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCoins.pending, (state, action) => {
            state.loading = true
            state.error = ""
        })
        builder.addCase(fetchCoins.fulfilled, (state, action) => {
            state.data = action.payload
            state.loading = false
        })
        builder.addCase(fetchCoins.rejected, (state, action) => {
            state.loading = false
            state.error = "Error while fetching coins"
        })
    },
})

export const fetchCoins = createAsyncThunk("fetchCoins", async (data) => {
    // const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${data.page}&sparkline=false`
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`

    const response = await axios.get(url)
    return response.data
})

export const coinsActions = coinsSlice.actions

export default coinsSlice
