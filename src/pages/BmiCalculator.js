import React, { useState } from "react";
import "../styles/Bmi.css";

export default function BmiCalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [advice, setAdvice] = useState("");

  const calculateBMI = () => {
    const h = height / 100;
    const result = (weight / (h * h)).toFixed(1);
    setBmi(result);

    if (result < 18.5) setAdvice("You are underweight. Try to eat more healthy meals.");
    else if (result >= 18.5 && result < 24.9) setAdvice("Great! Your BMI is normal.");
    else if (result >= 25 && result < 29.9) setAdvice("You are overweight. Consider exercising daily.");
    else setAdvice("You are obese. Please consult a doctor.");
  };

  return (
    <div className="bmi-container">
      <h2>💪 BMI Calculator</h2>
      <p>Calculate your Body Mass Index and check your health level.</p>

      <input
        type="number"
        placeholder="Enter your weight (kg)"
        onChange={(e) => setWeight(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter your height (cm)"
        onChange={(e) => setHeight(e.target.value)}
      />

      <button onClick={calculateBMI}>Calculate</button>

      {bmi && (
        <>
          <div className="bmi-result">Your BMI: {bmi}</div>
          <div className="bmi-advice">{advice}</div>
        </>
      )}
    </div>
  );
}
