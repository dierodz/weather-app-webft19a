import React from "react";
import CardTemp from "./CardTemp";
import PropTypes from "prop-types";
import { IoCloseCircleOutline } from "react-icons/io5";
import icon_09d from "../assets/09d.png";
import icon_03n from "../assets/03n.png";

import styles from "./Card.module.css";

export default function Card({ max, min, name, img, onClose }) {
  // acá va tu código
  function handleOnClose() {
    if (typeof onClose === "function") onClose();
  }

  return (
    <div className={styles.card}>
      <button className={styles.closeButton} onClick={handleOnClose}>
        <IoCloseCircleOutline />
      </button>
      <span className={styles.cityName}>{name}</span>
      <CardTemp label="Min" value={min} />
      <CardTemp label="Max" value={max} />
      <WeatherIcon icon={img} />
    </div>
  );
}

function WeatherIcon({ icon }) {
  switch (icon) {
    case "03n":
      return <img src={icon_03n} alt="shower rain" />;
    default:
      return <img src={icon_09d} alt="shower rain" />;
  }
}

Card.propTypes = {
  max: PropTypes.number,
  min: PropTypes.number,
  name: PropTypes.string,
  img: PropTypes.string,
  onClose: PropTypes.func,
};
