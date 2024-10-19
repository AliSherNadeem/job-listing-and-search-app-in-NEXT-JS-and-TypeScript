import React from "react";
import Image from "next/image";

// JobCard Component
interface JobCardProps {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}

const JobCard: React.FC<JobCardProps> = (props) => {
  const tags = [
    props.role,
    props.level,
    ...(props.languages ?? []),
    ...(props.tools ?? []),
  ];

  return (
    <div
      className={`bg-white shadow-md rounded-md w-full max-w-[1110px] m-auto p-6 mt-14 md:mt-6 md:flex md:items-center md:justify-between ${
        props.featured ? "border-l-4 border-dark-cyan" : ""
      }`}
    >
      <div className="md:flex md:items-center">
        <div className="logo mt-[-50px] md:mt-0 md:mr-6">
          <Image
            src={props.logo}
            alt={`${props.company} logo`}
            width={50}
            height={50}
            className="md:w-[88px] md:h-[88px]"
          />
        </div>

        <div>
          <div className="flex items-center mb-2">
            <span className="text-sm font-bold text-dark-cyan mr-4">
              {props.company}
            </span>
            {props.new && (
              <span className="mr-2 rounded-full bg-dark-cyan text-white px-2 py-1 text-xs uppercase">
                New!
              </span>
            )}
            {props.featured && (
              <span className="rounded-full bg-very-dark-grayish-cyan text-white px-2 py-1 text-xs uppercase">
                Featured
              </span>
            )}
          </div>

          <h2 className="font-bold text-very-dark-grayish-cyan hover:text-dark-cyan cursor-pointer mb-2">
            {props.position}
          </h2>

          <div className="flex items-center text-dark-grayish-cyan text-sm">
            <span>{props.postedAt}</span>
            <span className="mx-2">•</span>
            <span>{props.contract}</span>
            <span className="mx-2">•</span>
            <span>{props.location}</span>
          </div>
        </div>
      </div>

      <hr className="my-4 border-dark-grayish-cyan md:hidden" />

      <div className="flex flex-wrap gap-4 md:justify-end">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-light-grayish-cyan-background text-dark-cyan font-bold px-2 py-1 rounded cursor-pointer hover:bg-dark-cyan hover:text-white"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};


export default JobCard;
