import Head from "next/head";
import Image from "next/image";
import "cal-sans";
import Navbar from "@component/components/ui/Navbar";
import CardComponent from "@component/components/ui/CardComponent";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nomad</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen w-screen flex-col overflow-x-clip">
        <Navbar />
        <div className="h-full w-screen py-8">
          <h1 className="ml-8 font-cal text-4xl">
            Where we going today, Akshith?
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
          <CardComponent
            fromDate={new Date(Date.now())}
            toDate={new Date(Date.now())}
            fromPlace="Hyderabad"
            toPlace="New York"
            status="inProgress"
          />
          <CardComponent
            fromDate={new Date(Date.now())}
            toDate={new Date(Date.now())}
            fromPlace="Istanbul"
            toPlace="Milan"
            status="recentlyCompleted"
          />
          <CardComponent
            fromDate={new Date(Date.now())}
            toDate={new Date(Date.now())}
            fromPlace="Moscow"
            toPlace="Brasilia"
            status="expired"
          />
          <CardComponent
            fromDate={new Date(Date.now())}
            toDate={new Date(Date.now())}
            fromPlace="Mumbai"
            toPlace="Bangalore"
            status="expired"
          />

          <CardComponent
            fromDate={new Date(Date.now())}
            toDate={new Date(Date.now())}
            fromPlace="Hyderabad"
            toPlace="Goa"
            status="recentlyCompleted"
          />
          <CardComponent
            fromDate={new Date(Date.now())}
            toDate={new Date(Date.now())}
            fromPlace="Austin"
            toPlace="Philadelphia"
            status="inProgress"
          />
          <CardComponent
            fromDate={new Date(Date.now())}
            toDate={new Date(Date.now())}
            fromPlace="London"
            toPlace="Nairobi"
            status="recentlyCompleted"
          />
        </div>
      </main>
    </>
  );
}
