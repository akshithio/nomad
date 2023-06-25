import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";

export default function AccomodationInput() {
  const [typeAccomodation, setTypeAccomodation] = useState("");
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [Date, setDate] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [price, setPrice] = useState("");

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
          value={typeAccomodation}
          onChange={(e) => {
            setTypeAccomodation(e.target.value);
          }}
        >
          <option value="checkin">Checking In</option>
          <option value="checkout">Check Out</option>
        </select>
      </fieldset>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="username">
          Title
        </label>
        <input
          className="Input"
          id="from"
          placeholder="Enter title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </fieldset>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="username">
          Time
        </label>
        <input
          type="time"
          className="Input"
          id="from"
          placeholder="Enter 3 letter code for airports"
          value={time}
          onChange={(e) => {
            setTime(e.target.value);
          }}
        />
      </fieldset>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="username">
          Date
        </label>
        <input
          type="date"
          className="Input"
          id="from"
          placeholder="Enter 3 letter code for airports"
          value={time}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
      </fieldset>

      <div className="mb-5 h-[1px] w-full border-[1px] border-solid border-black" />

      <fieldset className="Fieldset">
        <label className="Label" htmlFor="username">
          Address
        </label>
        <input
          className="Input"
          id="from"
          placeholder="Enter address for place of accomodation"
        />
      </fieldset>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="username">
          Phone Number
        </label>
        <input
          type="tel"
          className="Input"
          id="from"
          placeholder="Enter address for place of accomodation"
        />
      </fieldset>

      <div className="mb-5 h-[1px] w-full border-[1px] border-solid border-black" />

      <fieldset className="Fieldset">
        <label className="Label" htmlFor="name">
          Price per night
        </label>
        <input className="Input" id="from" placeholder="Enter Price" />
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
