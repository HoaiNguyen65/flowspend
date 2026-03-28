import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function MainLayout({ children, actionButtons = [], labelHeader = "" }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mx-auto flex h-screen max-w-7xl overflow-x-hidden">
      <aside className="hidden md:block">
        <Sidebar />
      </aside>

      {/* Overlay mobile — click ra ngoài để đóng */}
      {isOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar mobile */}
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-white transition-transform duration-300 md:hidden ${isOpen ? "translate-x-0" : "-translate-x-full"} `}
      >
        <Sidebar onClose={() => setIsOpen(false)} />
      </aside>

      {/* main content */}
      <div className="flex flex-1 flex-col">
        {/* header */}
        <header className="px-5 py-8">
          <Header
            onMenuClick={() => setIsOpen(true)}
            actionButtons={actionButtons}
            labelHeader={labelHeader}
          />
        </header>

        <main className="flex-1 overflow-y-auto bg-gray-100 p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
