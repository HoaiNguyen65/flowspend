import Card from "./Card";

function StatCard({ label, value, trend }) {
  return (
    <Card className="flex w-full flex-col gap-1 sm:min-w-55.5">
      <p className="text-grey text-sm font-medium">{label}</p>
      <p className="text-2xl font-bold text-black">${value}</p>
      <p className="text-[0.75rem] text-[#10B77F]">$800 increase</p>
    </Card>
  );
}

export default StatCard;
