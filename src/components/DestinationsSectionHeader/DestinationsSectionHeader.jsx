import "./DestinationsSectionHeader.CSS"
import React from 'react'
import DestinationsSectionHeaderLogo from "../DestinationsSectionHeaderLogo/DestinationsSectionHeaderLogo"
import DestinationsSectionHeaderTitle from "../DestinationsSectionHeaderTitle/DestinationsSectionHeaderTitle"

function DestinationsSectionHeader() {
  return (
    <div className="destinations-section-header container">
      <DestinationsSectionHeaderLogo />
      <DestinationsSectionHeaderTitle />
    </div>
  )
}

export default DestinationsSectionHeader