import React from "react";

import "./menu-item.style.scss";

const MenuItem = ({ title, imageUrl, size }) => (
    <div className={`menu-item ${size ?? ""}`}>
        <div
            className="background-image"
            style={{
                backgroundImage: `url(${imageUrl})`,
            }}
        />
        <div className="content">
            <h1 className="title">{title}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem;
