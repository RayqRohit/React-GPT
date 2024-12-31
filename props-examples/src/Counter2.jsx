import React from 'react'
import { useState } from 'react';
import Counter from './Counter';

const Counter2 = () => {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };


    return (
        <div>
            <Counter count={count} increment={increment} />
        </div>
    )
}

export default Counter2