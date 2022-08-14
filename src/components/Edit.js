import React from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import { useFormik } from 'formik'
import * as Yup from 'yup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Edit() {
  const nav = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      
    },
    validationSchema: Yup.object({
      firstname: Yup.string()
        .required("First Name is required"),
      lastname: Yup.string()
        .required("Last Name is required"),
      email: Yup.string().email()
        .required("Email is required"),
    }),
    onSubmit: async (values, {resetForm}) => {
      console.log(values)
      let { firstname, lastname, email } = values;
      await axios.put('https://authentication7199.herokuapp.com/api/update', { firstname, lastname, email });
      resetForm({ values : ''})
      nav('/home', { replace: true })

    }
  });
  return (
    <div className='bg-clr'>
      <br />
      <br />
      <div className='mt-5'>
        <div className='row mx-5'>

          <div className='col-md-3 mr-1'>
            <div className='col-md-4'>
            </div>
          </div>
          <div className='bg-clr col-md-5 mx-4'>
            <form className='p-0' onSubmit={formik.handleSubmit}>
              <h3 className='text-dark'>Edit Profile</h3>
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
                <input className="form-control" placeholder="Enter E-mail to verify" id="email" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} type="text" />
                <span style={{ color: "red" }}>{formik.touched.email && formik.errors.email}</span>
              </div>
              <div className="custom-control custom-checkbox">

              </div>

              <div className="d-grid">
                <button type='submit'  className="btn btn-primary bg-primary text-white mt-1">
                  Update Profile
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
              <p className="forgot-password mt-2 text-right"></p>
              <br />
              <br />

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Edit