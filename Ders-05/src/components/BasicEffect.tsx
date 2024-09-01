import React, { useEffect, useState } from "react";

const BasicEffect = () => {
    const [count, setCount] = useState<number>(0)

    // useEffect(() => {
    //     console.log("Component yüklendi veya yenilendi");

    //     return () => {
    //         console.log("Component kaldırılıyor");
    //     };
    // }, []);

    return <div>

        <button onClick={() => setCount(prev => prev - 1)}>-</button>
        {'   '}<span>{count}</span>{'   '}
        <button onClick={() => setCount(prev => prev + 1)}>+</button>
    </div>;
};

export default BasicEffect;