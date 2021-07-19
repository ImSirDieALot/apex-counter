import React, { useState } from "react";

const Placement = () => {
  const [placement, setPlacement] = useState(0);
  const [position, setPosition] = useState([]);

  const updatePlacement = (e) => {
    setPosition([...position, placement]);
  };

  return (
    <>
      <section className="container">
        <input
          type="text"
          value={placement}
          onChange={(e) => setPlacement(e.target.value)}
        ></input>
        <button className="btn" onClick={updatePlacement}>
          Save Position
        </button>
        <div>
          {position.length > 0 &&
            position.map((place, index) => (
              <h3 key={index}>
                Game {index + 1} - {place} position
              </h3>
            ))}
        </div>
      </section>
    </>
  );
};

export default Placement;
