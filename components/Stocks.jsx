"use client";
import data from "../data/mainPageMockData.json";
import Card from "./Card";
import Link from "next/link";
import styles from "../styles/stock.module.css";

export default function Stocks(props) {
  const stocksData = props.isGainer ? data.top_gainers : data.top_losers;

  return (
    <div className={styles.container}>
      {stocksData?.map((stock) => {
        return (
          <div>
            <Link
              href={{
                pathname: "/product",
                query: { id: stock.ticker },
              }}
              style={{
                color: "black",
                textDecoration: "none",
              }}
            >
              <Card
                ticker={stock.ticker}
                price={stock.price}
                // changeAmount={stock.change_amount}
                changePercentage={stock.change_percentage}
                // volume={stock.volume}
                key={stock.ticker}
                //   changeRoute={props.changeRoute}
              />
            </Link>
          </div>
        );
      })}
      {/* <Card/> */}
    </div>
  );
}
