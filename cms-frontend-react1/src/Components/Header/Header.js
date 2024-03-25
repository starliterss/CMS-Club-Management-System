import React from 'react'
import logo from '../Images/IIIT-Lucknow-Logo.webp'
import './Header.css'

export default function Header() {
  return (
    <header>
        <div id="h1"><img src={logo} width="10%" style={{backgroundColor: "aliceblue", borderRadius:"6px"}}/>&nbsp;&nbsp;Indian Institute Of Information Technology LUCKNOW</div><div id="h2"> CLUB MANAGEMENT SYSTEM</div>
    </header>
  )
}
