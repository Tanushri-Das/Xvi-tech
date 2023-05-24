// CollaborateContainer.js

import React from "react";
import { connect } from "react-redux";
import { collaborateData } from "./data";
import Card from "./Card";
import "./Card.css";
import ResponsiveCard from "./ResponsiveCard";

const CollaborateContainer = ({ cards }) => {
  return (
    <div>
      <div class="collaborate">
        <h4>Let's Collaborate</h4>
      </div>
      <div className="servicesMainDiv"> 
        <div className="react-reveal d-none d-md-block">
        {cards.map((card, index) => (
          <Card key={index} card={card} />
        ))}
        </div>
      </div>
      <div className="servicesMainDiv"> 
        <div className="react-reveal d-block d-md-none">
        {cards.map((card, index) => (
          <ResponsiveCard key={index} card={card} />
        ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cards: state.cards || collaborateData,
  };
};

export default connect(mapStateToProps)(CollaborateContainer);
