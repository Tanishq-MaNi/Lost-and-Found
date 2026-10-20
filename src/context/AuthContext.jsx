import { createContext, useCallback, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

function readUser() {
  try {
    return JSON.parse(
      localStorage.getItem("user") || sessionStorage.getItem("user") || "null"
    );
  } catch {
    return null;
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(readUser);

  // remember = true  -> localStorage (survives closing the browser)
  // remember = false -> sessionStorage (cleared when the tab closes)
  const login = useCallback(({ token, user }, remember = true) => {
    const keep = remember ? localStorage : sessionStorage;
    const drop = remember ? sessionStorage : localStorage;

    drop.removeItem("token");
    drop.removeItem("user");
    keep.setItem("token", token);
    keep.setItem("user", JSON.stringify(user));

    setUser(user);
  }, []);

  const logout = useCallback(() => {
    ["token", "user"].forEach((key) => {
      localStorage.removeItem(key);
      sessionStorage.removeItem(key);
    });
    setUser(null);
  }, []);

  // Lets the API layer (Step 3) log the user out on a 401 response.
  useEffect(() => {
    window.addEventListener("auth:logout", logout);
    return () => window.removeEventListener("auth:logout", logout);
  }, [logout]);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside <AuthProvider>");
  return context;
}