import React from 'react'
import './Master1_1.css'
import SubComponent from './ReusableComp/SubComponent'
import Home from '../Home/Home'
export default function Master1_1({ match }) {
    return (
        <>
            <div className={'div1'}>
                <p>{`Hello, this is a ${match.params.product} product from ${match.params.organisation} company`}</p>
                <SubComponent />
            </div>
        </>
    )
}
