import useAuth from "../../../hooks/useAuth";
import MainLayout from "../../../layouts/MainLayout";

function Dashboard() {
    const { user, signOut } = useAuth();

    const handleSignOut = () => {
        signOut();
    };

    return (
        <MainLayout labelHeader="Dashboard">
        <div>
            <h1>Dashboard</h1>
            <p>Welcome, {user?.email}</p>
            <button onClick={handleSignOut}>Sign Out</button>
        </div>
        </MainLayout>
    );
}

export default Dashboard;