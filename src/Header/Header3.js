import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AccountCircle from '@mui/icons-material/AccountCircle';
import "../Header/Footer.css"
import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from '../App';
import axios from 'axios';


const Header3 = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [user, setUser] = React.useState(null);
  const {state, dispatch } = useContext(UserContext);
  const Logout = () => {
    localStorage.clear();
    dispatch({ type: "USER", payload: false });
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  const handleCloseUserMenu = () => {
    localStorage.clear();
    setAnchorElUser(null);
  };


  function getName(){
   var userEmail =  localStorage.getItem('email');
   axios.get(`https://authentication7199.herokuapp.com/api/user/${userEmail}`,{
    headers: { Authorization: "Bearer " + localStorage.getItem("token") }})
    .then(res=> res.data)
    .then(data => setUser(data.User.firstname))
    
    
    return user
  }

  return (
   
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 900,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <h4 className='mx-2'><i className="fa-solid text-warning mx-2 fa-lg fa-cloud-sun"></i></h4>
            Weather App
            <div className='mx-5'></div>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {/* {pages.map((page) => (
                <MenuItem classname='mx-5' key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))} */}
              <MenuItem classname='mx-5'  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"><Link className='text-dark text-decoration-none' to="/home">HOME</Link></Typography>
                

                </MenuItem>
                <MenuItem classname='mx-5'  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"><Link className='text-dark text-decoration-none' to="/favourite">Favourite</Link></Typography>
                

                </MenuItem>
                <MenuItem classname='mx-5'  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"><Link className='text-dark text-decoration-none' to="/currentinfo">Your Weather</Link></Typography>
                

                </MenuItem>
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <h4 className='mx-2'><i className="fa-solid text-warning mx-2 fa-lg fa-cloud-sun"></i></h4>
            Weather
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))} */}
            <div>
                <button className='btn btn-outline-success my-2 my-sm-0 mx-2 '><Link className='text-white text-decoration-none' to="/home">HOME</Link></button>

<button className="btn btn-outline-success my-2 my-sm-0 mx-2 " type="submit"><Link className='text-white text-decoration-none' to="/favourite">Favourite</Link></button>

<button className="btn btn-outline-success my-2 my-sm-0 mx-2 " type="submit"><Link className='text-white text-decoration-none' to="/currentinfo">Your Weather</Link></button>


{/* <button className="btn btn-outline-success my-2 my-sm-0 mx-2" type="submit"><Link className='text-white text-decoration-none' to="/news">NEWS</Link></button> */}

</div>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 , color: 'white' }}>
                {getName()}
                {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
                <div className='logo-navbar mx-3 text-warning'>< AccountCircle /></div>
                
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Toypgraphy textAlign="center">{setting}</Typography>
                </MenuItem>
              ))} */}
              <MenuItem onClick={handleCloseUserMenu}>
              <Link className='text-info text-decoration-none' to="/edit">Update Profile</Link>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                <Link onClick={()=>{Logout()}} className='text-danger text-decoration-none' to="/login">Logout</Link>
                </MenuItem>
            </Menu>
          </Box>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header3;