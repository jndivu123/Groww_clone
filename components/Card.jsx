"use client";
import React from "react";
import styles from "../styles/card.module.css";
import axios from "axios";
import RoundButton from "./RoundButton";
const Card = (props) => {
  // const arr = data.top_gainers[0];
  // console.log(data, "data");
  // console.log("data");

  return (
    <div
      className={styles.card}
      // onClick={() => {
      //   props.changeRoute(props.ticker);
      // }}
    >
      <div className={styles.cardItem}>
          <RoundButton h = {"3vw"} f = {"1vw"}>{props.ticker?.slice(0,2)}</RoundButton>
        <h2 className={styles.heading}>{props.ticker}</h2>
      </div>
      <div className={styles.cardItem}>
        <p>${props.price}</p>
      </div>

      <div className={styles.cardItem}>
        <p className={styles.para}>{props.changePercentage}</p>
      </div>
      {/* <button onClick={clicking}></button> */}
    </div>
  );
};

export default Card;
