// import { DevicePhoneMobileIcon, EnvelopeIcon, MapIcon } from '@heroicons/react/16/solid'
// import React from 'react'

// const Footer = () => {
//   return (
//     <div className='pt-[8rem] pb-[4rem] bg-[#02050a]'>
//       <div className='grid border-b-[1px] pb-[6rem] border-gray-400 grid-cols-1 lg:grid-cols-3 md:grid-cols-3 w-[80%] mx-auto gap-[3rem]'>
//         <div className='flex items-center space-x-6'>
//           <div className='md:w-[6.5rem] md:h-[6.5rem] w-[4rem] h-[4rem] flex items-center justify-center rounded-full bg-[#55e6a5]'>
//             <MapIcon className='md:w-[5rem] md:h-[5rem] h-[3.5rem] w-[3.5rem] text-black' />
//           </div>
//           <div>
//             <h1 className='text-[25px] mb-[2rem] font-semibold text-[white]'>Address</h1>
//             <p className='text-[17px] w-[90%] text-white opacity-60'>
//               Lorem ipsum dolor sit
//             </p>
//           </div>
//         </div>
//         <div className='flex items-center space-x-6'>
//           <div className='md:w-[6.5rem] md:h-[6.5rem] w-[4rem] h-[4rem] flex items-center justify-center rounded-full bg-[#55e6a5]'>
//             <DevicePhoneMobileIcon className='md:w-[5rem] md:h-[5rem] h-[3.5rem] w-[3.5rem] text-black' />
//           </div>
//           <div>
//             <h1 className='text-[25px] mb-[2rem] font-semibold text-[white]'>
//               Phone
//             </h1>
//             <p className='text-[17px] w-[90%] text-white opacity-60'>
//               +921234567 <br />
//               +921234568
//             </p>
//           </div>
//         </div>
//         <div className='flex items-center space-x-6'>
//           <div className='md:w-[6.5rem] md:h-[6.5rem] w-[4rem] h-[4rem] flex items-center justify-center rounded-full bg-[#55e6a5]'>
//             <EnvelopeIcon className='md:w-[5rem] md:h-[5rem] h-[3.5rem] w-[3.5rem] text-black' />
//           </div>
//           <div>
//             <h1 className='text-[25px] mb-[2rem] font-semibold text-[white]'>
//               Send Us Email
//             </h1>
//             <p className='text-[17px] w-[90%] text-white opacity-60'>
//               info@example.com <br />
//               support@example.com
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Adjusted Footer Bottom Section */}
//       <div className='w-[80%] mt-[2rem] mx-auto flex flex-col md:flex-row md:items-center justify-between'>
//         <div className='text-[16px] mb-[2rem] md:mb-0 text-white opacity-20'>
//           Webdev warriors 2024 | All Rights Reserved
//         </div>
//         <div className='flex flex-wrap items-center space-x-10'>
//           <p className='text-[16px] text-white opacity-20'>Terms & Condition</p>
//           <p className='text-[16px] text-white opacity-20'>Privacy Policy</p>
//           <p className='text-[16px] text-white opacity-20'>Sitemap</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;

import { DevicePhoneMobileIcon, EnvelopeIcon, MapIcon } from '@heroicons/react/16/solid';
import React from 'react';

const Footer = () => {
  return (
    <div id="contact" className='pt-[8rem] pb-[4rem] bg-[#02050a]'>
      <div className='grid border-b-[1px] pb-[6rem] border-gray-400 grid-cols-1 lg:grid-cols-3 md:grid-cols-3 w-[80%] mx-auto gap-[3rem]'>
        <div className='flex items-center space-x-6'>
          <div className='md:w-[6.5rem] md:h-[6.5rem] w-[4rem] h-[4rem] flex items-center justify-center rounded-full bg-[#55e6a5]'>
            <MapIcon className='md:w-[5rem] md:h-[5rem] h-[3.5rem] w-[3.5rem] text-black' />
          </div>
          <div>
            <h1 className='text-[25px] mb-[2rem] font-semibold text-[white]'>Address</h1>
            <p className='text-[17px] w-[90%] text-white opacity-60'>
              Lorem ipsum dolor sit
            </p>
          </div>
        </div>
        <div className='flex items-center space-x-6'>
          <div className='md:w-[6.5rem] md:h-[6.5rem] w-[4rem] h-[4rem] flex items-center justify-center rounded-full bg-[#55e6a5]'>
            <DevicePhoneMobileIcon className='md:w-[5rem] md:h-[5rem] h-[3.5rem] w-[3.5rem] text-black' />
          </div>
          <div>
            <h1 className='text-[25px] mb-[2rem] font-semibold text-[white]'>Phone</h1>
            <p className='text-[17px] w-[90%] text-white opacity-60'>
              +921234567 <br />
              +921234568
            </p>
          </div>
        </div>
        <div className='flex items-center space-x-6'>
          <div className='md:w-[6.5rem] md:h-[6.5rem] w-[4rem] h-[4rem] flex items-center justify-center rounded-full bg-[#55e6a5]'>
            <EnvelopeIcon className='md:w-[5rem] md:h-[5rem] h-[3.5rem] w-[3.5rem] text-black' />
          </div>
          <div>
            <h1 className='text-[25px] mb-[2rem] font-semibold text-[white]'>Send Us Email</h1>
            <p className='text-[17px] w-[90%] text-white opacity-60'>
              info@example.com <br />
              support@example.com
            </p>
          </div>
        </div>
      </div>

      {/* Adjusted Footer Bottom Section */}
      <div className='w-[80%] mt-[2rem] mx-auto flex flex-col md:flex-row md:items-center justify-between'>
        <div className='text-[16px] mb-[2rem] md:mb-0 text-white opacity-20'>
          Webdev warriors 2024 | All Rights Reserved
        </div>
        <div className='flex flex-wrap items-center space-x-10'>
          <p className='text-[16px] text-white opacity-20'>Terms & Condition</p>
          <p className='text-[16px] text-white opacity-20'>Privacy Policy</p>
          <p className='text-[16px] text-white opacity-20'>Sitemap</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

