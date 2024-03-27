import React from "react";
import { useState, useEffect } from "react";

const CryptoScam = () => {
    const [scamList, setScamList] = useState(null)

    useEffect(() => {
        const getScams = async () => {
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };
        }
    })
}

export default CryptoScam;