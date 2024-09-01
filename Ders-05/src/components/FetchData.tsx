import { useEffect, useLayoutEffect, useState } from "react";

interface Data {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const FetchData = () => {
    const [data, setData] = useState<Data | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts/1"
            );
            const result = await response.json();
            setData(result);
            setLoading(false);

            // await fetch(
            //     "https://jsonplaceholder.typicode.com/posts/1"
            // ).then(data => data.json()).then((data) => {
            //     setData(data);
            //     setLoading(false);
            // });
        };

        fetchData();
    }, []); // Boş bağımlılık dizisi sadece mount olduğunda çalışır

    return <div>{loading ? <p>Loading...</p> : <p>{data?.title}</p>}</div>;
};

export default FetchData;