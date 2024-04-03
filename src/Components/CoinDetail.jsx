import React, {Component, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
const API_KEY = import.meta.env.VITE_APP_API_KEY;


const CoinDetail = () => {
    let params = useParams();
    const [fullDetails, setFullDetails] = useState(null);
  return (
    <div>
      <h1>Coin Detail</h1>
    </div>
  );
}

export default CoinDetail;