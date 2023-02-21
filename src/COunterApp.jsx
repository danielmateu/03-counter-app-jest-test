import React, { useState } from 'react'
import PropTypes from 'prop-types'


export const COunterApp = ({ value }) => {

    console.log('render...');

    const [counter, setCounter] = useState(value)

    //handleAdd
    const hanldeAdd = () => { setCounter(counter + 1) }

    const handleMinus = () => { setCounter(counter - 1) }

    const handleReset = () => { setCounter(value) }

    return (
        <>
            <h1>CounterApp</h1>
            <h2> {counter} </h2>
            <div className="buttons">
                <button onClick={hanldeAdd}>+1</button>
                <button onClick={handleMinus}>-1</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </>
    )
}

//PropTypes
COunterApp.propTypes = {
    value: PropTypes.number.isRequired
}


