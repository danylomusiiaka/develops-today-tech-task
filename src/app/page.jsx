"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

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
    if (!isButtonDisabled) {
      router.push(`/result/${selectedType}/${selectedYear}`);
    }
  };

  return (
    <form>
      <h1>Select Your Vehicle</h1>

      <div>
        <label htmlFor='vehicleType'>Vehicle Type:</label>
        <select
          id='vehicleType'
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value=''>Select a vehicle type</option>
          {vehicleTypes.map((type) => (
            <option key={type.MakeName} value={type.MakeName}>
              {type.MakeName}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor='modelYear'>Model Year:</label>
        <select
          id='modelYear'
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
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
        style={{ marginTop: "20px" }}
        className={`btn ${isButtonDisabled ? "btn-disabled" : "btn-primary"}`}
        disabled={isButtonDisabled}
      >
        Next
      </button>
    </form>
  );
}
