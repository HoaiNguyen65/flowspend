function TransactionItem({ icon, name, category, time, amount }) {
  const isIncome = amount > 0;
  return (
    <li className="flex items-center justify-between gap-4">
      {/* Icon */}
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100">
        {icon}
      </div>

      {/* Name + category */}
      <div className="flex-1">
        <p className="text-sm font-medium text-black">{name}</p>
        <p className="text-grey text-xs">
          {category} • {time}
        </p>
      </div>

      {/* Amount */}
      <p
        className={`text-sm font-semibold ${isIncome ? "text-emerald-500" : "text-red-500"}`}
      >
        {isIncome ? "+" : "-"}${Math.abs(amount).toLocaleString()}
      </p>
    </li>
  );
}

export default TransactionItem;
