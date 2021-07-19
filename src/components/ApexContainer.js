import React from "react";
import KillCounter from "./KillCounter";
import DamageCounter from "./DamageCounter";
import Placement from "./Placement";

const ApexContainer = () => {
  return (
    <section className="container">
      <KillCounter />
      <DamageCounter />
      <Placement />
    </section>
  );
};

export default ApexContainer;
