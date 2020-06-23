import React from "react";
import "./App.css";
import undraw_christmas_tree_56sw from "./images/undraw_christmas_tree_56sw.png";
import undraw_fitness_tracker_3033 from "./images/undraw_fitness_tracker_3033.png";
import undraw_hiking_d24r from "./images/undraw_hiking_d24r.png";
import undraw_career_progress_ivdb from "./images/undraw_career_progress_ivdb.png";

function Clients() {
  return (
    <div>
      <div className="client-page">
        <div className="clents">
          <h1>100+</h1>
          <h4>Clients</h4>
        </div>
        <div className="clents">
          <h1>250+</h1>
          <h4>Statisfied Clients</h4>
        </div>
        <div className="clents">
          <h1>100+</h1>
          <h4>Project Completed</h4>
        </div>
        <div className="clents">
          <h1>6+</h1>
          <h4>Awards</h4>
        </div>
      </div>
      <div className="workdone">
        <h1>Work we have done</h1>
        <p>
          it is a long established fact that a reader will be distracted by the
          readable content of a page when.
        </p>
      </div>
      <div className="hiking">
        <div>
          <img src={undraw_hiking_d24r}></img>
        </div>
        <div>
          <img src={undraw_fitness_tracker_3033}></img>
        </div>
        <div>
          <img src={undraw_career_progress_ivdb}></img>
        </div>
        <div>
          <img src={undraw_christmas_tree_56sw}></img>
        </div>
      </div>
      <button className="btn btnBlue">See All</button>
    </div>
  );
}

export default Clients;
