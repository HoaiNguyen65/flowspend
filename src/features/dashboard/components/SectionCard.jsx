import Card from "../../../components/Card";

function SectionCard({ label = "", children, className = "" }) {
  return (
    <Card className={`w-full ${className}`}>
      {label && (
        <p className="mb-4 text-[1.125rem] font-bold text-black">{label}</p>
      )}
      {children}
    </Card>
  );
}

export default SectionCard;
