import React, { useState } from 'react';
import Counter from './Counter';

function App() {
    const [initialValue] = useState(5);

    return (
        <div>
            <h1>Counter App</h1>
            <Counter initialValue={initialValue} />
        </div>
    );
}

export default App;
