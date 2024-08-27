import { Suspense } from "react";

async function fetchVehicleModels(makeId, year) {
  const response = await fetch(
    `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
  );
  if (!response.ok) {
    throw new Error("Error fetching vehicle models");
  }
  return response.json();
}

export function Loader() {
  return <div>Loading...</div>;
}

export default async function ResultPage({ params }) {
  const { makeId, year } = params;

  const { Results } = await fetchVehicleModels(makeId, year);

  if (Results.length === 0) {
    return <div>No models found for the selected type and year.</div>;
  }

  return (
    <Suspense fallback={<Loader />}>
      <div className='p-4'>
        <h1 className='text-2xl font-bold mb-4'>
          {Results[0].Make_Name} Models for {year}
        </h1>
        <ul>
          {Results.map((model) => (
            <li key={model.Model_Name} className='mb-2 p-2 border border-gray-200 rounded'>
              {model.Model_Name}
            </li>
          ))}
        </ul>
      </div>
    </Suspense>
  );
}
