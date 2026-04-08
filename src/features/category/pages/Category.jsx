import { useState } from "react";
import {
  Home,
  UtensilsCrossed,
  Car,
  Tv,
  Zap,
  ShoppingBag,
  HeartPulse,
  Plus,
} from "lucide-react";
import MainLayout from "../../../layouts/MainLayout";
import CategoryCard from "../components/CategoryCard";
import AddCategoryCard from "../components/AddCategory";
import CategoryStatCard from "../../../components/StatInfoCard";

const MOCK_CATEGORIES = [
  {
    id: 1,
    icon: <Home size={20} />,
    iconBg: "bg-blue-100",
    iconColor: "#3b82f6",
    name: "Housing",
    description: "Rent, Repairs, Taxes",
    spent: 1200.0,
    chartData: [
      { value: 800 },
      { value: 1000 },
      { value: 900 },
      { value: 1200 },
      { value: 1100 },
    ],
  },
  {
    id: 2,
    icon: <UtensilsCrossed size={20} />,
    iconBg: "bg-orange-100",
    iconColor: "#f97316",
    name: "Food & Dining",
    description: "Groceries, Restaurants",
    spent: 850.4,
    chartData: [
      { value: 600 },
      { value: 750 },
      { value: 820 },
      { value: 700 },
      { value: 850 },
    ],
  },
  {
    id: 3,
    icon: <Car size={20} />,
    iconBg: "bg-purple-100",
    iconColor: "#a855f7",
    name: "Transport",
    description: "Gas, Public Transport",
    spent: 450.0,
    chartData: [
      { value: 300 },
      { value: 420 },
      { value: 380 },
      { value: 450 },
      { value: 400 },
    ],
  },
  {
    id: 4,
    icon: <Tv size={20} />,
    iconBg: "bg-pink-100",
    iconColor: "#ec4899",
    name: "Entertainment",
    description: "Movies, Subscriptions",
    spent: 210.0,
    chartData: [
      { value: 150 },
      { value: 180 },
      { value: 200 },
      { value: 210 },
      { value: 190 },
    ],
  },
  {
    id: 5,
    icon: <Zap size={20} />,
    iconBg: "bg-yellow-100",
    iconColor: "#eab308",
    name: "Utilities",
    description: "Electricity, Water, Web",
    spent: 350.2,
    chartData: [
      { value: 280 },
      { value: 310 },
      { value: 350 },
      { value: 320 },
      { value: 350 },
    ],
  },
  {
    id: 6,
    icon: <ShoppingBag size={20} />,
    iconBg: "bg-teal-100",
    iconColor: "#14b8a6",
    name: "Shopping",
    description: "Clothing, Electronics",
    spent: 590.0,
    chartData: [
      { value: 400 },
      { value: 500 },
      { value: 550 },
      { value: 590 },
      { value: 520 },
    ],
  },
  {
    id: 7,
    icon: <HeartPulse size={20} />,
    iconBg: "bg-red-100",
    iconColor: "#ef4444",
    name: "Health",
    description: "Insurance, Gym, Meds",
    spent: 125.0,
    chartData: [
      { value: 80 },
      { value: 100 },
      { value: 90 },
      { value: 125 },
      { value: 110 },
    ],
  },
];

function Category() {
  return (
    <MainLayout labelHeader="Categories">
      {/* Stats */}
      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <CategoryStatCard
          label="Most Used"
          value="$850.40"
          subtitle="24 transactions this month"
          badge="Food"
        />
        <CategoryStatCard
          label="Budget Health"
          value="82%"
          subtitle="Within set budget limits"
          badge="On Track"
        />
        <CategoryStatCard
          label="Uncategorized"
          value="12 items"
          subtitle="Needs attention"
          badge="Review"
        />
      </div>
      {/* Category Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {MOCK_CATEGORIES.map((item) => (
          <CategoryCard
            key={item.id}
            {...item}
            onEdit={() => handleEdit(item)}
            onDelete={() => handleDelete(item.id)}
          />
        ))}

        {/* Add New Category */}
        <AddCategoryCard onClick={() => console.log("add category")} />
      </div>
    </MainLayout>
  );
}

export default Category;
