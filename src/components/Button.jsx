import { Link } from "react-router-dom";
import React from "react";

export const Button = (props) => {
  return (
    <button
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className={props.cNameItemBtn}
    >
      <Link className="component-item_btn-link" to={props.componentItemLink}>
        <span className={props.cNameBtnText}>{props.componentItemBtn}</span>
      </Link>
    </button>
  );
};
