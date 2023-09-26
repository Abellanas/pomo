import { useEffect, useState } from 'react'

import './App.css'
import '../Timer/Timer'
import Timer from '../Timer/Timer'
import '../PopupSettings/PopupSettings'
import PopupSettings from '../PopupSettings/PopupSettings'
import click_sound from "../../assets/sounds/683099__florianreichelt__computer-mouse-click.mp3"


function App() {
  const [timerTime, setTime] = useState(25)
  const [timerON, setTimer] = useState(-1);
  const [sessions, setSession] = useState(4);
  const [breakTime, setBreakTime] = useState(5);
  const [showSettings, setShowSetting] = useState([])

  let arrSettings = [];

  const handleClick = (e) => {
    setTimer(timerON*-1);
    new Audio(click_sound).play()
  }



  const changeSetting = (value, sett)=>{
    if(sett == "time"){
      setTime(value);
      setShowSetting([]);
    }
    if(sett == "sessions"){
      setSession(value);
      setShowSetting([]);
    }
    if(sett == "break"){
      setBreakTime(value);
      setShowSetting([]);
    }
    if(sett == "timeron"){
      setTimer((timerVal)=>timerVal*-1);
      setShowSetting([]);
    }
  }

  const handleSettingButton = (label, value, change) => {
    setShowSetting([<PopupSettings settChange={label} settValue={value} changeCode={change} callback={changeSetting} key={"child1"}></PopupSettings>]);
  }




  return (
    <>
      <div className="col__1 container__col">
        <h1 className='title'>Best Pomo App</h1>
        <div className="pomo_settings">
          <div className="settingCapsule">
            <p>Time</p>
          <div className="setting setting_time" onClick={()=> handleSettingButton("Time: ", 25, "time")}>{timerTime}</div>
          </div>
          <div className="settingCapsule">
            <p>Intervals</p>
            <div className="setting setting_steps" onClick={()=> handleSettingButton("Sessions: ", 4, "sessions")}>{sessions}</div>
          </div>
          <div className="settingCapsule">
            <p>Break Time</p>
            <div className="setting setting_rest" onClick={()=> handleSettingButton("Break: ", 5, "break")}>{breakTime}</div>
          </div>
         
        </div>
        <div className="pomo__tomato" onClick={handleClick}></div>
        <Timer t={timerTime} count={timerON} session={sessions} breakValue={breakTime} settingCallback={changeSetting}></Timer>
      </div>
      {showSettings}
    </>
  )
}

export default App
