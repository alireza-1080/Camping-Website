import { useDispatch, useSelector } from "react-redux"
import "./HamburgerMenuButton.css"
import React, { useEffect, useRef } from 'react'
import { updateSelectedTabs } from "../../redux/headerStatesSlicer";

function HamburgerMenuButton({ title }) {

  const selectedTab = useSelector(state => state.headerStates.selectedTab);
  const btn = useRef(null)
  const line = useRef(null)
  const dispatch = useDispatch()

  useEffect(() => {
    if (selectedTab === title) {
      btn.current.classList.add("hamburger-menu-button__title--active")
      line.current.classList.add("hamburger-menu-button__line--active")
    } else {
      btn.current.classList.remove("hamburger-menu-button__title--active")
      line.current.classList.remove("hamburger-menu-button__line--active")
    }
  }, [selectedTab])

  return (
    <div className="hamburger-menu-button" onClick={() => dispatch(updateSelectedTabs(title))}>
      <div className="hamburger-menu-button__line" ref={line}></div>
      <div className="hamburger-menu-button__title" ref={btn}>
        {title}
      </div>
    </div>
  )
}

export default HamburgerMenuButton