import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const value = {
    user,
    login(email, password) {
      if (email === "samira@yahoo.com" && password === "12345678") {
        setUser(email);
      }
    },
    logout() {
      setUser(null);
    },
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
