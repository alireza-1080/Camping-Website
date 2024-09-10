import "./HeaderContentPart.css"
import React from 'react'
import HeaderContentDetail from "../HeaderContentDetail/HeaderContentDetail"
import HeaderContentTitle from "../HeaderContentTitle/HeaderContentTitle"
import HeaderContentDiscoverButton from "../HeaderContentDiscoverButton/HeaderContentDiscoverButton"

function HeaderContentPart() {
  return (
    <div className="header-content-part-container container">
      <HeaderContentTitle />
      <HeaderContentDetail />
      <HeaderContentDiscoverButton />
    </div>
  )
}

export default HeaderContentPart