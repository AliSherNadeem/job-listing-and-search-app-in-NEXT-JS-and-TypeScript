
import React from "react";
import JobCard from "@/components/JobCard";
import { useFilter } from "@/context/FilterContext"; 

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
      <ClientSideJobList initialJobs={jobs} />
    );
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return <div>Unable to load jobs at this time.</div>;
  }
};

// Client-side component to handle filtering based on languages and tools
const ClientSideJobList: React.FC<{ initialJobs: Job[] }> = ({ initialJobs }) => {
  const { selectedTags } = useFilter();

  const filteredJobs = initialJobs.filter((job) => {
    if (selectedTags.length === 0) return true;

    const jobTags = [
      ...(job.languages || []),
      ...(job.tools || []),
    ];

    return selectedTags.every((tag) => jobTags.includes(tag));
  });

  return (
    <div className="space-y-16 my-16">
      {filteredJobs.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
    </div>
  );
};

export default JobList;
