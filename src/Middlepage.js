import React, { useState, useEffect } from "react";
import "./App.css";
import undraw_developer_activity_bv83 from "./images/undraw_developer_activity_bv83.png";
import { sendGetRequest } from "./api.js";

function MiddlePage() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await sendGetRequest("services");
      if (data.status === 200) {
        await setServices(data.data);
      }
    })();
  }, []);

  return (
    <div className="middlepage">
      <div className="main-page2">
        <div className="main-heading">
          <div className="heading2">
            <h1>Service we’r Provide?</h1>
            <p>
              it is a long established fact that distracted by the content of a
              page when.
            </p>
            <button className="btn btnBlue">Get Started</button>
          </div>
          <div className="cards">
            {services.length &&
              services.map((each, idx) => {
                return (
                  <div className="card" key={idx}>
                    <img src={each.logo_img}></img>
                    <h3>{each.service}</h3>
                    <p>{each.description}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <div className="agency">
        <div>
          <img src={undraw_developer_activity_bv83}></img>
        </div>
        <div className="heading2">
          <h1>Get More from Life with agency</h1>
          <p>
            it is a long established fact that a reader will be distracted by
            the readable content of a page when.
          </p>
          <button className="btn btnBlue">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default MiddlePage;
