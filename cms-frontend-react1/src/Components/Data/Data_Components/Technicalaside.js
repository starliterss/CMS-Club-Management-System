import React from 'react'
import { Outlet,Link } from 'react-router-dom'

const Technicalaside = () => {
  return (
    <>
    <aside>
        <Link to="cp"><div>CP WING</div></Link>
        <Link to="ml"><div>ML WING</div></Link>
        <Link to="webd"><div>WEB-DEV WING</div></Link>
        <Link to="foss"><div>FOSS WING</div></Link>
        <Link to="appd"><div>APP-DEV WING</div></Link>
        <Link to="blockchain"><div>BLOCKCHAIN WING</div></Link>
        <Link to="infosec"><div>INFOSEC WING</div></Link>
        <Link to="design"><div>DESIGN WING</div></Link>
        </aside>
        <article id="data_article">
          <Outlet />
        </article>
    </>
  )
}

export default Technicalaside
