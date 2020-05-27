import React from "react";
function Card() {
  return (
    <div
      class="card-deck"
      style={{ marginLeft: "120px", marginRight: "120px" }}
    >
      <div class="card">
        <h1 style={{ marginLeft: "10px" }}>Marketing Hub</h1>
        <div class="card-body">
          <p class="card-text">
            Marketing software to help you grow traffic, convert more visitors,
            and run complete inbound marketing campaigns at scale.
          </p>
        </div>
      </div>

      <div class="card">
        <h1 style={{ marginLeft: "10px" }}>Sales Hub</h1>
        <div class="card-body">
          <p class="card-text">
            Time-saving sales software that helps you get deeper insights into
            prospects, automate the tasks you hate, and close more deals faster.
          </p>
        </div>
      </div>
      <div class="card">
        <h1 style={{ marginLeft: "10px" }}>Service Hub</h1>
        <div class="card-body">
          <p class="card-text">
            Customer service software to help you connect with customers, exceed
            expectations, and turn them into promoters that grow your business.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Card;
