import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import UserProfile from "../components/UserProfile";
import UserForm from "../components/UserForm";
import RegisterPage from "../pages/RegisterPage";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/profile" element={<UserProfile />} />
      <Route path="/user-form" element={<UserForm />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};

export default AppRoutes;
