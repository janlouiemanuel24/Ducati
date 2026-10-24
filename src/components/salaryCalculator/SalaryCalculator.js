import React, { useState } from "react";
import "./SalaryCalculator.css";

const FuelCostCalculator = () => {
  const [distance, setDistance] = useState("");
  const [mpg, setMpg] = useState("");
  const [fuelCost, setFuelCost] = useState("");
  const [totalFuelCost, setTotalFuelCost] = useState("");

  const calculateFuelCost = () => {
    let totalCost = "";

    if (distance === "" || mpg === "" || fuelCost === "") {
      totalCost = "Please fill out all fields";
    } else {
      const distanceValue = Number(distance);
      const mpgValue = Number(mpg);
      const fuelCostValue = Number(fuelCost);

      if (
        !Number.isFinite(distanceValue) ||
        !Number.isFinite(mpgValue) ||
        !Number.isFinite(fuelCostValue) ||
        distanceValue < 0 ||
        mpgValue <= 0 ||
        fuelCostValue < 0
      ) {
        totalCost = "Enter non-negative distance and fuel price, and MPG greater than zero.";
      } else {
        totalCost = ((distanceValue / mpgValue) * fuelCostValue).toFixed(2);
      }
    }

    setTotalFuelCost(totalCost);
  };

  return (
    <section className="calculator-container" id="fuel-calculator">
      <div className="calculator">
        <p className="calculator-eyebrow">MAKE EVERY MILE COUNT</p>
        <h2>Plan your next ride.</h2>
        <p className="calculator-intro">Estimate your fuel spend before you hit the road.</p>
        <div className="input-group">
          <label htmlFor="distance-input">Total Distance (miles)</label>
          <input
            className="input"
            type="number"
            id="distance-input"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="mpg-input">Average MPG</label>
          <input
            className="input"
            type="number"
            id="mpg-input"
            value={mpg}
            onChange={(e) => setMpg(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="fuel-cost-input">Fuel Cost Per Gallon ($)</label>
          <input
            className="input"
            type="number"
            id="fuel-cost-input"
            value={fuelCost}
            onChange={(e) => setFuelCost(e.target.value)}
          />
        </div>
        <div className="button-group">
          <button onClick={calculateFuelCost}>Calculate</button>
        </div>
        <div className="output-group">
          <p>{totalFuelCost ? (Number.isFinite(Number(totalFuelCost)) ? `Estimated fuel cost: $${totalFuelCost}` : totalFuelCost) : "Enter your ride details to see an estimate."}</p>
        </div>
      </div>
      </section>
  );
};

export default FuelCostCalculator;
