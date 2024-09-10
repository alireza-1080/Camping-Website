import "./HeaderDesktopNavigationButton.css"
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { updateSelectedTabs } from "../../redux/headerStatesSlicer";

function HeaderDesktopNavigationButton({ title }) {
  const dispatch = useDispatch();
  const btn = useRef(null);
  const selectedTab = useSelector(state => state.headerStates.selectedTab)

  const selectedTabHandler = (title) => {
    dispatch(updateSelectedTabs(title));
  }

  useEffect(() => {
    if (selectedTab === title) {
      btn.current.classList.add("header-desktop-navigation-button--active--active")
    } else {
      btn.current.classList.remove("header-desktop-navigation-button--active--active")
    }
  }, [selectedTab])

  return (
    <div className="header-desktop-navigation-button header-desktop-navigation-button__line" ref={btn} onClick={() => selectedTabHandler(title)}>
      {title}
    </div>
  )
}

export default HeaderDesktopNavigationButton