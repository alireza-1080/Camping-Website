import "./HeaderDesktopNavigation.css";
import React from 'react'
import HeaderDesktopNavigationButton from "../HeaderDesktopNavigationButton/HeaderDesktopNavigationButton";
import { useSelector } from "react-redux"

function HeaderDesktopNavigation() {

    const allTabs = useSelector(state => state.headerStates.tabs);

    return (
        <div className="header-desktop-navigation">
            {
                allTabs.map(tab => {
                    return <HeaderDesktopNavigationButton key={tab} title={tab} />
                })
            }
        </div>
    )
}

export default HeaderDesktopNavigation