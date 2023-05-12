/** @format */

import React, { useEffect, useState } from "react";
import Header from "./Header";
import Proyects from "./Proyects";
import Sections from "./Sections";

function Homepage() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("/api").then((res) =>
      res
        .json()
        .then((data) => setData(data.message))
        .then(() => console.log(data))
    );
  });
  return (
    <div className="home-page-main">
      <Proyects />
    </div>
  );
}

export default Homepage;
