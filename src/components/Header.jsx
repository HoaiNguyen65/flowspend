import { Bell } from "lucide-react";
import avatar from "../assets/images/avatar.png";
function Header({ actionButtons, labelHeader }) {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-bold text-black">{labelHeader}</h1>

      <div className="flex items-center justify-between">    
        {actionButtons.length > 0 && <div>{actionButtons.map((button) => button)}</div>}

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
