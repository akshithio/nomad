import * as Dialog from "@radix-ui/react-dialog";
import * as Tabs from "@radix-ui/react-tabs";
import { Cross2Icon } from "@radix-ui/react-icons";
import TravelInput from "./inputs/TravelInput";
import AccomodationInput from "./inputs/AccomodationInput";
import MonumentInput from "./inputs/MonumentInput";
import ShoppingInput from "./inputs/ShoppingInput";
import SportsInput from "./inputs/SportsInput";
import { useState } from "react";

export default function InputModal() {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [fromTime, setFromTime] = useState("");
  const [toTime, setToTime] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [cost, setCost] = useState("");
  const [layovers, setLayovers] = useState("");
  const [fromPlace, setFromPlace] = useState("");
  const [toPlace, setToPlace] = useState("");
  const [departingTimezone, setDepartingTimezone] = useState("");
  const [arrivingTimezone, setArrivingTimezone] = useState("");
  const [layoverTime, setLayoverTime] = useState(0);
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
                <TravelInput
                  type={type}
                  setType={setType}
                  fromPlace={fromPlace}
                  setFromPlace={setFromPlace}
                  toPlace={toPlace}
                  setToPlace={setToPlace}
                  fromDate={fromDate}
                  setFromDate={setFromDate}
                  toDate={toDate}
                  setToDate={setToDate}
                  fromTime={fromTime}
                  setFromTime={setFromTime}
                  toTime={toTime}
                  setToTime={setToTime}
                  departingTimezone={departingTimezone}
                  setDepartingTimezone={setDepartingTimezone}
                  arrivingTimezone={arrivingTimezone}
                  setArrivingTimezone={setArrivingTimezone}
                  layovers={layovers}
                  setLayovers={setLayovers}
                  layoversTime={layoverTime}
                  setLayoverTime={setLayoverTime}
                />
              </Tabs.Content>
              <Tabs.Content value="accomodation" className="ml-4 mt-4">
                <AccomodationInput
                  type={type}
                  setType={setType}
                  title={title}
                  setTitle={setTitle}
                  fromTime={fromTime}
                  setFromTime={setFromTime}
                  fromDate={fromDate}
                  setFromDate={setFromDate}
                  location={location}
                  setLocation={setLocation}
                  phone={phone}
                  setPhone={setPhone}
                  cost={cost}
                  setCost={setCost}
                />
              </Tabs.Content>
              <Tabs.Content value="sports" className="ml-4 mt-4">
                <SportsInput
                  type={type}
                  setType={setType}
                  title={title}
                  setTitle={setTitle}
                  fromDate={fromDate}
                  setFromDate={setFromDate}
                  location={location}
                  setLocation={setLocation}
                  description={description}
                  setDescription={setDescription}
                />
              </Tabs.Content>
              <Tabs.Content value="shopping" className="ml-4 mt-4">
                <ShoppingInput
                  type={type}
                  setType={setType}
                  title={title}
                  setTitle={setTitle}
                  fromDate={fromDate}
                  setFromDate={setFromDate}
                  location={location}
                  setLocation={setLocation}
                  description={description}
                  setDescription={setDescription}
                />
              </Tabs.Content>
              <Tabs.Content value="monuments" className="ml-4 mt-4">
                <MonumentInput
                  type={type}
                  setType={setType}
                  title={title}
                  setTitle={setTitle}
                  fromDate={fromDate}
                  setFromDate={setFromDate}
                  location={location}
                  setLocation={setLocation}
                  description={description}
                  setDescription={setDescription}
                />
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
