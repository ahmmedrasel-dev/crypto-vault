import React from 'react';
import MainBanner from '../../components/Home/MainBanner/MainBanner';
import Partner from '../../components/Home/Partner/Partner';
import PoweredBy from '../../components/Home/PoweredBy/PoweredBy';
import SecondBanner from '../../components/Home/SecondBanner/SecondBanner';
import Spotlight from '../../components/Home/Spotlight/Spotlight';

const Home = () => {
  return (
    <main className='py-16'>
      <Spotlight />
      <MainBanner />
      <SecondBanner />
      <PoweredBy />
      <Partner />
    </main>
  );
};

export default Home;