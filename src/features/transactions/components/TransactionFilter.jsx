import SelectFilter from "../../../components/SelectFilter";

const TYPE_OPTIONS = [
  { value: "all", label: "Type: All" },
  { value: "income", label: "Income" },
  { value: "expense", label: "Expense" },
];

const CATEGORY_OPTIONS = [
  { value: "all", label: "Category: All" },
  { value: "electronics", label: "Electronics" },
  { value: "food", label: "Food" },
  { value: "transport", label: "Transport" },
  { value: "entertainment", label: "Entertainment" },
];

const AMOUNT_OPTIONS = [
  { value: "any", label: "Amount: Any" },
  { value: "0-100", label: "$0 - $100" },
  { value: "100-500", label: "$100 - $500" },
  { value: "500+", label: "$500+" },
];

const TransactionFilters = ({ filters, onChange, onClear }) => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <SelectFilter
        value={filters.type}
        options={TYPE_OPTIONS}
        onChange={(value) => onChange("type", value)}
      />
      <SelectFilter
        value={filters.category}
        options={CATEGORY_OPTIONS}
        onChange={(value) => onChange("category", value)}
      />
      <SelectFilter
        value={filters.amount}
        options={AMOUNT_OPTIONS}
        onChange={(value) => onChange("amount", value)}
      />

      {/* Clear Filters — chỉ hiện khi có filter đang active */}
      {Object.values(filters).some((v) => v !== "all" && v !== "any") && (
        <button
          onClick={onClear}
          className="text-sm font-bold text-primary hover:underline transition-colors"
        >
          Clear Filters
        </button>
      )} 
    </div>
  );
};

export default TransactionFilters;