import "./EmailContactSectionInput.css"
import React from 'react'
import { RiSendPlaneFill } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";

function EmailContactSectionInput() {
  return (
    <div className="email-content-section-input">
      <div className="email-content-section-input__email-icon-container">
        <HiOutlineMail className="email-content-section-input__email-icon"/>
      </div>
      <input type="email" className="email-content-section-input__input" placeholder="Email Address" />
      <div className="email-content-section-input__send-icon-container">
        <RiSendPlaneFill className="email-content-section-input__send-icon" />
      </div>
    </div>
  )
}

export default EmailContactSectionInput