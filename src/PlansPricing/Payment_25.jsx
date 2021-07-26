import { ComponentTitle } from "../components/ComponentTitle";
import React from "react";
import { PaymentCheckountBox } from "./PaymentCheckoutBox";

export const Payment_25 = () => {
  return (
    <div className="pricing-page">
      <ComponentTitle componentTitle="Choose Your Pricing Plan" />
      <div className="pricing-page_text">
        <p>I'm a paragraph. Click here to add your own text and edit me.</p>
        <p>Let your users get to know you.</p>
      </div>
      <PaymentCheckountBox />
    </div>
  );
};
