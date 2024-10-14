
// import React from "react";
// import Image from "next/image";
// import TextEffect from "./textEffect";
// import { ArrowDownTrayIcon, } from "@heroicons/react/16/solid";

// const Hero = () => {
//   return (
//     // Hero section with background image and animated text effect
//     <div className="min-h-[88vh] bg-[url('/images/banner.jpeg')] bg-cover bg-center bg-current mt-[12vh]">
//       <div className="w-[80%] mx-auto grid lg:grid-cols-2 gap-[4rem] h-[100%] items-center">
//         {/* Text Section */}
//         <div className="text-center lg:text-left">
//           <h1 className="text-[35px] md:text-[50px] text-white font-bold">
//             Hi, I &apos;M <span className="text-yellow-400">SITARA!</span>
//           </h1>
//           <TextEffect />
//           <p className="mt-[1.5rem] text-[18px] text-[#ffffff92]">
//             Hi I&apos;m Sitara Ishtiaq a developer with a passion for Artificial Intelligence. I specialize in front-end development using React and Next.js to create dynamic applications. Let’s connect and explore the exciting possibilities of technology together!
//           </p>
//           <a 
//   href="/images/cv.pdf" // Update this with the correct path to your CV file
//   download // Ensures the file is downloaded instead of opened
//   className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2"
// >
//   <p>Download CV</p>
//   <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
// </a>
//           </div>
//         </div>

//         {/* Profile Image */}
//         <div data-aos="zoom-in" className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] mx-auto bg-[#55e6a5] relative flex items-center rounded-full overflow-hidden">
//           <Image 
//             src="/images/profile.jpeg" 
//             alt="user" 
//             layout="fill" 
//             className="object-cover rounded-full" 
//           />
//         </div>
//       </div>
  
//   );
// };

// export default Hero;



// 

import React from "react";
import Image from "next/image";
import TextEffect from "./textEffect";
import { ArrowDownTrayIcon } from "@heroicons/react/16/solid";

const Hero = () => {
  return (
    // Hero section with background image and animated text effect
    <div className="min-h-[88vh] bg-[url('/images/banner.jpeg')] bg-cover bg-center bg-current mt-[12vh]">
      <div className="w-[80%] mx-auto grid lg:grid-cols-2 gap-[4rem] h-[100%] items-center">
        {/* Text Section */}
        <div className="text-center lg:text-left">
          <h1 className="text-[35px] md:text-[50px] text-white font-bold">
            Hi, I &apos;M <span className="text-yellow-400">SITARA!</span>
          </h1>
          <TextEffect />
          <p className="mt-[1.5rem] text-[18px] text-[#ffffff92]">
          Hi I&apos;m Sitara Ishtiaq, a developer with a passion for Artificial Intelligence. I specialize in front-end development using React and Next.js to create dynamic applications. Let&apos;s connect and explore the exciting possibilities of technology together!
          </p>

          {/* Updated Download CV Button with smaller size */}
          <button>
          <a 
            href="images/cv.pdf"  // Update this with the correct path to your CV file
            download  // Ensures the file is downloaded instead of opened
            className="px-[1.5rem] hover:bg-yellow-400 transition-all duration-200 py-[0.8rem] text-[16px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2"
          >
            <p>Download CV</p>
            <ArrowDownTrayIcon className="w-[1.4rem] h-[1.5rem] text-black" />
          </a>
          </button>
        </div>

        {/* Profile Image */}
        <div 
          data-aos="zoom-in" 
          className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] mx-auto bg-[#55e6a5] relative flex items-center rounded-full overflow-hidden"
        >
          <Image 
            src="/images/profile.jpeg" 
            alt="user" 
            layout="fill" 
            className="object-cover rounded-full" 
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

