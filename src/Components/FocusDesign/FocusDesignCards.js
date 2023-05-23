import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Card, Col, Container, Row } from "react-bootstrap";
import {
  fetchFocusDesignSuccess,
  fetchFocusDesignFailure,
} from "../../redux/actions/focusActions";
import "./FocusDesignCards.css";

const FocusDesignCards = ({
  focusDesignData,
  fetchFocusDesignSuccess,
  fetchFocusDesignFailure,
}) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulating async behavior using setTimeout
        setTimeout(() => {
          fetchFocusDesignSuccess(focusDesignData);
        }, 1000); // Delay of 1000 milliseconds (1 second)
      } catch (error) {
        fetchFocusDesignFailure(error.message);
      }
    };

    fetchData();
  }, [fetchFocusDesignSuccess, fetchFocusDesignFailure]);

  return (
    // <div>
    //   {focusDesignData.map((item) => (
    //     <Card key={item.id}>
    //       <Card.Img variant="top" src={item.image} />
    //       <Card.Body>
    //         <Card.Title>{item.title}</Card.Title>
    //         <Card.Text>{item.description}</Card.Text>
    //       </Card.Body>
    //     </Card>
    //   ))}
    // </div>

    <div className="cardsDiv">
      <div className="card-group">
        {focusDesignData.map((item) => (
          <div class="me-5 cardSpecific card">
            <img
              width="100%"
              src={item.image}
              alt="Card image cap"
              class="card-img-top"
            />
            <div class="m-0 card-body">
              <h4 class="card-title mb-3">{item.title}</h4>
              
              <div class="react-reveal">
                <p class="cardText card-text">
                  <p>{item.paragraph1}</p>
                  <p>{item.paragraph2}</p>
                  <p>{item.paragraph3}</p>
                  <p>{item.paragraph4}</p>
                  <p>{item.paragraph5}</p>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    focusDesignData: state.focusDesign.focusDesign,
  };
};

const mapDispatchToProps = {
  fetchFocusDesignSuccess,
  fetchFocusDesignFailure,
};

export default connect(mapStateToProps, mapDispatchToProps)(FocusDesignCards);
