import React from "react";
import googlePlay from "../assets/googlePlay.png";
import appStore from "../assets/appStore.svg";
import { MainSectionForm } from "./MainSectionForm";
import "./mainSection.css";

export const MainSection = () => {
  return (
    <section className="main-section">
      <h2 className="main-section_title">FoxFit on the Go</h2>
      <div className="main-section-box">
        <div>
          <div className="main-section_opacity"></div>
          <p className="main-section_text">Join us on mobile!</p>
          <p className="main-section_text2">
            The Spaces by Wix app lets you easily stay in touch and updated with
            us on the go. Just add your phone number and we’ll text you a link
            to download the app.
          </p>
        </div>
        <MainSectionForm />
        <div className="main-section_badges">
          <a href="https://play.google.com">
            <img
              className="google-play-badges"
              src={googlePlay}
              alt="google-play-badges"
            ></img>
          </a>
          <a href="https://play.google.com">
            <img
              className="app-store-badges"
              src={appStore}
              alt="app-store-badges"
            />
          </a>
        </div>
      </div>
    </section>
  );
};
