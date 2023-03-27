import React, { useState } from "react";

export const AuthContext = React.createContext({
  userRole: {
    username: "",
    password: "",
    role: "",
  },
  setUserRole: () => {}
});

const AuthProvider = ({ children }) => {
  const [userRole, setUserRole] = useState({
    username: "",
    password: "",
    role: "",
  });

  return (
    <AuthContext.Provider value={{ userRole, setUserRole }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
