import { ChevronLeft, ChevronRight } from "lucide-react";

function Pagination({ current, total, onChange }) {
  const getPage = () => {
    if (total <= 5) return Array.from({length: total}, (_, i) => i + 1);
    if (current <= 3) return [1, 2, 3, "...", total];
    if (current >= total - 2) return [1, "...", total - 2, total - 1, total];
    return [1, "...", current - 1, current, current + 1, "...", total];
  };

  const pages = getPage();
  const btnBase =
    "flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium transition-colors";

  return (
    <div className="flex items-center">
      <button
        onClick={() => onChange(current - 1)}
        disabled={current===1}
        className={`${btnBase} ${current === 1 ? "cursor-not-allowed text-slate-300" : "text-grey hover:bg-slate-100"}`}
      >
        <ChevronLeft size={18} />
      </button>
      <div className="flex items-center">
        {pages.map((page, index) =>
          page === "..." ? (
            <span
              key={`dots-${index}`}
              className="text-grey flex h-8 w-8 items-center justify-center text-sm"
            >
              ...
            </span>
          ) : (
            <button
              key={page}
              onClick={() => onChange(page)}
              className={`${btnBase} ${
                current === page
                  ? "bg-primary text-white"
                  : "text-grey hover:bg-slate-100"
              }`}
            >
              {page}
            </button>
          ),
        )}
      </div>
      <button
        onClick={() => onChange(current + 1)}
        disabled={current === total}
        className={`${btnBase} ${
          current === total
            ? "cursor-not-allowed text-slate-300"
            : "text-grey hover:bg-slate-100"
        }`}
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
}

export default Pagination;
