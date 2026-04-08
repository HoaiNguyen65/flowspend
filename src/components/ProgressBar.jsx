const ProgressBar = ({ value, total, className = "" }) => {
  const percentage = Math.min(Math.round((value / total) * 100), 100);
  const isOverBudget = value > total;

  return (
    <div className={`w-full h-2 bg-slate-100 rounded-full overflow-hidden ${className}`}>
      <div
        className={`h-full rounded-full transition-all duration-500 ${
          isOverBudget ? "bg-red-500" : "bg-primary"
        }`}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

export default ProgressBar;