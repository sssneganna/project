import React from "react";
import { Form } from "./Form";
import { FooterComponent } from "./FooterComponent";
import "./styles/footer.css";

class FooterInfo extends React.Component {
  render() {
    return (
      <div className="footer-content_info">
        {this.props.footerInfo}
        <a
          className="footer-href"
          href={this.props.footerInfoHref}
          target="blank"
        >
          {this.props.footerInfoLink}
        </a>
      </div>
    );
  }
}

export class Footer extends React.Component {
  render() {
    return (
      <footer className="global-footer">
        <div className="global-footer_container">
          <div className="footer-content">
            <div className="footer-content_information">
              <FooterComponent />
            </div>
            <div className="footer-content_form">
              <Form />
            </div>
          </div>
          <FooterInfo
            footerInfo="© 2023 by Emily Fox Fitness. Proudly created with"
            footerInfoLink=" Wix.com"
            footerInfoHref="https://www.wix.com/?utm_campaign=vir_created_with"
          />
        </div>
        <button
          className="scroll"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <i className="fas fa-chevron-up" />
        </button>
      </footer>
    );
  }
}
