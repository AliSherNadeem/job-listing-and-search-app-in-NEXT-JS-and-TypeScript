"use client"
import Header from "@/components/Header";
import JobList from "@/components/JobList";
import FilterBar from "@/components/FilterBar";
import { FilterProvider } from "@/context/FilterContext";

export default function Home() {
  return (
    <FilterProvider>
      <Header />
      <FilterBar />
      <JobList />
    </FilterProvider>
  );
}