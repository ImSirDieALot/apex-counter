import React, { useState, useEffect } from "react";

const DamageCounter = () => {
  const [damage, setDamage] = useState(0);
  const [allDamages, setAllDamages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(damage);
    // setAllDamages([...allDamages, damage]);
  };

  const updateDamages = () => {
    setAllDamages([...allDamages, parseInt(damage)]);
    console.log(allDamages);
  };

  return (
    <section className="container">
      <form onSubmit={handleSubmit} className="form">
        <label>
          Damage:
          <input
            type="number"
            value={damage}
            onChange={(e) => setDamage(e.target.value)}
          ></input>
          <button className="btn" onClick={updateDamages}>
            Add Damage
          </button>
        </label>
        <h3>Total Damage - {allDamages.reduce((a, b) => a + b, 0)}</h3>
        <div>
          {allDamages.map((item, index) => (
            <h4 key={index}>
              Game {index + 1} - {item} dmg
            </h4>
          ))}
        </div>
      </form>
    </section>
  );
};

export default DamageCounter;
