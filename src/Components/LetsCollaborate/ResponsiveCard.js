import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Card.css";
import { Link } from "react-router-dom";

const ResponsiveCard = ({ card }) => {
  const { title, image, description, details } = card;

  // Generate the dynamic URL based on the card details
  const dynamicURL = `/services/${details
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .toUpperCase()}`;

  return (
    <div class="row mb-5">
      <div class="servicesDescription-b">
        <div class="servicesH2-b">
          <h2>{title}</h2>
        </div>
        <div class="servicesImageDiv">
          <img class="serviceImage-b image" src={image} alt="servicesimage" />
        </div>
        <div class="servicesH3-b">
          <h3>{description}</h3>
        </div>
        <div className="servicesP">
            <Link to={dynamicURL}>
              <p>{details}</p>
              <img
                src="https://www.xivtech.io./Arrow-black.svg"
                alt="arrow-black"
              />
            </Link>
          </div>
      </div>
    </div>
  );
};

export default ResponsiveCard;
