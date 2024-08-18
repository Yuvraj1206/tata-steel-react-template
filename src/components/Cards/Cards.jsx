import React from "react";
import "./Cards.css";
import img1 from "../../assets/website-template.png";
import img2 from "../../assets/RegistrationForm.png";
import img3 from "../../assets/Grid-form.png";
import Card from "../Card/Card";

const Cards = () => {
  return (
    <div className="card_container">
      <Card
        img={img1}
        title={"Tata Steel Website Template"}
        nav={"https://tata-steel-website-template.netlify.app/"}
      />
      <Card
        img={img2}
        title={"Registration Form Template"}
        nav={"https://registration-template.netlify.app/"}
      />
      <Card
        img={img3}
        title={"Form-Grid Template"}
        nav={"https://grid-form-template.netlify.app/"}
      />
    </div>
  );
};

export default Cards;
