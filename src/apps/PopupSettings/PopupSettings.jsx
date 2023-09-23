import { useEffect } from "react";
import "./PopupSettings.css"




export default function PopupSettings({settChange = "Time: ", settValue = 25, changeCode = "time", callback}){


    return(
       <>
       <div className="board">
        <form action="">
            <label htmlFor="change_setting">{settChange}</label>
            <input type="number" name="newValue" id="newValue" defaultValue={settValue} />
            <input type="button" value="Listo" onClick={()=>{
                callback(document.getElementById("newValue").value, changeCode)}}/>
        </form>
       </div>
       </>
        )
}