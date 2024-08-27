import ModelsList from "@/components/ModelsList";

export default async function ResultPage({ params }) {
  const { makeId, year } = params;
  const url = process.env.API_URL;

  const response = await fetch(
    `${url}/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
  );

  const data = await response.json();

  return <ModelsList makeId={makeId} year={year} results={data.Results} />;
}
