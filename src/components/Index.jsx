import React from 'react';
import "../vendor/slick/slick.min.css";
import "../vendor/slick/slick-theme.min.css";
import "../vendor/icons/feather.css";
import "../vendor/bootstrap/css/bootstrap.min.css";
import "../css/style.css";
import "../vendor/sidebar/demo.css";
import Logo from "../img/logo.png";
import { Link } from "react-router-dom";
import { ArrowRight } from 'react-feather';


function Index() {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-center vh-100 index-page">
        <div className="text-center">
          <Link to="/login">
            <img src={Logo} alt="" />
          </Link>
          <br />
          <div className="spinner" />
        </div>
      </div>
      <div className="fixed-bottom p-3 d-flex align-items-center justify-content-center">
        <Link to="/login"
          className="btn btn-block d-flex align-items-center btn-lg btn-warning"
          
        >
          Get Started <ArrowRight size={15} className="ml-auto" />
        </Link>
      </div>
    </div>
  )
}

export default Index
