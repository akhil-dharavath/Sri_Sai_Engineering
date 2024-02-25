import * as React from "react";

export default function HomeCard({ title, desc }) {
  return (
    <div class="card" style={{width: "30%"}}>
      <div class="card-body">
        <h4 class="card-title">{title}</h4>
        <p class="card-text">
          {desc}
        </p>
      </div>
    </div>
  );
}
