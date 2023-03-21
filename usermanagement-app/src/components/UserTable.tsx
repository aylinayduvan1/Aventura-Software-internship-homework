import * as React from "react";
import { DataGrid, GridColDef } from "@material-ui/data-grid";
import axios from "axios";
import { AuthContext } from "./AuthProvider";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import UserEdit from "./UserEdit";
import ROLES from "../util/ROLES";

interface User {
  id: number;
  name: string;
  email: string;
  gender: string;
  phone: string;
  country: string;
}

const UserTable: React.FC = () => {
  const [users, setUsers] = React.useState<User[]>([]);
  const [selectedUserId, setSelectedUserId] = React.useState<number | null>(null);
  const [open, setOpen] = React.useState(false); 
  const { userRole } = React.useContext(AuthContext);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", type: "number", width: 90 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "gender", headerName: "Gender", width: 130 },
    { field: "phone", headerName: "Phone", width: 150 },
    { field: "country", headerName: "Country", width: 200 },
    {
      field: "action",
      headerName: "Action",
      hide: userRole.role !== ROLES.admin,
      width: 150,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params) => {
        const handleEdit = () => {
          if (userRole === "user") {
            return;
          }
          const id = params.row.id as number;
          console.log(`Edit user with id ${id}`);
          setSelectedUserId(id);
          setOpen(true); // Open the modal
        };

        const handleDelete = () => {
          const id = params.row.id as number;
          if (
            window.confirm(
              `Are you sure you want to delete user with id ${id}?`
            )
          ) {
            const newUsers = users.filter((user) => user.id !== id);
            setUsers(newUsers);
          }
        };

        return (
          <>
            <IconButton onClick={handleEdit}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={handleDelete}>
              <DeleteIcon />
            </IconButton>
          </>
        );
      },
      getRowId: (row: User) => row.id,
    },
  ];

  React.useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${userRole}` },
    };
    axios
      .get("https://randomuser.me/api/?results=50", config)
      .then((response) => {
        const results = response.data.results;
        const formattedResults = results.map((result, index) => ({
          id: index + 1,
          name: `${result.name.title} ${result.name.first} ${result.name.last}`,
          email: result.email,
          gender: result.gender,
          phone: result.phone,
          country: result.location.country,
        }));
        setUsers(formattedResults);
      });
  }, [userRole]);


  const handleSave = (updatedUser: User) => {
    const index = users.findIndex((user) => user.id === updatedUser.id);
    const newUsers = [...users];
    newUsers[index] = updatedUser;
    setUsers(newUsers);
    setSelectedUserId(null);
    setOpen(false);
  };

  return (
    <div className="usertable">
      <DataGrid
        rows={users}
        columns={columns}
        pageSize={10}
        checkboxSelection={true}
        getRowId={(row) => row.id}
      />
      {selectedUserId && ( // Render the modal only when selectedUserId is not null
        <UserEdit
          open={open}
          onClose={() => {
            setSelectedUserId(null);
            setOpen(false); // Close the modal when it is closed
          }}
          user={users.find((user) => user.id === selectedUserId)}
          onSave={handleSave}
        />
      )}
    </div>
  );
};
export default UserTable;
