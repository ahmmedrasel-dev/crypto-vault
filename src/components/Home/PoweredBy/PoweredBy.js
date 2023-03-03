import React from 'react';
import poweredBy1 from '../../../assets/images/partner1.svg'
import poweredBy2 from '../../../assets/images/partner2.svg'
import poweredBy3 from '../../../assets/images/partner3.svg'

const PoweredBy = () => {
  return (
    <section className='py-10 px-24'>
      <h2 className='text-[2.5rem] font-semibold text-center text-[#323232]'>Powered by</h2>

      <div className='grid grid-cols-3 gap-12 items-center mt-10'>
        <img className='w-full' src={poweredBy1} alt="partner1" />
        <img className='w-full' src={poweredBy2} alt="partner2" />
        <img className='w-full' src={poweredBy3} alt="partner3" />
      </div>
    </section>
  );
};

export default PoweredBy;