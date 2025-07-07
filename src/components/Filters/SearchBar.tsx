'use client'
import { useState, useEffect, useRef } from "react";
import { FiSearch } from "react-icons/fi";


interface SearchBarProps {
  placeholder?: string;
  className?: string;
  onSelect?: (value: string) => void;
  suggestions:string[]
}

export default function SearchBar({
  placeholder = "Search…",
  className = "",
  onSelect,
  suggestions
}: SearchBarProps) {
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (search.trim()) {
      const f = suggestions.filter((s) =>
        s.toLowerCase().includes(search.toLowerCase())
      );
      setFiltered(f);
      setShowSuggestions(true);
    } else {
      setFiltered([]);
      setShowSuggestions(false);
    }
    setActiveIndex(-1);
  }, [search]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      setActiveIndex((i) => (i + 1) % filtered.length);
    } else if (e.key === "ArrowUp") {
      setActiveIndex((i) => (i - 1 + filtered.length) % filtered.length);
    } else if (e.key === "Enter" && activeIndex >= 0) {
      selectSuggestion(filtered[activeIndex]);
    } else if (e.key === "Enter" && activeIndex === -1) {
      setShowSuggestions(false);
    } else if (e.key === "Escape") {
      setShowSuggestions(false);
    }
  };

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const selectSuggestion = (value: string) => {
    setSearch(value);
    setShowSuggestions(false);
    setActiveIndex(-1);
    if (onSelect) onSelect(value);
  };

  return (
    <div className={`relative w-full max-w-xs ${className}`} ref={inputRef}>
      <input
        type="text"
        placeholder={placeholder}
        className="bg-[#232536] border border-indigo-400/40 rounded-full py-2 pl-4 pr-10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300 w-full"
        value={search}
        onChange={(e) => {
          if (e.target.value.length < 20) {
            setSearch(e.target.value);
            if (onSelect) onSelect(e.target.value); // <-- Call onSelect on every change
          }
        }}
        onFocus={() => search && setShowSuggestions(true)}
        onKeyDown={handleKeyDown}
      />
      <button
        type="submit"
        className="absolute right-2 top-1/2 -translate-y-1/2 text-indigo-300 hover:text-indigo-500 transition"
        aria-label="Search"
      >
        <FiSearch className="h-5 w-5" />
      </button>
      {showSuggestions && filtered.length > 0 && (
        <ul className="absolute left-0 mt-2 w-full bg-[#232536] border border-indigo-400/40 rounded-lg shadow-lg z-20 max-h-56 overflow-y-auto animate-fade-in">
          {filtered.map((s, i) => (
            <li
              key={s}
              className={`px-4 py-2 cursor-pointer text-white hover:bg-indigo-600 transition ${
                i === activeIndex ? "bg-indigo-700" : ""
              }`}
              onMouseDown={() => selectSuggestion(s)}
            >
              {s}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
