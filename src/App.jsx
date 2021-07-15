import "./App.css";
import React from "react";
import { HomePage } from "./HomePage/HomePage";
import { MeetEmily } from "./MeetEmilly/MeetEmilyPage";
import { Foxfit } from "./Foxfit/FoxfitPage";
import { Plans } from "./PlansPricing/PlansPricingPage";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { Payment_30 } from "./PlansPricing/Payment_30";
import { Payment_25 } from "./PlansPricing/Payment_25";
import { Payment_40 } from "./PlansPricing/Payment_40";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main className="global-main">
          <Route path="/" exact="true" component={HomePage} />
          <Route path="/meet-emily" exact="true" component={MeetEmily} />
          <Route path="/foxfit" exact="true" component={Foxfit} />
          <Route path="/plans-pricing" exact="true" component={Plans} />
          <Route path="/payment_30" exact="true" component={Payment_30} />
          <Route path="/payment_25" exact="true" component={Payment_25} />
          <Route path="/payment_40" exact="true" component={Payment_40} />
          <Route path="/#contact" exact="true" component={HomePage} />
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
