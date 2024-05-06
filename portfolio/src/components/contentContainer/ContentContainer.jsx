import React from "react";
import './ContentContainerStyle.css';

function Container({ children }) {
    return <div className="container">{children}</div>;
}

export default Container;