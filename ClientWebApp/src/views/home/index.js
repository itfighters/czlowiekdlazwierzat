import React from "react";
import HomeTilesList from "../../components/homeTilesList";
import About from "../about";

export default function Home() {
  return (
    <div className="home-page">
      <h1>Potrzeby</h1>
      <HomeTilesList />
      <About />

    </div>
  );
}
