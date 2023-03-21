import React, { useState} from "react";

type User = {
  username: string;
  password: string;
  role: string;
};

export const AuthContext = React.createContext<{
  userRole: User;
  setUserRole: (userRole: User) => void;
}
>({
  userRole: {
    username: "",
    password: "",
    role: "",
  },
  setUserRole: () => {},
});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [userRole, setUserRole] = useState<User>({
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
