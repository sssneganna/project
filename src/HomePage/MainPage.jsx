import React from "react";
import { SocialIconBlock } from "./SocialIcons";
import { Button } from "../components/Button";
import "./mainPage.css";

export const MainPage = () => {
  return (
    <section ClassName="main-page">
      <div className="main-page_info">
        <h1 className="main-title">Emily Fox</h1>
        <p className="main-text">Discover Your Power Through Online Coaching</p>
        <SocialIconBlock />
      </div>
      <div className="main-page_img"></div>
      <div className="item_btn-alignment-box">
        <div className="item_btn-alignment">
          <Button
            cNameItemBtn="component-item_btn size-btn_large color-btn_blue "
            componentItemLink="/foxfit"
            componentItemBtn="Discover FoxFit"
            cNameBtnText="component-item_btn-large-text"
          />
          <Button
            cNameItemBtn="component-item_btn size-btn_large color-btn_dark-blue"
            componentItemLink="/"
            componentItemBtn="Book a Class"
            cNameBtnText="component-item_btn-large-text"
          />
        </div>
      </div>
    </section>
  );
};
