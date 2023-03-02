import React from 'react';
import './mainbanner.css'
import mainHero from '../../../assets/images/heru1.png'
import mainHero1 from '../../../assets/images/heru2.png'

const MainBanner = () => {
  return (
    <div className='py-10 px-24'>
      <h1 className='lg:text-7xl xl:text-7xl font-semibold text-[#323232] text-center'>The Ultimate DeFi <span className='block'>Platform</span></h1>

      <div className='py-10'>
        <img className='w-full ' src={mainHero} alt="" />
      </div>

      <div className='flex justify-between py-10 items-center'>
        <div className='w-[50%]'>
          <h2 className='text-[3.4rem] leading-[1.2] mb-4 text-[#323232] font-semibold'>Control your assets in the most effective way</h2>
          <h3 className='gradient-sub-title text-[2.1rem] leading-[1.2] font-light'>Overcome the problem of low liquidity and high slippage</h3>
        </div>
        <div className='w-[50%]'>
          <img className='w-full' src={mainHero1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MainBanner;