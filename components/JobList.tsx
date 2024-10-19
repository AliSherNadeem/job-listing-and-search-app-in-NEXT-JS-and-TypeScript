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
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "";
  const response = await fetch(`${baseUrl}/api/jobs`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}

const JobList = async () => {
  try {
    const jobs = await getJobs();

    return (
      <div className="space-y-16 my-16">
        {jobs.map((job) => (
          <JobCard key={job.id} {...job} />
        ))}
      </div>
    );
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return <div>Unable to load jobs at this time.</div>;
  }
};

export default JobList;
