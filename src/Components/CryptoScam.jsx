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

            const response = await fetch(
                "https://api.cryptoscamdb.org/v1/featured",
                requestOptions
            )
            const json = response.json()
            setScamList(json)
        }
        getScams().catch(console.error)
    }, [])
}

export default CryptoScam;