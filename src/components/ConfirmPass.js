import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import './Pass.css'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


function ConfirmPass() {
  const navigate = useNavigate();
  let { token } = useParams();
  const formik = useFormik({
    initialValues: {
      password: '',
      confirmpassword: ''
    },
    validationSchema: yup.object().shape({
      password: yup.string()
        .required("Password is required"),
      confirmpassword: yup.string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
    }),
    onSubmit: async (values, { resetForm }) => {
      let { password } = values;
      await axios.post(`https://authentication7199.herokuapp.com/api/reset`, { newPass: password, token: token }).then((res) => {

        navigate('/login', { replace: true })
      }).catch((error) => {
        if (error.response) {
          resetForm({ values: '' })
        }
      })
    }
  })

  return (
    <div>
      <br />
      <br />
      <div className='col-md-6 bg-secondary py-5 offset-3 my-5'>
        <div className='pass card   py-5'>
          <div className="col-md-8 offset-2 ">
            <form className='p-0' onSubmit={formik.handleSubmit}>
              <div className="mb-2">
                <h4>Password</h4>
                <input className="form-control form-control-lg col-2" placeholder="password*" id="password" name="password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} type="password" />
                <span style={{ color: "red" }}>{formik.touched.password && formik.errors.password}</span>
              </div>
              <div className="mb-2">
                <h4> Confirm Password</h4>
                <input className="form-control form-control-lg col-2" placeholder="Re-enter password*" id="confirmpassword" name="confirmpassword" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.confirmpassword} type="password" />
                <span style={{ color: "red" }}>{formik.touched.confirmpassword && formik.errors.confirmpassword}</span>
              </div>
              <button type="submit" className="btn btn-primary bg-primary text-white mt-2">
                <h5>Change Password</h5>
              </button>




            </form>

          </div>
        </div>
      </div>
    </div>


  )
}

export default ConfirmPass