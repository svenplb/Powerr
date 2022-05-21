import React from 'react'
import Navbar from '../Components/Navbar'
import Info from '../SubPages/Info'
function InfoPage() {
  return (
    <div>
      <section>

      <Navbar/>
      <div className='pspace'></div>
      <Info/>
      </section>
    </div>
  )
}

export default InfoPage