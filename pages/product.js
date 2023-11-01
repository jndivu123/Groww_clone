"use client";
import React from "react";
import { useRouter } from "next/router";
import Description from "../components/Description";
const Product = () => {
  const router = useRouter();
  const {
    query: { id },
  } = router;
  return (
    <>
      <Description name={id}/>
    </>
  );
};

export default Product;
