import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { appName } from 'cms/global/appInformation';
import { Collectors, NFTCollection } from 'components/pages/marketplace';
import { Main, HiddenHeader } from 'theme/globalStyles';

const Marketplace: NextPage = () => {
  return (
    <>
      <Head>
        <title>{appName}</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <HiddenHeader>Marketplace</HiddenHeader>
        <Collectors />
        <NFTCollection />
      </Main>
    </>
  );
};

export default Marketplace;
