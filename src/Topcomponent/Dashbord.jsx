import React from 'react'
import Hovernav from './Hovernav'
import Searchbar from './Searchbar'
import '../Topcomponent/Dashbord.css'
import C1 from './C1'
import C2 from './C2'
import Card from './Card'
import Card2 from './Card2'
import Card3 from './Card3'
import Card4 from './Card4'

function Dashbord() {
  return (
    <>
    <div>
      <Searchbar/>
      <div />
      </div>
      <div>
         <hr className='One'/>
    <Hovernav/>
    <hr className='One'/>
    </div>
    <div>
    <C1/>
    </div>
    <div>
      <C2/>
    </div>
    <div>
      <Card/>
    </div>
    <div>
      <Card2/>
    </div>
    <div>
      <Card3/>
    </div>
    <div>
      <Card4/>
    </div>
   
    </>
  )
}

export default Dashbord