import React,{ useState, useEffect } from 'react'
import DarkModeToggle from "react-dark-mode-toggle";
import homeback from '../Images/home_back.jpg'
import homebackdark from '../Images/home_back_dark.jpg'
import './Darkmode.css'

const Darkmode = () => {

    const[mode,setMode]=useState(()=>true)
    const[bgclr,setBgclr]=useState("black")
    const[text,setText]=useState("white")
    const[home_back,setHome_back]=useState(homebackdark)
    
    useEffect(()=>{
        if(!mode){
            setBgclr("black")
            setText("white")
            setHome_back(homebackdark)
        }
        else{
            setBgclr("white")
            setText("black")
            setHome_back(homeback)
        }
        document.documentElement.style.setProperty('--bg-clr',bgclr)
        document.documentElement.style.setProperty('--text-clr',text)
        document.documentElement.style.setProperty('--home-back',`url(${home_back})`)
    },[mode])

  return (
<DarkModeToggle
      onChange={setMode}
      checked={mode}
      size={70}
    />  )
}

export default Darkmode
