import React, { useState } from 'react';
import {Button, Dialog, DialogActions,DialogContent, DialogTitle, TextField,} 
from '@material-ui/core';

interface User {
  id: number;
  name: string;
  email: string;
  gender: string;
  phone: string;
  country: string;
  }

  interface EditUserModalProps {
    open: boolean;
    onClose: () => void; // kapatınca fonsiyon tetiklenir
    user?: User; // olup olmadığını görmek için ?
    onSave: (user: User) => void;
    }
    const UserEdit: React.FC<EditUserModalProps> = ({
      open,
      onClose,
      user = {},  // ({}), bu sayede user prop'unun verilip verilmediği kontrol edilmez ve hata alınması engellenir.
      onSave,
      }) => {
      const [name, setName] = useState<string>(user.name || '');
      const [email, setEmail] = useState<string>(user.email || '');
      const [gender, setGender] = useState<string>(user.gender || '');
      const [phone, setPhone] = useState<string>(user.phone || '');
      const [country, setCountry] = useState<string>(user.country || '');


  const handleSave = () => {
    onSave({
      id: user.id,
      name,
      email,
      gender,
      phone,
      country,
    });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit User</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          label="Name"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          select
          margin="dense"
          label="Gender"
          fullWidth
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          SelectProps={{
            native: true,
          }}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </TextField>
        <TextField
          margin="dense"
          label="Phone"
          fullWidth
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Country"
          fullWidth
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSave} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UserEdit;
