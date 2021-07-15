import React from "react";
import "./componentItem.css";

export const ComponentItem = (props) => {
  return (
    <div className={props.cNameItem}>
      <h1 className="component-item_title">{props.componentItemTitle}</h1>
      <h2 className="component-item_subtitle">{props.componentItemSubtitle}</h2>
      <p className="component-item_text">{props.componentItemText}</p>
      <p className="component-item_text">{props.componentItemText2}</p>
    </div>
  );
};
