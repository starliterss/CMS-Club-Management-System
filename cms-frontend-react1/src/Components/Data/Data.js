import React from 'react'
import { Outlet,Link } from 'react-router-dom'
import './Data.css'

export default function Data() {
  return (
    <div className='main_body'>
    <div id="data_head">
        <Link to="cultural"><h1>CULTURAL CLUBS</h1></Link>
        <Link to="technical"><h1>AXIOS (TECHNICAL CLUB)</h1></Link>
        <Link to="other"><h1>OTHER CLUBS</h1></Link>
    </div>
    <section id="data_section">
        <Outlet />
    </section>
    </div>
  )
}
