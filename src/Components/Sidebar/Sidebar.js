import React from 'react'
import logo from '../../images/logo.png'
import './Sidebar.css'
import Menuitems from '../Menuitems/Menuitems'
import Help from '../Help/Help'

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div>
        <img className="sidebar-logo" alt="logo" src={logo}/>
        <label style={{fontWeight:"500"}}>A.T.Inks</label>
      </div>
      <Menuitems/>
      <Help/>
    </div>
  )
}

export default Sidebar