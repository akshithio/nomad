import Head from "next/head";
import Image from "next/image";
import "cal-sans";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nomad</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen w-screen flex-col">
        <div className="flex w-full items-center bg-gray-100 px-5 py-5">
          <div className="flex items-center justify-center">
            <Image src="/logo.svg" alt="nomad logo" width={32} height={32} />
            <h1 className="ml-3 font-cal text-3xl font-bold">Nomad</h1>
          </div>

          <div className="absolute right-5">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="18" cy="18" r="18" fill="black" />
            </svg>
          </div>
        </div>
        <div className="h-full w-screen px-8 py-8">
          <h1 className="font-cal text-4xl">Where we going today, Akshith?</h1>
          {/* Potential Weather Thingy? */}
          <div className="flex w-screen items-center justify-center">
            <input
              type="text"
              className="mt-3 border-[1px] border-black px-2 py-1 font-cal"
              placeholder="From?"
            />
            <input
              type="text"
              className="mt-3 border-[1px] border-black px-2 py-1 font-cal"
              placeholder="To?"
            />
          </div>
        </div>
      </main>
    </>
  );
}