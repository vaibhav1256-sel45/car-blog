'use client'
import { useState } from "react";
import SearchBar from "./SearchBar";

interface FilterBarProps {
  tags: string[];
  selectedTag: string;
  onTagSelect: (tag: string) => void;
  onSearch: (search: string) => void;
  suggestions:string[]
}

export default function FilterBar({
  tags,
  selectedTag,
  onTagSelect,
  onSearch,
  suggestions
}: FilterBarProps) {
  return (
    <div   className="w-full flex flex-col items-center gap-6 md:flex-row md:justify-between rounded-2xl p-6 shadow-xl"
  style={{
    boxShadow:
      "0 8px 24px 0 rgba(30, 41, 59, 0.12), 0 -8px 24px 0 rgba(30, 41, 59, 0.10)",
  }}>
      {/* Search Bar */}
      <div className="w-full md:w-1/2">
        <SearchBar
          placeholder="Search car articles…"
          className="w-full"
          onSelect={onSearch}
          suggestions={suggestions}
        />
      </div>
      {/* Tag Buttons */}
      <div className="flex flex-wrap gap-3 justify-center md:justify-end w-full md:w-1/2">
        <button
          className={`px-4 py-2 rounded-full font-semibold transition 
            ${selectedTag === "" 
              ? "bg-slate-500 text-white shadow" 
              : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`}
          onClick={() => onTagSelect("")}
        >
          All
        </button>
        {tags.map(tag => (
          <button
            key={tag}
            className={`px-4 py-2 rounded-full font-semibold transition
              ${selectedTag === tag
                ? "bg-slate-500 text-white shadow"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`}
            onClick={() => onTagSelect(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}
