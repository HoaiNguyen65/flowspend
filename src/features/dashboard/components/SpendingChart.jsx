import SectionCard from "./SectionCard";
import { Pie, PieChart, Sector } from "recharts";
function SpendingChart({ data, colors }) {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <SectionCard label="Spending by Category">
      <div className="flex w-full flex-col items-center justify-between md:flex-row">
        {/* Donut Chart + label ở giữa */}
        <div className="relative py-6">
          <PieChart width={180} height={180}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={80}
              dataKey="value"
              startAngle={90}
              endAngle={-270}
              shape={(props) => <Sector {...props} fill={props.fill} />}
            />
          </PieChart>
          {/* Text ở giữa donut */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-lg font-bold text-black">
              ${total.toLocaleString()}
            </p>
            <p className="text-grey text-xs">Total spent</p>
          </div>
        </div>
        {/* Legend */}
        <ul className="flex flex-col gap-3">
          {data.map((item, index) => (
            <li
              key={item.name}
              className="flex items-center justify-between gap-8"
            >
              <div className="flex items-center gap-2">
                <span
                  className="h-2.5 w-2.5 shrink-0 rounded-full"
                  style={{ backgroundColor: colors[index] }}
                />
                <span className="text-grey text-sm">{item.name}</span>
              </div>
              <span className="text-sm font-medium text-black">
                ${item.value.toLocaleString()}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </SectionCard>
  );
}

export default SpendingChart;
