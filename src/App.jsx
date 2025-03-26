import { useState } from 'react'
import Nav from './component/Nav'
import Banner from './component/Banner'
import Clients from './component/clients'
import Community from './component/Community'
import Unlock from './component/Unlock'
import Achievements from './component/Achievements'
import Calender from './component/Calender'
import Customer from './component/Customer'
import Updates from './component/Updates'
import Footer from './component/Footer'
import './App.css'

function App() {
  return (
    <>
    <Nav/>
    <Banner/>
    <Clients/>
    <Community/>
    <Unlock/>
    <Achievements/>
    <Calender/>
    <Customer/>
    <Updates/>
    <Footer/>
    </>
  )
}

export default App
