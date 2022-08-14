import React from 'react'
import { Link } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import Header2 from './Header2';
import Header3 from './Header3';
import 'react-toastify/dist/ReactToastify.css';




export default function Header() {
  const token = localStorage.getItem('token')
 
  const Logout = () => {
    localStorage.clear();
    
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
  const Navbar1 = ()=>{
    if(!token)
    {
      return(
        <nav className='fixed-top'>
          <Header2 />
        </nav>
      )
    }
    else{
      return(
        <nav className='fixed-top'>
        <Header3 />
      </nav>
      )
    }
  }
  const Navbarshow = () => {
    if (!token) {
      return (
        <div>
          <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-secondary px-5">
            <a className="navbar-brand px-5 text-white" href="/"><i className="fa-solid text-warning mx-2 fa-lg fa-cloud-sun"></i>Weather App</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="true" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav mr-auto mt-4 mt-lg-0">
                <li className="nav-item active">
                  <Link className="nav-link text-white" to="/home">Home <span className="sr-only"></span></Link>
                
                </li>
                <li className="nav-item">
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
                  />
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" onClick={authfav} to="/login"><span className="sr-only"></span></Link>
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
                  />
                </li>

              </ul>
              <div className='offset-8'>


                <button className="btn btn-outline-success my-2 my-sm-0 mx-2 border border-white" type="submit"><Link className='text-warning text-decoration-none' to="/login">LogIn</Link></button>

                <button className="btn btn-outline-success my-2 my-sm-0 border border-white" type="submit"><Link className='text-warning text-decoration-none' to="/signup">SignUp</Link></button>



              </div>
            </div>
          </nav>
        </div>
      )
    } else {
      return (
        <div>
          <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-secondary px-5">
            <a className="navbar-brand px-5 text-white" href="#"><i className="fa-solid text-warning mx-2 fa-lg fa-cloud-sun"></i>Weather App</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="true" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav mr-auto mt-4 mt-lg-0">
                <li className="nav-item active">
                  <Link className="nav-link text-white" to="/home">Home <span className="sr-only"></span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/favourite">Favourite <span className="sr-only"></span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/news">NEWS <span className="sr-only"></span></Link>
                </li>

              </ul>
              <div className='offset-8'>

                
                <button className="btn btn-outline-success my-2 my-sm-0 mx-2 border border-white" type="submit"><Link className='text-warning text-decoration-none' to="/edit">Update Profie</Link></button>


                
                <button className="btn btn-outline-success my-2 my-sm-0 border border-white" onClick={Logout} type="submit"><Link className='text-warning text-decoration-none' to="/login">Logout</Link></button>
          
              </div>
            </div>
          </nav>
        </div>

      )
    }
  }


  return (
    <div>
      <Navbar1 />

    </div>
  )
}
