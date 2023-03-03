import React from 'react';
import './partner.css'
import partner1 from '../../../assets/images/partner_1.png';
import partner2 from '../../../assets/images/partner_2.png';
import partner3 from '../../../assets/images/partner_3.png';
import partner4 from '../../../assets/images/partner_4.svg';
import partner5 from '../../../assets/images/partner_5.svg';
import partner6 from '../../../assets/images/partner_6.svg';
import partner7 from '../../../assets/images/partner_7.svg';
import partner8 from '../../../assets/images/partner_8.svg';
import partner9 from '../../../assets/images/partner_9.svg';
import partner10 from '../../../assets/images/partner_10.svg';
import partner11 from '../../../assets/images/partner_11.svg';
import partner12 from '../../../assets/images/partner_12.svg';
import partner13 from '../../../assets/images/partner_13.svg';
import partner14 from '../../../assets/images/partner_14.svg';
import partner15 from '../../../assets/images/partner_15.png';
import partner16 from '../../../assets/images/partner_16.png';

const Partner = () => {
  return (
    <section className='py-10 px-24'>
      <h2 className='text-[2.5rem] font-semibold text-center text-[#323232]'>Powered by</h2>

      <div className='partners__marquee partners__marquee-1 flex relative w-full max-w-full overflow-x-hidden h-full'>
        <div className="overlay"></div>
        <div className="partners__marquee--track">
          <div className="partners__marquee--content flex items-center h-full">
            <p><img className='w-full' src={partner1} alt="partner1" /></p>
            <p><img className='w-full' src={partner2} alt="partner2" /></p>
            <p><img className='w-full' src={partner3} alt="partner3" /></p>
            <p><img className='w-full' src={partner4} alt="partner4" /></p>
            <p><img className='w-full' src={partner5} alt="partner5" /></p>
            <p><img className='w-full' src={partner6} alt="partner6" /></p>
            <p><img className='w-full' src={partner7} alt="partner7" /></p>
            <p><img className='w-full' src={partner8} alt="partner8" /></p>
            <p><img className='w-full' src={partner9} alt="partner9" /></p>
          </div>
        </div>

      </div>

      <div className='partners__marquee partners__marquee-1 flex relative w-full max-w-full overflow-x-hidden h-full'>
        <div className="overlay"></div>
        <div className="partners__marquee--track">
          <div className="partners__marquee--content flex items-center h-full">
            <p><img className='w-full' src={partner10} alt="partner1" /></p>
            <p><img className='w-full' src={partner11} alt="partner2" /></p>
            <p><img className='w-full' src={partner12} alt="partner3" /></p>
            <p><img className='w-full' src={partner13} alt="partner4" /></p>
            <p><img className='w-full' src={partner14} alt="partner5" /></p>
            <p><img className='w-full' src={partner15} alt="partner6" /></p>
            <p><img className='w-full' src={partner16} alt="partner7" /></p>
          </div>
        </div>

      </div>


    </section>
  );
};

export default Partner;