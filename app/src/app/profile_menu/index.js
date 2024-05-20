import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import { Button, IconButton } from '@mui/material';
import { logout } from '../_api/logout';

export default function ProfileMenu({handleProfile, buttonText}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = async () => {
    await logout();
    window.location.href = '/login';
  };

  return (
    <div>
      {buttonText ?
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className="text-blue"
        startIcon={
          <svg width="25" height="25" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M18.3456 24.3071V24.3071C15.0012 24.3071 12.2896 21.5955 12.2896 18.251V15.223C12.2896 11.8785 15.0012 9.16687 18.3456 9.16687C21.6901 9.16687 24.4017 11.8785 24.4017 15.223V18.251C24.4017 21.5955 21.6901 24.3071 18.3456 24.3071V24.3071Z" stroke="#444444" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M27.5392 32.0504C25.8722 30.0912 23.3907 28.8497 20.6171 28.8497H16.075C13.2786 28.8497 10.7774 30.1124 9.11047 32.1003" stroke="#444444" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M1.69153 18.251C1.69153 9.05331 9.14809 1.59674 18.3458 1.59674C27.5435 1.59674 35 9.05331 35 18.251C35 27.4487 27.5435 34.9053 18.3458 34.9053C9.14809 34.9053 1.69153 27.4487 1.69153 18.251V18.251Z" stroke="#444444" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
      >
      </Button> 
      : <IconButton
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className="text-blue"
      >
        <svg width="25" height="25" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M18.3456 24.3071V24.3071C15.0012 24.3071 12.2896 21.5955 12.2896 18.251V15.223C12.2896 11.8785 15.0012 9.16687 18.3456 9.16687C21.6901 9.16687 24.4017 11.8785 24.4017 15.223V18.251C24.4017 21.5955 21.6901 24.3071 18.3456 24.3071V24.3071Z" stroke="#444444" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M27.5392 32.0504C25.8722 30.0912 23.3907 28.8497 20.6171 28.8497H16.075C13.2786 28.8497 10.7774 30.1124 9.11047 32.1003" stroke="#444444" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M1.69153 18.251C1.69153 9.05331 9.14809 1.59674 18.3458 1.59674C27.5435 1.59674 35 9.05331 35 18.251C35 27.4487 27.5435 34.9053 18.3458 34.9053C9.14809 34.9053 1.69153 27.4487 1.69153 18.251V18.251Z" stroke="#444444" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </IconButton >}
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={handleProfile}>Profile</MenuItem>
        <Divider />
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}