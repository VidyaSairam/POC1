import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import './Tax.css'
export default function Tax() {
    const [incomeLevel, setIncomeLevel] = useState(0)
    const [yearlyincome, setYearlyIncome] = useState(0)
    const dispatch = useDispatch()
    const history = useHistory()
    const handleTax = (e) => {
        const group = e.target.value;
        if (group == 'Group1 ( less than 5 Lakhs)') {
            const tax = 0.05 * yearlyincome
            setIncomeLevel(tax)
        }
        else if (group == "Group2 ( less than 10 Lakhs)") {
            const tax = 0.1 * yearlyincome
            setIncomeLevel(tax)
        }
        else if (group == "Group3 ( less than 20 Lakhs)") {
            const tax = 0.15 * yearlyincome
            setIncomeLevel(tax)
        }
        else if (group == "Group4 ( greater than 5 Lakhs)") {
            const tax = 0.30 * yearlyincome
            setIncomeLevel(tax)
        }
        else {
            const tax = 0
            setIncomeLevel(tax)
        }
    }

    const response = useSelector(reducer => reducer)

    return (
        <div id={'tax_container'}>
            <div id={'text_input_container'}>
                <h3>Enter your yearly salary</h3>
                <input type="number" placeholder="Enter your yearly salary" value={yearlyincome}
                    onChange={(e) => setYearlyIncome(e.target.value)} />
            </div>

            <div id={'text_input_container'}>
                <h3>Select your paygroup</h3>
                <select onChange={handleTax}>
                    <option>Not Applicable</option>
                    <option>Group1 ( less than 5 Lakhs)</option>
                    <option>Group2 ( less than 10 Lakhs)</option>
                    <option>Group3 ( less than 20 Lakhs)</option>
                    <option>Group4 ( greater than 5 Lakhs)</option>
                </select>
            </div>
            <div className={'yearly_tax_content'}>
                <h4>The <b>yearly tax</b> for the income {yearlyincome} is {incomeLevel}</h4>
                <br />
                <p>Do you want to <b>save</b> the calculated tax value?</p>
            </div>
            <div id={'buttonContainer'}>
                <button  onClick={
                    () => {
                        dispatch({
                            type:'TAX',
                            data: incomeLevel
                        })
                    }
                } id={'button1'}>Approve</button>
                <button  onClick={
                    () => history.push("/")
                } 
                id={'button2'}>Reject</button>
            </div>
        </div>
    )
}
