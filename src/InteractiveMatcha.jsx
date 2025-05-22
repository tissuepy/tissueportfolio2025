import React, { useState, useEffect } from "react";
import "./InteractiveMatcha.css";
import brown_boba_yes from "./assets/brown boba ice.png"
import brown_boba_no from "./assets/brown boba.png"
import brown_plain_yes from "./assets/brown plain ice.png"
import brown_plain_no from "./assets/brown plain.png"
import brown_redbeans_yes from "./assets/brown red bean ice.png"
import brown_redbeans_no from "./assets/brown red bean.png"
import matcha_boba_yes from "./assets/matcha boba ice.png"
import matcha_boba_no from "./assets/matcha boba.png"
import matcha_plain_yes from "./assets/matcha plain ice.png"
import matcha_plain_no from "./assets/matcha plain.png"
import matcha_redbeans_yes from "./assets/matcha red bean ice.png"
import matcha_redbeans_no from "./assets/matcha red bean.png"
import strawberry_boba_yes from "./assets/strawberry boba ice.png"
import strawberry_boba_no from "./assets/strawberry boba.png"
import strawberry_plain_yes from "./assets/strawberry plain ice.png"
import strawberry_plain_no from "./assets/strawberry plain.png"
import strawberry_redbeans_yes from "./assets/strawberry red bean ice.png"
import strawberry_redbeans_no from "./assets/strawberry red bean.png"


// Dynamically require all images
const imageMap = {
  matcha_boba_yes: matcha_boba_yes,
  matcha_boba_no: matcha_boba_no,
  matcha_plain_yes: matcha_plain_yes,
  matcha_plain_no: matcha_plain_no,
  matcha_redbeans_yes: matcha_redbeans_yes,
  matcha_redbeans_no: matcha_redbeans_no,

  strawberry_boba_yes: strawberry_boba_yes,
  strawberry_boba_no: strawberry_boba_no,
  strawberry_plain_yes: strawberry_plain_yes,
  strawberry_plain_no: strawberry_plain_no,
  strawberry_redbeans_yes: strawberry_redbeans_yes,
  strawberry_redbeans_no: strawberry_redbeans_no,

  brown_boba_yes: brown_boba_yes,
  brown_boba_no: brown_boba_no,
  brown_plain_yes: brown_plain_yes,
  brown_plain_no: brown_plain_no,
  brown_redbeans_yes: brown_redbeans_yes,
  brown_redbeans_no: brown_redbeans_no,
};

export default function InteractiveMatcha() {
  const [flavor, setFlavor] = useState("matcha");
  const [topping, setTopping] = useState("none");
  const [ice, setIce] = useState("yes");

  const [fade, setFade] = useState(true);
  const [currentImage, setCurrentImage] = useState(
    imageMap[`${flavor}_${topping}_${ice}`]
  );

  useEffect(() => {
    setFade(false);
    const timeout = setTimeout(() => {
      const key = `${flavor}_${topping}_${ice}`;
      setCurrentImage(imageMap[key]);
      setFade(true);
    }, 400);
    return () => clearTimeout(timeout);
  }, [flavor, topping, ice]);

return (
  <div className="outer-wrapper">
    <div className="container">

      {/* Cafe Title */}
      <h4 className="cafe-title">NITISH'S CAFE 🧋</h4>

      {/* Flavor Dropdown */}
      <select className="dropdown" value={flavor} onChange={(e) => setFlavor(e.target.value)}>
        <option value="matcha">Matcha</option>
        <option value="strawberry">Strawberry</option>
        <option value="brown">Brown Sugar</option>
      </select>

      {/* Topping Dropdown */}
      <select className="dropdown" value={topping} onChange={(e) => setTopping(e.target.value)}>
        <option value="none">No Topping</option>
        <option value="boba">Boba</option>
        <option value="redbeans">Red Beans</option>
      </select>

      {/* Ice Dropdown */}
      <select className="dropdown" value={ice} onChange={(e) => setIce(e.target.value)}>
        <option value="yes">With Ice</option>
        <option value="no">No Ice</option>
      </select>

      <div className="matcha">
        <img
          src={currentImage}
          alt={`${flavor} with ${topping} and ${ice} ice`}
          className={`matcha-img ${fade ? "fade-in" : "fade-out"}`}
        />
      </div>

      <p className="caption">HAND DRAWN & DESIGNED WITH CARE</p>
    </div>
  </div>
);

}
