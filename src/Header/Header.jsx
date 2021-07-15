import React from "react";
import { Navbar } from "./Navbar";
import { HeaderTitleComponent } from "./HeaderTitleComponent";
import "./styles/header.css";

const HeaderInfoComponent = (props) => {
  return (
    <div className="header-info">
      <p className="header-info_text">{props.info}</p>
    </div>
  );
};

export const Header = () => {
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
};
