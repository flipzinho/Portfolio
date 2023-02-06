import React from 'react';
import './LinkComponent.css'
export const LinkComponent = (props) => {
    return (
      <>
      <p className="linkComponent">
      {props.textLink}  <a href={props.link} target="_blank" rel="noopener noreferrer">
        {props.text}
      </a>
      </p>
      </>
    );
  }

