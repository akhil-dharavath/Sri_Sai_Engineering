import React from "react";
import AboutCard from "../components/AboutCard";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
    <div className="about-us">
      <div className="text-center container mb-5 position-relative z-2">
        <h1 className="pt-5 mb-3 text-center">Who We Are?</h1>
        <h4>
          Specialists in Sponge Iron, Power Plants, Steel Plants and Chemical
          Industries Constructions.
        </h4>
      </div>
      <div className="mt-5 container p-5 position-relative z-2">
        <h1 className="text-center">Company Background</h1>
        <h5>
          ❖ Sri Sai Engineering & Technical Services is a multi disciplined
          civil works contractor. Our company has the knowledge, experience and
          resources to undertake projects of any size.
        </h5>
        <h5>
          ❖ S.S.E.T.Services employs and maintains a stable and experienced work
          force with the necessary qualifications to meet the strict quality
          requirements of our local Councils.
        </h5>
        <h5>
          ❖ S.S.E.T.Services has successfully completed projects over a period
          of 16 years around the India including Tamilnadu, Chhattisgarh,
          Gujarat, Andhra Pradesh and Karnataka.
        </h5>
        <h5>
          ❖ We pride ourselves on providing buy in to our projects and will
          offer alternative and innovative solutions that can result in savings
          in both time and cost for our clients.
        </h5>
      </div>
      <div className="mt-5 container px-5 position-relative z-2">
        <h1 className="text-center">What we Offer</h1>
        <h5>❖ Iron and Steel Industries.</h5>
        <h5>❖ Sponge Iron Unit.</h5>
        <h5>❖ Rolling Mill.</h5>
        <h5>❖ SMS.</h5>
        <h5>❖ Furnace.</h5>
        <h5>❖ Power Plants.</h5>
        <h5>❖ Cement industries.</h5>
        <h5>❖ Fertilization Plants.</h5>
        <h5>❖ Residential and Commercial Buildings.</h5>
        <h5>❖ Earth Works and CC Roads.</h5>
      </div>
      <div className="container mt-5 p-5 position-relative z-2">
        {/* <h1 className="text-center">Management</h1> */}
        <div className="d-flex flex-wrap">
          <AboutCard
            src={require("../assets/unknown.jpeg")}
            name="T.R.S.Narayana"
            position="Managing Director"
            content="As a founding member of S.S.E.T.Service, Narayana plays the role of
          the principal contractor. With over 16 years of experience in handling
          civil projects. Through his recognition of market opportunities and
          desire to build a reputable and suitable contracting business.
          Narayana has been able to develop the company into a major player in
          the local contracting industry."
          />
          <AboutCard
            src={require("../assets/unknown.jpeg")}
            name="Prasenjit Singh Deo"
            position="Director"
            content="Having fifteen years experience in the position of contracting
          division manager. He has experience in managing numerous sizeable and
          complex civil engineering. In 2006 he accepted the position of
          construction manager at S.S.E.T.Services. He estimates and tenders
          contract work. Prasenjit has the responsibility for ensuring the
          overall success of our contract works."
          />
          <AboutCard
            src={require("../assets/unknown.jpeg")}
            name="T Sri Lakshmi"
            position="Business Manager"
            content="Sri Lakshmi has been with S.S.E.T.Service since 2006. Her role
          includes the development and management of company finance,
          administration system and quality systems. Sri Lakshmi holds a degree
          in B.Com and she has the responsibility for ensuring the overall
          success of our company."
          />
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default About;
