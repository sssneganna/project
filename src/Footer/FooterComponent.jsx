import "./styles/footerComponent.css";
import React from "react";

const footerComponent = {
  footerComponentTitle: "Get in Touch",
  footerComponentText:
    "I'm a paragraph. Click here to add your own text and edit me.",
  footerComponentEmail: "mailto:@info@mysite.com",
  componentEmail: "Email. info@mysite.com",
  footerComponentPhone: "tel: +123 456 7890",
  componentPhone: "Phone. 123-456-7890",
  footerComponentAddress: `Address. 500 Terry Francois Street
          San Francisco, CA 94158`,
};

export class FooterComponent extends React.Component {
  render() {
    return (
      <div id="contact" className="footer-component">
        <h2 className="footer-component_title">
          {footerComponent.footerComponentTitle}
        </h2>
        <p className="footer-component_text">
          {footerComponent.footerComponentText}
        </p>
        <p className="footer-component_address">
          {footerComponent.footerComponentAddress}
        </p>
        <a
          className="footer-component_email"
          href={footerComponent.footerComponentEmail}
        >
          <span>{footerComponent.componentEmail}</span>
        </a>
        <a
          className="footer-component_phone"
          href={footerComponent.footerComponentPhone}
        >
          <span>{footerComponent.componentPhone}</span>
        </a>
      </div>
    );
  }
}
