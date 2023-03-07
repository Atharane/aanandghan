import type { NextPage } from "next";
import Hero from "../components/Hero";
import Head from "next/head";
import dynamic from "next/dynamic";

const AboutTantra = dynamic(() => {
  return import("../components/AboutTantra");
});

const BgWrapper = dynamic(() => {
  return import("../components/BgWrapper");
});

const TFinPast = dynamic(() => {
  return import("../components/TFinPast");
});

const VenueAndForm = dynamic(() => {
  return import("../components/VenueAndForm");
});

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>आनंदघन</title>
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English"></meta>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta property="og:title" content="आनंदघन वास्तुशांती सोहळा" />
        <meta
          property="og:description"
          content="आनंदघन वास्तुशांती सोहळा - २८ मार्च, २०२३"
        ></meta>
        <meta
          property="og:image"
          content="favicon.svg"
        ></meta>
      </Head>
      <>
        <Hero />
        <BgWrapper>
          <AboutTantra />
          <TFinPast />
          <VenueAndForm></VenueAndForm>
        </BgWrapper>
      </>
    </div>
  );
};

export default Home;
