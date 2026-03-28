const BADGE_VARIANTS = {
  electronics:   "bg-blue-100 text-blue-600",
  food:          "bg-orange-100 text-orange-600",
  income:        "bg-green-100 text-green-600",
  transport:     "bg-purple-100 text-purple-600",
  entertainment: "bg-pink-100 text-pink-600",
  default:       "bg-slate-100 text-slate-600",
};

const Badge = ({ label }) => {
  const variant =
    BADGE_VARIANTS[label.toLowerCase()] ?? BADGE_VARIANTS.default;

  return (
    <span className={`${variant} rounded-full px-3 py-1 text-[11px] font-semibold tracking-wider uppercase`}>
      {label}
    </span>
  );
};

export default Badge;