import "./HeaderHamburgerIconSection.css";
import React, { useEffect, useRef } from 'react'
import { IoMdMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { updateIsHamburgerOpen } from "../../redux/headerStatesSlicer";

function HeaderHamburgerIconSection() {

  const dispatch = useDispatch()
  const isMenuOpen = useSelector(state => state.headerStates.isHamburgerOpen);
  const burger = useRef(null);
  const close = useRef(null)

  useEffect(() => {
    if (isMenuOpen) {
      burger.current.classList.add("header-hamburger-icon-section__burger-container--disapear")
      close.current.classList.add("header-hamburger-icon-section__close-container--show")
    } else {
      burger.current.classList.remove("header-hamburger-icon-section__burger-container--disapear")
      close.current.classList.remove("header-hamburger-icon-section__close-container--show")
    }
  }, [isMenuOpen])

  return (
    <div className="header-hamburger-icon-section" onClick={() => dispatch(updateIsHamburgerOpen())}>
      <div className="header-hamburger-icon-section__icon">
        <div className="header-hamburger-icon-section__burger-container" ref={burger}>
          <IoMdMenu className="header-hamburger-icon-section__burger" />
        </div>
        <div className="header-hamburger-icon-section__close-container" ref={close}>
          <MdClose className="header-hamburger-icon-section__close"/>
        </div>
      </div>
    </div>
  )
}

export default HeaderHamburgerIconSection