import { UtensilsCrossed, Home, Tv, Car, ShoppingBag } from "lucide-react";
import MainLayout from "../../../layouts/MainLayout";
import StatInfoCard from "../../../components/StatInfoCard";
import BudgetCategoryItem from "../component/BudgetCategoryItem";

const MOCK_BUDGETS = [
  {
    id: 1,
    icon: <UtensilsCrossed size={18} />,
    iconBg: "bg-orange-100",
    iconColor: "#f97316",
    name: "Food & Dining",
    spent: 850,
    total: 1200,
  },
  {
    id: 2,
    icon: <Home size={18} />,
    iconBg: "bg-blue-100",
    iconColor: "#3b82f6",
    name: "Housing",
    spent: 1500,
    total: 1500,
  },
  {
    id: 3,
    icon: <Tv size={18} />,
    iconBg: "bg-purple-100",
    iconColor: "#a855f7",
    name: "Entertainment",
    spent: 420,
    total: 300, // ← over budget
  },
  {
    id: 4,
    icon: <Car size={18} />,
    iconBg: "bg-teal-100",
    iconColor: "#14b8a6",
    name: "Transportation",
    spent: 125,
    total: 450,
  },
  {
    id: 5,
    icon: <ShoppingBag size={18} />,
    iconBg: "bg-pink-100",
    iconColor: "#ec4899",
    name: "Shopping",
    spent: 245,
    total: 500,
  },
];

const totalBudgeted = MOCK_BUDGETS.reduce((sum, item) => sum + item.total, 0);
const totalSpent = MOCK_BUDGETS.reduce((sum, item) => sum + item.spent, 0);
const remaining = totalBudgeted - totalSpent;

function Budget() {
  return (
    <MainLayout labelHeader="Budget">
      <div className="flex flex-col gap-6">
        {/* Stat Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <StatInfoCard
            label="Total Budgeted"
            value={`$${totalBudgeted.toLocaleString()}`}
            subtitle={`Across ${MOCK_BUDGETS.length} categories`}
          />
          <StatInfoCard
            label="Total Spent"
            value={`$${totalSpent.toLocaleString()}`}
            subtitle="12% less than last month"
          />
          <StatInfoCard
            label="Remaining Budget"
            value={`$${remaining.toLocaleString()}`}
            subtitle={`${Math.round((totalSpent / totalBudgeted) * 100)}% utilized`}
          />
        </div>

        {/* Budget List */}
        <div className="flex flex-col gap-4">
          <h2 className="text-[1.125rem] font-bold text-black">
            Budget Categories
          </h2>
          <div className="flex flex-col gap-3 w-full sm:max-w-2xl">
            {MOCK_BUDGETS.map((item) => (
              <BudgetCategoryItem key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Budget;
