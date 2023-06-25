import Head from "next/head";
import { api } from "@component/utils/api";
import "cal-sans";
import { useSession } from "next-auth/react";
import CardComponent from "@component/components/ui/CardComponent";
import LandingPage from "@component/components/sections/LandingPage";
import Navbar from "@component/components/ui/Navbar";

export default function Home() {
  const { data: sessionData } = useSession();

  const { data: journeys } = api.journey.getAllPlans.useQuery(undefined, {
    enabled: sessionData?.user !== undefined,
  });

  const { mutate } = api.journey.newPlan.useMutation()

  return (
    <>
      <Head>
        <title>Nomad</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!sessionData && <LandingPage sessionData={sessionData}/>}
      {sessionData && (
        <main className="flex min-h-screen w-screen flex-col overflow-x-clip">
          <Navbar />
          <div className="h-full w-screen py-8">
            <h1 className="ml-8 font-cal text-4xl">
              Where we going today, {sessionData.user?.name}?
            </h1>
            {/* Potential Weather Thingy? */}
            <div className="mt-5 flex w-screen items-center justify-center">
              <input
                type="text"
                className="w-[15%] border-[1px] border-black px-2 py-1 font-cal"
                placeholder="From?"
              />
              <input
                type="text"
                className="ml-4 w-[15%] border-[1px] border-black px-2 py-1 font-cal"
                placeholder="To?"
              />
            </div>
          </div>

          <div className="ml-8 mt-8 grid grid-cols-4 gap-5">
            {journeys &&
              journeys.map((i) => (
                <CardComponent
                  key={i.id}
                  id={i.journey.id}
                  imageNum={Math.floor(Math.random() * 5)}
                  fromDate={i.journey.startDate}
                  toDate={i.journey.endDate}
                  fromPlace={i.journey.fromLocation}
                  toPlace={i.journey.toLocation}
                  status={i.journey.status}
                  imageLink={sessionData && (sessionData.user.image || "https://media.discordapp.net/attachments/1059102111985582102/1122330825858486323/ns8230-image.jpg?width=739&height=554")}
                />
              ))}
          </div>
          <button onClick={() => {
            mutate({
              name:"Summer",
              status: "on_going",
              description: "My summer vacation travel plan",
              fromLocation: "India",
              toLocation: "Singapore",
              startDate: new Date(),
              endDate: new Date()
            })
          }}>
                Add info [ test ]
          </button>
        </main>
      )}
    </>
  );
}

{
  /* <CardComponent
              id={1}
              imageNum={1}
              fromDate={new Date(Date.now())}
              toDate={new Date(Date.now())}
              fromPlace="Hyderabad"
              toPlace="New York"
              status="inProgress"
              imageLink="https://cdn.discordapp.com/avatars/532914066558156800/9d5d95ac4e3b1ae1fe3cf9d5550fdb6b.png"
            />
            <CardComponent
              id={2}
              imageNum={2}
              fromDate={new Date(Date.now())}
              toDate={new Date(Date.now())}
              fromPlace="Istanbul"
              toPlace="Milan"
              status="recentlyCompleted"
              imageLink="https://cdn.discordapp.com/avatars/532914066558156800/9d5d95ac4e3b1ae1fe3cf9d5550fdb6b.png"
            />
            <CardComponent
              id={3}
              imageNum={3}
              fromDate={new Date(Date.now())}
              toDate={new Date(Date.now())}
              fromPlace="Moscow"
              toPlace="Brasilia"
              status="expired"
              imageLink="https://cdn.discordapp.com/avatars/532914066558156800/9d5d95ac4e3b1ae1fe3cf9d5550fdb6b.png"
            />
            <CardComponent
              id={4}
              imageNum={4}
              fromDate={new Date(Date.now())}
              toDate={new Date(Date.now())}
              fromPlace="Mumbai"
              toPlace="Bangalore"
              status="expired"
              imageLink="https://cdn.discordapp.com/avatars/532914066558156800/9d5d95ac4e3b1ae1fe3cf9d5550fdb6b.png"
            />

            <CardComponent
              id={5}
              imageNum={2}
              fromDate={new Date(Date.now())}
              toDate={new Date(Date.now())}
              fromPlace="Hyderabad"
              toPlace="Goa"
              status="recentlyCompleted"
              imageLink="https://cdn.discordapp.com/avatars/532914066558156800/9d5d95ac4e3b1ae1fe3cf9d5550fdb6b.png"
            />
            <CardComponent
              id={6}
              imageNum={3}
              fromDate={new Date(Date.now())}
              toDate={new Date(Date.now())}
              fromPlace="Austin"
              toPlace="Philadelphia"
              status="inProgress"
              imageLink="https://cdn.discordapp.com/avatars/532914066558156800/9d5d95ac4e3b1ae1fe3cf9d5550fdb6b.png"
            />
            <CardComponent
              id={7}
              imageNum={1}
              fromDate={new Date(Date.now())}
              toDate={new Date(Date.now())}
              fromPlace="London"
              toPlace="Nairobi"
              status="recentlyCompleted"
              imageLink="https://cdn.discordapp.com/avatars/532914066558156800/9d5d95ac4e3b1ae1fe3cf9d5550fdb6b.png"
            /> */
}
