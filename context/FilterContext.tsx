
"use client";

import React, { createContext, useContext, useState, useCallback } from 'react';

interface FilterContextType {
  selectedTags: string[];
  addTag: (tag: string) => void;
  removeTag: (tag: string) => void;
  clearTags: () => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export function FilterProvider({ children }: { children: React.ReactNode }) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const addTag = useCallback((tag: string) => {
    setSelectedTags((prev) => {
      if (!prev.includes(tag)) {
        return [...prev, tag];
      }
      return prev;
    });
  }, []);

  const removeTag = useCallback((tag: string) => {
    setSelectedTags((prev) => prev.filter((t) => t !== tag));
  }, []);

  const clearTags = useCallback(() => {
    setSelectedTags([]);
  }, []);

  return (
    <FilterContext.Provider value={{ selectedTags, addTag, removeTag, clearTags }}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter() {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error('useFilter must be used within a FilterProvider');
  }
  return context;
}
