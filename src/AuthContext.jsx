export function AuthProvider({ children }) {
  const [role, setRole] = useState(null);

  function loginAsAdmin() {
    setRole("admin");
  }

  function loginAsUser() {
    setRole("user");
  }

  function logout() {
    setRole(null);
  }

  return (
    <AuthContext.Provider value={{ role, loginAsAdmin, loginAsUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
