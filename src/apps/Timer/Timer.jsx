
import { useState, useEffect } from 'react'
import './Timer.css'
import arcade_theme from '../../assets/sounds/arcade_theme.wav'
import alarm from '../../assets/sounds/198841__bone666138__analog-alarm-clock.wav'
import CounterDisplay from '../CounterDisplay/CounterDisplay'



export default function Timer({t=25, count = -1, longBreakValue = 20, breakValue = 5}) {
    const [seconds, setSeconds] = useState("00");
    const [minutes, setMinutes] = useState(t);
    const [currentSession, setCurSession] = useState(7);
    const [breakTime, setBreakTime] = useState(breakValue);
    const [longBreakTime, setLongTime] = useState(longBreakValue);
    const [breaking, setBreakOn] = useState(-1);
    const [letCount, setCount] = useState(0);


const playSound = (sound)=>{new Audio(sound).play()}



useEffect(()=>{
    setSeconds("00");
    setMinutes(t);  
    setBreakTime(breakValue);
    setLongTime(longBreakValue);
}, [t, breakValue, longBreakValue])


useEffect( () => {
    if(count == 1){
        let timer = setInterval(() => {
            if(seconds <= 0){
                if(minutes > 0){
                    setSeconds(59);
                    setMinutes(minutes-1)
                }
                else{
                    if(currentSession >= 1){
                        playSound(alarm);
                        setSeconds("00");
                        if(breaking == -1){
                            setMinutes(breakTime);  
                            setBreakOn(1);
                            setCount((preCount)=>preCount+1)
                        }
                        else{
                            setMinutes(t);  
                            setBreakOn(-1);  
                            }
                        setCurSession((session)=>session-1);
                        }
                    else{
                        setBreakOn(-1)
                        playSound(arcade_theme);
                        setSeconds("00");
                        setMinutes(longBreakTime);  
                        setCurSession(7);
                    }
                }
            }
            else{
                if(seconds > 0){
                    if(seconds > 10){
                        setSeconds(seconds - 1)
                    }
                    else{setSeconds("0" + (seconds - 1))}
                    
                }
            }
            
        },10)
        return () => clearInterval(timer);
}   
}
);

    return(
        <>
        <div className="timerCount">{minutes}:{seconds}</div>
        <div><CounterDisplay counterCount={letCount}></CounterDisplay></div>
        </>
    )
}


