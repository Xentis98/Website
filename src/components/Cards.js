import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>OFFERS</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="アマゾン森に散歩するの"
              label="冒険"
              path="/services"
            />
            <CardItem
              src="images/img-3.jpg"
              text="海で泳ぐの"
              label="冒険"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-1.jpg"
              text="山昇の"
              label="冒険"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="島で休むの"
              label="冒険"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="サッカーするの"
              label="冒険"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
