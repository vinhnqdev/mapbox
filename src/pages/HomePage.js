import React, { Fragment } from "react";
import Banner from "../components/Banner";
import BrandSection from "../components/BrandSection";
import Hero from "../components/Hero";
import Header from "../components/UI/Header";
import SectionWithTwoImages from "../components/SectionWithTwoImages";
import SectionWithAImage from "../components/SectionWithAImage";
import navImage1 from "../assets/images/mains/navigator-big.png";
import navImage2 from "../assets/images/mains/navigator-small.png";
import mapImage1 from "../assets/images/mains/map1.png";
import mapImage2 from "../assets/images/mains/map2.png";
import mapStudioImage from "../assets/images/mains/map-studio.jpeg";
import searchImage from "../assets/images/mains/search.png";
import visionImage from "../assets/images/mains/vision.png";
import dataImage from "../assets/images/mains/data.jpeg";
import atlasImage from "../assets/images/mains/atlas.jpeg";
import straightImage from "../assets/images/mains/straight.jpeg";
import CardContent from "../components/CardContent";
import Footer from "../components/UI/Footer";

//https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/6076f540d539fa8c97126f0b_straigtaway.svg

function HomePage() {
  return (
    <Fragment>
      {/* Header */}
      <Header />
      {/* Hero */}
      <Hero />
      {/* Banner */}
      <Banner />

      <main className="px-5 md:px-8">
        {/* Brand Section */}
        <BrandSection />
        <SectionWithTwoImages
          image1={navImage1}
          image2={navImage2}
          para="Mapbox provides powerful routing engines, accurate, traffic-powered
          travel times, and intuitive turn-by-turn directions to help you build
          engaging navigation experiences."
          title="Navigation"
          linkText="Explore Navigation"
        />

        <SectionWithAImage
          title="Mapbox Studio"
          para="Mapbox Studio is like Photoshop, for maps. We give designers control over everything from colors and fonts, to 3D features and camera angles, to the pitch of the map as a car enters a turn."
          linkText="Learn about Studio "
          image={mapStudioImage}
          reverse={true}
        />

        <SectionWithTwoImages
          image1={mapImage2}
          image2={mapImage1}
          para="Our APIs, SDKs, and live updating map data give developers tools to build better mapping, navigation, and search experiences across platforms."
          title="Maps"
          linkText="Learn about Maps"
          positionImg={true}
        />

        <SectionWithAImage
          title="Search"
          para="Search and geocoding is tied to everything we build — maps, navigation, AR — and underlies every app that helps humans explore their world."
          linkText="Discover search"
          image={searchImage}
          reverse={true}
        />

        <SectionWithAImage
          tag="Customer showcase"
          para="Plan and optimize your route at the snap of a photo."
          linkText="Read customer showcase"
          image={straightImage}
        />

        <SectionWithAImage
          title="Vision"
          para="The Mapbox Vision SDK describes every curb, lane, street sign, and road hazard it sees as data. Developers use the SDK's AI-powered semantic segmentation, object detection, and classification to deliver precise navigation guidance, display driver assistance alerts, and detect and map road incidents."
          linkText="Discover Vision"
          image={visionImage}
          reverse={true}
        />

        <SectionWithAImage
          title="Data"
          para="Our data is powered by hundreds of data sources, and a distributed global users base of more than half a billion monthly active users."
          linkText="Learn about Data"
          image={dataImage}
        />

        <SectionWithAImage
          title="Atlas"
          para="With Atlas, you can self-host Mapbox maps and geocoding APIs, Streets, Satellite, and Terrain tilesets, and Mapbox Studio on your network, behind a firewall, or even air-gapped. Use Atlas to power on-premises applications using Mapbox GL JS v2 and Mapbox Maps SDKs for iOS and Android."
          linkText="Self-host with Atlas"
          image={atlasImage}
          reverse={true}
          rowAtXlSize={true}
        />

        <CardContent />
      </main>
      {/* Footer */}
      <Footer />
    </Fragment>
  );
}

export default HomePage;
