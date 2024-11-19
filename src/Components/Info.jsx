import React from "react";

export default function Info(props) {
    return (
        <div className="card-container">
            <span className="info">Info</span>
            <img className="round" src={props.data.flag.img} alt={props.data.country} />
            <h3>{props.data.country}</h3>
            <h6>{props.data.city}</h6>
            <p>isp: {props.data.connection.isp}</p>
            <div className="footer">
                <p>IP: {props.data.ip}</p>
                <p>latitude: {props.data.latitude}</p>
                <p>longitude: {props.data.longitude}</p>
            </div>
        </div>
    )
}