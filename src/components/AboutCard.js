import React from "react";

const AboutCard = ({ src, name, position, content }) => {
  return (
    <div className="aboutcard">
      <div className="profile">
        <img src={src} alt={name} style={{ width: 100, borderRadius: "50%" }} />
        <h4>{name}</h4>
        <h5>{position}</h5>
      </div>
      <p className="content">{content}</p>
    </div>
  );
};

export default AboutCard;
