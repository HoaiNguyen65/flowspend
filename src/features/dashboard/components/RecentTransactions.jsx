import { Link } from "react-router-dom";
import SectionCard from "./SectionCard";
import TransactionItem from "./TransactionItem";
import { ShoppingCart, Car, Wallet, Apple, Zap } from "lucide-react";

const transactions = [
  {
    id: 1,
    icon: <ShoppingCart size={16} />,
    name: "Whole Foods Market",
    category: "Food & Dining",
    time: "Today",
    amount: -142.5,
  },
  {
    id: 2,
    icon: <Car size={16} />,
    name: "Chevron Gas",
    category: "Transportation",
    time: "Yesterday",
    amount: -55.0,
  },
  {
    id: 3,
    icon: <Wallet size={16} />,
    name: "Monthly Salary",
    category: "Income",
    time: "2 days ago",
    amount: 4200.0,
  },
  {
    id: 4,
    icon: <Apple size={16} />,
    name: "Apple Store",
    category: "Shopping",
    time: "3 days ago",
    amount: -299.0,
  },
  {
    id: 5,
    icon: <Zap size={16} />,
    name: "City Power & Water",
    category: "Utilities",
    time: "4 days ago",
    amount: -185.2,
  },
];

function RecentTransactions() {
  return (
    <SectionCard>
      {/* Header */}
      <div className=" mb-4 flex items-center justify-between">
        <h2 className="text-base font-semibold text-black">
          Recent Transactions
        </h2>
        <Link
          to="/transaction"
          className="text-primary text-sm font-medium hover:underline"
        >
          View All
        </Link>
      </div>

      {/* List */}
      <ul className="flex flex-col gap-4">
        {transactions.map((item) => (
          <TransactionItem key={item.id} {...item} />
        ))}
      </ul>
    </SectionCard>
  );
}

export default RecentTransactions;
