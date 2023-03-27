import React, { useEffect, useContext } from "react";
import UserTable from "../components/UserTable";
import AdminPanelSettingsSharpIcon from "@mui/icons-material/AdminPanelSettingsSharp";
import { AuthContext } from "../components/AuthProvider";

const Panel  = () => {
  const { userRole } = useContext(AuthContext);

  useEffect(() => {
    console.log(userRole);
  }, [userRole]);

  return (
    <div>
      <div className="user-icon">
        <AdminPanelSettingsSharpIcon style={{ fontSize: "45" }} />
        <h3>USER MANAGEMENT</h3>
      </div>

      <UserTable />
    </div>
  );
}

export default Panel;
