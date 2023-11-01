import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import data from "../data/productData.json";
import { useState } from "react";
import dataForChart from "../data/SingleDayData.json";
import React from "react";
import LineChart from "./LineChart";
import RoundButton from "./RoundButton";
import styles from "../styles/description.module.css";
// Chart.register(CategoryScale);
const Description = (props) => {
  const { labels, values } = getChartDataAndLabels(dataForChart);
  const [chartData, setChartData] = useState({
    labels: labels,
    datasets: [
      {
        label: "Price",
        data: values,
        backgroundColor: ["#000000"],
        borderColor: "black",
        fill: false,
        tension: 0.2,
        pointRadius: 1,
      },
    ],
  });
  const companyName = data.Name;
  const symbol = data.Symbol;
  const assetType = data.AssetType;
  const desc = data.Description;
  const industry = data.Industry;
  const sector = data.Sector;
  //   const high =data.52WeekHigh;
  //   const low = data.52WeekLow;
  const marketCap = data.MarketCapitalization;
  const peRatio = data.PERatio;
  const beta = data.Beta;
  const dividendYield = data.DividendYield;
  const profitMargin = data.ProfitMargin;
  //   console.log(data, "1111");
  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <RoundButton> {props.name?.slice(0,2)} </RoundButton>
        <div className={styles.innerContainer}>
          <div className={styles.col}>
            <div>{companyName}</div>
            <div>
              {symbol},{assetType}
            </div>
          </div>
          <div style={{
            display:"flex",
            flexDirection:"column"
          }}><span>$121.3</span> <span>+0.42%</span></div>
        </div>
      </div>
      <LineChart chartData={chartData} />
      <h2>About {companyName}</h2>
      <div style={{width:"85%", marginBottom:"5%"}}>{desc}</div>
      <div className={styles.buttons}>
        <button className={styles.button1}>Industry : {industry}</button>
        <button className={styles.button2}>Sector : {sector}</button>
      </div>
      <div className={styles.footer}>
        <div className={styles.col}>
          <div>Market Cap</div>
          <div>{marketCap}</div>
        </div>
        <div>
          <div>PE/Ratio</div>
          <div> {peRatio}</div>
        </div>
        <div>
          <div>Beta</div>
          <div>{beta}</div>
        </div>
        <div>
          <div>Dividend Yield</div>
          <div>{dividendYield}</div>
        </div>
        <div>
          <div>Profit Margin</div>
          <div>{profitMargin}</div>
        </div>
      </div>
    </div>
  );
};

const getChartDataAndLabels = (data) => {
  const keys = Object.keys(dataForChart);
  const mainData = dataForChart[keys[1]];
  const labels = Object.keys(mainData);
  const values = [];
  labels.forEach((k) => {
    const temp = mainData[k]["1. open"];
    values.push(temp);
  });

  return {
    labels,
    values,
  };
};

export default Description;
