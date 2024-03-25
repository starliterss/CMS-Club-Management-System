import React from 'react'
import { Outlet,Link } from 'react-router-dom'

const Otheraside = () => {
  return (
    <>
    <aside>
        <Link to="eifer"><div>EIFER</div></Link>
        <Link to="ecell"><div>E-CELL</div></Link>
        </aside>
        <article id="data_article">
          <Outlet />
        </article>
    </>
  )
}

export default Otheraside
