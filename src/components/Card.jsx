function Card({ children, className = "" }) {
  return (
    <div className={`rounded-card shadow-card bg-white p-4 sm:p-6 ${className}`}>
      {children}
    </div>
  );
}

export default Card;
