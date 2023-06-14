import React from 'react'
import {useNavigate} from "react-router-dom";

export function UnpackScreen() {
    const nav = useNavigate()

    return (
        <div>
            <h1>Pokemon Vending Machine</h1>
            <div>
                <p>bulbasaur</p>
                <p>ivysaur</p>
                <p>venusaur</p>
                <p>charmander</p>
                <p>charmeleon</p>
            </div>
            <button onClick={()=>{
                nav('/')
            }}>Buy New Pack</button>
        </div>
    )
}
