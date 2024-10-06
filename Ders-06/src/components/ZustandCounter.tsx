import React from "react";
import useStore from "../zustand/useStore";

const ZustandCounter = () => {
    const { count, decrement, increment } = useStore();

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

export default ZustandCounter;