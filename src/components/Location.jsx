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
      <nav id="main-nav">
        <ul className="second-nav">
          <li>
            <Link to="/">
              <Grid className="mr-2" /> Intro
            </Link>
          </li>
          <li>
            <Link to="/landing">
              <Layers className="mr-2" /> Landing
            </Link>
          </li>
          <li>
            <Link to="/home">
              <i className="feather-home mr-2" /> Homepage
            </Link>
          </li>
          <li>
            <Link to="/authentication">
              <Edit2 className="mr-2" /> Authentication
            </Link>
            <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Register</Link>
              </li>
              <li>
                <Link to="/forgotpassword">Forgot Password</Link>
              </li>
              <li>
                <Link to="/verification">Verification</Link>
              </li>
              <li>
                <Link to="/location">Location</Link>
              </li>
              <li>
                <Link to="/selectcountry">Select Country</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/trending">
              <TrendingUp className="mr-2" /> Trending
            </Link>
          </li>
          <li>
            <Link to="/mostpopular">
              <Award className="mr-2" /> Most Popular
            </Link>
          </li>
          <li>
            <a href="restaurant.html">
              <Paperclip className="mr-2" /> Restaurant Detail
            </a>
          </li>
          <li>
            <a href="recipe.html">
              <i className="feather-file-text mr-2" /> Recipe
            </a>
          </li>
          <li>
            <Link to="/recipe">
              <List className="mr-2" /> Checkout
            </Link>
          </li>
          <li>
            <Link to="/map">
              <MapPin className="mr-2" /> Live Map
            </Link>
          </li>
          <li>
            <Link to="/payment">
              <CreditCard className="mr-2" /> Payment
            </Link>
          </li>
          <li>
            <Link to="/profile" >
              <User className="mr-2" /> Profile
            </Link>
            <ul>
              <li>
                <Link to="/profile" >Profile</Link>
              </li>
              <li>
                <Link to="/favorites">Favorites</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/pages">
              <Book className="mr-2" /> Pages
            </Link>
            <ul>
              <li>
                <Link to="filters">Filters</Link>
              </li>
              <li>
                <Link to="/terms">Terms &amp; conditions</Link>
              </li>
              <li>
                <Link to="/faqs">FAQ</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy &amp; Policy</Link>
              </li>
              <li>
                <Link to="/contactus">Contact Us</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/errors">
              <AlertTriangle className="mr-2" /> Error
            </Link>
            <ul>
              <li>
                <Link to="/notfound">Not Found</Link>
              </li>
              <li>
                <Link to="/maintence"> Maintence</Link>
              </li>
              <li>
                <Link to="/coming-soon">Coming Soon</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/navigationlink">
              <Link2 className="mr-2" /> Navigation Link Example
            </Link>
            <ul>
              <li>
                <a href="#">Link Example 1</a>
                <ul>
                  <li>
                    <a href="#">Link Example 1.1</a>
                    <ul>
                      <li>
                        <a href="#">Link</a>
                      </li>
                      <li>
                        <a href="#">Link</a>
                      </li>
                      <li>
                        <a href="#">Link</a>
                      </li>
                      <li>
                        <a href="#">Link</a>
                      </li>
                      <li>
                        <a href="#">Link</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Link Example 1.2</a>
                    <ul>
                      <li>
                        <a href="#">Link</a>
                      </li>
                      <li>
                        <a href="#">Link</a>
                      </li>
                      <li>
                        <a href="#">Link</a>
                      </li>
                      <li>
                        <a href="#">Link</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Link Example 2</a>
              </li>
              <li>
                <a href="#">Link Example 3</a>
              </li>
              <li>
                <a href="#">Link Example 4</a>
              </li>
              <li data-nav-custom-content>
                <div className="custom-message">
                  You can add any custom content to your navigation items. This text
                  is just an example.
                </div>
              </li>
            </ul>
          </li>
        </ul>
        <ul className="bottom-nav">
          <li className="email">
            <a className="text-danger" href="home.html">
              <p className="h5 m-0">
                <i className="feather-home text-danger" />
              </p>
              Home
            </a>
          </li>
          <li className="github">
            <a href="faq.html">
              <p className="h5 m-0">
                <i className="feather-message-circle" />
              </p>
              FAQ
            </a>
          </li>
          <li className="ko-fi">
            <a href="contact-us.html">
              <p className="h5 m-0">
                <i className="feather-phone" />
              </p>
              Help
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Location
