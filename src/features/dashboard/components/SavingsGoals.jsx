import { Plane } from "lucide-react";
import SectionCard from "./SectionCard";
import ProgressBar from "./ProgressBar";

const goal = {
  icon: <Plane size={31} color="var(--color-primary)" />,
  name: "New Europe Trip",
  target: 5000,
  saved: 3250,
  monthlySavings: 400,
  monthsLeft: 5,
};

const SavingsGoal = () => {
  const percentage = Math.round((goal.saved / goal.target) * 100);

  return (
    <SectionCard label="Savings Goal">
      <div className="flex flex-col items-center gap-8 mt-6">
        <div className="flex items-center justify-center flex-col">
          {/* Icon */}
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-emerald-50">
            {goal.icon}
          </div>

          {/* Name + target */}
          <div className="text-center">
            <p className="text-[1.25rem] font-bold text-black">{goal.name}</p>
            <p className="text-grey text-sm">
              Target: ${goal.target.toLocaleString()}
            </p>
          </div>
        </div>

        {/* Progress */}
        <div className="flex w-full flex-col gap-2">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-black">
              ${goal.saved.toLocaleString()} saved
            </p>
            <p className="text-primary text-sm font-bold">{percentage}%</p>
          </div>
          <ProgressBar value={goal.saved} total={goal.target} />
        </div>

        {/* Stats */}
        <div className="flex w-full items-center justify-between">
          <div>
            <p className="text-grey text-[0.625rem] font-semibold tracking-wider uppercase pr-3">
              Monthly Savings
            </p>
            <p className="text-sm font-bold text-black">
              ${goal.monthlySavings}/mo
            </p>
          </div>
          <div className="text-right">
            <p className="text-grey text-[0.625rem] font-semibold tracking-wider uppercase pl-3">
              Est. Completion
            </p>
            <p className="text-sm font-bold text-black">
              {goal.monthsLeft} Months
            </p>
          </div>
        </div>

        {/* Button */}
        <button className="rounded-card border-primary text-primary hover:bg-primary w-full border py-2.5 text-sm font-semibold transition-colors duration-200 hover:text-white">
          Adjust Goal
        </button>
      </div>
    </SectionCard>
  );
};

export default SavingsGoal;
