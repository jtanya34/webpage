import React, { useEffect } from "react";
import logo from "./images/DAN_AGENCY.png";
import "./App.css";
import smart from "./images/Vector Smart Object.png";
import MiddlePage from "./Middlepage";
import Clients from "./Clients";
import Footer from "./footer";
import { sendPostRequest } from "./api.js";
import cookie from "react-cookies";

function App() {
  useEffect(() => {
    const user = {
      guest_type: "new",
      guest_id: JSON.stringify(rand()),
    };
    const user_id = cookie.load("user_id");
    if (user_id) {
      user.guest_type = "existing";
    } else {
      cookie.save("user_id", user.guest_id);
    }
    (async () => {
      await sendPostRequest("guest_hit", user);
    })();
  }, []);

  const rand = () => {
    let rand = Math.random() * 100000;
    console.log(rand);
    return Math.floor(rand);
  };
  return (
    <div className="App">
      <div className="main-page">
        <nav>
          <div>Blog</div>
          <div>Portfolio</div>
          <div>Service</div>
          <div>About Us</div>
          <div>Home</div>
          <div>
            <img src={logo}></img>
          </div>
        </nav>
        <div className="main-heading">
          <div className="heading">
            <h1>Get More from Life with agency</h1>
            <h5>
              it is a long established fact that a reader will be distracted by
              the readable content of a page when.
            </h5>
            <button className="btn">Get Started</button>
          </div>
          <div>
            <img src={smart}></img>
          </div>
        </div>
      </div>
      <MiddlePage />
      <Clients />
      <Footer />
    </div>
  );
}

export default App;
