import "./DestinationsSectionOffers.css"
import React, { useState } from 'react'
import DestinationCard from "../DestinationCard/DestinationCard"

function DestinationsSectionOffers() {

  const [destinations] = useState([
    {destination: "The Stuga", details: "Book unique camping experiences on over 300,000 campsites.", price: 36, src: "./images/destinations/destinations/1.jpg"},
    {destination: "Tiny Cabin in the mountains", details: "Book unique camping experiences on over 300,000 campsites.", price: 36, src: "./images/destinations/destinations/2.jpg"},
    {destination: "Dragonfly Tiny Cabin", details: "Book unique camping experiences on over 300,000 campsites.", price: 36, src: "./images/destinations/destinations/3.jpg"},
    {destination: "Trickle Creek Ranch", details: "Book unique camping experiences on over 300,000 campsites.", price: 36, src: "./images/destinations/destinations/4.jpg"},
    {destination: "The Hermitage Cabin", details: "Book unique camping experiences on over 300,000 campsites.", price: 36, src: "./images/destinations/destinations/5.jpg"},
    {destination: "Kindred Spirits Cabin", details: "Book unique camping experiences on over 300,000 campsites.", price: 36, src: "./images/destinations/destinations/6.jpg"},
    {destination: "The Summit Cabin", details: "Book unique camping experiences on over 300,000 campsites.", price: 36, src: "./images/destinations/destinations/7.jpg"},
    {destination: "Luxury Tiny Beach Cabin", details: "Book unique camping experiences on over 300,000 campsites.", price: 36, src: "./images/destinations/destinations/8.jpg"},
    {destination: "Ninovan on the Shore", details: "Book unique camping experiences on over 300,000 campsites.", price: 36, src: "./images/destinations/destinations/9.jpg"},
    {destination: "Barrier island elevated tent", details: "Book unique camping experiences on over 300,000 campsites.", price: 36, src: "./images/destinations/destinations/10.jpg"},
    {destination: "The Tree House", details: "Book unique camping experiences on over 300,000 campsites.", price: 36, src: "./images/destinations/destinations/11.jpg"},
    {destination: "Red Lifeguard Stand", details: "Book unique camping experiences on over 300,000 campsites.", price: 36, src: "./images/destinations/destinations/12.jpg"},
  ])

  return (
    <div className="destination-section-offers container">
      {destinations.map(destination => {
        return <DestinationCard key={destination.destination} {...destination}/>
      })}
    </div>
  )
}

export default DestinationsSectionOffers