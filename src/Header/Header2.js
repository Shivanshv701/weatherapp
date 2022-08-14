import * as React from 'react';
import '../App.css'
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
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


const Header2 = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);



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
    setAnchorElUser(null);
  };

  const authfav = ( )=>{
    toast.error(' Login then access!', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
    };

  return (
   
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          

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
             
              <MenuItem className='mx-5'  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"><Link className='text-dark text-decoration-none' to="/home">HOME</Link></Typography>
                

                </MenuItem>
                <MenuItem className='mx-5'  onClick={handleCloseNavMenu}>
                  
                  <Typography textAlign="center"><Link className="nav-link text-success" 
                 onClick={authfav} to="/login">Favourite <span className="sr-only"></span></Link>
                  <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                  /></Typography>

                </MenuItem>
                <MenuItem className='mx-5'  onClick={handleCloseNavMenu}>
                  
                  <Typography textAlign="center"><Link className="nav-link text-success" 
                 onClick={authfav} to="/login">Your Weather <span className="sr-only"></span></Link>
                  <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                  /></Typography>

                </MenuItem>
            </Menu>
          </Box>
         
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
              fontWeight: 600,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <h2 className='mx-2'><i className="fa-solid text-warning mx-2 fa-lg fa-cloud-sun"></i></h2>
           <h6> Weather </h6>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      
            <div>
                <button className='btn btn-outline-success my-2 my-sm-0 mx-2 '><Link className='text-white text-decoration-none' to="/home">HOME</Link></button>

<button className="btn btn-outline-success my-2 my-sm-0 mx-2 " type="submit">
<Link className="nav-link text-white" 
                 onClick={authfav} to="/login">Favourite <span className="sr-only"></span></Link>
                  <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                  /></button>
                  <button className="btn btn-outline-success my-2 my-sm-0 mx-2 " type="submit">
<Link className="nav-link text-white" 
                 onClick={authfav} to="/login">Your Weather<span className="sr-only"></span></Link>
                  <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                  /></button>

</div>

            
          </Box>
          
          <Box className='mx-3 box-small' sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 , color: 'white' }}>
                
                
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
             
              <MenuItem onClick={handleCloseUserMenu}>
              <Link className='text-info text-decoration-none' to="/login">Login</Link>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                <a className='text-danger text-decoration-none' href="/signup">SignUp</a>
                </MenuItem>
            </Menu>
          </Box>

          <Box className='box-width' sx={{ flexGrow: 0 }}>
            
              
                <div className='login-size'>
                <button className="btn btn-outline-dark size-1 mx-2 my-2 my-sm-0  border border-dark" type="submit"><Link className='text-warning text-decoration-none' to="/login">LogIn</Link></button>

<button className="btn btn-outline-dark my-2 my-sm-0 size-2 border border-dark" type="submit"><Link className='text-warning text-decoration-none' to="/signup">SignUp</Link></button>
</div>

                
              
                

             
            
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
             
              <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center"><Link className='text-info text-decoration-none' to="/login">LogIn</Link></Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center"><Link className='text-info text-decoration-none' to="/signup">Signup</Link></Typography>
                </MenuItem>
            </Menu>
          </Box>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header2;