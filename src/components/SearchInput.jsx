import { Search } from "lucide-react";

function SearchInput({ value, onChange, placeholder, className="" }) {
  return (
    <div className="rounded-card flex items-center gap-3.5 border border-[#E2E8F0] bg-white px-3 py-2">
      <Search size={16} color="#94A3B8" />
      <input
        className={`w-full border-0 outline-0 ${className}`}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
}

export default SearchInput;
