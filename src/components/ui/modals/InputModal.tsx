import * as Dialog from "@radix-ui/react-dialog";
import * as Tabs from "@radix-ui/react-tabs";
import { Cross2Icon } from "@radix-ui/react-icons";
import TravelInput from "./inputs/TravelInput";
import AccomodationInput from "./inputs/AccomodationInput";
import MonumentInput from "./inputs/MonumentInput";
import ShoppingInput from "./inputs/ShoppingInput";
import SportsInput from "./inputs/SportsInput";

export default function InputModal() {
  return (
    <div>
      <Dialog.Root>
        <Dialog.Trigger>
          <button className="border-1 absolute right-0 border-solid border-black px-2 py-1 font-cal text-2xl">
            Create New Event
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="DialogOverlay2" />
          <Dialog.Content className="DialogContent">
            <Dialog.Title className="font-cal text-3xl">
              Create New Event
            </Dialog.Title>
            <Dialog.Description className="text-md mt-4 font-inter">
              Select from one of the event types below to describe your
              experience
            </Dialog.Description>
            <Tabs.Root
              defaultValue="travel
            "
            >
              <Tabs.List className="text-md ml-4 mt-4 w-fit rounded-md bg-gray-100 px-4 py-2 font-cal text-gray-500">
                <Tabs.Trigger value="travel" className="TabsTrigger2">
                  Travel
                </Tabs.Trigger>
                <Tabs.Trigger
                  value="accomodation"
                  className="TabsTrigger2 ml-4"
                >
                  Accomodation
                </Tabs.Trigger>
                <Tabs.Trigger value="sports" className="TabsTrigger2 ml-4">
                  Physical Activity
                </Tabs.Trigger>
                <Tabs.Trigger value="shopping" className="TabsTrigger2 ml-4">
                  Shopping
                </Tabs.Trigger>
                <Tabs.Trigger value="monuments" className="TabsTrigger2 ml-4">
                  City Sightseeing / Monuments
                </Tabs.Trigger>
              </Tabs.List>

              <Tabs.Content value="travel" className="ml-4 mt-4">
                <TravelInput />
              </Tabs.Content>
              <Tabs.Content value="accomodation" className="ml-4 mt-4">
                <AccomodationInput />
              </Tabs.Content>
              <Tabs.Content value="sports" className="ml-4 mt-4">
                <SportsInput />
              </Tabs.Content>
              <Tabs.Content value="shopping" className="ml-4 mt-4">
                <ShoppingInput />
              </Tabs.Content>
              <Tabs.Content value="monuments" className="ml-4 mt-4">
                <MonumentInput />
              </Tabs.Content>
            </Tabs.Root>

            <div
              style={{
                display: "flex",
                marginTop: 25,
                justifyContent: "flex-end",
              }}
            >
              <Dialog.Close asChild>
                <button className="border-2 border-solid border-black px-2 py-1 font-cal">
                  Confirm
                </button>
              </Dialog.Close>
            </div>
            <Dialog.Close asChild>
              <button className="IconButton" aria-label="Close">
                <Cross2Icon />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
