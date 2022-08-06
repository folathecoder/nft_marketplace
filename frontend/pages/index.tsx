import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { appName } from 'cms/global/appInformation';
import { HeroSection, InfoSection } from 'components/pages/home';
import { Main } from 'theme/globalStyles';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{appName}</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <HeroSection />
        <InfoSection />
      </Main>
    </>
  );
};

export default Home;
