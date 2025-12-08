import React, { useState, useEffect } from "react";

const AuthContext = React.createContext();

export function useAuth() {
  return React.useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [role, setRole] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load role from localStorage on mount
  useEffect(() => {
    const savedRole = localStorage.getItem("userRole");
    if (savedRole) {
      setRole(savedRole);
    }
    setIsLoading(false);
  }, []);

  function loginAsAdmin() {
    setRole("admin");
    localStorage.setItem("userRole", "admin");
  }

  function loginAsUser() {
    setRole("user");
    localStorage.setItem("userRole", "user");
  }

  function logout() {
    setRole(null);
    localStorage.removeItem("userRole");
  }

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center text-slate-900">Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{ role, loginAsAdmin, loginAsUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
