export default function MonumentInput() {
  return (
    <>
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
          Description
        </label>
        <textarea
          className="rounded-md border-[1px] border-solid border-black p-2 focus:outline-none"
          name=""
          id=""
          cols={59}
          rows={5}
          placeholder="Keep a track of some small things that help you remember this event"
        ></textarea>
      </fieldset>
    </>
  );
}
