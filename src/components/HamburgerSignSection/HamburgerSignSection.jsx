import "./HamburgerSignSection.css"
import HamburgerSignButton from "../HamburgerSignButton/HamburgerSignButton"
import React, { useState } from 'react'

function HamburgerSignSection() {

  const [signOptions] = useState([
    { title: "Sign up", border: false },
    { title: "Sign in", border: true }
])

  return (
    <div className="hamburger-sign-section">
      {
        signOptions.map(item => {
          return <HamburgerSignButton key={item.title} {...item} />
        })
      }
    </div>
  )
}

export default HamburgerSignSection