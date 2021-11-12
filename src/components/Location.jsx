import React from 'react';
import { 
  AlertTriangle, 
  Award, Book, 
  CreditCard, 
  Edit2, Grid, 
  Layers, Link2, 
  List, MapPin, 
  Navigation, 
  Paperclip, 
  TrendingUp, 
  User } from 'react-feather';
import { Link } from 'react-router-dom';
import Location1 from "../img/location.svg";

function Location() {
  return (
    <div>
      <div className="vh-100 location location-page">
        <div className="d-flex align-items-center justify-content-center vh-100 flex-column">
          <img
            src={Location1}
            className="img-fluid mx-auto"
            alt="Responsive image"
          />
          <div className="px-4 text-center mt-4">
            <h5 className="text-dark">Hi, nice to meet you!</h5>
            <p className="mb-5">
              Choose your location to start find restaurants around you.
            </p>
            <Link to="/home" className="btn btn-lg btn-primary btn-block my-4">
              <Navigation size={14} /> Use current location
            </Link>
            <Link to="/selectcountry" className="text-primary h6">
              Select it manually
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Location
