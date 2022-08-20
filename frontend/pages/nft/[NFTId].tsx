import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { appName } from 'cms/global/appInformation';
import { Main } from 'theme/globalStyles';
import { NFTDetailLayout } from 'components/pages/NFTDetail';

const NFTDetail: NextPage = () => {
  return (
    <>
      <Head>
        <title>{appName}</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <NFTDetailLayout />
      </Main>
    </>
  );
};

export default NFTDetail;
