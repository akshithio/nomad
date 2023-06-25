export default function TravelInput() {
  return (
    <>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="name">
          Type
        </label>
        <select name="type" id="type" className="pr-1 focus:outline-none">
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
        />
      </fieldset>
      <div className="mb-5 h-[1px] w-full border-[1px] border-solid border-black" />
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="name">
          Layover?
        </label>
        <select name="type" id="type" className="pr-1 focus:outline-none">
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </fieldset>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="name">
          Where?
        </label>
        <input className="Input" id="from" placeholder="Enter City Name" />
      </fieldset>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="name">
          How long?
        </label>
        <input
          className="Input"
          id="from"
          placeholder="Enter duration in hours"
        />
      </fieldset>
    </>
  );
}
