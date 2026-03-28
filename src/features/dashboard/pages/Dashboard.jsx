import StatCard from "../../../components/StatCard";
import MainLayout from "../../../layouts/MainLayout";
import MonthlyExpensesChart from "../components/MonthlyExpensesChart";
import RecentTransactions from "../components/RecentTransactions";
import SavingsGoal from "../components/SavingsGoals";
import SpendingChart from "../components/SpendingChart";

const COLORS = ["#10b981", "#34d399", "#6ee7b7", "#d1fae5"];

const data = [
  { name: "Housing", value: 1200, fill: COLORS[0] },
  { name: "Food", value: 850, fill: COLORS[1] },
  { name: "Transport", value: 450, fill: COLORS[2] },
  { name: "Utilities", value: 350, fill: COLORS[3] },
];

const dataBar = [
  { month: "FEB", value: 2100, fill: "#d1fae5" },
  { month: "MAR", value: 2400, fill: "#d1fae5" },
  { month: "APR", value: 2200, fill: "#d1fae5" },
  { month: "MAY", value: 2800, fill: "#d1fae5" },
  { month: "JUN", value: 3150, fill: "#10b981" }, // ← active
  { month: "JUL", value: 1200, fill: "#d1fae5" },
];

function Dashboard() {
  return (
    <MainLayout labelHeader="Dashboard">
      <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
        {/* StatCards — luôn scroll ngang */}
        <section>
          <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:pe-2 md:pb-2 lg:grid-cols-4">
            <StatCard label="Balance" value="12,450.00" />
            <StatCard label="Balance" value="12,450.00" />
            <StatCard label="Balance" value="12,450.00" />
            <StatCard label="Balance" value="12,450.00" />
          </div>
        </section>

        {/* Charts */}
        <section className="flex flex-col gap-4 md:gap-6 lg:flex-row lg:gap-8">
          <SpendingChart data={data} colors={COLORS} />
          <MonthlyExpensesChart data={dataBar} />
        </section>

        {/* Transactions + Savings */}
        <section className="flex flex-col gap-4 md:items-start md:gap-6 lg:flex-row lg:gap-8">
          <div className="w-full md:flex-1">
            <RecentTransactions />
          </div>
          <div className="w-full md:w-80 md:shrink-0">
            <SavingsGoal />
          </div>
        </section>
      </div>
    </MainLayout>
  );
}

export default Dashboard;
