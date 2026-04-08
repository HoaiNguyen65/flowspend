function SelectFilter({ value, onChange, options }) {
  return (
    <select
      className="cursor-pointer rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600 transition-all outline-none focus:border-black"
      onChange={(e) => onChange(e.target.value)}
      value={value}
      name=""
      id=""
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default SelectFilter;
 