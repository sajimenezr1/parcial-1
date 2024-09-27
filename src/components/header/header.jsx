import React from "react"
import './header.css'


export const Header = () => {
    return (
        <div className="col-12 d-flex flex-column justify-content-center align-items-center" id="header">
            <h1 className="font-weight-bold">Adopta un robot con Robot Lovers!</h1>
            <img
                id="imgRobots"
                src={process.env.PUBLIC_URL + '/assets/header-img.png'}
                alt="Banner de una imagen con robots"
                className="shadow-sm p-3 mb-1 bg-white rounded"
            />
        </div>
    )
}