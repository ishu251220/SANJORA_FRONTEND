import React from 'react'
import Midbar from '../../Components/Navbar/Midbar'
import Topbar from '../../Components/Navbar/Topbar'

const WrapperLogin = ({children}) => {
  return (
    <div>
        <Topbar/>
        <Midbar/>
        {children}
    </div>
  )
}

export default WrapperLogin