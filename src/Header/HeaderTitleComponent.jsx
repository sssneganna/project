import logo from "./logo.svg";
import React from "react";
import { Link } from "react-router-dom";
import "./styles/headerTitle.css";

const titleComponent = {
  title: "Emily Fox Fitness",
  urlTitle: "./",
};

export const HeaderTitleComponent = () => {
  return (
    <div className="header-global_title">
      <Link to={titleComponent.urlTitle}>
        <img src={logo} className="logo" alt="logo" />
      </Link>
      <Link to={titleComponent.urlTitle} className="header-title">
        {titleComponent.title}
      </Link>
    </div>
  );
};
