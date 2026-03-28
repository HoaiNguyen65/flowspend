import { Search } from "lucide-react";

function SearchInput({ value, onChange, placeholder }) {
  return (
    <div className="rounded-card flex items-center gap-3.5 bg-white px-4.5 py-2.5">
      <Search size={16} color="#94A3B8" />
      <input
        className="w-full border-0 outline-0"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
}

export default SearchInput;
