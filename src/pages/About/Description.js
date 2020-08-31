import React, { useContext } from "react";
import image from "../../assets/thiago.jpeg";
import CardContainer from "../../components/CardContainer";
import { aboutDescription } from "./content";
import LanguageContext from "../../contexts/Language";
const Description = () => {
  const { language } = useContext(LanguageContext);
  return (
    <CardContainer>
      <img
        src={image}
        className="img-fluid z-depth-2 rounded-circle"
        alt="Thiago Santana"
      />
      <h2 className="h2-responsive font-weight-bold my-5">Thiago Santana</h2>
      {aboutDescription[language].map((paragraph, idx) => (
        <p
          key={idx}
          className="lead black-text text-justify w-responsive mx-auto"
        >
          {paragraph}
        </p>
      ))}
    </CardContainer>
  );
};

export default Description;
