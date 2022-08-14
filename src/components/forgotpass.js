import React from 'react'
import './Pass.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Forgotpass() {
  const [email, setEmail] = React.useState([]);
  const navigate = useNavigate()
  const onsub = () =>{
    axios.post("https://authentication7199.herokuapp.com//api/forget", {email}).then(res => {console.log(res.json);})
    .catch((error) => {
      if (error.response) {
        throw error;
      }
    })
   
    toast.success('Check Your Mail For Reset Link ', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
    navigate('/login', {replace:true})
  };
  const changeHandler = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value)
  }
  return (
    <div >
        <br/>
        <br/>
        <br/>
        <br/>
        <div className='col-md-6 offset-3 bg-secondary my-5'>
        <div className='pass card my-2  p-5'>
        <h4 className='text-center'>Reset  Password</h4>
        <div className="col-md-8 offset-2">
        <label>E-mail Address</label>
            <br/>
            <br/>
          <input
            className='form-control'
            value = {email} 
            onChange={changeHandler}
            type='email'
            placehoder='Enter Email'
          />
          <button type="submit"  onClick={onsub} className="btn btn-primary bg-primary text-white mt-4 my-5">
            Send Reset Link
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
        <br/>
        
        </div>
        </div>
    </div>
  )
}

export default Forgotpass