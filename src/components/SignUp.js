import React from 'react';
import logo from '../img/weather.png'
import '../App.css'
import { Link, useNavigate } from "react-router-dom"
import { useFormik } from 'formik'
import * as Yup from 'yup';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function SignUp() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    },
    validationSchema: Yup.object({
      firstname: Yup.string()
        .required("First Name is required"),
      lastname: Yup.string()
        .required("Last Name is required"),
      email: Yup.string().email()
        .required("Email is  required"),
      password: Yup.string()
        .required("Password is required"),
      passwordConfirmation: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
    }),
    onSubmit: async (values, { resetForm }) => {
      let { firstname, lastname, email, password } = values;
      await axios.post('https://authentication7199.herokuapp.com/api/register', { firstname, lastname, email, password }).then((res) => {
        console.log(res.json);
        navigate('/login', { replace: true })
        toast.success('Register successfuly!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }).catch((error) => {
        if (error.response) {
          toast.error('User Already Exists Kindly Login', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
        });
          resetForm({ values: '' })
        }
      })
    }
  });
  return (
    <div className='my-5 container'>
      
      
      
      <div className='card bg-color mx-5 '>
        <div className='row '>
          <div className='col-md-5 mx-5'>
            <div className='col-md-4 mt-5'>
              <br/>
              <img src={logo} alt="welcome img"></img>

            </div>
          </div>
          <div className='card bg-info my-4 px-5 py-4 col-md-5 mx-4'>
            
            
            
            <form className='p-0' onSubmit={formik.handleSubmit}>
              <h3 className='text-info text-black'>Sign Up</h3>
              <div>
                <div className="mb-3">
                  <label>First Name</label>
                  <input className="form-control" id="firstname" name="firstname" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.firstname} type="text" placeholder="First Name*" />
                  <span style={{ color: "red" }}>{formik.touched.firstname && formik.errors.firstname}</span>
                </div>
                <div className="mb-3">
                  <label>Last Name</label>
                  <input className="form-control" id="lastname" name="lastname" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.lastname} type="text" placeholder="Last Name*" />
                  <span style={{ color: "red" }}>{formik.touched.lastname && formik.errors.lastname}</span>
                </div>
              </div>
              <div className="mb-3">
                <label>Email address</label>
                <input className="form-control" placeholder="email*" id="email" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} type="text" />
                <span style={{ color: "red" }}>{formik.touched.email && formik.errors.email}</span>
              </div>
              <div className="mb-3">
                <label>Password</label>
                <input className="form-control form-control-lg col-2" placeholder="password*" id="password" name="password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} type="password" />
                <span style={{ color: "red" }}>{formik.touched.password && formik.errors.password}</span>
              </div>
              <div className="mb-3">
                <label> Confirm Password</label>
                <input className="form-control form-control-lg col-2" placeholder="Re-enter password*" id="passwordConfirmation" name="passwordConfirmation" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.passwordConfirmation} type="password" />
                <span style={{ color: "red" }}>{formik.touched.passwordConfirmation && formik.errors.passwordConfirmation}</span>
              </div>
              <div className="mb-3">
                <div className="custom-control custom-checkbox">
                </div>
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary bg-primary text-white">
                  SignUp
                </button>
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
              </div>
              <p className="forgot-password mt-2 text-right">

                <span className='text-black'>Already Registered?     <Link className='text-success' to="/login">LogIn</Link></span>
              </p>
              <br />
              
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp