import React from "react";

export class ComponentTitle extends React.Component {
  render() {
    return (
      <div className="component-box">
        <h1 className="component-box_title">{this.props.componentTitle}</h1>
      </div>
    );
  }
}
