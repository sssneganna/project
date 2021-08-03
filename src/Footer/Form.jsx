import React from "react";
import "./styles/form.css";
const API_URL = `https://boring-fe.herokuapp.com/comments`;

export class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    };

    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeSubject = this.onChangeSubject.bind(this);
    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    const requestData = new FormData(event.target);
    fetch(API_URL, {
      method: "POST",
      body: requestData,
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
    event.preventDefault();
  }

  onChangeFirstName(event) {
    this.setState({ firstName: event.target.value });
  }

  onChangeLastName(event) {
    this.setState({ lastName: event.target.value });
  }

  onChangeEmail(event) {
    this.setState({ email: event.target.value });
  }

  onChangeSubject(event) {
    this.setState({ subject: event.target.value });
  }

  onChangeMessage(event) {
    this.setState({ message: event.target.value });
  }

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        <div className="form-flex">
          <div className="form_field">
            <input
              type="text"
              value={this.state.firstName}
              onChange={this.onChangeFirstName}
              name="firstName"
              className="form_input"
              required
              placeholder="First Name"
            />
          </div>
          <div className="form_field">
            <input
              type="text"
              value={this.state.lastName}
              onChange={this.onChangeLastName}
              name="lastName"
              className="form_input"
              required
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="form-flex">
          <div className="form_field">
            <input
              type="email"
              value={this.state.email}
              onChange={this.onChangeEmail}
              name="email"
              className="form_input"
              required
              placeholder="Email"
            />
          </div>
          <div className="form_field">
            <input
              type="text"
              value={this.state.subject}
              onChange={this.onChangeSubject}
              name="subject"
              className="form_input"
              required
              placeholder="Subject"
            />
          </div>
        </div>
        <div className="form_field_textarea">
          <textarea
            type="text"
            value={this.state.message}
            onChange={this.onChangeMessage}
            name="message"
            className="form_input textarea"
            required
            placeholder="Type your message here..."
          />
        </div>

        <button className="form_button" type="submit">
          Submit
        </button>
      </form>
    );
  }
}
