

const Checkbox = (({text,label,register}) => (
  <div className="flex bg-white w-72 h-10 items-center border-2 border-black justify-between">
    <input
      className="m-2"
      {...register(label, {})}
      type="checkbox"
      name={label}
    />
    <label className="text-xl m-2">{text}</label>
  </div>
));

export default Checkbox;
