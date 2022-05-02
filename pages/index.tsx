import Head from "next/head";
import React from "react";
import Header from "../components/header";

const Home = () => {
  return (
    <>
      <Head>
        <title>
          Головна | Кафедра інформаційних систем ХНЕУ ім. Семена Кузнеця
        </title>
      </Head>
      <Header />
    </>
  );
};

export default React.memo(Home);
