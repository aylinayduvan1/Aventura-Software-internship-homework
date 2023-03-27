import React from 'react';
import { Link } from 'react-router-dom';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
//import logo from '../HYEF.png';

function Navbar() {
  return (
    <div className='logo-style'>
      <h2>HFEF</h2>
      {/* <img src={logo} alt='HYEF'style={{width:100}} /> */}
      <Link to='/panel'><AdminPanelSettingsIcon style={{ fontSize: "35", color:" rgb(62, 62, 62)" }}/></Link>
    </div>
  );
}

export default Navbar;
