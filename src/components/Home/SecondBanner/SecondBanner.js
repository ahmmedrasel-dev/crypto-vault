import React from 'react';
import secondBanner from '../../../assets/images/banner2.png';

const SecondBanner = () => {
  return (
    <div className='bg-[#f5f6fa] px-24 py-16'>
      <div className='flex justify-between items-center'>
        <div className='w-[65%]'>
          <img src={secondBanner} alt="" />
        </div>
        <div className='text-right w-[35%]'>
          <h2 className='text-[2.5rem] leading-[1.2] font-semibold text-[#323232]'>Guide blockchain startups to success</h2>
          <p className='text-2xl py-4 gradient-sub-title'>Fair Launch <br /> Platform for <br /> Fundraising</p>
          <p className='text-xl'>Innovative, Decentralized, and Outstanding</p>
        </div>
      </div>
    </div>
  );
};

export default SecondBanner;