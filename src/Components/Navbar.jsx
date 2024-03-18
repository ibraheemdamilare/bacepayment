import React, { useState } from 'react'
import './Navbar.css'
import { MdOutlineCancel } from "react-icons/md";
import { FaBarsStaggered } from "react-icons/fa6";


const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    < div className='navbar'>
       <div className="linkss">
       <img src="https://paylance.io/img/paylancelogo2.png" alt="" />
        <ul className='none'>
            <li>Products</li> 
            <li>Docs</li>
            <li>Apps</li>
            <li>Help</li>
        </ul>
        
       </div>
       <button className="button none1">Public Sale</button>
       <div className="mobile-view" onClick={() => setOpen(!open)}>
        {open ? <MdOutlineCancel className='mobile-view-icon' /> : < FaBarsStaggered className='mobile-view-icon' /> }
       </div>
    </div>
  )
}

export default Navbar