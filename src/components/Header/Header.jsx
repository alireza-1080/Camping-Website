import "./Header.css";
import React from 'react';
import HeaderNavigationPart from '../HeaderNavigationPart/HeaderNavigationPart'
import HeaderContentPart from '../HeaderContentPart/HeaderContentPart'

function Header() {
  return (
    <div className="header">
      <div className="header__background">
        <HeaderNavigationPart />
        <HeaderContentPart />
      </div>
    </div>
  )
}

export default Header