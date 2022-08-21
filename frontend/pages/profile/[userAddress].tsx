import type { NextPage } from 'next';
import Head from 'next/head';
import { appName } from 'cms/global/appInformation';
import { Main } from 'theme/globalStyles';
import { ProfileLayout } from 'components/pages/profile';

const Profile: NextPage = () => {
  return (
    <>
      <Head>
        <title>{appName}</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <ProfileLayout />
      </Main>
    </>
  );
};

export default Profile;
