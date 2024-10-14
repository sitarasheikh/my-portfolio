
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/16/solid';
import React from 'react';

interface Props {
  name: string;
  role: string;
  image: string;
}

const ClientReview = ({ name, role, image }: Props) => {
  return (
    <div className="flex flex-col text-center justify-center">
      <Image
        src={image}
        alt={name}
        width={100}
        height={100}
        className="mx-auto mb-[2rem] rounded-full object-contain"
      />
      <div className="flex items-center justify-center">
        <StarIcon className="w-[2rem] h-[2rem] text-yellow-400" />
        <StarIcon className="w-[2rem] h-[2rem] text-yellow-400" />
        <StarIcon className="w-[2rem] h-[2rem] text-yellow-400" />
        <StarIcon className="w-[2rem] h-[2rem] text-yellow-400" />
        <StarIcon className="w-[2rem] h-[2rem] text-yellow-400" />
      </div>
      <h1 className="text-[25px] text-white mt-[1rem]">{name}</h1>
      <p className="text-[18px] text-white opacity-75 mt-[0.5rem] mb-[1.4rem]">{role}</p>
      <p className="text-[16px] text-white opacity-50 w-[90%] md:w-[50%] mx-auto">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non minima sequi officia recusandae quibusdam tempore odio vero aspernatur, consequuntur optio mollitia dicta, suscipit magni dolore?
      </p>
    </div>
  );
};

export default ClientReview;
