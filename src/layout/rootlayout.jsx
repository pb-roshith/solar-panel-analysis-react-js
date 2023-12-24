import React from 'react'
// import NavUI from '../components/navui'
import { Outlet } from 'react-router'


const Rootlayout = () => {
  return (
    <>
        {/* <NavUI></NavUI> */}
        <Outlet></Outlet>
        
    </>
  )
}

export default Rootlayout