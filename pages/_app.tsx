import Head from "next/head";
import "../styles/style.scss";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Кафедра інформаційних систем ХНЕУ ім. Семена Кузнеця</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
