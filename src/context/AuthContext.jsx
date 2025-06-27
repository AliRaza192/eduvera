import { createContext, useState, useEffect } from "react";
import { getToken, removeToken, setToken } from "../utils/storage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (token) {
      setUser({ token });
    }
    setLoading(false);
  }, []);

  const handleLogin = (token) => {
    setToken(token);
    setUser({ token });
  };

  const handleLogout = () => {
    removeToken();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, handleLogin, handleLogout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
