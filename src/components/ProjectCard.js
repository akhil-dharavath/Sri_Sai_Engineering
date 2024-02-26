import React from "react";
import "../assets/Projects.css";

const ProjectCard = ({ direction, name, img, titles, values, desc,logo }) => {
  return (
    <div className={direction}>
      {/* <img src={img} alt={name} /> */}
      {img ? (
        <img className="no_demo" src={img} alt="demo not available" />
      ) : (
        <div className="no_demo no_logo"/>
      )}
      <div className="desc">
        <p className="heading">{name}</p>
        {desc &&
          desc.length > 0 &&
          desc.map((description, index) => <p key={index}>❖ {description}</p>)}
        {titles &&
          titles.length > 0 &&
          titles.map((title, index) => (
            <p key={index}>
              <span style={{ fontWeight: "bold" }}>{title}:</span>{" "}
              {values[index]}
            </p>
          ))}
      </div>
    </div>
  );
};

export default ProjectCard;
