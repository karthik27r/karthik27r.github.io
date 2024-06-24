import React from "react";
import './ButtonStyle.css';

function Button({
    onClick,
    type,
    Icon,
    title,
    className,
    color,
    iconClassName,
  }) {
  
    return (
      <button
        onClick={onClick ? onClick : () => {}}
        type={type ? type : "button"}
        style={{ backgroundColor: color }}
        className={`button ${className ? className : ''}`.trim()}
      >
        {Icon && <Icon className={`${title ? "margin-right: 1rem;" : ""} ${iconClassName}`} />}
        {title && <span>{title}</span>}
      </button>
    );
  }
  
  export default Button;