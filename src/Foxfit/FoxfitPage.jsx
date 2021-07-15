import { ComponentTitle } from "../ComponentTitle";
import { ComponentItem } from "../ComponentItem";
import React from "react";
import { LogoFoxfit } from "./LogoFoxfit";
import "./foxfit.css";

export const Foxfit = () => {
  return (
    <div className="main-container">
      <section className="main-content">
        <ComponentTitle componentTitle="About FoxFit" />
        <section className="main-content_flex4  page-content">
          <div className="item5_alignment">
            <ComponentItem
              cNameItem="component-item  item_blue"
              componentItemSubtitle="
The Ultimate Method to Change Your Life"
              componentItemText="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you."
              componentItemText2="This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company."
            />
          </div>
          <div className="item6_alignment">
            <div className="component-item  item_yellow">
              <h2 className="component-item_subtitle">Why FoxFit</h2>
              <LogoFoxfit />
            </div>
          </div>
        </section>
        <div className="component-image_item4"></div>
      </section>
    </div>
  );
};
