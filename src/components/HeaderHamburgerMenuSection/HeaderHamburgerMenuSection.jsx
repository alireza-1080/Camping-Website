import "./HeaderHamburgerMenuSection.css"
import React, { useEffect, useRef } from 'react'
import HamburgerMenuTitle from "../HamburgerMenuTitle/HamburgerMenuTitle"
import HamburgerMenuButtonsSection from "../HamburgerMenuButtonsSection/HamburgerMenuButtonsSection"
import HamburgerSignSection from "../HamburgerSignSection/HamburgerSignSection"
import { useSelector } from "react-redux"

function HeaderHamburgerMenuSection() {

  const isHamburgerOpen = useSelector (state => state.headerStates.isHamburgerOpen)
  const hamburgerMenuSection = useRef(null)

  useEffect(() => {
    if (isHamburgerOpen) {
      hamburgerMenuSection.current.classList.add("header-hamburger-menu-section--active")
    } else {
      hamburgerMenuSection.current.classList.remove("header-hamburger-menu-section--active")
    }
  }, [isHamburgerOpen])
  
  return (
    <div className="header-hamburger-menu-section" ref={hamburgerMenuSection}>
      <HamburgerMenuTitle />
      <HamburgerMenuButtonsSection />
      <HamburgerSignSection />
    </div>
  )
}

export default HeaderHamburgerMenuSection