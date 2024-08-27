import VehicleSelector from "@/components/VehicleSelector";

export default async function VehicleSelectorPage() {
  const url = process.env.API_URL;
  try {
    const res = await fetch(`${url}/GetMakesForVehicleType/car?format=json`);
    const data = await res.json();

    return <VehicleSelector vehicleTypes={data.Results} />;
  } catch (error) {
    return <VehicleSelector vehicleTypes={[]} />;
  }
}
