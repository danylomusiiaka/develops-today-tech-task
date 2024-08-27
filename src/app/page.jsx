"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Suspense } from "react";

export function Loader() {
  return <div>Loading...</div>;
}

export default function VehicleSelector() {
  const [vehicleTypes, setVehicleTypes] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const router = useRouter();

  useEffect(() => {
    fetch("https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json")
      .then((response) => response.json())
      .then((data) => setVehicleTypes(data.Results))
      .catch((error) => console.error("Error fetching vehicle types:", error));
  }, []);

  const currentYear = new Date().getFullYear();
  const years = [];
  for (let year = 2015; year <= currentYear; year++) {
    years.push(year);
  }

  const isButtonDisabled = !selectedType || !selectedYear;

  const handleNextClick = () => {
    const serchedVehicle = vehicleTypes.find(
      (serchedVehicle) => serchedVehicle.MakeName === selectedType
    );

    if (!isButtonDisabled) {
      router.push(`/result/${serchedVehicle.MakeId}/${selectedYear}`);
    }
  };

  return (
    <form className='max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md '>
      <section>
        <h1 className='text-2xl font-bold mb-6 text-center text-gray-800'>Select Your Vehicle</h1>

        <div className='mb-4'>
          <label htmlFor='vehicleType' className='block text-sm font-medium text-gray-700 mb-2'>
            Vehicle Type:
          </label>
          <select
            id='vehicleType'
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500'
          >
            <option value=''>Select a vehicle type</option>
            {vehicleTypes.map((type) => (
              <option key={type.MakeName} value={type.MakeName}>
                {type.MakeName}
              </option>
            ))}
          </select>
        </div>

        <div className='mb-6'>
          <label htmlFor='modelYear' className='block text-sm font-medium text-gray-700 mb-2'>
            Model Year:
          </label>
          <select
            id='modelYear'
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500'
          >
            <option value=''>Select a model year</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <button
          type='button'
          onClick={handleNextClick}
          className={`w-full py-2 px-4 rounded-lg font-semibold text-white transition-colors duration-300 ${
            isButtonDisabled
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-indigo-600 hover:bg-indigo-700"
          }`}
          disabled={isButtonDisabled}
        >
          Next
        </button>
      </section>
    </form>
  );
}
