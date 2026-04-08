import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import Badge from "../../../components/Badge";
import TransactionActions from "./TransactionActions";

const COLUMNS = [
  "Date",
  "Description",
  "Category",
  "Type",
  "Amount",
  "Actions",
];

function TransactionTable({ data, onEdit, onDelete }) {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full text-sm">
        {/* header */}
        <thead className="rounded-3xl bg-[#F8FAFC]">
          <tr className="border-b border-slate-100">
            {COLUMNS.map((col) => (
              <th
                key={col}
                className="text-grey p-4 text-left text-[0.813rem] font-bold tracking-wider uppercase"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>

        {data.length === 0 ? (
          <tbody>
            <tr>
              <td
                colSpan={COLUMNS.length}
                className="text-grey py-12 text-center text-sm"
              >
                No transactions found.
              </td>
            </tr>
          </tbody>
        ) : (
          <tbody className="bg-white">
            {data.map((item) => (
              <tr
                key={item.id}
                className="border-b border-slate-100 transition-colors hover:bg-slate-50"
              >
                {/* Date */}
                <td className="text-grey p-4 text-sm">{item.date}</td>

                {/* Description */}
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-medium text-black">{item.name}</p>
                      <p className="text-grey text-xs">{item.description}</p>
                    </div>
                  </div>
                </td>

                {/* Category */}
                <td className="p-4">
                  <Badge label={item.category} />
                </td>

                {/* Type */}
                <td className="p-4">
                  {item.amount > 0 ? (
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                      <ArrowUpRight size={16} className="text-green-500" />
                    </div>
                  ) : (
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100">
                      <ArrowDownRight size={16} className="text-red-500" />
                    </div>
                  )}
                </td>
                {/* Amount */}
                <td
                  className={`p-4 font-semibold ${item.amount > 0 ? "text-green-500" : "text-red-500"}`}
                >
                  {item.amount > 0 ? "+" : "-"}$
                  {Math.abs(item.amount).toLocaleString()}
                </td>

                {/* Actions */}
                <td className="p-4">
                  <TransactionActions
                    onEdit={() => onEdit(item)}
                    onDelete={() => onDelete(item.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
}

export default TransactionTable;
