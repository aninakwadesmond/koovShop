function FormLabelInput({
  label,
  type,
  center = false,
  textarea = false,
  row = false,
}) {
  return (
    <div className="flex-cols w-full gap-[0.1rem] p-1 px-2">
      <label
        htmlFor="email"
        className={`w-full text-[14px] font-semibold text-gray-950/80 capitalize ${center ? "text-center uppercase" : ""}`}
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          name=""
          id=""
          className="p2 h-35 w-full cursor-pointer resize-none rounded-md border-[0.3px] border-gray-950/30 px-3 text-[14px] font-semibold tracking-wider text-gray-950/70 shadow-lg shadow-gray-950/10 outline-0"
        ></textarea>
      ) : row ? (
        <div className="flex-row-start w-full gap-10">
          <p className="text-md w-[60%] font-semibold tracking-wide text-gray-950/90">
            What is 13 - 4 ?
          </p>
          <input
            type={type}
            id="email"
            className="p2 no-spinner h-8 w-full cursor-pointer rounded-md border-[0.3px] border-gray-950/30 px-3 text-[14px] font-semibold tracking-wider text-gray-950/70 shadow shadow-gray-950/10 outline-0"
          />
        </div>
      ) : (
        <input
          type={type}
          id="email"
          className="p2 h-8 w-full cursor-pointer rounded-md border-[0.3px] border-gray-950/30 px-3 text-[14px] font-semibold tracking-wider text-gray-950/70 shadow shadow-gray-950/10 outline-0"
        />
      )}
    </div>
  );
}

export default FormLabelInput;
