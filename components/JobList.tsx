import React from "react";
import JobCard from "./JobCard";

interface Job {
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

async function getJobs(): Promise<Job[]> {
  const res = await fetch("http://localhost:3000/api/jobs", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch jobs");
  }
  return res.json();
}

const JobList = async () => {
  const jobs = await getJobs();

  return (
    <div className="space-y-16 my-16">
      {jobs.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
    </div>
  );
};

export default JobList;
