import "./HamburgerMenuButtonsSection.css"
import React from 'react'
import { useSelector } from "react-redux"
import HamburgerMenuButton from "../HamburgerMenuButton/HamburgerMenuButton"

function HamburgerMenuButtonsSection() {

  const allTabs = useSelector(state => state.headerStates.tabs)

  return (
    <div className="hamburger-menu-buttons-section">
      {allTabs.map(tab => {
        return <HamburgerMenuButton key={tab} title={tab} />
      })}
    </div>
  )
}

export default HamburgerMenuButtonsSection