import { useMemo, useState } from "react";
import SearchInput from "../../../components/SearchInput";
import MainLayout from "../../../layouts/MainLayout";
import TransactionFilters from "../components/TransactionFilter";
import TransactionTable from "../components/TransactionTable";
import {
  ShoppingBag,
  Building2,
  Coffee,
  Car,
  Tv,
  Zap,
  Apple,
  ShoppingCart,
  Wallet,
  Music,
} from "lucide-react";
import Pagination from "../../../components/Pagination";

const MOCK_TRANSACTIONS = [
  {
    id: 1,
    date: "10/25/2023",
    icon: <ShoppingBag size={16} />,
    name: "Apple Store",
    description: "Tech Purchase",
    category: "Electronics",
    amount: -1299.0,
  },
  {
    id: 2,
    date: "10/24/2023",
    icon: <Building2 size={16} />,
    name: "Acme Corp",
    description: "Monthly Salary",
    category: "Income",
    amount: 4500.0,
  },
  {
    id: 3,
    date: "10/22/2023",
    icon: <Coffee size={16} />,
    name: "Starbucks",
    description: "Dining & Coffee",
    category: "Food",
    amount: -12.5,
  },
  {
    id: 4,
    date: "10/20/2023",
    icon: <Car size={16} />,
    name: "Shell Station",
    description: "Fuel",
    category: "Transport",
    amount: -54.0,
  },
  {
    id: 5,
    date: "10/18/2023",
    icon: <Tv size={16} />,
    name: "Netflix",
    description: "Subscription",
    category: "Entertainment",
    amount: -19.99,
  },
  {
    id: 6,
    date: "10/17/2023",
    icon: <Zap size={16} />,
    name: "City Power",
    description: "Electricity Bill",
    category: "Electronics",
    amount: -185.0,
  },
  {
    id: 7,
    date: "10/16/2023",
    icon: <ShoppingCart size={16} />,
    name: "Whole Foods",
    description: "Groceries",
    category: "Food",
    amount: -142.5,
  },
  {
    id: 8,
    date: "10/15/2023",
    icon: <Car size={16} />,
    name: "Uber",
    description: "Ride",
    category: "Transport",
    amount: -24.0,
  },
  {
    id: 9,
    date: "10/14/2023",
    icon: <Music size={16} />,
    name: "Spotify",
    description: "Subscription",
    category: "Entertainment",
    amount: -9.99,
  },
  {
    id: 10,
    date: "10/13/2023",
    icon: <Building2 size={16} />,
    name: "Freelance Payment",
    description: "Web Project",
    category: "Income",
    amount: 1200.0,
  },
  {
    id: 11,
    date: "10/12/2023",
    icon: <Coffee size={16} />,
    name: "McDonald's",
    description: "Dining",
    category: "Food",
    amount: -8.5,
  },
  {
    id: 12,
    date: "10/11/2023",
    icon: <ShoppingBag size={16} />,
    name: "Samsung",
    description: "Phone Accessory",
    category: "Electronics",
    amount: -299.0,
  },
  {
    id: 13,
    date: "10/10/2023",
    icon: <Car size={16} />,
    name: "Grab",
    description: "Ride",
    category: "Transport",
    amount: -18.0,
  },
  {
    id: 14,
    date: "10/09/2023",
    icon: <Tv size={16} />,
    name: "Disney+",
    description: "Subscription",
    category: "Entertainment",
    amount: -13.99,
  },
  {
    id: 15,
    date: "10/08/2023",
    icon: <Building2 size={16} />,
    name: "Part-time Job",
    description: "Weekly Salary",
    category: "Income",
    amount: 800.0,
  },
  {
    id: 16,
    date: "10/07/2023",
    icon: <ShoppingCart size={16} />,
    name: "IKEA",
    description: "Furniture",
    category: "Electronics",
    amount: -450.0,
  },
  {
    id: 17,
    date: "10/06/2023",
    icon: <Coffee size={16} />,
    name: "KFC",
    description: "Dining",
    category: "Food",
    amount: -15.0,
  },
  {
    id: 18,
    date: "10/05/2023",
    icon: <Car size={16} />,
    name: "Parking Fee",
    description: "Monthly Parking",
    category: "Transport",
    amount: -60.0,
  },
  {
    id: 19,
    date: "10/04/2023",
    icon: <Music size={16} />,
    name: "Youtube Premium",
    description: "Subscription",
    category: "Entertainment",
    amount: -13.99,
  },
  {
    id: 20,
    date: "10/03/2023",
    icon: <Wallet size={16} />,
    name: "Bank Interest",
    description: "Savings Interest",
    category: "Income",
    amount: 150.0,
  },
  {
    id: 21,
    date: "10/02/2023",
    icon: <Zap size={16} />,
    name: "Internet Bill",
    description: "Monthly Plan",
    category: "Electronics",
    amount: -49.0,
  },
  {
    id: 22,
    date: "10/01/2023",
    icon: <ShoppingCart size={16} />,
    name: "Lazada",
    description: "Online Shopping",
    category: "Electronics",
    amount: -320.0,
  },
  {
    id: 23,
    date: "09/30/2023",
    icon: <Coffee size={16} />,
    name: "Pizza Hut",
    description: "Dining",
    category: "Food",
    amount: -35.0,
  },
  {
    id: 24,
    date: "09/29/2023",
    icon: <Car size={16} />,
    name: "Grab Car",
    description: "Ride",
    category: "Transport",
    amount: -22.0,
  },
  {
    id: 25,
    date: "09/28/2023",
    icon: <Tv size={16} />,
    name: "HBO Max",
    description: "Subscription",
    category: "Entertainment",
    amount: -15.99,
  },
  {
    id: 26,
    date: "09/27/2023",
    icon: <Building2 size={16} />,
    name: "Bonus",
    description: "Performance Bonus",
    category: "Income",
    amount: 2000.0,
  },
  {
    id: 27,
    date: "09/26/2023",
    icon: <Apple size={16} />,
    name: "App Store",
    description: "App Purchase",
    category: "Electronics",
    amount: -4.99,
  },
  {
    id: 28,
    date: "09/25/2023",
    icon: <ShoppingCart size={16} />,
    name: "Shopee",
    description: "Online Shopping",
    category: "Electronics",
    amount: -199.0,
  },
  {
    id: 29,
    date: "09/24/2023",
    icon: <Coffee size={16} />,
    name: "Burger King",
    description: "Dining",
    category: "Food",
    amount: -11.0,
  },
  {
    id: 30,
    date: "09/23/2023",
    icon: <Wallet size={16} />,
    name: "Dividend Payment",
    description: "Stock Dividend",
    category: "Income",
    amount: 500.0,
  },
];

const INITIAL_FILTERS = {
  type: "all",
  category: "all",
  amount: "any",
};

const ITEMS_PER_PAGE = 5;

function Transaction() {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState(INITIAL_FILTERS);
  const [currentPage, setCurrentPage] = useState(1);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
    setCurrentPage(1);
  };

  const handleSearch = (value) => {
    setSearch(value);
    setCurrentPage(1);
  };

  const handleEdit = (item) => {
    console.log("edit", item);
  };

  const handleDelete = (id) => {
    console.log("delete", id);
  };

  const filteredTransactions = useMemo(() => {
    return MOCK_TRANSACTIONS.filter((item) => {
      const matchSearch =
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase());

      const matchType =
        filters.type === "all" ||
        (filters.type === "income" && item.amount > 0) ||
        (filters.type === "expense" && item.amount < 0);

      const matchCategory =
        filters.category === "all" ||
        item.category.toLowerCase() === filters.category;

      const abs = Math.abs(item.amount);
      const matchAmount =
        filters.amount === "any" ||
        (filters.amount === "0-100" && abs <= 100) ||
        (filters.amount === "100-500" && abs > 100 && abs <= 500) ||
        (filters.amount === "500+" && abs > 500);

      return matchSearch && matchType && matchCategory && matchAmount;
    });
  }, [search, filters]);

  const totalPages = Math.ceil(filteredTransactions.length / ITEMS_PER_PAGE);

  const paginatedTransactions = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredTransactions.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredTransactions, currentPage]);

  return (
    <MainLayout labelHeader="Transactions">
      <div className="flex flex-wrap items-center justify-start gap-4 rounded-3xl bg-white p-4">
        <SearchInput
          className="min-w-88"
          value={search}
          placeholder={"Search transactions..."}
          onChange={handleSearch}
        />
        <TransactionFilters
          filters={filters}
          onChange={handleFilterChange}
          onClear={() => setFilters(INITIAL_FILTERS)}
        />
      </div>

      <div className="my-6 overflow-hidden rounded-3xl bg-white pb-2">
        <TransactionTable
          data={paginatedTransactions}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex w-full items-center justify-between border-slate-100 p-2">
            <p className="text-grey text-xs font-medium">
              Showing {(currentPage - 1) * ITEMS_PER_PAGE + 1} to{" "}
              {Math.min(
                currentPage * ITEMS_PER_PAGE,
                filteredTransactions.length,
              )}{" "}
              of {filteredTransactions.length} transactions
            </p>
            <Pagination
              current={currentPage}
              total={totalPages}
              onChange={setCurrentPage}
            />
          </div>
        )}
      </div>
    </MainLayout>
  );
}

export default Transaction;
