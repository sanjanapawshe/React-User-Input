import React from 'react'
import { useState } from 'react';

const UserInput = () => {
    const [userName, EnteredUserName] = useState("");
    const ShowUser = (event) => {
        EnteredUserName(event.target.value)
        console.log(event.target.value)
    }
    const submitHandler = (event) => {
        event.preventDefault();
    }

    const resetHandler = () => {

    }
    
    return (
        <form onSubmit={submitHandler} className="form">
            <div className="input-group">
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input type="number" id="current-savings" value={userName} onChange={ShowUser}/>
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input type="number" id="yearly-contribution" />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">
                    Expected Interest (%, per year)
                    </label>
                    <input type="number" id="expected-return" />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input type="number" id="duration" />
                </p>
            </div>
            <p className="actions">
                <button type="reset" onClick={resetHandler} className="buttonAlt">
                    Reset
                </button>
                <button type="submit" className="button">
                    Calculate
                </button>
            </p>
        </form>
    )
}

export default UserInput