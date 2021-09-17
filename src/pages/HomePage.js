import React, { Fragment } from "react";
import Hero from "../components/Hero";
import Header from "../components/UI/Header";

function HomePage() {
  return (
    <Fragment>
      {/* Header */}
      <Header />

      {/* Hero */}
      <Hero />
      {/* Footer */}
    </Fragment>
  );
}

export default HomePage;
