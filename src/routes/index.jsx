import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../features/auth/pages/Login";
import Dashboard from "../features/dashboard/pages/Dashboard";
import Register from "../features/auth/pages/Register";
import ProtectedRoute from "./ProtectedRoute";
import Transaction from "../features/transactions/pages/Transaction";
import Budget from "../features/budget/pages/Budget";
import Category from "../features/category/pages/Category";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/category" element={<Category />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
