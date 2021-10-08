import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import './Clearance.css'
export default function Clearance() {
    const [balance, setBalance] = useState(0);
    const [interestValue, setInterestValue] = useState(0);
    const dispatch = useDispatch()
    const history = useHistory()
    const response = useSelector(reducer => reducer)

    console.log(response)
    return (
        <>
            <header>Clearance</header>
            <div className={'Container'}>
                <h5>Enter the existing arrear amount</h5>
                <input type="number"
                    placeholder={"Enter the existing arrear amount"}
                    value={balance}
                    onChange={(e) => { setBalance(e.target.value) }}
                />
            </div>

            <div className={'Container'}>
                <h5>Enter the clearance interest percentage</h5>
                <input type="number"
                    placeholder={"Enter the Clearance interest percentage"}
                    onChange={(e) => {
                        const val = (parseInt(e.target.value) / 100) * balance
                        setInterestValue(val)
                    }}
                />
            </div>
            <div className={'yearly_tax_content'}>
                <h4>{`The Clearance interest rate for the balance ${balance} is ${interestValue}`}</h4>
                <br />
                <p>Do you want to <b>save</b> the calculated clearance value?</p>
            </div>
            <div className={'buttonContainer'}>
                <button onClick={
                    () => {
                        dispatch({
                            type: 'CLEARANCE',
                            data: interestValue
                        })
                    }
                } className={'button1'}>Approve</button>
                <button onClick={
                    () => history.push("/")
                }
                    className={'button2'}>Reject</button>
            </div>
        </>
    )
}
