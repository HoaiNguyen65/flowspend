import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import SectionCard from "./SectionCard";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload?.length) {
    return (
      <div className="rounded-md bg-black px-2 py-1 text-xs font-semibold text-white">
        ${payload[0].value.toLocaleString()}
      </div>
    );
  }
  return null;
};

function MonthlyExpensesChart({ data }) {
  return (
    <SectionCard label="Monthly Expenses">
      <div className="mt-6 w-full">
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={data} barSize={32} barGap={44}>
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#64748B" }}
            />
            <Tooltip content={<CustomTooltip />} cursor={false} />
            <Bar dataKey="value" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </SectionCard>
  );
}

export default MonthlyExpensesChart;
