import './Footer.css';
import React from 'react';
import FooterList from '../FooterList/FooterList';
import FooterDownloadSection from '../FooterDownloadSection/FooterDownloadSection';
import FooterRightsSection from '../FooterRightsSection/FooterRightsSection';
import FooterGoToTopButton from '../FooterGoToTopButton/FooterGoToTopButton';


function Footer() {

  const list1 = {
    title: "Hipcamp is everywhere you want to camp",
    list: ["Discover unique experiences on ranches, nature preserves, farms, vineyards, and public campgrounds across the U.S. Book tent camping, treehouses, cabins, yurts, primitive backcountry sites, car camping, airstreams, tiny houses, RV camping, glamping tents and more."],
    generateLink: false,
  }

  const list2 = {
    title: "Get to Know Us",
    list: ["About Us", "Rules & Reservation Policies", "Accessibility", "Media Center", "Site Map"],
    generateLink: true,
  }

  const list3 = {
    title: "Plan with Us",
    list: ["Find Trip Inspiration", "Build a Trip", "Buy a Pass", "Enter a Lottery"],
    generateLink: true,
  }

  const list4 = {
    title: "Let Us Help You",
    list: ["Your Account", "Your Reservations", "Contact Us", "Help Center", "Submit Feedback"],
    generateLink: true,
  }

  return (
    <div className="footer-bg">
      <div className='footer container'>
        <div className="footer__arrow-up-icon">
          <FooterGoToTopButton />
        </div>
        <div className="footer__list1">
          <FooterList {...list1} />
        </div>
        <div className="footer__list2">
          <FooterList {...list2} />
        </div>
        <div className="footer__list3">
          <FooterList {...list3} />
        </div>
        <div className="footer__list4">
          <FooterList {...list4} />
        </div>
        <div className="footer__download-section">
          <FooterDownloadSection />
        </div>
        <div className="footer__rights-section">
          <FooterRightsSection />
        </div>
      </div>
    </div>
  )
}

export default Footer