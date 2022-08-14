import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div >
        <div >
        <footer className='footer footer-basic bg-primary'>
            <div className="social"><a href="#"><i className="icon ion-social-instagram"><i className="fa-brands fa-instagram"></i></i></a><a href="#"><i className="icon ion-social-snapchat"><i className="fa-brands fa-snapchat"></i></i></a><a href="#"><i className="icon ion-social-twitter"><i className="fa-brands fa-twitter"></i></i></a><a href="#"><i className="icon ion-social-facebook"><i className="fa-brands fa-facebook"></i></i></a></div>
            <ul className="list-inline">
                <li className="list-inline-item"><a href="#">Home</a></li>
                <li className="list-inline-item"><a href="#">Services</a></li>
                <li className="list-inline-item"><a href="#">About</a></li>
                <li className="list-inline-item"><a href="#">Terms</a></li>
                <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
            </ul>
            <h1 className="copyright text-dark">Weather App © 2022</h1>
        </footer>
    </div>
    </div>
  )
}

export default Footer