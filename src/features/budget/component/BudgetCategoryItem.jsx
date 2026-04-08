// features/budgets/components/BudgetCategoryItem.jsx
import ProgressBar from "../../../components/ProgressBar";

const BudgetCategoryItem = ({
  icon,
  iconBg,
  iconColor,
  name,
  spent,
  total,
}) => {
  const percentage = Math.round((spent / total) * 100);
  const isOverBudget = spent > total;

  return (
    <div className="rounded-card shadow-card bg-white p-4">
      <div className="flex items-center gap-4">
        {/* Icon */}
        <div
          className={`${iconBg} flex h-10 w-10 shrink-0 items-center justify-center rounded-full`}
        >
          <span style={{ color: iconColor }}>{icon}</span>
        </div>

        {/* Name + Progress */}
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <p className="text-base font-bold text-black">{name}</p>
            <div className="flex items-center gap-3">
              <p className="text-grey text-sm">
                <span
                  className={
                    isOverBudget
                      ? "font-semibold text-red-500"
                      : "font-semibold text-black"
                  }
                >
                  ${spent.toLocaleString()}
                </span>{" "}
                of ${total.toLocaleString()}
              </p>
              <p
                className={`w-12 text-right text-sm font-bold ${isOverBudget ? "text-red-500" : "text-primary"}`}
              >
                {percentage}%
              </p>
            </div>
          </div>
          <ProgressBar value={spent} total={total} className="mt-2" />
        </div>
      </div>
    </div>
  );
};

export default BudgetCategoryItem;
