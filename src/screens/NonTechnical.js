import React from "react";
import Footer from "../components/Footer";
import SwipeRightAltIcon from "@mui/icons-material/SwipeRightAlt";

const NonTechnical = () => {
  return (
    <>
      <div className="non-technical">
        {/* <div>
        <h4>
          ❖ advising the Management Committee on Service Recipients’operations.
        </h4>
        <h4>❖ interfacing with stakeholders and government officials.</h4>
        <h4>
          ❖ Acting as the main point of communication between the board
          ofdirectors and senior management of Service Recipients.
        </h4>
        <h4>
          ❖ providing oversight of the engagement and delivery of third-party
          legalservices for the benefit of Service Recipients
        </h4>
      </div> */}
        <div>
          <h5>At [Your Company/Organization Name], our services include:</h5>
          <h5>
            <SwipeRightAltIcon sx={{ fontSize: 30, color: "orange" }} />{" "}
            Advising Management Committees on Service Recipients' Operations
          </h5>
          <h5>
            <SwipeRightAltIcon sx={{ fontSize: 30, color: "orange" }} />{" "}
            Interfacing with Stakeholders and Government Officials
          </h5>
          <h5>
            <SwipeRightAltIcon sx={{ fontSize: 30, color: "orange" }} />{" "}Serving
            as the Main Point of Communication Between the Board of Directors
            and Senior Management of Service Recipients
          </h5>
          <h5>
            <SwipeRightAltIcon sx={{ fontSize: 30, color: "orange" }} />{" "}
            Providing Oversight of Third-Party Legal Services Engagement and
            Delivery for Service Recipients
          </h5>
          <h5>
            Contact us today to learn more about how we can support your
            organization!
          </h5>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NonTechnical;
