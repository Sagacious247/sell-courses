import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {MenuItems} from './MenuItems'
import './Dropdown.css'

function Dropdown() {
    const [dropdown, setDropdown] = useState(false)

  return (
    <>
      <ul
       onClick={() => setDropdown(!dropdown)}
       className={dropdown ? "dropdown-menu clicked" : "dropdown-menu"}
      >
       {MenuItems.map((item) => {
        return (
            <li key={item.id}>
                
              <Link 
              className={item.cName} 
              to={item.path} 
              onClick={() => 
                setDropdown(false)}>
                {item.title}
              </Link>
            </li>
        )
       })}
      </ul>
    </>
  )
}

export default Dropdown
