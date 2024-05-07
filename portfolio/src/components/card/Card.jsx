import React, { useState } from 'react';
import './CardStyle.css';
import Button from '../button/Button';

function Card({ info }) {

  return (
<div className="card">
      <div className="card-header">
        <h2>{info.title}</h2>
        <div className="card-tags">
          {info.tags.map((tag, index) => (
            <span key={index} className="tag" style={{ backgroundColor: tag.color, color:tag.textColor }}>
              {tag.name}
            </span>
          ))}
        </div>
      </div>

      <div className={`card-body`}>
        <p>{info.body}</p>
      </div>

      <div className="card-thumbnails">
      </div>
    </div>
  );
}

export default Card;
