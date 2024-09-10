import "./Main.css"
import React from 'react'
import MainTopicsSection from "../MainTopicsSection/MainTopicsSection"
import DestinationsSection from "../DestinationsSection/DestinationsSection"
import EmailContactSection from "../EmailContactSection/EmailContactSection"

function Main() {
  return (
    <div className="main">
      <MainTopicsSection />
      <DestinationsSection />
      <EmailContactSection />
    </div>
  )
}

export default Main