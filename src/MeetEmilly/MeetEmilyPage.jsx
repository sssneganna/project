import React from "react";
import { ComponentTitle } from "../components/ComponentTitle";
import { ComponentItem } from "../components/ComponentItem";
import file from "../assets/file.mp4";
import "../components/componentItem.css";
import "./meetEmily.css";
import { Button } from "../components/Button";

export const MeetEmily = () => {
  return (
    <div className="main-container">
      <section className="main-content">
        <ComponentTitle componentTitle="Meet Emily" />

        <section className="main-content_flex3 page-content2">
          <div className="component_image3"></div>
          <div className="item3_alignment">
            <ComponentItem
              cNameItem="component-item  item_blue"
              componentItemSubtitle="
 Certified Fitness Trainer 
 and Personal Coach"
              componentItemText="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."
            />
            <Button
              cNameBtnText="component-item_btn-text"
              cNameItemBtn="component-item_btn item_btn-right size-btn_small color-btn_yellow"
              componentItemLink="./"
              componentItemBtn="Book a Class"
            />
          </div>

          <div className="item4_alignment">
            <ComponentItem
              cNameItem="component-item  item_yellow"
              componentItemSubtitle="My Vision"
              componentItemText="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."
            />
          </div>
        </section>

        <section className="component-item_video">
          <video className="video" autoPlay loop muted>
            <source src={file} type="video/mp4"></source>
          </video>
        </section>
      </section>
    </div>
  );
};
