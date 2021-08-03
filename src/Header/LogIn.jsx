import React from "react";
import "./styles/logIn.css";
import iconGoogle from "../assets/iconGoogle.png";
import logoLogIn from "./logoLogIn.svg";
import { SignUpForm } from "./SignUpForm";

export class LogIn extends React.Component {
  state = {
    isOpen: false,
    itisOpen: false,
  };
  render() {
    return (
      <React.Fragment>
        <button
          className={this.props.cNameButton}
          onClick={() => this.setState({ isOpen: true })}
        >
          <div className={this.props.cNameIcon}>
            <img src={logoLogIn} alt="logIn" />
          </div>
          <span className={this.props.cNameLink}>{this.props.signUpName}</span>
        </button>
        {this.state.isOpen && (
          <div className="modal-sign-up">
            <div className="modal-body-sign-up">
              <h2 className="modal-sign-up_title">Sign Up</h2>
              <p className="modal-sign-up_text">Already a member? Log In</p>
              <div className="modal-social-login-container">
                <button className="modal_btn btn-fb">
                  <span className="modal_social-icon">
                    <i class="fab fa-facebook-square" />
                  </span>
                  <a
                    className="modal_btn_link"
                    href="https://www.facebook.com/v2.11/dialog/oauth?app_id=309042052760104&auth_type=rerequest&cbt=1625129132591&channel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df732c141c09f2%26domain%3Dusers.wix.com%26origin%3Dhttps%253A%252F%252Fusers.wix.com%252Ff2bd512691edc44%26relation%3Dopener&client_id=309042052760104&display=popup&domain=users.wix.com&e2e=%7B%7D&fallback_redirect_uri=https%3A%2F%2Fusers.wix.com%2Fwix-sm%2Fview%2Fsocial%2Fframe%2F624d25d8-c1b2-42db-826a-741de54a41af%3Fmode%3Dsignup%26lang%3Den%26vendors%3Dgoogle%252Cfacebook%26extraCss%3Dsvg-style%26visitorId%3Dde40042c-cd18-4fbe-a0e1-55fd4df79052%26collectionId%3D1039532f-e80d-40e7-81ce-f48281a12078%26svSession%3Dundefined%26useGoogleSdk%3Dfalse%23privacyStatus%3DPUBLIC&fx_app=facebook&locale=ru_RU&logger_id=f2d0139a01c122c&origin=1&redirect_uri=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df34822428ac8988%26domain%3Dusers.wix.com%26origin%3Dhttps%253A%252F%252Fusers.wix.com%252Ff2bd512691edc44%26relation%3Dopener%26frame%3Df30da671fb7f8b&response_type=token%2Csigned_request%2Cgraph_domain&scope=public_profile%2Cemail&sdk=joey&version=v2.11"
                  >
                    Sign up with Facebook
                  </a>
                </button>
                <button className="modal_btn btn-google">
                  <img
                    className="modal_social-icon-google"
                    src={iconGoogle}
                    alt=""
                  />
                  <a
                    className="modal_btn_link"
                    href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?client_id=353985333474-88ga5vak3e1r9jr9pnh4amaj7fa39far.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fusers.wix.com%2Fwix-sm%2Fapi%2Foauth2%2FsocialLogin&response_type=code&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&state=%7B%22mode%22%3A%22signup%22%2C%22lang%22%3A%22en%22%2C%22provider%22%3A%22google%22%2C%22visitorId%22%3A%22de40042c-cd18-4fbe-a0e1-55fd4df79052%22%2C%22collectionId%22%3A%221039532f-e80d-40e7-81ce-f48281a12078%22%2C%22privacyStatus%22%3A%22PUBLIC%22%2C%22svSession%22%3A%22undefined%22%7D&flowName=GeneralOAuthFlow"
                  >
                    Sign up with Google
                  </a>
                </button>
              </div>

              <div className="modal_stripes">or</div>
              <button
                className="modal_btn btn-email"
                onClick={() => this.setState({ itisOpen: true })}
              >
                Sign up with Email
              </button>
              {this.state.itisOpen && (
                <div className="modal-sign-up">
                  <div className="modal-body-sign-up">
                    <h2 className="modal-sign-up_title">Sign Up</h2>
                    <p className="modal-sign-up_text">
                      Already a member? Log in
                    </p>
                    <div className="modal-social-login-container">
                      <SignUpForm />
                    </div>
                    <div className="button-close_alignment">
                      <button
                        className="button_close"
                        onClick={() => this.setState({ itisOpen: false })}
                      />
                    </div>

                    <div className="modal_stripes-sign-up">or sign up with</div>
                    <div className="sign-up-icon_box">
                      <a
                        className="sign-up_fb"
                        href="https://www.facebook.com/v2.11/dialog/oauth?app_id=309042052760104&auth_type=rerequest&cbt=1625129132591&channel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df732c141c09f2%26domain%3Dusers.wix.com%26origin%3Dhttps%253A%252F%252Fusers.wix.com%252Ff2bd512691edc44%26relation%3Dopener&client_id=309042052760104&display=popup&domain=users.wix.com&e2e=%7B%7D&fallback_redirect_uri=https%3A%2F%2Fusers.wix.com%2Fwix-sm%2Fview%2Fsocial%2Fframe%2F624d25d8-c1b2-42db-826a-741de54a41af%3Fmode%3Dsignup%26lang%3Den%26vendors%3Dgoogle%252Cfacebook%26extraCss%3Dsvg-style%26visitorId%3Dde40042c-cd18-4fbe-a0e1-55fd4df79052%26collectionId%3D1039532f-e80d-40e7-81ce-f48281a12078%26svSession%3Dundefined%26useGoogleSdk%3Dfalse%23privacyStatus%3DPUBLIC&fx_app=facebook&locale=ru_RU&logger_id=f2d0139a01c122c&origin=1&redirect_uri=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df34822428ac8988%26domain%3Dusers.wix.com%26origin%3Dhttps%253A%252F%252Fusers.wix.com%252Ff2bd512691edc44%26relation%3Dopener%26frame%3Df30da671fb7f8b&response_type=token%2Csigned_request%2Cgraph_domain&scope=public_profile%2Cemail&sdk=joey&version=v2.11"
                      >
                        <i class="fab fa-facebook-square"></i>
                      </a>
                      <a href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?client_id=353985333474-88ga5vak3e1r9jr9pnh4amaj7fa39far.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fusers.wix.com%2Fwix-sm%2Fapi%2Foauth2%2FsocialLogin&response_type=code&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&state=%7B%22mode%22%3A%22signup%22%2C%22lang%22%3A%22en%22%2C%22provider%22%3A%22google%22%2C%22visitorId%22%3A%22de40042c-cd18-4fbe-a0e1-55fd4df79052%22%2C%22collectionId%22%3A%221039532f-e80d-40e7-81ce-f48281a12078%22%2C%22privacyStatus%22%3A%22PUBLIC%22%2C%22svSession%22%3A%22undefined%22%7D&flowName=GeneralOAuthFlow">
                        <img
                          className="sign-up_google"
                          src={iconGoogle}
                          alt="sign-up_google"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              )}
              <div className="button-close_alignment">
                <button
                  className="button_close"
                  onClick={() => this.setState({ isOpen: false })}
                />
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}
