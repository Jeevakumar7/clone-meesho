import React from 'react'
import { Link } from 'react-router-dom'

function Hovernav() {
  return (
    <div className='nav'>
        <nav>
            <ul>
            <li>Women Ethnic</li>
            <li>Women Western</li>
            <li><Link to ='/mens'>Men</Link></li>
            <li><Link to ='/kids'>Kids</Link></li>
            <li>Home & Kitchen</li>
            <li>Beauty & Health</li>
            <li>Jewellery & Accessories</li>
            <li> <Link to ='/bags'>Bags & Footwear</Link></li>
            <li>Electronics</li></ul>
        </nav>
    </div>
  )
}

export default Hovernav