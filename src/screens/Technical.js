import React, { useEffect } from "react";
import Footer from "../components/Footer";
import SwipeRightAltIcon from "@mui/icons-material/SwipeRightAlt";

const Technical = () => {
  useEffect(() => {
    document.title = 'Technical - Sri Sai Engineering & Technical Services';
  }, []);

  return (
    <>
      <div className="technical">
        {/* <div>
        <h4>❖ Conducting initial inspections,</h4>
        <h4>❖ work write-up or project specification development,</h4>
        <h4>❖ cost estimate preparation,</h4>
        <h4>
          ❖ Construction supervision associated with activities that do not
          require an architect or engineer,
        </h4>
        <h4>
          ❖ Lead hazard reduction or lead abatement need determination and
          oversight
        </h4>
        <h4>❖ Lead hazard reduction or abatement carrying costs,</h4>
        <h4>❖ Temporary relocation coordination,.</h4>
        <h4>
          ❖ Financing costs such as security agreement preparation and recording
          or filing fees,
        </h4>
        <h4>❖ Processing of individual applications for assistance,</h4>
        <h4>❖ Income eligibility determination and verification,</h4>
        <h4>
          ❖ Value determination (new construction) or after rehabilitation value
          determination (existing structures).
        </h4>
        <h4>❖ project-specific environmental clearance processes.</h4>
      </div> */}
        <div>
          <h5>
            At Sri Sai Engineering & Technical Services, we offer a
            comprehensive range of services to facilitate your construction and
            renovation projects seamlessly. Whether you're a homeowner, property
            manager, or developer, we provide the expertise and support you need
            from start to finish. Our services include:
          </h5>
          <h5>
            <span style={{ color: "orange", fontSize: "25px" }}>
              Initial Inspections
              <SwipeRightAltIcon sx={{ fontSize: 30, color: "orange" }} />
            </span>{" "}
            Thorough assessments to understand the scope and requirements of
            your project.
          </h5>
          <h5>
            <span style={{ color: "orange", fontSize: "25px" }}>
              Project Specification Development
              <SwipeRightAltIcon sx={{ fontSize: 30, color: "orange" }} />
            </span>{" "}
            Crafting detailed project specifications to ensure clarity and
            precision in execution.
          </h5>
          <h5>
            <span style={{ color: "orange", fontSize: "25px" }}>
              Cost Estimate Preparation
              <SwipeRightAltIcon sx={{ fontSize: 30, color: "orange" }} />{" "}
            </span>
            Accurate cost estimations tailored to your project needs and budget
            constraints.
          </h5>
          <h5>
            <span style={{ color: "orange", fontSize: "25px" }}>
              Construction Supervision
              <SwipeRightAltIcon sx={{ fontSize: 30, color: "orange" }} />{" "}
            </span>
            Overseeing construction activities, particularly those not mandating
            an architect or engineer, to maintain quality and compliance.
          </h5>
          <h5>
            <span style={{ color: "orange", fontSize: "25px" }}>
              Lead Hazard Reduction
              <SwipeRightAltIcon sx={{ fontSize: 30, color: "orange" }} />{" "}
            </span>
            Determining lead hazard reduction needs and providing oversight for
            lead abatement activities.
          </h5>
          <h5>
            <span style={{ color: "orange", fontSize: "25px" }}>
              Temporary Relocation Coordination
              <SwipeRightAltIcon sx={{ fontSize: 30, color: "orange" }} />{" "}
            </span>
            Facilitating temporary relocations when necessary during
            construction or renovation.
          </h5>
          <h5>
            <span style={{ color: "orange", fontSize: "25px" }}>
              Financing Cost Assistance
              <SwipeRightAltIcon sx={{ fontSize: 30, color: "orange" }} />{" "}
            </span>
            Providing assistance with financing costs, including preparation of
            security agreements and handling recording or filing fees.
          </h5>
          <h5>
            <span style={{ color: "orange", fontSize: "25px" }}>
              Application Processing
              <SwipeRightAltIcon sx={{ fontSize: 30, color: "orange" }} />{" "}
            </span>
            Streamlining the processing of individual applications for
            assistance.
          </h5>
          <h5>
            <span style={{ color: "orange", fontSize: "25px" }}>
              Income Eligibility Determination
              <SwipeRightAltIcon sx={{ fontSize: 30, color: "orange" }} />{" "}
            </span>
            Ensuring compliance with income eligibility requirements and
            verifying applicant information.
          </h5>
          <h5>
            <span style={{ color: "orange", fontSize: "25px" }}>
              Value Determination
              <SwipeRightAltIcon sx={{ fontSize: 30, color: "orange" }} />{" "}
            </span>
            Conducting value assessments for new construction or determining
            post-rehabilitation values for existing structures.
          </h5>
          <h5>
            <span style={{ color: "orange", fontSize: "25px" }}>
              Environmental Clearance Processes
              <SwipeRightAltIcon sx={{ fontSize: 30, color: "orange" }} />{" "}
            </span>
            Managing project-specific environmental clearance procedures to meet
            regulatory standards.
          </h5>
          <h5>
            At Sri Sai Engineering & Technical Services, we are committed to
            delivering excellence in every aspect of your project. Contact us
            today to learn more about how we can support your construction and
            renovation endeavors.
          </h5>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Technical;
