import { BarChart, Bar, ResponsiveContainer } from "recharts";
import { MoreVertical, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import Card from "../../../components/Card";

const CategoryCard = ({
  icon,
  iconBg,
  iconColor,
  name,
  description,
  spent,
  chartData,
  onEdit,
  onDelete,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Card className="relative">
      <div className="flex items-start justify-between">
        {/* Icon */}
        <div className={`${iconBg} flex h-12 w-12 items-center justify-center rounded-full`}>
          <span style={{ color: iconColor }}>{icon}</span>
        </div>

        {/* 3 chấm menu */}
        <div className="relative">
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="text-grey hover:text-black transition-colors"
          >
            <MoreVertical size={18} />
          </button>

          {menuOpen && (
            <div className="absolute right-0 z-10 mt-1 w-32 rounded-lg border border-slate-100 bg-white shadow-card">
              <button
                onClick={() => { onEdit(); setMenuOpen(false); }}
                className="flex w-full items-center gap-2 px-3 py-2 text-sm text-slate-600 hover:bg-slate-50"
              >
                <Pencil size={14} /> Edit
              </button>
              <button
                onClick={() => { onDelete(); setMenuOpen(false); }}
                className="flex w-full items-center gap-2 px-3 py-2 text-sm text-red-500 hover:bg-red-50"
              >
                <Trash2 size={14} /> Delete
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Name + description */}
      <div className="mt-4">
        <p className="text-[1.125rem] font-bold text-black">{name}</p>
        <p className="text-sm text-grey">{description}</p>
      </div>

      {/* Spent + mini chart */}
      <div className="mt-4 flex items-end justify-between">
        <div>
          <p className="text-xs font-bold tracking-wider text-grey uppercase">Spent</p>
          <p className="text-[1.25rem] font-bold text-black">${spent.toLocaleString()}</p>
        </div>

        {/* Mini BarChart */}
        <ResponsiveContainer width={60} height={40}>
          <BarChart data={chartData} barSize={6}>
            <Bar dataKey="value" radius={[4, 4, 0, 0]} fill={iconColor} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default CategoryCard;