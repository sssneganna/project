import React from "react";
import "./styles/socialIcon.css";

const socialIcons = [
  {
    href: "https://www.facebook.com/",
    iconClass: "fa-facebook",
  },
  {
    href: "https://www.twitter.com/",
    iconClass: "fa-twitter",
  },
  {
    href: "https://www.youtube.com/",
    iconClass: "fa-youtube",
  },
  {
    href: "https://www.instagram.com/",
    iconClass: "fa-instagram",
  },
];

class SocialLink extends React.Component {
  constructor(props) {
    super(props);
    this.href = this.props.href;
    this.iconClass = this.props.iconClass;
  }
  render() {
    return (
      <li className="social-icon_item">
        <a
          href={this.href}
          target="blank"
          rel="noopener noreferrer"
          className="social-icon_link"
        >
          <i className={`fab ${this.iconClass}`} aria-hidden="true" />
        </a>
      </li>
    );
  }
}

export class SocialIconBlock extends React.Component {
  render() {
    return (
      <ul className="social-icon_list">
        {socialIcons.map(({ href, iconClass }) => (
          <SocialLink href={href} iconClass={iconClass} key={href} />
        ))}
      </ul>
    );
  }
}
