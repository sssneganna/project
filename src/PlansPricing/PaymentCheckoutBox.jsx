import React from "react";
import { LogIn } from "../Header/LogIn";
import "./styles/checkoutbox.css";

export const PaymentCheckountBox = () => {
  return (
    <React.Fragment>
      <div className="payment-checkout_box">
        <div className="payment-checkout_section">
          <h2 className="payment-checkout_title">Checkout</h2>
        </div>
        <div className="payment-section3">
          <h2 className="payment-summary_left  payment-summary_title">
            Gold Membership
          </h2>
          <table className="payment-summary_table">
            <tr>
              <td className="payment-summary_left payment-summary_padding">
                Duration
              </td>
              <td className="payment-summary_right payment-summary_padding">
                12 months
              </td>
            </tr>
            <tr>
              <td className="payment-summary_left payment-summary_border">
                Billed monthly{" "}
              </td>
              <td className="payment-summary_right payment-summary_border payment-summary_size-price">
                $25
              </td>
            </tr>
          </table>
        </div>
        <div className="payment_section">
          <div className="payment-login_section">
            <div className="payment-login">
              <h3 className="payment-login_title black_title">1 Sign Up</h3>
              <p className="payment-login_text">
                To purchase this plan and use its benefits in the future, log in
                to your account or sign up.
              </p>
              <div className="button_box">
                <LogIn
                  signUpName="Sign Up"
                  cNameButton="Sign Up button_logIn black_btn"
                  cNameIcon="button-icon-hidden"
                  cNameLink="button_logIn_link"
                />
                <LogIn
                  signUpName="Log In"
                  cNameButton="Log In button_logIn white_btn"
                  cNameIcon="button-icon-hidden"
                  cNameLink="button_logIn_link"
                />
              </div>
            </div>
            <div className="payment-cashier_section">
              <h3 className="payment-login_title grey_title">2 Payment</h3>
            </div>
          </div>
          <div className="payment_section2">
            <div className="payment-summary_section">
              <h3 className="payment-login_title black_title">Order Summary</h3>
              <table className="payment-summary_table">
                <tbody>
                  <tr>
                    <td className="payment-summary_left">Plan</td>
                    <td className="payment-summary_right">Gold Membership</td>
                  </tr>
                  <tr>
                    <td className="payment-summary_left payment-summary_padding">
                      Duration
                    </td>
                    <td className="payment-summary_right payment-summary_padding">
                      12 months
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td className="payment-summary_left payment-summary_border">
                      Billed monthly for 12 months
                    </td>
                    <td className="payment-summary_right payment-summary_border payment-summary_size-price">
                      $25
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
