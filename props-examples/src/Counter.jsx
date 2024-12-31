import React from 'react'

const Counter = ({ count, increment }) => {
    return (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default Counter