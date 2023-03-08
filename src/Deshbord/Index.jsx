import React from 'react'
import LeftBar from './LeftBar/LeftBar'
import Rightbar from './RightBar/Rightbar'
import './index.css'

const Index = () => {
  return (
    <div className='deshbord'>
      <div className='Leftbar' ><LeftBar/></div>
      <div className='Rightbar' ><Rightbar/></div>
    </div>
  
  )
}

export default Index