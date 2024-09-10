import "./HamburgerSignButton.css"

import React from 'react'

function HamburgerSignButton({ title, border }) {
    
    return (
        <div className="hamburger-sign-button">{title}</div>
    )
}

export default HamburgerSignButton