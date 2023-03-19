import React from 'react'
import { menuitems } from './Menuitemslist'
import './Menuitem.css'

const Menuitems = () => {
  return (
    <div className="sidebar-menu-container">
      {
        menuitems.map((item, index) => {
          return (
            <div key={item.name} className={item.name === 'About Us' ? "menu-item active" : "menu-item"}>
              <img alt="menuitem" src={item.img} />
              <span style={{ fontWeight: "750" }}>{item.name}</span>
            </div>
          )
        })}
    </div>
  )
}

export default Menuitems