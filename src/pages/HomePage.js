import React, { Fragment } from "react";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import Header from "../components/UI/Header";

function HomePage() {
  return (
    <Fragment>
      {/* Header */}
      <Header />

      {/* Hero */}
      <Hero />

      {/* Banner */}
      <Banner />

      {/* Footer */}
    </Fragment>
  );
}

export default HomePage;
