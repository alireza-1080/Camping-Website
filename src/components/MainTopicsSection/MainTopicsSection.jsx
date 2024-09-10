import "./MainTopicsSection.css"
import MainTopic from "../MainTopic/MainTopic"
import React, { useState } from 'react'

function MainTopicsSection() {

    const [topics] = useState([
        {title: "Camping & Day Use",detail: "Return to your favorite spot or discover a new one that’s right for you.",svg: "./images/mainTopicsPictures/fire.svg"},
        {title: "Tours & Tickets",detail: "Reserve tours and tickets to participate in events.",svg: "./images/mainTopicsPictures/ticket.svg"},
        {title: "Permits",detail: "Obtain permits for access to high-demand locations.",svg: "./images/mainTopicsPictures/permit.svg"},
        {title: "Recreation Activities",detail: "Find the best spots for hunting, fishing & recreational shooting.",svg: "./images/mainTopicsPictures/fish.svg"}
    ])

  return (
    <div className="main-topics-section container">
        {topics.map(topic => {
            return <MainTopic key={topic.title} {...topic}/>
        })}
    </div>
  )
}

export default MainTopicsSection