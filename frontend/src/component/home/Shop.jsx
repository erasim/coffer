import React from 'react'
import Leftsidebar from './Leftsidebar'
import Mainbar from './Mainbar'
import Rightsidebar from './Rightsidebar'
import './Shop.css'

const Shop = () => {
  return (
    <div className='shop'>
    
<div className='shop-box'>

<Leftsidebar/>
        <Mainbar/>
        <Rightsidebar/>
</div>
      
    
    </div>
  )
}

export default Shop