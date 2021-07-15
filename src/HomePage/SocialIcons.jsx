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

const SocialLink = (props) => {
  const { href, iconClass } = props;
  return (
    <li className="social-icon_item">
      <a
        href={href}
        target="blank"
        rel="noopener noreferrer"
        className="social-icon_link"
      >
        <i className={`fab ${iconClass}`} aria-hidden="true"></i>
      </a>
    </li>
  );
};

export const SocialIconBlock = () => {
  return (
    <ul className="social-icon_list">
      {socialIcons.map(({ href, iconClass }) => (
        <SocialLink href={href} iconClass={iconClass} key={href} />
      ))}
    </ul>
  );
};
