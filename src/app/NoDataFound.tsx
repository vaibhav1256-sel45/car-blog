
function NoDataFound() {
  return (
     <div className="flex flex-col items-center justify-center py-16">
              <svg
                className="w-24 h-24 text-indigo-300 mb-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 48 48"
              >
                <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="3" fill="#EEF2FF" />
                <path
                  d="M17 21h14M17 29h10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <ellipse cx="24" cy="24" rx="20" ry="8" fill="#C7D2FE" opacity="0.3" />
                <path
                  d="M24 34a10 10 0 100-20 10 10 0 000 20z"
                  fill="#6366F1"
                  opacity="0.15"
                />
              </svg>
              <h4 className="text-2xl font-bold text-indigo-700 mb-2">No Articles Found</h4>
              <p className="text-gray-500 text-center max-w-md">
                We couldn&apos;t find any articles matching your search or selected tag.<br />
                Try adjusting your filters or search for something else!
              </p>
            </div>
  )
}

export default NoDataFound