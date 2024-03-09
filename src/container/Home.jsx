import React, { useState, useEffect } from 'react'
import SideBar from '../components/SideBar'
import userProfile from '../components/UserProfile'
import logo from '../assets/logo.png'
import Pins from './Pins'
import { HiMenu } from "react-icons/hi";


const Home = () => {
  const [ToggleSidebar, setToggleSidebar] = useState(false)

  useEffect(() => {
  }, [])
  
  return (
    <div className='flex bg-gray-50 md:flex-row flex-col h-screen transaction-height duration-75 ease-out'>
      <div className='hidden md:flex h-screen flex-initial '>
        <SideBar></SideBar>
      </div>
      <div className='flex md:hidden flex-row'>
        <HiMenu fontSize={40} className='cursor-pointer' onClick={()=> setToggleSidebar(false)}></HiMenu>
        <a href="/">
          <img src={logo} alt="logo" className='w-28'/>
        </a>
        {/* <a href={`user-profile/${user?._id}`}>
          <img src={logo} alt="logo" className='w-28'/>
        </a> */}
      </div>
    </div>
  )
}

export default Home