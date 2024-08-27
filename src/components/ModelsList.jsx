"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import "@/styles/globals.css";

export default function ModelsList({ makeId, year, results }) {
  const router = useRouter();

  if (results.length === 0) {
    return (
      <div className='flex items-center justify-center min-h-screen bg-gray-100'>
        <div className='w-full max-w-md h-34 flex-col justify-center p-8 bg-white rounded-lg shadow-lg '>
          <h1 className='text-3xl font-bold text-red-600 mb-4'>Not Found</h1>
          <p className='text-xl text-gray-700'>No models found for this type and year.</p>
          <button className='py-2 px-4 mt-5 rounded-lg font-semibold text-white transition-colors duration-300 bg-gray-400'>
            <Link href='/'>Go back to home</Link>
          </button>
        </div>
      </div>
    );
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
