import "./FooterList.css";
import React, { useEffect, useRef } from 'react'

function FooterList({ title, list, generateLink }) {

    const listItem = useRef(null)

    useEffect(() => {
        if (!generateLink) {
            listItem.current.classList.remove("footer-list__list-item--link")
        }
    }, [])

    return (
        <div className="footer-list">
            <div className="footer-list__title-container">
                <h3 className="footer-list__h3">{title}</h3>
            </div>
            <div className="footer-list__list-container">
                {list.map(item => {
                    return <h4 key={crypto.randomUUID()} className="footer-list__list-item footer-list__list-item--link" ref={listItem}>{item}</h4>
                })}
            </div>
        </div>
    )
}

export default FooterList