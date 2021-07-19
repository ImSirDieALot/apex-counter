import React, { useState, useEffect } from "react";
import Summary from "./Summary";

const KillCounter = () => {
  const [kills, setKills] = useState(0);
  const [totalKills, setTotalKills] = useState([]);

  const addKill = () => {
    setKills(kills + 1);
  };

  const removeKill = () => {
    setKills(kills - 1);
  };

  const resetKill = () => {
    setKills(0);
  };

  const saveKills = () => {
    setKills(0);
    setTotalKills([...totalKills, kills]);
  };

  return (
    <section className="container">
      <div>
        <h2>Kill Counter</h2>
        <h3>{kills}</h3>
        <button className="btn" onClick={removeKill}>
          remove kill
        </button>
        <button className="btn" onClick={resetKill}>
          reset kills
        </button>
        <button className="btn" onClick={addKill}>
          Add Kill
        </button>
      </div>
      <div>
        <button className="btn" onClick={saveKills}>
          save
        </button>
      </div>
      <article>
        <div>
          <h2>Total Kills - {totalKills.reduce((a, b) => a + b, 0)}</h2>
        </div>
        <div>
          {totalKills.length > 0 &&
            totalKills.map((kill, index) => (
              <h3 key={index}>
                Game {index + 1} - {kill} kills
              </h3>
            ))}
        </div>
      </article>
    </section>
  );
};

export default KillCounter;
