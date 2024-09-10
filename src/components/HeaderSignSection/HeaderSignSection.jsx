import "./HeaderSignSection.css";
import React, { useState } from 'react'
import HeaderSignButton from "../HeaderSignButton/HeaderSignButton";

function HeaderSignSection() {

    const [signOptions] = useState([
        { title: "Sign up", border: false },
        { title: "Sign in", border: true }
    ])

    return (
        <div className="header-sign-section">
            {
                signOptions.map(item => {
                    return <HeaderSignButton key={item.title} {...item} />
                })
            }
        </div>
    )
}

export default HeaderSignSection