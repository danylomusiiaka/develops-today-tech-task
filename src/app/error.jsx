"use client";

export default function Error() {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='p-6 bg-white rounded-lg shadow-lg'>
        <h1 className='text-xl font-bold text-red-600 mb-4'>Error!</h1>
        <p className='text-gray-700'>Something went wrong. Please try again later.</p>
      </div>
    </div>
  );
}
