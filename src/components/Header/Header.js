import React from 'react'
import './Header.css'
import { IoIosArrowDown } from "react-icons/io";

function Header() {
  return (
    <div className='header-container'>
      <div className='sub-header-container'>
        <div className='first-section'>
          <div className="first-logo">
            <img src="https://www.adobe.com/content/dam/cc/en/ax-gnav-images/0_AEx.svg" alt="" className='logo-img' />
          </div>

          <div className='menu-section'>
            <div className='menu-item'>Create <IoIosArrowDown /></div>
          </div>

          <div className='menu-section'>
            <div className='menu-item'>Quick Options <IoIosArrowDown /></div>
          </div>

          <div className='menu-section'>
            <div className='menu-item'>Templates </div>
          </div>

          <div className='menu-section'>
            <div className='menu-item'>Plans and Offers <IoIosArrowDown /></div>
          </div>

          <div className='menu-section'>
            <div className='menu-item'>Mobile App</div>
          </div>

          <div className='menu-section'>
            <div className='menu-item'>Learn <IoIosArrowDown /></div>
          </div>

        </div>

        <div className='last-section'>
          
            <div className='menu-item'>Sign In</div>
          

          
            <div className='sign-up-btn'>Sign Up</div>
          

          <img src="https://www.adobe.com/content/dam/cc/icons/Adobe_Corporate_Horizontal_Red_HEX.svg" alt="" className='logo-img' style={{paddingLeft: 20, paddingRight: 20}} />
        </div>
      </div>
    </div>
  )
}

export default Header