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
  const [longBreak, setLongBreak] = useState(20);
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
    if(sett == "longbreak"){
      setLongBreak(value);
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
        <h1 className='title'>Simple Pomo</h1>
        <div className="pomo_settings">
          <div className="settingCapsule">
            <p>Task Time</p>
          <div className="setting setting_time" onClick={()=> handleSettingButton("Time: ", 25, "time")}>{timerTime}</div>
          </div>
          <div className="settingCapsule">
            <p>Short Break</p>
            <div className="setting setting_rest" onClick={()=> handleSettingButton("Break: ", 5, "break")}>{breakTime}</div>
          </div>
          <div className="settingCapsule">
            <p>Long Break</p>
            <div className="setting setting_steps" onClick={()=> handleSettingButton("Long Breal: ", 20, "longbreak")}>{longBreak}</div>
          </div>

         
        </div>
        <div className="pomo__tomato" onClick={handleClick}></div>
        <Timer t={timerTime} count={timerON} longBreakValue={longBreak} breakValue={breakTime} settingCallback={changeSetting}></Timer>
      </div>
      {showSettings}
    </>
  )
}

export default App
