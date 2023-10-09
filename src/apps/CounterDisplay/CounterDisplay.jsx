import { useState } from 'react'
import './CounterDisplay.css'


export default function CounterDisplay({counterCount = 0}){
    return (
        <>
        <div className="circle">{counterCount}</div>
        </>
    )
}