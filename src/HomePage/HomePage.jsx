import React from "react";
import { MainPage } from "./MainPage";
import { MainContent } from "./MainContent";
import { MainSection } from "./MainSection";
import { LogosFitness } from "./LogosFitness";
import "./styles/homePage.css";

const mainLargeTitle = {
  name: "Book an Online Class",
};

const mainSubtitle = {
  name: "As Featured On",
};

export const HomePage = () => {
  return (
    <div className="main-container">
      <MainPage />
      <MainContent />
      <section className="component-box_large">
        <h2 className="component-box_large-title">{mainLargeTitle.name}</h2>
      </section>
      <div className="main-content_subtitle">
        <h2 className="main-subtitle">{mainSubtitle.name}</h2>
      </div>
      <LogosFitness />
      <MainSection />
    </div>
  );
};
