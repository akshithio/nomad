export default function AccomodationInput() {
  return (
    <>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="name">
          Type
        </label>
        <select name="type" id="type" className="pr-1 focus:outline-none">
          <option value="checkin">Checking In</option>
          <option value="checkout">Check Out</option>
        </select>
      </fieldset>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="username">
          Title
        </label>
        <input className="Input" id="from" placeholder="Enter title" />
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
    </>
  );
}
