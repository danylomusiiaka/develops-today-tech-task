"use client";

import { useRouter } from "next/navigation";
import "@/styles/globals.css";

export default function VehicleModels({ makeId, year, results }) {
  const router = useRouter();

  if (results.length === 0) {
    return <div>No models found for the selected type and year.</div>;
  }

  return (
    <div className='p-4'>
      <div>
        <h1 className='text-2xl font-bold mb-4'>
          {results[0].Make_Name} Models for {year}
        </h1>
        <button
          className='py-2 px-4 mb-3 rounded-lg font-semibold text-white transition-colors duration-300 bg-indigo-600'
          onClick={() => router.push("/")}
        >
          Back
        </button>
      </div>
      <ul>
        {results.map((model) => (
          <li key={model.Model_Name} className='mb-2 p-2 border border-gray-200 rounded text-lg'>
            {model.Model_Name}
          </li>
        ))}
      </ul>
    </div>
  );
}
