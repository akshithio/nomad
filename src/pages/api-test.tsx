import { api } from "@component/utils/api";
import "cal-sans";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <AuthShowcase />
    </>
  );
}

function AuthShowcase() {
  const { data: sessionData } = useSession();

  const { data } = api.travel.getAllPlans.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  const { mutate } = api.travel.newPlan.useMutation();

  return (
    sessionData && (
      <>
        <button
          onClick={() => {
            mutate({
              name: "Singapore",
              description: "My travel",
              location: "Singapore",
              startDate: new Date(),
              endDate: new Date(),
            });
          }}
        >
          a
        </button>
        {JSON.stringify(data)}
      </>
    )
  );
}
