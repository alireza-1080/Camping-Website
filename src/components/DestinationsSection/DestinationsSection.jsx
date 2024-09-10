import "./DestinationsSection.css"
import React from 'react'
import DestinationsSectionHeader from "../DestinationsSectionHeader/DestinationsSectionHeader"
import DestinationsSectionOffers from "../DestinationsSectionOffers/DestinationsSectionOffers"
import DestinationsSectionLazyLoadButton from "../DestinationsSectionLazyLoadButton/DestinationsSectionLazyLoadButton"

function DestinationsSection() {
  return (
    <div className="destinations-section">
        <DestinationsSectionHeader />
        <DestinationsSectionOffers />
        <DestinationsSectionLazyLoadButton />
    </div>
  )
}

export default DestinationsSection