import useAuth from "../hooks/useAuth";

function Dashboard() {
    const { user, signOut } = useAuth();

    const handleSignOut = () => {
        signOut();
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome, {user?.email}</p>
            <button onClick={handleSignOut}>Sign Out</button>
        </div>
    );
}

export default Dashboard;