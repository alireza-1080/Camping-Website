import "./FooterGoToTopButton.css"
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function FooterGoToTopButton() {

    const scrollHandler = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div className="footer-go-to-top-button" onClick={scrollHandler}>
            <FaArrowUpLong className="footer-go-to-top-button__icon"/>
        </div>
    )
}

export default FooterGoToTopButton