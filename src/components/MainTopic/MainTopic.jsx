import "./MainTopic.css"
import React from 'react'

function MainTopic({ title, detail, svg }) {
    
    return (
        <div className="main-topic">
            <div className="main-topic__picture">
                <img src={svg} alt={title} className="main-topic__img" />
            </div>
            <div className="main-topic__title">
                <h2 className="main-topic__h2">{title}</h2>
            </div>
            <div className="main-topic__detail">
                <h3 className="main-topic__h3">{detail}</h3>
            </div>
        </div>
    )
}

export default MainTopic