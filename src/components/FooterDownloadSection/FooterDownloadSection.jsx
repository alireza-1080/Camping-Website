import "./FooterDownloadSection.css";
import React from 'react'

function FooterDownloadSection() {
  return (
    <div className="footer-download-section">
        <h3 className="footer-download-section__title">Download Our App</h3>
        <div className="footer-download-section__apple-container">
            <img src="./images/footer/app-store.png" alt="App Store" className="footer-download-section_img"/>
        </div>
        <div className="footer-download-section__google-container">
            <img src="./images/footer/google-play.png" alt="Google Play" className="footer-download-section_img"/>
        </div>
    </div>
  )
}

export default FooterDownloadSection