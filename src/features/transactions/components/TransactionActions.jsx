import { Pencil, Trash2 } from "lucide-react";

const TransactionActions = ({ onEdit, onDelete }) => {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={onEdit}
        className="text-grey hover:text-primary transition-colors"
      >
        <Pencil size={16} />
      </button>
      <button
        onClick={onDelete}
        className="text-grey hover:text-red-500 transition-colors"
      >
        <Trash2 size={16} />
      </button>
    </div>
  );
};

export default TransactionActions;