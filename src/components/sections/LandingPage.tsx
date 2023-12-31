import Image from "next/image";
import "cal-sans";
import { signIn, signOut } from "next-auth/react";
import type { Session } from "next-auth";

export default function Home(props: { sessionData: Session }) {
  return (
    <>
      <Image
        className="absolute left-[12.5%] top-[12.5%] z-0"
        src="/bg.png"
        alt="background emojis"
        height={971}
        width={1096}
      />
      <main className="relative z-10 flex min-h-screen flex-col lg:flex-row">
        <div className="border-1 flex h-screen flex-col items-center justify-center border-black lg:w-[70%]">
          <Image src="/logo.svg" alt="nomad logo" width={96} height={96} />
          <h1 className="ml-3 font-cal text-6xl font-bold">Nomad</h1>
          <h1 className="mt-2 font-serif">Travelling Simplified.</h1>
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-center text-2xl text-white">
              {props.sessionData && (
                <span>Logged in as {props.sessionData.user?.name}</span>
              )}
            </p>
            {/* TODO: animate button translation */}
            <button
              className="mt-4 border-[4px] border-solid border-black px-5 py-1 font-cal hover:px-8 "
              onClick={
                props.sessionData ? () => void signOut() : () => void signIn()
              }
            >
              {props.sessionData ? "Log out" : "Log in"}
            </button>
          </div>
        </div>
        <div className="h-screen bg-gray-100 px-5 py-8 font-serif lg:w-[30%]">
          <h1>
            <span className="font-cal text-[15px]">Nomad</span> simplifies the
            chaos that is itinerary planning by bringing together{" "}
            <span className="underline">all</span> of your friends & family onto
            a single unified platform.
          </h1>

          <h1 className="mt-4">
            Whether it be flight tickets, hotel reservations, the ordinary
            sightseeing activities or something completely new{" "}
            <span className="font-cal text-[15px]">Nomad</span> makes it easier
            for everyone to actually be on the same page.
          </h1>

          <div
            className="mt-6 grid grid-cols-2 grid-rows-3 gap-4
          "
          >
            <div className="rounded-[5px] border-2 border-black px-2 py-3">
              <div className="flex">
                <Image
                  src="/icons/flight.svg"
                  alt="flight icon"
                  width={20}
                  height={20}
                />
                <h1 className="text-md ml-1 font-cal">
                  Automatic Flight Tracking
                </h1>
              </div>

              <h1 className="mt-1 font-inter text-sm">
                Don&apos;t get stuck in the details, leave them to us
              </h1>
            </div>
            <div className="rounded-[5px] border-2 border-black px-2 py-3">
              {" "}
              <div className="flex">
                <Image
                  src="/icons/people.svg"
                  alt="people icon"
                  width={20}
                  height={20}
                />
                <h1 className="text-md ml-1 font-cal">
                  Collaboration, built in
                </h1>
              </div>
              <h1 className="mt-1 font-inter text-sm">
                Travelling together is fun, software should understand that :)
              </h1>
            </div>{" "}
            <div className="rounded-[5px] border-2 border-black px-2 py-3">
              <div className="flex">
                <Image
                  src="/icons/timer.svg"
                  alt="timer icon"
                  width={20}
                  height={20}
                />
                <h1 className="text-md ml-1 font-cal">Timelines</h1>
              </div>
              <h1 className="mt-1 font-inter text-sm">
                Everything that you want to do, one after the other just how you
                want it.
              </h1>
            </div>{" "}
            <div className="rounded-[5px] border-2 border-black px-2 py-3">
              <div className="flex">
                <Image
                  src="/icons/notif.svg"
                  alt="notifications icon"
                  width={20}
                  height={20}
                />
                <h1 className="text-md ml-1 font-cal">Notifications</h1>
              </div>
              <h1 className="mt-1 font-inter text-sm">
                Receive updates as and when someone makes changes to your trip
                plans
              </h1>
            </div>{" "}
            <div className="rounded-[5px] border-2 border-black px-2 py-3">
              <div className="flex">
                <Image
                  src="/icons/todo.svg"
                  alt="Todos List icon"
                  width={20}
                  height={20}
                />
                <h1 className="text-md ml-1 font-cal">Todoos</h1>
              </div>
              <h1 className="mt-1 font-inter text-sm">
                Forgot to pack your powerbank? Fear no more, we gotchu
              </h1>
            </div>{" "}
            <div className="rounded-[5px] border-2 border-black px-2 py-3">
              <div className="flex">
                <Image
                  src="/icons/document.svg"
                  alt="Documents icon"
                  width={20}
                  height={20}
                />
                <h1 className="text-md ml-1 font-cal">Legalese</h1>
              </div>
              <h1 className="mt-1 font-inter text-sm">
                Forget the docs, health restrictions and visa stuff that&apos;s
                on us
              </h1>
            </div>
          </div>

          <h1 className="mt-8">
            <span className="font-cal text-[15px]">Nomad</span> has been built
            using the <a href="https://create.t3.gg/">t3 stack</a> consisting
            of:
          </h1>
          <ul>
            <li className="ml-4 mt-2">• NextJS: ReactJS but just better</li>
            <h1 className="ml-4 mt-2">
              • TypeScript: Typesafety is cool, JavaScript doesn&apos;t have
              that
            </h1>
            <h1 className="ml-4 mt-2">
              • TailwindCSS: It&apos;s like CSS but on steroids, allows for
              rapid prototyping
            </h1>
            <h1 className="ml-4 mt-2">• Prisma: ORMs simplified</h1>
            <h1 className="ml-4 mt-2">• tRPC: API requests made better 👍</h1>
          </ul>

          <h1 className="absolute bottom-4 mt-8">
            - Built by{" "}
            <a className="underline" target="_blank" href="https://akshith.io">
              Akshith
            </a>{" "}
            and{" "}
            <a className="underline" target="_blank" href="https://shivs.me/">
              Shiv
            </a>{" "}
            with ☕️ + ❤️ for{" "}
            <a
              className="underline"
              target="_blank"
              href="https://wafflehacks.org"
            >
              WaffleHacks
            </a>{" "}
            in 48 hours :/
          </h1>
        </div>
      </main>
    </>
  );
}
