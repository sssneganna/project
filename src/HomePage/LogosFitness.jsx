import React from "react";
import "./styles/logosFitness.css";
import logosFitness1 from "../assets/logosFitness1.webp";
import logosFitness2 from "../assets/logosFitness2.webp";
import logosFitness3 from "../assets/logosFitness3.webp";
import logosFitness4 from "../assets/logosFitness4.webp";
import logosFitness5 from "../assets/logosFitness5.webp";

const logoFitnessIcons = [
  {
    img: `${logosFitness1}`,
    alt: "{logosFitness1}",
  },
  {
    img: `${logosFitness2}`,
    alt: "{logosFitness2}",
  },
  {
    img: `${logosFitness3}`,
    alt: "{logosFitness3}",
  },
  {
    img: `${logosFitness4}`,
    alt: "{logosFitness4}",
  },
  {
    img: `${logosFitness5}`,
    alt: "{logosFitness5}",
  },
];

export const LogosFitness = () => {
  return (
    <section className="logos-fitness-section">
      <ul className="logos-fitness-section_list">
        {logoFitnessIcons.map((item, index) => {
          return (
            <li key={index} className="logos-fitness-section_item">
              <img src={item.img} alt={item.alt} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};
