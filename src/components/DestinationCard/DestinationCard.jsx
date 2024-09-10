import "./DestinationCard.css"
import React, { useEffect, useRef, useState } from 'react'
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

function DestinationCard({ destination, details, price, src }) {

    const [isTheCardLiked, setIsTheCardLiked] = useState(false);
    const likedElem = useRef(null);

    useEffect(() => {
        if (isTheCardLiked) {
            likedElem.current.classList.add("destination-card__like-icon--filled-appear")
        } else {
            likedElem.current.classList.remove("destination-card__like-icon--filled-appear")
        }
    }, [isTheCardLiked])

    return (
        <div className="destination-card">
            <div className="destination-card__image-container">
                <img src={src} alt={destination} className="destination-card__img" />
                <div className="destination-card__like-icon-container" onClick={() => setIsTheCardLiked(!isTheCardLiked)}>
                    <div className="destination-card__like-icon-container-position-adjuster">
                        <div className="destination-card__like-icon--filled destination-card__like-icon" ref={likedElem}>
                            <FaHeart />
                        </div>
                        <div className="destination-card__like-icon--empty destination-card__like-icon">
                            <FaRegHeart />
                        </div>
                    </div>
                </div>
                <div className="destination-card__pricing">
                    {`$${price} / night`}
                </div>
            </div>
            <div className="destination-card__content-container">
                <h2 className="destination-card__title">
                    {destination}
                </h2>
                <p className="destination-card__details">
                    {details}
                </p>
            </div>
            <div className="destination-card__read-more-button">
                <h5 className="destination-card__read-more-button-h5">Read More</h5>
            </div>
        </div>
    )
}

export default DestinationCard