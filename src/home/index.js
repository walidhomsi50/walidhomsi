import React, { useState } from "react";
import "./style.css";
import bodyIcon from "../assets/icons/icons8-body-mass-index-64.png";


const Homepage=()=> {
  const initialCount = 0;
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [category, setCategory] = useState(initialCount);
  const [total, setTotal] = useState(initialCount);

  const calculateBmi = () => {
    let total = weight / (height * height);

    setTotal(total.toFixed(2));
    if (total < 18) {
      setCategory("underweight");
    } else if (total >= 18.6 && total < 24.9) {
      setCategory("normal weight");
    } else if (total >= 25 && total < 29.9) {
      setCategory("overweight");
    } else if (total >= 30) {
      setCategory("obese");
    }
  };

  const handleInput = () => {
    if (weight > 0 && height > 0) {
      calculateBmi();
    } else {
      alert("Please Provide Valid inputs!");
    }
  };
  let imgsrc;
  if (total < 1) {
    imgsrc = null;
  } else if (total < 18) {
    imgsrc = require("../assets/icons/underweight.png");
  } else if (total >= 18.6 && total < 24.9) {
    imgsrc = require("../assets/icons/healthy.png");
  } else if (total >= 25 && total < 29.9) {
    imgsrc = require("../assets/icons/fat.png");
  } else if (total >= 30) {
    imgsrc = require("../assets/icons/fat.png");
  }

  const onCancelClick = () => {
    setWeight(initialCount);
    setHeight(initialCount);
    setTotal(initialCount);
    setCategory(initialCount);
  };

  return (
    <>
      <div className=" main-page">
        <h2>Body Mass Index</h2>
        <div className="image-icon">
          <img src={bodyIcon} alt="bodyicon"></img>
        </div>
       
      </div>
      <div className="calculator-container">
        <h2>Calculate Your BMI</h2>
        <p>Please Provide weight in(Kg) and height in(m)</p>
        <input
          placeholder=" weight (kg)"
          type="number"
          value={weight}
          onChange={(e) => setWeight(+e.target.value)}
        />

        <input
          placeholder="height (m)"
          type="number"
          value={height}
          onChange={(e) => setHeight(+e.target.value)}
        />
      

        <button onClick={handleInput}>Calculate</button>

        <button onClick={onCancelClick}>Cancel</button>
        <strong>Category:{category}</strong>
        <strong>BMI:{total}</strong>

        <span className="bmi-icon">
          <img src={imgsrc} alt=""></img>
        </span>
      </div>
    </>
  );
  };
export default Homepage;
