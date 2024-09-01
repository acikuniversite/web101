import { useEffect, useState } from "react";

const Timer = () => {
    const [seconds, setSeconds] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1);
        }, 1000);

        return () => {
            clearInterval(interval); // Temizleme işlemi
        };
    }, []); // Boş bağımlılık dizisi sadece mount ve unmount olduğunda çalışır

    return (
        <div>
            <p>Seconds: {seconds}</p>
        </div>
    );
};

export default Timer;