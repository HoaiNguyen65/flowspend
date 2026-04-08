// features/categories/components/AddCategoryCard.jsx
import { Plus } from "lucide-react";

const AddCategoryCard = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex min-h-48 w-full flex-col items-center justify-center gap-2 rounded-card border-2 border-dashed border-slate-200 bg-white transition-colors hover:border-primary hover:bg-emerald-50"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100">
        <Plus size={20} className="text-slate-400" />
      </div>
      <p className="text-sm font-medium text-slate-400">Add New Category</p>
    </button>
  );
};

export default AddCategoryCard;