import "./HeaderSignButton.css"
import React, { useEffect, useRef } from 'react'

function HeaderSignButton({title, border}) {
  const btn = useRef(null);

  useEffect(() => {
    if (border) {
      btn.current.classList.add("header-sign-button--border-type")
    } else {
      btn.current.classList.remove("header-sign-button--border-type")
    }
  }, [border])

  return (
    <div className="header-sign-button" ref={btn}>{title}</div>
  )
}

export default HeaderSignButton