import React from 'react'
import Navbar from "../Components/Navbar"
import SubPages from "../SubPages/Settings"
function SettingsPage() {
  return (
    <div>
      <section>
      <Navbar/>
      <div className='pspace'></div>

      <SubPages/>
      </section>
    </div>
  )
}

export default SettingsPage