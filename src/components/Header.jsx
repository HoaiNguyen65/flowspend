import { Bell, Menu } from "lucide-react";
import avatar from "../assets/images/avatar.png";
function Header({ actionButtons, labelHeader, onMenuClick }) {
  return (
    <div className="flex items-center justify-between">
      {/* Burger button — chỉ hiện trên mobile */}
      <button
        className="text-slate-600 transition-colors hover:text-black md:hidden"
        onClick={onMenuClick}
      >
        <Menu size={22} />
      </button>
      <h1 className="text-2xl font-bold text-black">{labelHeader}</h1>

      <div className="flex items-center justify-between">
        {actionButtons.length > 0 && (
          <div>{actionButtons.map((button) => button)}</div>
        )}

        <div className="flex items-center justify-center gap-2">
          <Bell color="var(--color-grey)" size={20} />
          <div className="h-8 w-8 overflow-hidden rounded-full">
            <img
              className="h-full w-full object-cover object-center"
              src={avatar}
              alt="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
