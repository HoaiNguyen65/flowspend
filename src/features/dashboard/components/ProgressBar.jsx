// components/ProgressBar.jsx
const ProgressBar = ({ value, total, className = "" }) => {
  const percentage = Math.min(Math.round((value / total) * 100), 100);

  return (
    <div className={`w-full h-2 bg-slate-100 rounded-full overflow-hidden ${className}`}>
      <div
        className="h-full bg-primary rounded-full transition-all duration-500"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

export default ProgressBar;