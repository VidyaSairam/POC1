import React, { useState } from 'react'

export default function Tax() {
    const [incomeLevel, setIncomeLevel] = useState(0)
    const [yearlyincome, setYearlyIncome] = useState(0)
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
    return (
        <>
            <header>Tax Calculator</header>
            <input type="number" placeholder="Enter your yearly salary" value={yearlyincome}
                onChange={(e) => setYearlyIncome(e.target.value)} />
            <select onChange={handleTax}>
                <option>Not Applicable</option>
                <option>Group1 ( less than 5 Lakhs)</option>
                <option>Group2 ( less than 10 Lakhs)</option>
                <option>Group3 ( less than 20 Lakhs)</option>
                <option>Group4 ( greater than 5 Lakhs)</option>
            </select>

            <p>The <b>yearly tax</b> for the income {yearlyincome} is {incomeLevel}</p>
        </>
    )
}
