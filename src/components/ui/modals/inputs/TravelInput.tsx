import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";

export default function TravelInput() {
  const [typeTravel, setTypeTravel] = useState("");
  const [departingLoc, setDepartingLoc] = useState("");
  const [departingTime, setDepartingTime] = useState("");
  const [departingDate, setDepartingDate] = useState("");
  const [departingTZ, setDepartingTZ] = useState("");
  const [arrivingLoc, setArrivingLoc] = useState("");
  const [arrivingTime, setArrivingTime] = useState("");
  const [arrivingDate, setArrivingDate] = useState("");
  const [arrivingTZ, setArrivingTZ] = useState("");
  const [layoverBool, setLayoverBool] = useState("");
  const [layoverLoc, setLayoverLoc] = useState("");
  const [layoverDur, setLayoverDur] = useState("");

  return (
    <>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="name">
          Type
        </label>
        <select
          name="type"
          id="type"
          className="pr-1 focus:outline-none"
          value={typeTravel}
          onChange={(e) => {
            setTypeTravel(e.target.value);
          }}
        >
          <option value="Departure">Departing</option>
          <option value="Arrival">Back Home</option>
        </select>
      </fieldset>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="username">
          Departing From?
        </label>
        <input
          className="Input"
          id="from"
          placeholder="Enter 3 letter code for airports"
          value={departingLoc}
          onChange={(e) => {
            setDepartingLoc(e.target.value);
          }}
        />
      </fieldset>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="username">
          Departure Time
        </label>
        <input
          type="time"
          className="Input"
          id="from"
          placeholder="Enter 3 letter code for airports"
          value={departingTime}
          onChange={(e) => {
            setDepartingTime(e.target.value);
          }}
        />
      </fieldset>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="username">
          Departure Date
        </label>
        <input
          type="date"
          className="Input"
          id="from"
          placeholder="Enter 3 letter code for airports"
          value={departingDate}
          onChange={(e) => {
            setDepartingDate(e.target.value);
          }}
        />
      </fieldset>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="username">
          Departing Timezone?
        </label>
        <input
          className="Input"
          id="from"
          placeholder="Enter shortform such as IST, ET etc."
          value={departingTZ}
          onChange={(e) => {
            setDepartingTZ(e.target.value);
          }}
        />
      </fieldset>
      <div className="mb-5 h-[1px] w-full border-[1px] border-solid border-black" />
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="username">
          Arriving at?
        </label>
        <input
          className="Input"
          id="from"
          placeholder="Enter 3 letter code for airports"
          value={arrivingLoc}
          onChange={(e) => {
            setArrivingLoc(e.target.value);
          }}
        />
      </fieldset>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="username">
          Arriving Time
        </label>
        <input
          type="time"
          className="Input"
          id="from"
          placeholder="Enter 3 letter code for airports"
          value={arrivingTime}
          onChange={(e) => {
            setArrivingTime(e.target.value);
          }}
        />
      </fieldset>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="username">
          Arriving Date
        </label>
        <input
          type="date"
          className="Input"
          id="from"
          placeholder="Enter 3 letter code for airports"
          value={arrivingDate}
          onChange={(e) => {
            setArrivingDate(e.target.value);
          }}
        />
      </fieldset>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="username">
          Arriving Timezone?
        </label>
        <input
          className="Input"
          id="from"
          placeholder="Enter shortform such as IST, ET etc."
          value={arrivingLoc}
          onChange={(e) => {
            setArrivingTZ(e.target.value);
          }}
        />
      </fieldset>
      <div className="mb-5 h-[1px] w-full border-[1px] border-solid border-black" />
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="name">
          Layover?
        </label>
        <select
          name="type"
          id="type"
          className="pr-1 focus:outline-none"
          value={layoverBool}
          onChange={(e) => {
            setLayoverBool(e.target.value);
          }}
        >
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </fieldset>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="name">
          Where?
        </label>
        <input
          className="Input"
          id="from"
          placeholder="Enter City Name"
          value={layoverLoc}
          onChange={(e) => {
            setLayoverLoc(e.target.value);
          }}
        />
      </fieldset>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="name">
          How long?
        </label>
        <input
          className="Input"
          id="from"
          placeholder="Enter duration in hours"
          value={layoverDur}
          onChange={(e) => {
            setLayoverDur(e.target.value);
          }}
        />
      </fieldset>

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
    </>
  );
}
