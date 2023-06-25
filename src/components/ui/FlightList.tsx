import { api } from "@component/utils/api";

export default function FlightList({j_id}: {j_id: string}) {

  const flights = api.flight.getFlight.useQuery(j_id)
  return (
    <div className="space-y-2 p-4">
        {JSON.stringify(flights)}
    </div>
  );
}