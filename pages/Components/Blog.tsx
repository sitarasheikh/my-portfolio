

import Image from 'next/image';
import { ChatBubbleLeftRightIcon, UserCircleIcon } from '@heroicons/react/16/solid';
import React from 'react';

const Blog = () => {
  return (
    <div id="blog" className="pt-[4rem] md:pt-[8rem] pb-[4rem] bg-[#02050a]">
      <h1 className="heading">
        MY <span className="text-yellow-400">BLOG</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-[4rem] gap-[3rem] w-[80%] mx-auto">
        <div>
          <div className="w-[100%] relative h-[400px]">
            <Image
              src="/images/b7.jpeg" 
              alt="blog"
              width={500}  
              height={300} 
              className="object-cover w-full h-full" 
            />
          </div>
          <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]">
            <div className="w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[3rem] text-black font-semibold text-[17px] mx-auto">
              Dec 10, 2023
            </div>
            <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4">
              <div className="flex items-center space-x-3">
                <UserCircleIcon className="w-[1.5rem] h-[1.5rem] text-[#55e6a5]" />
                <p className="text-white">By ALEX</p>
              </div>
              <div className="flex items-center space-x-3">
                <ChatBubbleLeftRightIcon className="w-[2rem] h-[2rem] text-[#55e6a5]" />
                <p className="text-white">Comments (3)</p>
              </div>
            </div>
            <p className="mt-[1rem] text-white text-[18px] font-semibold">
              Artificial Intelligence
            </p>
          </div>
        </div>

        <div>
          <div className="w-[100%] relative h-[400px]">
            <Image
              src="/images/b1.jpeg" 
              alt="blog" 
              width={500}  
              height={300}
              className="object-cover w-full h-full" 
            />
          </div>
          <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]">
            <div className="w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[3rem] text-black font-semibold text-[17px] mx-auto">
              Jan 20, 2024
            </div>
            <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4">
              <div className="flex items-center space-x-3">
                <UserCircleIcon className="w-[1.5rem] h-[1.5rem] text-[#55e6a5]" />
                <p className="text-white">By Anas</p>
              </div>
              <div className="flex items-center space-x-3">
                <ChatBubbleLeftRightIcon className="w-[2rem] h-[2rem] text-[#55e6a5]" />
                <p className="text-white">Comments (6)</p>
              </div>
            </div>
            <p className="mt-[1rem] text-white text-[18px] font-semibold">
              Next.js Full Stack Development
            </p>
          </div>
        </div>

        <div>
          <div className="w-[100%] relative h-[400px]">
            <Image
              src="/images/b6.jpeg" 
              alt="blog" 
              width={500}  
              height={300}
              className="object-cover w-full h-full" 
            />
          </div>
          <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]">
            <div className="w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[3rem] text-black font-semibold text-[17px] mx-auto">
              Aug 13, 2024
            </div>
            <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4">
              <div className="flex items-center space-x-3">
                <UserCircleIcon className="w-[1.5rem] h-[1.5rem] text-[#55e6a5]" />
                <p className="text-white">By Civi</p>
              </div>
              <div className="flex items-center space-x-3">
                <ChatBubbleLeftRightIcon className="w-[2rem] h-[2rem] text-[#55e6a5]" />
                <p className="text-white">Comments (9)</p>
              </div>
            </div>
            <p className="mt-[1rem] text-white text-[18px] font-semibold">
              AI New Feature
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

