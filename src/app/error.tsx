'use client'
import { FaExclamationTriangle, FaRedo } from "react-icons/fa";

export default function ErrorPage({ message = "Something went wrong." }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 via-white to-slate-200 px-4">
      <div className="bg-white rounded-3xl shadow-2xl p-10 flex flex-col items-center max-w-md w-full">
        <FaExclamationTriangle className="text-red-500 text-6xl mb-6" />
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Oops!</h1>
        <p className="text-lg text-slate-600 mb-6 text-center">
          {message}
        </p>
        <button
          onClick={() => window.location.reload()}
          className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-full font-semibold shadow hover:bg-indigo-700 transition mb-4"
        >
          <FaRedo className="w-5 h-5" />
          Retry
        </button>
        <a
          href="/"
          className="text-indigo-500 hover:underline text-sm"
        >
          Go back to Home
        </a>
      </div>
    </div>
  );
}
