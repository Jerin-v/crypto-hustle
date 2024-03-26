import { useEffect, useState } from 'react'
import './App.css'
const API_KEY = import.meta.env.VITE_APP_API_KEY;

function App() {
  const [list, setList] = useState(null)

  useEffect(() => {
    const fetchAllCoinData = async () => {
      const response = await fetch("https://min-api.cryptocompare.com/data/all/coinlist?&api_key=" + API_KEY);
      const json = await response.json()
      console.log(json)
      setList(json)
    }

    fetchAllCoinData().catch(console.error);

  }, []);


  return (
    <div className='wholePage'>
      <h1>My Crypto List</h1>
        

    </div>
  )
}

export default App
