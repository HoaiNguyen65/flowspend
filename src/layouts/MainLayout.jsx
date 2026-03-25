import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function MainLayout({children, actionButtons = [], labelHeader=""}) {
    return ( 
        <div className="h-screen flex max-w-7xl mx-auto">
            <aside>
                <Sidebar />
            </aside>

            {/* main content */}
            <div className="flex flex-1 flex-col">
                {/* header */}
                <header className="px-5 py-8">
                    <Header actionButtons={actionButtons} labelHeader={labelHeader} />
                </header>                

                <main className="flex-1 bg-gray-100 p-6 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
     );
}

export default MainLayout;