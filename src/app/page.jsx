import HomeSelector from "@/components/HomeSelector";

export default async function VehicleSelectorPage() {
  const url = process.env.API_URL;
  try {
    const res = await fetch(`${url}/GetMakesForVehicleType/car?format=json`);
    const data = await res.json();

    return <HomeSelector vehicleTypes={data.Results} />;
  } catch (error) {
    return <HomeSelector vehicleTypes={[]} />;
  }
}
