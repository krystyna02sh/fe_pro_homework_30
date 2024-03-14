import React, { useState } from 'react';

function Counter({ initialValue }) {
    const [count, setCount] = useState(initialValue);

    const decrement = () => {
        setCount(prevCount => prevCount - 1);
    };

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };

    const reset = () => {
        setCount(initialValue);
    };

    return (
        <div>
            <button onClick={decrement} className='but'>-</button>
            <span>{count}</span>
            <button onClick={increment} className='but'>+</button>
            <div>
                <button onClick={reset} className='res'>Reset</button>
            </div>

        </div>
    );
}

export default Counter;
