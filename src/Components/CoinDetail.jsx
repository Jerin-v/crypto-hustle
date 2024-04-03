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
    
            setFullDetails({"numbers": detailsJson.DISPLAY, "textData": descriptionJson.Data});
        }
        fetchCoinDetails().catch(console.error);
    
    }, [params.symbol]);

  return (
    <div>
      <h1>{fullDetails && fullDetails.textData[params.symbol].FullName}</h1>
      <img
        className="images"
        src={`https://cryptocompare.com${fullDetails && fullDetails.numbers[params.symbol].USD.IMAGEURL}`}
        alt={`small icon for ${params.symbol} crypto coin`}
        />
      <div> {fullDetails && fullDetails.textData[params.symbol].Description} </div>
      <br></br>
      <div>
        This coin was built with the algorithm{" "}
        {fullDetails && fullDetails.textData[params.symbol].Algorithm}{" "}
      </div>
    <table>
        <tbody>
            <tr>
                <th>Website</th>
                <td>{fullDetails && fullDetails.textData && fullDetails.textData[params.symbol] ? fullDetails.textData[params.symbol].AssetWebsiteUrl : ''}</td>
            </tr>
            <tr>
                <th>Monetary Symbol</th>
                <td>{params.symbol}</td>
            </tr>
            <tr>
                <th>Market</th>
                <td>{fullDetails && fullDetails.numbers && fullDetails.numbers[params.symbol] ? fullDetails.numbers[params.symbol].USD.MARKET : ''}</td>
            </tr>
            <tr>
                <th>Last Transaction</th>
                <td>{fullDetails && fullDetails.numbers && fullDetails.numbers[params.symbol] ? fullDetails.numbers[params.symbol].USD.LASTTRADEID : ''}</td>
            </tr>
            <tr>
                <th>Last Transaction Value</th>
                <td>{fullDetails && fullDetails.numbers && fullDetails.numbers[params.symbol] ? fullDetails.numbers[params.symbol].USD.LASTVOLUME : ''}</td>
            </tr>
            <tr>
                <th>Volume</th>
                <td>{fullDetails && fullDetails.numbers && fullDetails.numbers[params.symbol] ? fullDetails.numbers[params.symbol].USD.VOLUME24HOUR : ''}</td>
            </tr>
            <tr>
                <th>Today's Open Price</th>
                <td>{fullDetails && fullDetails.numbers && fullDetails.numbers[params.symbol] ? fullDetails.numbers[params.symbol].USD.OPEN24HOUR : ''}</td>
            </tr>
            <tr>
                <th>Market Cap</th>
                <td>{fullDetails && fullDetails.numbers && fullDetails.numbers[params.symbol] ? fullDetails.numbers[params.symbol].USD.MKTCAP : ''}</td>
            </tr>
        </tbody>
    </table>

    </div>
  );
}

export default CoinDetail;