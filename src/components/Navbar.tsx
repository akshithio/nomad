import Image from "next/image";
import * as Popover from "@radix-ui/react-popover";
import { Cross2Icon, ExitIcon, PersonIcon } from "@radix-ui/react-icons";

export default function Navbar() {
  return (
    <div className="flex w-full items-center bg-gray-100 px-5 py-5">
      <div className="flex items-center justify-center">
        <Image src="/logo.svg" alt="nomad logo" width={32} height={32} />
        <h1 className="ml-3 font-cal text-3xl font-bold">Nomad</h1>
      </div>
      <div className="absolute right-5">
        <Popover.Root>
          <Popover.Trigger asChild>
            <button>
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="18" cy="18" r="18" fill="black" />
              </svg>
            </button>
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content className="relative mr-[20px]" sideOffset={10}>
              <div className=" w-[240px] rounded-md border-[1px] border-black bg-white font-cal shadow-md">
                <div className="relative flex items-center border-b-[1px] border-black p-3">
                  <h1>Logout</h1>
                  <ExitIcon className="absolute right-4" />
                </div>
                <div className="relative flex items-center p-3">
                  <h1>Edit Profile</h1>
                  <PersonIcon className="absolute right-4" />
                </div>
              </div>
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      </div>
    </div>
  );
}
