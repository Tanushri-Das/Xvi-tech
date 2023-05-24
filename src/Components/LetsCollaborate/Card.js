// import React from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import "./Card.css";
// import { Link } from "react-router-dom";

// const Card = ({ card }) => {
//   const { title, image, description ,details} = card;

//   return (
//     <Row>
//       <Col lg={6}>
//         <div class="servicesDescription">
//           <div class="servicesH2">
//             <h2>{title}</h2>
//           </div>
//           <div class="servicesH3">
//             <h3>{description}</h3>
//           </div>
//           <div class="servicesP">
//             <a href={`/card/${card.details}`}>
//               <p>{details}</p>
//               <img
//                 src="https://www.xivtech.io./Arrow-black.svg"
//                 alt="arrow-black"
//               />
//             </a>
//           </div>
//         </div>
//       </Col>
//       <Col lg={6}>
//         <img src={image} className="serviceImage" alt={title} />
//       </Col>
//     </Row>
//   );
// };

// export default Card;


import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ card }) => {
  const { title, image, description, details } = card;

  // Generate the dynamic URL based on the card details
  const dynamicURL = `/services/${details
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .toUpperCase()}`;  

  return (
    <Row>
      <Col md={6}>
        <div className="servicesDescription">
          <div className="servicesH2">
            <h2>{title}</h2>
          </div>
          <div className="servicesH3">
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
      </Col>
      <Col md={6}>
        <img src={image} className="serviceImage" alt={title} />
      </Col>
    </Row>
  );
};

export default Card;
