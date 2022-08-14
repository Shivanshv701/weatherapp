import React, {  useContext } from 'react'
import logo from '../img/weather.png'
import {Link,useNavigate} from "react-router-dom"
import {useFormik} from 'formik'
import * as Yup from 'yup';
import axios from 'axios';
import { UserContext } from '../App';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const {state, dispatch} = useContext(UserContext)
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email:'',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email()
        .required("Email is required"),
        password: Yup.string()
        .required("Password required"),
        
    }),
    onSubmit: async (values ,  { resetForm })=>{
      let {email , password} = values;
      await axios.post('https://authentication7199.herokuapp.com/api/login',{email, password}).then((res)=>{
      dispatch({type:"USER", payload: true}); 
      toast.success('Added successfullly!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      navigate('/home', {replace:true})
      let token = res.data.token;
      localStorage.setItem('email', email)
      localStorage.setItem("token", token );
      axios.defaults.headers.common['Authorization'] = token;
      }).catch((error)=>{
        if(error.response){

          toast.error('Incorrect Password', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
        });
          resetForm({ values : ''})
        }
      })
    }
  });

    return (
      <div className='my-5 contain'>
      
      
      
      <div className='card bg-color px-5 '>
        <div className='row '>
          <div className='col-md-6'>
            <div className='col-md-11'>
              <br/>
              <img className='auth-logo' src={logo} alt="welcome img"></img>

            </div>
          </div>
          
          <div className='card bg-info my-4 px-5 py-4 col-md-5 signup-form'>
      <form className='p-0' onSubmit={formik.handleSubmit}>
        <h3 className='text-info text-black'>Log In</h3>
        <div className="mb-3">
          <label>Email</label>
          <input className="form-control" id="email" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} type="text"  placeholder="Enter email*" />
          <span style={{color:"red"}}>{formik.touched.email && formik.errors.email}</span>
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input className="form-control" id="password" name="password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password}  placeholder="Enter password*" type="password"/>
          <span style={{color:"red"}}>{formik.touched.password && formik.errors.password}</span>
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary bg-primary text-white"  >
            Login
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
          <Link className='text-danger' to="/forgotpass">Forgot Password?</Link><br />
          <span className='text-black'>New User?     <Link className='text-danger' to="/signup">SignUp</Link></span>
        </p>
        <br/>
      </form>
      </div>
      </div>
      </div>
      </div>
    )
  }