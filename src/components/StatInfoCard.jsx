import Card from "./Card";
import Badge from "./Badge";

const StatInfoCard = ({ label, value, subtitle, badge }) => {
  return (
    <Card>
      <div className="flex items-start justify-between">
        <p className="text-grey text-sm font-medium">{label}</p>
        {badge && <Badge label={badge} />}
      </div>

      <p className="mt-3 text-2xl font-bold text-black">{value}</p>
      <p className="text-grey mt-1 text-xs">{subtitle}</p>
    </Card>
  );
};

export default StatInfoCard;
