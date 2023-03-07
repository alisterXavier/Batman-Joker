import Head from "next/head";
import Batman from "@/pages/Bateman";

export default function Home() {
  return (
    <>
      <Head>
        <title>Batman</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Batman />
    </>
  );
}
