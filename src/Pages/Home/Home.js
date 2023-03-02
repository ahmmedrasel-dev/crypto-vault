import React from 'react';
import MainBanner from '../../components/Home/MainBanner/MainBanner';
import SecondBanner from '../../components/Home/SecondBanner/SecondBanner';
import Spotlight from '../../components/Home/Spotlight/Spotlight';

const Home = () => {
  return (
    <main className='py-16'>
      <Spotlight />
      <MainBanner />
      <SecondBanner />
    </main>
  );
};

export default Home;