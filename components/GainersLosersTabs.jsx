import React from "react";
import { Tabs, Tab } from "@mui/material";
const GainersLosersTabs = (props) => {
  const handleChange = (e, newVal) => {
    props.handleChange(newVal === 1 ? true : false);
  };

  return (
    // <div>GainersLosersTabs</div>
    <>
      <Tabs
        value={props.value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value={1} label="Top Gainers" />
        <Tab value={0} label="Top Losers" />
      </Tabs>
    </>
  );
};

export default GainersLosersTabs;
