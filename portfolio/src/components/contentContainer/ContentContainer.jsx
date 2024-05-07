import React from "react";
import './ContentContainerStyle.css';

function Container({ children, heading }) {
    return (
        <div className="container">
            {heading && (
                <div className="heading">
                    {heading}
                </div>
            )}
            {children}
        </div>
    );
}

export default Container;
