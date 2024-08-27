"use client";

export default function Error() {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='w-full max-w-md h-34 flex-col justify-center p-8 bg-white rounded-lg shadow-lg '>
        <h1 className='text-3xl font-bold text-red-600 mb-4'>Error!</h1>
        <p className='text-xl text-gray-700'>Something went wrong. Please try again later.</p>
      </div>
    </div>
  );
}
