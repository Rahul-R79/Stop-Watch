import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

export default function StopWatch() {

    const [time, setTime] = useState(0);
    const [isrunning, setIsrunning] = useState(false);

    useEffect(() =>{
        let interval = null;
        if (isrunning) {
            interval = setInterval(() => setTime(time + 1),10);
        }
        return () => clearInterval(interval);
    }, [isrunning, time]);
    

    const hours = Math.floor(time / 360000);
    const minutes = Math.floor(time / 6000);
    const seconds = Math.floor(time / 100);
    const milliseconds = time % 100;

    const startandStop = () =>{
        setIsrunning (!isrunning);
    };

    const reset = () =>{
        setTime(0);
        setIsrunning(false)
    };

    return (
        <>
            <StopwatchDiv>
                <StopwatchTime>
                {hours}:{minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")}:{milliseconds.toString().padStart(2, "0")}
                </StopwatchTime>
                <StopwatchButton1 onClick={startandStop}>{isrunning ? "Stop" : "Start"}</StopwatchButton1>
                <StopwatchButton2 onClick={reset}>Reset</StopwatchButton2>
            </StopwatchDiv>
        </>
    )
}

const StopwatchDiv = styled.div`
    text-align: center;
    padding: 300px;
    background-color: black;
`
const StopwatchTime = styled.h1`
    color: #fff;
    font-size: 80px;
`
const StopwatchButton1 = styled.button`
    border: none;
    padding: 10px 30px;
    margin-right: 60px;
    cursor: pointer;
    color: #fff;
    background-color: #7462ff;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 18px;
`
const StopwatchButton2 = styled.button`
    border: none;
    padding: 10px 30px;
    margin-right: 60px;
    cursor: pointer;
    color: #fff;
    background-color: #ff0000;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 18px;
`