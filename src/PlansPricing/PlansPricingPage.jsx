import React from "react";
import { Link } from "react-router-dom";
import { ComponentTitle } from "../ComponentTitle";
import "./styles/planspricing.css";

const Item = (props) => {
  return (
    <li className="item">
      <div className="item_container">
        <h2 className="item_title">{props.item.title}</h2>
        <div className="item_value">{props.item.value}</div>
        <div className="item_price-box">
          <div className="item_currency">{props.item.currency}</div>
          <div className="item_price">{props.item.price}</div>
        </div>
        <div className="item_text1">{props.item.text1}</div>
        <div className="item_text2">{props.item.text2}</div>
        <div className="item_text3">{props.item.text3}</div>
        <button
          className="item_btn"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <Link to={props.item.link} className="item_link">
            {props.item.textButton}
          </Link>
        </button>
      </div>
      <div className="item_price-box2">
        <div className="item_text4">{props.item.text4}</div>
      </div>
    </li>
  );
};

export class Plans extends React.Component {
  useState = {
    items: [
      {
        id: "1",
        link: "./payment_30",
        text4: "I’m a benefit",
        title: "Silver Membership",
        currency: "$",
        price: "30",
        text2: "Short-term trial for beginners",
        text3: "Valid for one month",
        textButton: "Select",
      },
      {
        id: "2",
        link: "./payment_25",
        title: "Gold Membership",
        value: "Best Value",
        currency: "$",
        price: "25",
        text1: "Every month",
        text2: "Ideal for advanced trainees",
        text3: "Valid for 12 months",
        text4: "I’m a benefit",
        textButton: "Select",
      },
      {
        id: "3",
        link: "./payment_40",
        title: "Platinum Membership",
        currency: "$",
        price: "40",
        text1: "Every month",
        text2: "Perfect for committed trainees",
        text4: "I’m a benefit",
        textButton: "Select",
      },
    ],
  };
  render() {
    return (
      <div className="main-container">
        <section className="main-content">
          <ComponentTitle componentTitle="Choose Your Pricing Plan" />
          <div className="pricing-page_text">
            <p>I'm a paragraph. Click here to add your own text and edit me.</p>
            <p>Let your users get to know you.</p>
          </div>

          <ul className="pricing-page_container page-content">
            {this.useState.items.map((item) => {
              return <Item item={item} key={item.id} />;
            })}
          </ul>
        </section>
      </div>
    );
  }
}
