import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <footer class="footer">
      <div class="row">
        <div class="col-md-3 offset-md-1">
          <div class="row">
            <div class="footer-company-logo col-md-12">
              <h2 class="d-flex flex-row ">
                <img class="img1" src="https://www.xivtech.io./logo2.svg" alt="" />
                <img src="https://www.xivtech.io./Text1.svg" alt="" />
              </h2>
            </div>
            <div class="footer-company-description col-md-12">
              <p>
                By leveraging our full spectrum strategy, design, and technology
                capabilities, we deliver game-changing outcomes for our clients
                around the world.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <div class="footer-list row">
            <div class="col-md-2 m-3">
              <div>
                <h4 class="footer-locations-header">Locations</h4>
                <div class="footer-locations-items mt-3 d-flex flex-column justify-content-end">
                  <p class="my-1 lg:ms-4">Toronto</p>
                  <p class="my-1 ms-2">New Delhi</p>
                </div>
              </div>
            </div>
            <div class="col-md-3 m-3">
              <div>
                <h4 class="footer-services-header">
                  <a class="text-white" href="/">
                    Services
                  </a>
                </h4>
                <div class="footer-services-items mt-3 d-flex flex-column justify-content-start ">
                  <p class="m-1">
                    <a class="text-white" href="/services/AIandRPAautomation">
                      Complete AI + RPA Automation{" "}
                    </a>
                  </p>
                  <p class="m-1">
                    <a class="text-white" href="/services/cloud">
                      Cloud Services{" "}
                    </a>
                  </p>
                  <p class="m-1">
                    <a
                      class="text-white"
                      href="/services/delivery-pipeline-automation"
                    >
                      Delivery Pipeline <br /> Automation{" "}
                    </a>
                  </p>
                  <p class="m-1">
                    <a class="text-white" href="/services/simplify-cloud-ops">
                      Simplify Cloud Ops{" "}
                    </a>
                  </p>
                  <p class="m-1">
                    <a class="text-white" href="/services/enterprise-apps">
                      Build Better Apps{" "}
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-2 m-3">
              <h4 class="footer-company-header">XivTech</h4>
              <div class="footer-company-items mt-3">
                <p>
                  <a href="/about">About</a>
                </p>
                <p>
                  <a href="/careers">Careers</a>
                </p>
                <p>
                  <a href="/contact">Contact</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="site_map">© 2021 XivTech, Inc. All Rights Reserved</div>
    </footer>
  );
};

export default Footer;
