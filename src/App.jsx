import React from "react"
import './global.css'
import Donate from "./Components/Diyorbek/Donate"
import Navbar from "./Components/Nozimjon/Navbar"
import SectionContainer from "./Components/Ahmad/SectionContainer"

const App = () => {
  return(
    <div>
      {/* Navbar by Nozimjon */}
      <Navbar />
      {/* DonationPage by Diyorbek + Upgraded by Nozimjon */}
      <Donate />
      <SectionContainer />
    </div>
  )
}

export default App
