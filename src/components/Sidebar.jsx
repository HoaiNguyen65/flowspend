import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { ChartBarStacked, Landmark, LayoutDashboard, ReceiptText } from "lucide-react";

const navItems = [
  { to: "/dashboard", label: "Dashboard", icon: <LayoutDashboard size={18} /> },
  { to: "/transaction", label: "Transactions", icon: <ReceiptText size={18} /> },
  { to: "/category", label: "Categories", icon: <ChartBarStacked size={18} /> },
  { to: "/budget", label: "Budget", icon: <Landmark size={18} /> },
];

function Sidebar() {
  return (
    <div>
      <div className="flex items-center justify-center gap-3 p-6">
        <div className="w-9 overflow-hidden">
          <img
            className="h-full w-full object-cover object-center"
            src={logo}
            alt="flowspend logo"
          />
        </div>
        <h1 className="text-[1.25rem] font-bold text-black">FlowSpend</h1>
      </div>

      <ul className="flex flex-col items-start justify-center p-4">
        {navItems.map((item) => (
          <li className="hover:bg-primary rounded-card w-full p-2.5 text-[#475569] transition-colors delay-100 duration-200 hover:text-white">
            <Link to={item.to}>
              <div className="flex items-center gap-3">
                {item.icon}
                <p className="text-sm font-medium">{item.label}</p>
              </div>
            </Link>
          </li>
        ))}       
      </ul>
    </div>
  );
}

export default Sidebar;
