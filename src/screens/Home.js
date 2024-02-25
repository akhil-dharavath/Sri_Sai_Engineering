import React from "react";
import HomeCard from "../components/HomeCard";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="home">
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="homeImage" />
        <h1
          style={{
            position: "absolute",
            color: "white",
            zIndex: 2,
          }}
        >
          Sri Sai Engineering & Techincal Services
        </h1>
      </div>
      <div
        id="carouselExample"
        class="carousel slide"
        style={{ height: "80vh", width: "70vw", margin: "auto" }}
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src={require("../assets/10.jpg")}
              class="d-block w-100 carouselImage"
              alt="one"
            />
          </div>
          <div class="carousel-item">
            <img
              src={require("../assets/company_images/2.jpg")}
              class="d-block w-100 carouselImage"
              alt="two"
            />
          </div>
          <div class="carousel-item">
            <img
              src={require("../assets/company_images/3.jpg")}
              class="d-block w-100 carouselImage"
              alt="three"
            />
          </div>
          <div class="carousel-item">
            <img
              src={require("../assets/company_images/4.jpg")}
              class="d-block w-100 carouselImage"
              alt="four"
            />
          </div>
          <div class="carousel-item">
            <img
              src={require("../assets/company_images/5.jpg")}
              class="d-block w-100 carouselImage"
              alt="five"
            />
          </div>
          <div class="carousel-item">
            <img
              src={require("../assets/company_images/6.jpg")}
              class="d-block w-100 carouselImage"
              alt="six"
            />
          </div>
          <div class="carousel-item">
            <img
              src={require("../assets/company_images/7.jpg")}
              class="d-block w-100 carouselImage"
              alt="seven"
            />
          </div>
          <div class="carousel-item">
            <img
              src={require("../assets/company_images/8.jpg")}
              class="d-block w-100 carouselImage"
              alt="eight"
            />
          </div>
          <div class="carousel-item">
            <img
              src={require("../assets/company_images/9.jpg")}
              class="d-block w-100 carouselImage"
              alt="nine"
            />
          </div>
          <div class="carousel-item">
            <img
              src={require("../assets/company_images/10.jpg")}
              class="d-block w-100 carouselImage"
              alt="ten"
            />
          </div>
          <div class="carousel-item">
            <img
              src={require("../assets/company_images/11.jpg")}
              class="d-block w-100 carouselImage"
              alt="eleven"
            />
          </div>
          <div class="carousel-item">
            <img
              src={require("../assets/company_images/12.jpg")}
              class="d-block w-100 carouselImage"
              alt="tweleve"
            />
          </div>
          <div class="carousel-item">
            <img
              src={require("../assets/company_images/13.jpg")}
              class="d-block w-100 carouselImage"
              alt="thirteen"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div className="cards mb-5">
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
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
