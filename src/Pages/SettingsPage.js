import React from 'react'
import Navbar from "../Components/Navbar"
import ThemeButton from '../Components/ThemeButton'



const SettingsPage = ({ changeTheme, changeWordAmount }) => {
  return (
    <div>
      <section>
      <Navbar className = "headspace"/>
      <h1 className='headspace'>Themes</h1>

      <ThemeButton label="Powerr Classic" theme="normal-theme" onClick={changeTheme} />      
      <ThemeButton label = "Skull" theme = "theme-skullemoji" onClick = {changeTheme}/>
      <ThemeButton label = "Dimmed" theme = "theme-dimmed" onClick = {changeTheme}/>
      <ThemeButton label = "QuoteLeaf" theme = "theme-quoteleaf" onClick = {changeTheme}/>

      </section>
    </div>
  )
}

export default SettingsPage
