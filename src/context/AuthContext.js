import { createContext, useContext, useState } from "react";

const Authcontext = createContext();

export const AuthContext = () => useContext(Authcontext);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) ?? false
  );
  const data = {
    user,
    setUser,
  };
  return <Authcontext.Provider value={data}>{children}</Authcontext.Provider>;
}
