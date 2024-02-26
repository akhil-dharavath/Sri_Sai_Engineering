import React from "react";
// import HomeCard from "../components/HomeCard";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";

const Home = () => {
  return (
    <div className="home">
      <div className="video">
        <video muted autoPlay loop>
        {/* <video muted> */}
          <source
            src={require("../assets/company_images/home.mp4")}
            type="video/mp4"
          />
        </video>
      </div>
      {/* <div className="cards mb-5">
        <HomeCard
          title="Mission"
          desc="Sri Sai Engineering & Technical Service will provide efficient and
          innovative services in its area of expertise and be a safe and
          considerate employer."
        />
        <HomeCard
          title="Vision"
          desc="To contribute towards the growth by increasingly, and achieving customer satisfaction not only for outstanding workmanship, but also quality design, concepts functionality and style."
        />
      </div> */}

      <h2 className="text-center pt-5 text-primary">Our Commitment</h2>
      <div className="commitment pb-5">
        <img src={require("../assets/commit.jpg")} alt="commitment" />
        <div>
          <div>
            <p>
              <b>Mission: </b>
              Sri Sai Engineering & Technical Service will provide efficient and
              innovative services in its area of expertise and be a safe and
              considerate employer.
            </p>
          </div>
          <div>
            <p>
              <b>Vision: </b>
              To contribute towards the growth by increasingly, and achieving
              customer satisfaction not only for outstanding workmanship, but
              also quality design, concepts functionality and style.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-center pt-2 text-primary">Latest projects</h2>
      <div className="latest_projects">
        <div>
          <img src={require("../assets/company_logos/VRKP.webp")} alt="vrkp" />
          <h5>VRKP SPONGE & POWER PLANT LLP</h5>
          <p>2 X 350 TPD Sponge iron Civil work</p>
          <p>25 MW Power Plant</p>
          <p>Year: 2023 – Present</p>
          <p>Work Order Value: 12.5 Cr</p>
        </div>
        <div>
          <img
            src={require("../assets/company_logos/smiore.png")}
            alt="smiore"
          />
          <h5>SMIORE MANGANESE & ORES LTD</h5>
          <p>380 cum Blast Furnace civil work</p>
          <p>Railway Under Bridge civil work</p>
          <p>Year: 2023 – 2024</p>
          <p>Work Order Value: 25.7 Cr</p>
        </div>
        <div>
          <img
            src={require("../assets/company_logos/jai_raj.jpeg")}
            alt="jai_raj"
          />
          <h5>JAI RAJ ISPAT LIMITED</h5>
          <p>0.4 M T Rolling Mill civil work</p>
          <p>75 sqm Sinter plant civil work</p>
          <p>Year: 2019 – Present</p>
          <p>Work Order Value: 75 Cr</p>
        </div>
      </div>

      <Carousel />

      <Footer />
    </div>
  );
};

export default Home;
