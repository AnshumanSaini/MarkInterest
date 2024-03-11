import React from 'react'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import {Navbar} from '../components/Navbar'
import {Feed} from '../components/Feed'
import {PinDetail} from '../components/PinDetail'
import {CreatePin} from '../components/CreatePin'
import {Search} from '../components/Search'


const Pins = () => {
  const [searchTerm, setsearchTerm] = useState('')
  return (
    <div>Pins</div>
  )
}

export default Pins