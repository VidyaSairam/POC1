import React, { useState } from 'react'

export default function Clearance() {
    const balance = 10000;
    const [interestValue, setInterestValue] = useState(0);
    return (
        <>
            <header>Clearance</header>
            <h3>{`Available Balance : ${balance}`}</h3>
            <input type="number"
                placeholder={"Enter the Clearance interest percentage"}
                onChange={(e) => {
                    const val = (parseInt(e.target.value)/100) * balance
                    setInterestValue(val)
                }}
            />

            <h3>{`The Clearance interest rate for the balance ${balance} is ${interestValue}` }</h3>
        </>
    )
}
