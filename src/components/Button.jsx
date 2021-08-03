import { Link } from "react-router-dom";
import React from "react";

export class Button extends React.Component {
  render() {
    return (
      <button
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className={this.props.cNameItemBtn}
      >
        <Link
          className="component-item_btn-link"
          to={this.props.componentItemLink}
        >
          <span className={this.props.cNameBtnText}>
            {this.props.componentItemBtn}
          </span>
        </Link>
      </button>
    );
  }
}
