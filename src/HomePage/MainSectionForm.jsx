import React from "react";
import "./styles/mainSectionForm.css";

export class MainSectionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countryCode: "",
      phoneNumber: "",
    };

    this.onChangeCountryCode = this.onChangeCountryCode.bind(this);
    this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    console.log(`${this.state.countryCode}`);
    console.log(`${this.state.phoneNumber}`);
    event.preventDefault();
  }

  onChangeCountryCode(event) {
    this.setState({ countryCode: event.target.value });
  }

  onChangePhoneNumber(event) {
    this.setState({ phoneNumber: event.target.value });
  }

  render() {
    return (
      <form className="main-section_form" onSubmit={this.onSubmit}>
        <input
          value={this.state.countryCode}
          onChange={this.onChangeCountryCode}
          className="main-section_input country-code_size"
          name="countryCode"
          type="tel"
          required
          placeholder="+3"
        ></input>
        <input
          value={this.state.phoneNumber}
          onChange={this.onChangePhoneNumber}
          className="main-section_input phone-number_size"
          name="phoneNumber"
          type="tel"
          required
          placeholder="Phone Number"
        ></input>
        <button className="send-btn" type="submit">
          Send
        </button>
      </form>
    );
  }
}
