import React, { useState } from 'react'

const Test = (props) => {
    const sum = props.a + props.b;
    const [count, setCount] = useState(0);

    return (
        <>
            <div>
                <button onClick={() => setCount(count - 1)}>Eksilt</button>
                <p>Sayım: {count}</p>
                <button onClick={() => setCount(count + 1)}>Arttır</button>
            </div>
            <br />
            <br />
            <br />
            <p>My name is {props.name}</p>
            <p>The sum of the numeric props I received is {sum}</p>
        </>
    );
}

export default Test