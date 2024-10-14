
// import { XMarkIcon } from '@heroicons/react/16/solid';
// import React from 'react';

// interface Props {
//   nav: boolean;
//   closeNav: () => void;
// }

// const MobileNav = ({ nav, closeNav }: Props) => {
//   // Define the navAnimation inside the component
//   const navAnimation = nav ? 'translate-x-0' : 'translate-x-[-100%]';

//   return (
//     <div className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 z-[10000] bg-[#09101a]`}>
//       <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
//         <div className="nav-link-mobile">HOME</div>
//         <div className="nav-link-mobile">SERVICES</div>
//         <div className="nav-link-mobile">ABOUT</div>
//         <div className="nav-link-mobile">PROJECT</div>
//         <div className="nav-link-mobile">BLOG</div>
//         <div className="nav-link-mobile">CONTACT</div>
//       </div>
//       <div
//         onClick={closeNav} // Call closeNav to close the menu when clicked
//         className="absolute cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-yellow-400"
//       >
//         <XMarkIcon />
//       </div>
//     </div>
//   );
// };

// export default MobileNav;



import { XMarkIcon } from '@heroicons/react/16/solid';
import React from 'react';

interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ nav, closeNav }: Props) => {
  const navAnimation = nav ? 'translate-x-0' : 'translate-x-[-100%]';

  return (
    <div className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 z-[10000] bg-[#09101a]`}>
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center space-y-6">
        <a href="#home" onClick={closeNav} className="nav-link-mobile text-white cursor-pointer">HOME</a>
        <a href="#services" onClick={closeNav} className="nav-link-mobile text-white cursor-pointer">SERVICES</a>
        <a href="#about" onClick={closeNav} className="nav-link-mobile text-white cursor-pointer">ABOUT</a>
        <a href="#project" onClick={closeNav} className="nav-link-mobile text-white cursor-pointer">PROJECT</a>
        <a href="#blog" onClick={closeNav} className="nav-link-mobile text-white cursor-pointer">BLOG</a>
        <a href="#contact" onClick={closeNav} className="nav-link-mobile text-white cursor-pointer">CONTACT</a>
      </div>
      <div
        onClick={closeNav}  // Call closeNav to close the menu when clicked
        className="absolute cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-yellow-400"
      >
        <XMarkIcon />
      </div>
    </div>
  );
};

export default MobileNav;
