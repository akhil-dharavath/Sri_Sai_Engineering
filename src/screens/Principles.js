import React from "react";
import Footer from "../components/Footer";
import SwipeRightAltIcon from "@mui/icons-material/SwipeRightAlt";

const Principles = () => {
  return (
    <>
      <div className="principles px-5">
        <h5 className="text-white position-relative z-2 px-5 pt-5">
          Welcome to Sri Sai Engineering & Technical Services, where excellence
          is not just a goal but a way of life. Our core values drive everything
          we do, from project delivery to team development. Here's a glimpse
          into what sets us apart:
        </h5>
        <div>
          {/* <h2>Time & Quality </h2> */}
          <h5 className="px-5">
            <span style={{ color: "orange", fontSize: "25px" }}>
              Time & Quality
              <SwipeRightAltIcon sx={{ fontSize: 30, color: "orange" }} />
            </span>{" "}
            At Sri Sai Engineering & Technical Services, we understand the
            importance of deadlines and the significance of quality. We commit
            to delivering all projects within the agreed time frames without
            compromising on the meticulous attention to detail that ensures
            top-notch quality. Each task is undertaken with utmost care and
            dedication to guarantee excellence in every aspect.
          </h5>
        </div>
        <div>
          {/* <h2>Growth </h2> */}
          <h5 className="px-5">
            <span style={{ color: "orange", fontSize: "25px" }}>
            Growth
              <SwipeRightAltIcon sx={{ fontSize: 30, color: "orange" }} />
            </span>{" "}
            In a rapidly evolving technological landscape, we embrace growth as
            an essential element of our ethos. We continuously seek
            opportunities for improvement, leveraging the latest advancements in
            technology to enhance our processes and services. By staying at the
            forefront of innovation, we ensure that our solutions are always
            cutting-edge and future-ready.
          </h5>
        </div>
        <div>
          {/* <h2>Customer </h2> */}
          <h5 className="px-5 py-0">
            <span style={{ color: "orange", fontSize: "25px" }}>
            Customer
              <SwipeRightAltIcon sx={{ fontSize: 30, color: "orange" }} />
            </span>{" "}
            Our clients are not just business partners; they are our most
            valuable assets. Customer satisfaction is not merely a goal but our
            unwavering commitment. We prioritize understanding and meeting our
            clients' needs, striving to exceed their expectations at every turn.
            Building lasting relationships based on trust, transparency, and
            reliability is at the heart of everything we do.
          </h5>
        </div>
        <div>
          {/* <h2>Team </h2> */}
          <h5 className="px-5 pb-5">
            <span style={{ color: "orange", fontSize: "25px" }}>
            Team
              <SwipeRightAltIcon sx={{ fontSize: 30, color: "orange" }} />
            </span>{" "}
            At Sri Sai Engineering & Technical Services, we recognize that our
            success is a collective effort driven by the passion, intelligence,
            and innovation of our team members. We foster an environment that
            nurtures talent, encourages creativity, and promotes collaboration.
            Our aim is not only to be a world-class team but also to cultivate
            one, where every individual is empowered to thrive and contribute
            their best.
          </h5>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Principles;
