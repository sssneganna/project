import React from "react";
import { ComponentItem } from "../components/ComponentItem";
import { Button } from "../components/Button";

export const MainContent = () => {
  return (
    <section className="main-content">
      <section className="main-content_flex1 page-content">
        <div className="item1_alignment ">
          <ComponentItem
            cNameItem="component-item  item_yellow"
            componentItemTitle="Hi, I’m Emily"
            componentItemSubtitle="Certified Fitness Trainer and Personal Coach"
            componentItemText="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."
          />
          <Button
            cNameBtnText="component-item_btn-text"
            cNameItemBtn="component-item_btn item_btn-left size-btn_small color-btn_dark-blue"
            componentItemLink="./meet-emily"
            componentItemBtn="Read More"
          />
        </div>

        <div className="component-image_item"></div>
      </section>

      <section className="main-content_flex2">
        <div className="item2_alignment ">
          <ComponentItem
            cNameItem="component-item item_blue"
            componentItemTitle="Introducing FoxFit"
            componentItemSubtitle="The Ultimate Method to Change Your Life"
            componentItemText="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."
          />
          <Button
            cNameBtnText="component-item_btn-text"
            cNameItemBtn="component-item_btn item_btn-right size-btn_small color-btn_yellow"
            componentItemLink="./foxfit"
            componentItemBtn="Read More"
          />
        </div>
        <div className="component-image_item2"></div>
      </section>
    </section>
  );
};
