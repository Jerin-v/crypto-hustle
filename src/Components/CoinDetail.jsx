import React, {Component, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
const API_KEY = import.meta.env.VITE_APP_API_KEY;


const CoinDetail = () => {
    let params = useParams();
    const [fullDetails, setFullDetails] = useState(null);

    useEffect(() => {
        const fetchCoinDetails = async () => {
            const details = await fetch(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${params.symbol}&tsyms=USD&api_key=${API_KEY}`);
            const description = await fetch(`https://min-api.cryptocompare.com/data/all/coinlist?fsym=${params.symbol}&api_key=${API_KEY}`);
            const detailsJson = await details.json();
            const descriptionJson = await description.json();
    
            setFullDetails({"numbers": detailsJson.DISPLAY, "textData": descriptionJson.DATA});
        }
        fetchCoinDetails().catch(console.error);
    
    }, [params.symbol]);

  return (
    <div>
      <h1>Coin Detail</h1>
    </div>
  );
}

export default CoinDetail;