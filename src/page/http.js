import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ExampleComponent = () => {
    // 定义状态来存储请求的数据
    const [data, setData] = useState(null);

    // 使用 useEffect 来在组件加载时发送请求
    useEffect(() => {
        const fetchData = async () => {
            try {
                // 发送 GET 请求
                const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');

                // 更新状态以存储请求得到的数据
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        // 调用 fetchData 函数
        fetchData();
    }, []); // 第二个参数是空数组，表示仅在组件加载时执行 useEffect

    return (
        <div>
            <h1>React Axios Example</h1>
            {data ? (
                <div>
                    <h2>Data from API:</h2>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default ExampleComponent;
