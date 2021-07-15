import React from "react";
import "./styles/signUpForm.css";

export class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };

    this.onChangEmail = this.onChangEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    console.log(`${this.state.email}`);
    console.log(`${this.state.password}`);
    event.preventDefault();
  }

  onChangEmail(event) {
    this.setState({ email: event.target.value });
  }

  onChangePassword(event) {
    this.setState({ password: event.target.value });
  }
  render() {
    return (
      <form className="sign-up-form" onSubmit={this.onSubmit}>
        <div className="sign-up-form_field">
          <input
            className="sign-up-form_input"
            name="email"
            value={this.state.email}
            onChange={this.onChangEmail}
            type="email"
            placeholder="Email"
            required
          />
        </div>

        <div className="sign-up-form_field">
          <input
            className="sign-up-form_input"
            value={this.state.password}
            name="password"
            type="password"
            onChange={this.onChangePassword}
            placeholder="Password"
            required
          />
        </div>

        <button type="submit" className="sign-up-form_btn">
          Sign Up
        </button>
      </form>
    );
  }
}
