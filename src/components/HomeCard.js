import * as React from "react";

export default function HomeCard({ title, desc }) {
  return (
    <div className="card" style={{width: "30%"}}>
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">
          {desc}
        </p>
      </div>
    </div>
  );
}
