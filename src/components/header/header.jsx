import React from "react"
import { FormattedMessage } from "react-intl"


export const Header = () => {
    return (
        <div className="container d-flex flex-column justify-content-center align-items-center mt-4 mb-1">
            <h1 className="font-weight-bold text-center"><FormattedMessage id="Header"/></h1>
            <img
                src={process.env.PUBLIC_URL + '/assets/header-img.png'}
                alt="Banner de una imagen con robots"
                className="border-top border-bottom border-2 p-3 mb-1 bg-white img-fluid"
            />
        </div>
    )
}