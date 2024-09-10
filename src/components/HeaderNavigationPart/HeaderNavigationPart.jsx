import "./HeaderNavigationPart.css"
import React from 'react'
import HeaderNavigationLogo from "../HeaderNavigationLogo/HeaderNavigationLogo";
import HeaderDesktopNavigation from "../HeaderDesktopNavigation/HeaderDesktopNavigation";
import HeaderSignSection from "../HeaderSignSection/HeaderSignSection";
import HeaderHamburgerIconSection from "../HeaderHamburgerIconSection/HeaderHamburgerIconSection";
import HeaderHamburgerMenuSection from "../HeaderHamburgerMenuSection/HeaderHamburgerMenuSection";

function HeaderNavigationPart() {
    return (
        <div className="header-navigation-part container">
            <HeaderNavigationLogo />
            <HeaderDesktopNavigation />
            <HeaderSignSection />
            <HeaderHamburgerIconSection />
            <HeaderHamburgerMenuSection />
        </div>
    )
}

export default HeaderNavigationPart