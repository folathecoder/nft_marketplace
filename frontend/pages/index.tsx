import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { appName } from 'cms/global/appInformation';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{appName}</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main></main>
    </>
  );
};

export default Home;
