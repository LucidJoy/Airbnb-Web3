import React from "react";
import "./Rentals.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

const Rentals = () => {
  const { state } = useLocation();

  return (
    <>
      <Link to='/'> Home </Link>
      <div onClick={() => console.log(state)}>hi</div>
    </>
  );
};

export default Rentals;
