import React from "react";
import "./componentItem.css";

export class ComponentItem extends React.Component {
  render() {
    return (
      <div className={this.props.cNameItem}>
        <h1 className="component-item_title">
          {this.props.componentItemTitle}
        </h1>
        <h2 className="component-item_subtitle">
          {this.props.componentItemSubtitle}
        </h2>
        <p className="component-item_text">{this.props.componentItemText}</p>
        <p className="component-item_text">{this.props.componentItemText2}</p>
      </div>
    );
  }
}
