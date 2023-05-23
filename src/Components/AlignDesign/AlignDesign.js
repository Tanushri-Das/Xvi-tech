import React from "react";
import "./AlignDesign.css";
import { Col, Container, Row } from "react-bootstrap";
import FocusDesignCards from "../FocusDesign/FocusDesignCards";

const AlignDesign = () => {
  return (
    <div className="mainDesignDiv">
      <div className="topDesign">
        <img src="https://www.xivtech.io./x1.jpg" alt="" />
      </div>
      <div className="midDesign">
        <div className="innerMidDiv">
          <div className="liveText">
            <h5>Our Proven Process</h5>
            <Container>
              <Row>
                <Col md={7}>
                  <div className="leftAnimation">
                    <p className="leftP1">Align</p>
                    <p className="leftP2">Design</p>
                    <p className="leftP3">Refine</p>
                  </div>
                </Col>
                <Col md={5}>
                  <div className="rightAnimationText">
                    <p className="rightP1">
                      <div classNameName="react-reveal">
                        We Productize services. With Ekisu - our flagship AI
                        automation product, we lead the RPA transformation
                        process to strategize, design, build, launch and support
                        the automation. Following deploy, we follow a feedback
                        based refinement process.
                      </div>
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <p className="heading2">Our Expertise</p>
          <h3 className="react-reveal">
            Our core focus on AI + RPA, Design Thinking and Customer Experience
            allows us to help drive customer focussed innovation. We automate
            businesses for growth, continued success and leadership.
          </h3>
          <FocusDesignCards/>
        </div>
      </div>
      <div class="bottomDesign">
        <img src="https://mk0northstreetcpdixa.kinstacdn.com/wp-content/themes/northstreet-theme-v4/img/text-or-video/expertise/img_expertise-02.jpg" alt=""/>
        </div>
    </div>
  );
};

export default AlignDesign;
