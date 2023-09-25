import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import "./App.css"
import { coinsActions, fetchCoins } from "./store/coins-slice"
import { TableRow } from "./components/Table/TableRow"
import { Table } from "./components/Table/Table"

function App() {
    const dispatch = useDispatch()
    const coins = useSelector((state) => state.coins)

    useEffect(() => {
        dispatch(fetchCoins())
    }, [dispatch])

    console.log(coins.data)

    return (
        <div className="App">
            <Table />
        </div>
    )
}

export default App
