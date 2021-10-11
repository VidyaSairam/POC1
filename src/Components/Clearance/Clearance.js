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
    return (
        <div id={'clearance_container'}>
            <div id={'text_input_container'}>
                <h3>Enter the existing arrear amount</h3>
                <input type="number"
                    placeholder={"Enter the existing arrear amount"}
                    value={balance}
                    onChange={(e) => { setBalance(e.target.value) }}
                />
            </div>

            <div id={'text_input_container'}>
                <h3>Enter the clearance interest percentage</h3>
                <input type="number"
                    placeholder={"Enter the Clearance interest percentage"}
                    onChange={(e) => {
                        const val = (parseInt(e.target.value) / 100) * balance
                        setInterestValue(val)
                    }}
                />
            </div>
            <div id={'yearly_tax_content'}>
                <h4 id={'text_spacing'}>{`The Clearance interest rate for the balance ${balance} is ${interestValue}`}</h4>
                <br />
                <p>Do you want to <b>save</b> the calculated clearance value?</p>
            </div>
            <div id={'buttonContainer'}>
                <button onClick={
                    () => {
                        dispatch({
                            type: 'CLEARANCE',
                            data: interestValue
                        })
                    }
                } id={'button1'}>Approve</button>
                <button onClick={
                    () => history.push("/")
                }
                    id={'button2'}>Reject</button>
            </div>
        </div>
    )
}
