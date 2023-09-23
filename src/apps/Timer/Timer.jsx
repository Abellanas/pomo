

import { useState, useEffect } from 'react'
import './Timer.css'
import arcade_theme from '../../assets/sounds/arcade_theme.wav'
import alarm from '../../assets/sounds/198841__bone666138__analog-alarm-clock.wav'


export default function Timer({t=25, count = -1, session = 1, breakValue = 5,settingCallback}) {
    const [seconds, setSeconds] = useState("00");
    const [minutes, setMinutes] = useState(t);
    const [currentSession, setCurSession] = useState(session);
    const [breakTime, setBreakTime] = useState(breakValue);


const playSound = (sound)=>{new Audio(sound).play()}



useEffect(()=>{
    setSeconds("00");
    setMinutes(t);  
    setCurSession(session); 
    setBreakTime(breakValue);
}, [t, session, breakValue])


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
                        settingCallback(breakTime, "time");
                        settingCallback(currentSession-1, "sessions");
                    }
                    else{
                        clearInterval(timer)
                        settingCallback(-1, "timeron");
                        settingCallback(currentSession, "sessions");
                        playSound(arcade_theme);
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
        </>
    )
}


