"use client";

import React from 'react';
import { useFilter } from '@/context/FilterContext'; // Use alias import
import Image from 'next/image'; // For the icon

const FilterBar: React.FC = () => {
  const { selectedTags, removeTag, clearTags } = useFilter();

  if (selectedTags.length === 0) return null;

  return (
    <div className="bg-white shadow-md rounded-md w-full max-w-[1110px] mx-auto p-6 -mt-8 mb-8 flex items-center justify-between">
      <div className="flex flex-wrap gap-4">
        {selectedTags.map((tag) => (
          <div
            key={tag}
            className="flex items-center bg-light-cyan rounded overflow-hidden"
          >
            <span className="px-2 py-1 text-dark-cyan font-bold">{tag}</span>
            <button
              onClick={() => removeTag(tag)}
              className="p-2"
            >
              <Image
                src="/assets/images/icon-remove.svg" // Use x icon
                alt="Remove"
                width={16}
                height={16}
              />
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={clearTags}
        className="text-dark-cyan hover:text-dark-grayish-cyan hover:underline font-bold"
      >
        Clear
      </button>
    </div>
  );
};

export default FilterBar;
