"use client";
import React, { useState } from "react";
import Stocks from "@/components/Stocks";
import GainersLosersTabs from "@/components/GainersLosersTabs";
import Description from "@/components/Description";

const Explore = () => {
  const [isGainer, setIsGainer] = useState(true);
  return (
    <>
    
      <GainersLosersTabs handleChange={setIsGainer} value={isGainer ? 1 : 0} />
      <Stocks isGainer={isGainer} />
      
    </>
  );
};

export default Explore;
