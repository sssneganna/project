import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { LogIn } from "./LogIn";
import "./styles/navbar.css";

const MenuItems = [
  { navLink: "/", navLinkText: "Home" },
  { navLink: "/meet-emily", navLinkText: "Meet Emily" },
  { navLink: "/foxfit", navLinkText: "FoxFit" },
  { navLink: "/plans-pricing", navLinkText: "Plans & Pricing" },
  { navLink: "/#contact", navLinkText: "Contact" },
];

export class Navbar extends React.Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav
        className={
          this.state.clicked ? "global-nav global-nav_opened" : "global-nav"
        }
      >
        <ul className="global-nav_list">
          <LogIn
            signUpName="Log In"
            cNameButton="global-nav_logInBtn-mobile"
            cNameIcon="global-nav_logInBtn-icon"
            cNameLink="global-nav_link"
          />
          {MenuItems.map((item, index) => {
            return (
              <li key={index} className="global-nav_item">
                <Link
                  onClick={this.handleClick}
                  to={item.navLink}
                  className="global-nav_link"
                >
                  {item.navLinkText}
                </Link>
              </li>
            );
          })}
        </ul>
        <LogIn
          signUpName="Log In"
          cNameButton="global-nav_logInBtn"
          cNameIcon="global-nav_logInBtn-icon"
          cNameLink="global-nav_link"
        />
        <button className="global-nav_toggle" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </button>
      </nav>
    );
  }
}
