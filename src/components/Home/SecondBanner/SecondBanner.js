import React from 'react';
import secondBanner from '../../../assets/images/banner2.png';
import secondBanner3 from '../../../assets/images/banner3.png'
import secondBanner4 from '../../../assets/images/banner4.png'
import secondBanner5 from '../../../assets/images/banner5.png'

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

      <div className='flex justify-between items-center my-10'>
        <div className='w-[65%]'>
          <img src={secondBanner3} alt="" />
        </div>
        <div className='text-right w-[35%]'>
          <h2 className='text-[2.5rem] leading-[1.2] font-semibold text-[#323232]'>Never miss an opportunity with instant swap</h2>
          <p className='text-2xl py-4 gradient-sub-title'>Overcome the problems of low liquidity and high slippage
          </p>
          <p className='text-xl'>Let's buy some token on</p>
        </div>
      </div>

      <div className='flex justify-between items-center'>
        <div className='text-left w-[35%]'>
          <h2 className='text-[2.5rem] leading-[1.2] font-semibold text-[#323232]'>Never miss an opportunity with instant swap</h2>
          <p className='text-2xl py-4 gradient-sub-title'>Overcome the problems of low liquidity and high slippage
          </p>
          <p className='text-xl'>Let's buy some token on</p>
        </div>

        <div className='w-[65%]'>
          <img src={secondBanner4} alt="" />
        </div>
      </div>


      <h2 className='lg:text-[2.8rem] xl:text-[2.8rem] font-semibold text-[#323232] text-center mb-10'>Everything is easiest and safest to use on LZ Wallet</h2>

      <div className='flex justify-between items-center'>

        <div className='w-[65%]'>
          <img src={secondBanner5} alt="" />
        </div>
        <div className='text-right w-[35%]'>
          <h2 className='text-[2.5rem] leading-[1.2] font-semibold text-[#323232]'>Never miss an opportunity with instant swap</h2>
          <p className='text-2xl py-4 gradient-sub-title'>Overcome the problems of low liquidity and high slippage
          </p>
          <p className='text-xl'>Let's buy some token on</p>
        </div>
      </div>


      <h2 className='lg:text-[2.8rem] xl:text-[2.8rem] font-semibold text-[#323232] text-center mb-10'>Roadmap</h2>

      <div className='grid grid-cols-3 gap-4'>
        <div className='bg-white rounded-md p-6 shadow'>
          <h3 className='gradient-sub-title text-center text-xl'>Merge Tokens</h3>
          <ul className=' pl-4 py-6'>
            <li className="py-2 text-sm list-disc">Merge ZDCASH & zSeed into LZP</li>
            <li className="py-2 text-sm list-disc">Merge BSCX, ZD & BARMY in LZ</li>
            <li className="py-2 text-sm list-disc">Launch $1M Bounty campaign</li>
            <li className="py-2 text-sm list-disc">Launch LZP & new farming pools</li>
          </ul>
          <p>*Start DEX development</p>
        </div>

        <div className='bg-white rounded-md p-6 shadow'>
          <h3 className='gradient-sub-title text-center text-xl'>Merge Tokens</h3>
          <ul className=' pl-4 py-6'>
            <li className="py-2 text-sm list-disc">Merge ZDCASH & zSeed into LZP</li>
            <li className="py-2 text-sm list-disc">Merge BSCX, ZD & BARMY in LZ</li>
            <li className="py-2 text-sm list-disc">Launch $1M Bounty campaign</li>
          </ul>
          <div className='text-center'>

            <button className='border-2 px-16 border-[#5aa62b] py-2 rounded bg-[#5aa62b] bg-clip-text text-transparent'>Go Swap</button>
          </div>
        </div>

        <div className='bg-white rounded-md p-6 shadow'>
          <h3 className='gradient-sub-title text-center text-xl'>Merge Tokens</h3>
          <ul className=' pl-4 py-6'>
            <li className="py-2 text-sm list-disc">Merge ZDCASH & zSeed into LZP</li>
            <li className="py-2 text-sm list-disc">Merge BSCX, ZD & BARMY in LZ</li>
            <li className="py-2 text-sm list-disc">Launch $1M Bounty campaign</li>
            <li className="py-2 text-sm list-disc">Launch LZP & new farming pools</li>
          </ul>
        </div>


        <div className='bg-white rounded-md p-6 shadow'>
          <h3 className='gradient-sub-title text-center text-xl'>X-Campaign</h3>
          <ul className=' pl-4 py-6'>
            <li className="py-2 text-sm list-disc">Merge ZDCASH & zSeed into LZP</li>
            <li className="py-2 text-sm list-disc">Merge BSCX, ZD & BARMY in LZ</li>
            <li className="py-2 text-sm list-disc">Launch $1M Bounty campaign</li>
            <li className="py-2 text-sm list-disc">Launch LZP & new farming pools</li>
          </ul>
        </div>

        <div className='bg-white rounded-md p-6 shadow col-span-2'>
          <h3 className='gradient-sub-title text-center text-xl'>Bridge & Farming</h3>
          <div className='flex gap-8'>
            <ul className=' pl-4 py-6'>
              <li className="py-2 text-sm list-disc">Merge ZDCASH & zSeed into LZP</li>
              <li className="py-2 text-sm list-disc">Merge BSCX, ZD & BARMY in LZ</li>
              <li className="py-2 text-sm list-disc">Launch $1M Bounty campaign</li>
              <li className="py-2 text-sm list-disc">Launch LZP & new farming pools</li>
            </ul>

            <ul className=' pl-4 py-6'>
              <li className="py-2 text-sm list-disc">Merge ZDCASH & zSeed into LZP</li>
              <li className="py-2 text-sm list-disc">Merge BSCX, ZD & BARMY in LZ</li>
              <li className="py-2 text-sm list-disc">Launch $1M Bounty campaign</li>
              <li className="py-2 text-sm list-disc">Launch LZP & new farming pools</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SecondBanner;