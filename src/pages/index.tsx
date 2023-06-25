import Head from "next/head";
import { api } from "@component/utils/api";
import { useState, useRef, useEffect } from "react";
import "cal-sans";
import { useSession } from "next-auth/react";
import CardComponent from "@component/components/ui/CardComponent";
import LandingPage from "@component/components/sections/LandingPage";
import Navbar from "@component/components/ui/Navbar";
import * as Toast from "@radix-ui/react-toast";

export default function Home() {
  const [open, setOpen] = useState(false);

  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [departing, setDeparting] = useState("");
  const [returning, setReturning] = useState("");

  const timerRef = useRef(0);

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);
  const { data: sessionData } = useSession();

  const { data: journeys } = api.journey.getAllPlans.useQuery(undefined, {
    enabled: sessionData?.user !== undefined,
  });

  const { mutate } = api.journey.newPlan.useMutation();

  return (
    <>
      <Head>
        <title>Nomad</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!sessionData && <LandingPage sessionData={sessionData} />}
      {sessionData && (
        <main className="flex min-h-screen w-screen flex-col overflow-x-clip">
          <Navbar />
          <div className="flex pt-8">
            <div className="relative ml-10 w-[32%] rounded-md border-[1px] border-black pb-16 pl-4 pt-8">
              <h1 className="font-cal text-2xl">
                Where we going today, {sessionData.user?.name}?
              </h1>
              {/* Add Title Input saying Beach Vibes and then like a book ticket icon at the bottom, also add Toast */}
              {/* TODO: Fix Responsiveness to allow for the input box to expand along with the columns later */}
              <div className="flex">
                <div className="relative mt-5 h-16 items-center rounded-sm border-[1px] border-black px-2 py-1">
                  <input
                    type="text"
                    className="ml-[-2px] mt-2 px-2 focus:outline-none"
                    placeholder="Enter City..."
                    value={fromLocation}
                    onChange={(i) => setFromLocation(i.target.value)}
                  />
                  <div className="absolute bottom-0 left-0 h-[20px] w-full bg-black px-2 font-cal text-[12px] text-white">
                    From
                  </div>
                </div>
                <div className="relative ml-4 mt-5 items-center rounded-sm border-[1px] border-black p-2">
                  <input
                    type="text"
                    className="ml-[-2px] mt-2 px-2 focus:outline-none"
                    placeholder="Enter City..."
                    value={toLocation}
                    onChange={(i) => setToLocation(i.target.value)}
                  />
                  <div className="absolute bottom-0 left-0 h-[20px] w-full bg-black px-2 font-cal text-[12px] text-white">
                    To
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="relative mt-5 h-16 items-center rounded-sm border-[1px] border-black p-2">
                  <input
                    type="date"
                    className="ml-[-2px] mt-1 px-2 focus:outline-none"
                    value={departing}
                    onChange={(i) => {
                      setDeparting(i.target.value);
                    }}
                  />
                  <div className="absolute bottom-0 left-0 h-[20px] w-full bg-black px-2 font-cal text-[12px] text-white">
                    Departing
                  </div>
                </div>
                <div className="relative ml-4 mt-5 h-16 items-center rounded-sm border-[1px] border-black p-2">
                  <input
                    type="date"
                    className="mt- ml-[-2px] px-2 focus:outline-none"
                    value={returning}
                    onChange={(i) => {
                      setReturning(i.target.value);
                    }}
                  />
                  <div className="absolute bottom-0 left-0 h-[20px] w-full bg-black px-2 font-cal text-[12px] text-white">
                    Returning
                  </div>
                </div>
              </div>
              <Toast.Provider swipeDirection="right">
                <button
                  onClick={() => {
                    setOpen(false);
                    window.clearTimeout(timerRef.current);
                    timerRef.current = window.setTimeout(() => {
                      setOpen(true);
                    }, 100);

                    //TODO: name, status, desc
                    mutate({
                      name: `${fromLocation}-${toLocation}`,
                      status: "Soon",
                      description: "My vacation",
                      fromLocation,
                      toLocation,
                      startDate: new Date(departing),
                      endDate: new Date(returning),
                    });
                  }}
                  className="absolute bottom-6 right-6 mt-8 h-fit rounded-md bg-black px-4 py-3 font-cal text-white hover:cursor-pointer"
                >
                  Make Journey 🚀
                </button>

                <Toast.Root
                  className="ToastRoot"
                  open={open}
                  onOpenChange={setOpen}
                >
                  <Toast.Title className="ToastTitle">
                    Journey Successfully Created :)
                  </Toast.Title>
                  <Toast.Action
                    className="ToastAction"
                    asChild
                    altText="Goto schedule to undo"
                  ></Toast.Action>
                </Toast.Root>
                <Toast.Viewport className="ToastViewport" />
              </Toast.Provider>
            </div>
            <div className="ml-8 w-[62%] rounded-md border-[1px] border-black p-4">
              <h1 className=" font-cal text-4xl">Updates</h1>
              <div className="text-lg space-y-2 py-4 px-2">
                <p>Your next flight is in 30 minutes, make sure you are ready with your required materials.</p>
                <p>Your rock climbing adventure location has been confirmed.</p>
              </div>
            </div>
          </div>

          <div className="ml-8 mt-8 grid grid-cols-4 gap-5">
            {journeys &&
              journeys.map((i) => (
                <CardComponent
                  key={i.id}
                  id={i.journey.id}
                  imageNum={i.journey.image}
                  fromDate={i.journey.startDate}
                  toDate={i.journey.endDate}
                  fromPlace={i.journey.fromLocation}
                  toPlace={i.journey.toLocation}
                  status={i.journey.status}
                  imageLink={
                    sessionData &&
                    (sessionData.user.image ||
                      "https://media.discordapp.net/attachments/1059102111985582102/1122330825858486323/ns8230-image.jpg?width=739&height=554")
                  }
                />
              ))}
          </div>
        </main>
      )}
    </>
  );
}
