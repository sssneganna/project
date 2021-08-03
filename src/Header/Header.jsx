import React from "react";
import { Navbar } from "./Navbar";
import { HeaderTitleComponent } from "./HeaderTitleComponent";
import "./styles/header.css";

class HeaderInfoComponent extends React.Component {
  render() {
    return (
      <div className="header-info">
        <p className="header-info_text">{this.props.info}</p>
      </div>
    );
  }
}

export class Header extends React.Component {
  render() {
    return (
      <header className="global-header">
        <div className="global-header_container">
          <HeaderInfoComponent info="10% off online bookings! Use the code FOXFIT" />
          <div className="header-menu">
            <HeaderTitleComponent />
            <Navbar />
          </div>
        </div>
      </header>
    );
  }
}
