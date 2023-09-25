import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import "./App.css"
import { coinsActions, fetchCoins } from "./store/coins-slice"

function App() {
    const dispatch = useDispatch()
    const coins = useSelector((state) => state.coins)

    useEffect(() => {
        dispatch(fetchCoins())
    }, [dispatch])

    console.log(coins.page)

    return <div className="App">git test</div>
}

export default App
