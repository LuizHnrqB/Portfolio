import React from "react";
import MatSandBox1 from "../../components/matSandBox1/matSandBox1";
import ChoosePokemon from "../../components/choosePokemon/choosePokemon";

export const SandBox1 = () => {
  return (
    <div className="container">
      <div>
        <MatSandBox1 className="wB" />
        <ChoosePokemon className="cP" />
      </div>
    </div>
  );
};
