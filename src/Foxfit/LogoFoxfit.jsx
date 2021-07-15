import React from "react";
import "./styles/logoFoxfit.css";
import logoFoxfit from "./assets/logoFoxfit.svg";
import logoFoxfit2 from "./assets/logoFoxfit2.svg";
import logoFoxfit3 from "./assets/logoFoxfit3.svg";
import logoFoxfit4 from "./assets/logoFoxfit4.svg";
import logoFoxfit5 from "./assets/logoFoxfit5.svg";
import logoFoxfit6 from "./assets/logoFoxfit6.svg";

export const LogoFoxfit = () => {
  return (
    <div className="logoFoxfit-conteiner">
      <div className="logoFoxfit-flex">
        <div className="logoFoxfit_icon">
          <img src={logoFoxfit} className="logoFoxfit_icon" alt="logo" />
        </div>
        <div className="logoFoxFit_text">Suitable for Beginners</div>
      </div>
      <div className="logoFoxfit-flex">
        <div className="logoFoxfit_icon">
          <img src={logoFoxfit2} className="logoFoxfit_icon" alt="logo" />
        </div>
        <div className="logoFoxFit_text">Flexible Schedule</div>
      </div>
      <div className="logoFoxfit-flex">
        <div className="logoFoxfit_icon">
          <img src={logoFoxfit3} className="logoFoxfit_icon" alt="logo" />
        </div>
        <div className="logoFoxFit_text">Personal Guidance</div>
      </div>
      <div className="logoFoxfit-flex">
        <div className="logoFoxfit_icon">
          <img src={logoFoxfit4} className="logoFoxfit_icon" alt="logo" />
        </div>
        <div className="logoFoxFit_text">Advanced Techniques</div>
      </div>
      <div className="logoFoxfit-flex">
        <div className="logoFoxfit_icon">
          <img src={logoFoxfit5} className="logoFoxfit_icon" alt="logo" />
        </div>
        <div className="logoFoxFit_text">Proven Results</div>
      </div>
      <div className="logoFoxfit-flex">
        <div className="logoFoxfit_icon">
          <img src={logoFoxfit6} className="logoFoxfit_icon" alt="logo" />
        </div>
        <div className="logoFoxFit_text">Professional Trainers</div>
      </div>
    </div>
  );
};
