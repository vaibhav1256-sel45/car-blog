export default function Loader({ scrolling = false }: { scrolling: boolean }) {
  return (
    <div
      className={`flex items-center justify-center w-full ${
        !scrolling ? "min-h-screen" : "mt-10"
      }`}
    >
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 border-4 border-[#232536] border-t-transparent border-solid rounded-full animate-spin mb-4"></div>
        <span className="text-lg font-semibold text-[#232536] tracking-wide text-center">
          Loading...
        </span>
      </div>
    </div>
  );
}
