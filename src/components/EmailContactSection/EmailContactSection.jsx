import "./EmailContactSection.css"
import React from 'react'
import EmailContactSectionDetails from "../EmailContactSectionDetails/EmailContactSectionDetails"
import EmailContactSectionInput from "../EmailContactSectionInput/EmailContactSectionInput"
import EmailContactSectionPicture from "../EmailContactSectionPicture/EmailContactSectionPicture"

function EmailContactSection() {
  return (
    <div className="email-contact-section container">
      <div className="email-contact-section__bg-helper">
        <img src="./images/shapes/shape3.svg" className="email-contact-section__bg-helper-img"/>
      </div>
      <div className="email-contact-section__picture">
        <EmailContactSectionPicture />
      </div>
      <div className="email-contact-section__details">
        <EmailContactSectionDetails />
      </div>
      <div className="email-contact-section-input">
        <EmailContactSectionInput />
      </div>
    </div>
  )
}

export default EmailContactSection