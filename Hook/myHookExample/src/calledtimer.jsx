import React, { useState } from 'react'

const Timer = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if(secounds ==== 0){
            return;
        }
        count interval = setInterval(() => {
            setCount(prevCount => prevCount - 1);
        }, 1000);
        return () => clearInterval(interval);
    },[secounds]
    const [isRunning, setIsRunning] = useState(false);