import React from "react";
import Image from "next/image";

const JobCard = () => {
  return (
    <div className="bg-white shadow-md rounded-md w-[90%] max-w-[1110px] m-auto p-6 mt-14 md:mt-6 md:flex md:items-center md:justify-between border-l-4 border-dark-cyan">
      <div className="md:flex md:items-center">
        <div className="logo mt-[-50px] md:mt-0 md:mr-6">
          <Image
            src="/assets/images/photosnap.svg"
            alt="Photosnap logo"
            width={50}
            height={50}
            className="md:w-[88px] md:h-[88px]"
          />
        </div>

        <div>
          <div className="flex items-center mb-2">
            <span className="text-sm font-bold text-dark-cyan mr-4">
              Photosnap
            </span>
            <span className="mr-2 rounded-full bg-dark-cyan text-white px-2 py-1 text-xs uppercase">
              New!
            </span>
            <span className="rounded-full bg-very-dark-grayish-cyan text-white px-2 py-1 text-xs uppercase">
              Featured
            </span>
          </div>

          <h2 className="font-bold text-very-dark-grayish-cyan hover:text-dark-cyan cursor-pointer mb-2">
            Senior Frontend Developer
          </h2>

          <div className="flex items-center text-dark-grayish-cyan text-sm">
            <span>1d ago</span>
            <span className="mx-2">•</span>
            <span>Full Time</span>
            <span className="mx-2">•</span>
            <span>USA Only</span>
          </div>
        </div>
      </div>

      <hr className="my-4 border-dark-grayish-cyan md:hidden" />

      <div className="flex flex-wrap gap-4 md:justify-end">
        <span className="bg-light-grayish-cyan-background text-dark-cyan font-bold px-2 py-1 rounded cursor-pointer hover:bg-dark-cyan hover:text-white">
          Frontend
        </span>
        <span className="bg-light-grayish-cyan-background text-dark-cyan font-bold px-2 py-1 rounded cursor-pointer hover:bg-dark-cyan hover:text-white">
          Senior
        </span>
        <span className="bg-light-grayish-cyan-background text-dark-cyan font-bold px-2 py-1 rounded cursor-pointer hover:bg-dark-cyan hover:text-white">
          HTML
        </span>
        <span className="bg-light-grayish-cyan-background text-dark-cyan font-bold px-2 py-1 rounded cursor-pointer hover:bg-dark-cyan hover:text-white">
          CSS
        </span>
        <span className="bg-light-grayish-cyan-background text-dark-cyan font-bold px-2 py-1 rounded cursor-pointer hover:bg-dark-cyan hover:text-white">
          JavaScript
        </span>
      </div>
    </div>
  );
};

export default JobCard;
