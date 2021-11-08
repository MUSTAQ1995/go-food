import React from 'react';
import { Link } from 'react-router-dom';
import video from "../img/bg.mp4";
import Envelop from "../img/envelope.svg";
import AppleLogo from "../img/apple-logo.svg";
import Facebook from "../img/facebook.svg";
import Search from "../img/search.svg"
import { 
  AlertTriangle, 
  Award, Book, 
  CreditCard, 
  Edit2, FileText, 
  Grid, Home, 
  Layers, Link2, 
  List, MapPin, 
  MessageCircle, 
  Paperclip, 
  TrendingUp, User } from 'react-feather';




function Login() {
  return (
    <div>
      <div className="login-page vh-100">
        <video loop autoPlay muted id="vid">
          <source src={video} type="video/mp4" />
          <source src={video} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
        <div className="p-4 login-page-form">
          <h2 className="text-white my-0">Welcome Back</h2>
          <p className="text-white text-50">Sign in to continue</p>
          <form className="mt-5 mb-4" action="verification.html">
            <div className="form-group phone-z mb-3 position-relative">
              <input
                id="phone"
                className="form-control-flag-osahan"
                name="phone"
                placeholder="Phone Number"
                type="tel"
              />
            </div>
            
              <Link 
                to="/verification"
              >
                <button className="btn btn-primary btn-lg btn-block">
                 Send OTP
               </button>
              </Link>
           
            <div className="or-osahan text-center my-4 border-bottom">
              <span>OR</span>
            </div>
            <div className="mb-3">
              <button className="btn btn-lg btn-light btn-block">
                <img src={Envelop} alt="" /> Continue with Email
              </button>
            </div>
            <div className="mb-3">
              <button className="btn btn-lg btn-light btn-block">
                <img src={AppleLogo} alt="" /> Continue with Apple
              </button>
            </div>
            <div className="mb-3">
              <div className="row">
                <div className="col-6 pr-1">
                  <button className="btn btn-lg btn-light btn-block">
                    <img src={Facebook} alt="" /> Facebook
                  </button>
                </div>
                <div className="col-6 pl-1">
                  <button className="btn btn-lg btn-light btn-block">
                    <img src={Search} alt="" /> Google
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="fixed-bottom text-center p-3">
          <p className="text-white mb-1">By continuing, you agree to our</p>
          <p className="small">
            <Link className="text-white-50 border-bottom" to="/terms">
              Terms of Service
            </Link>
            <Link className="text-white-50 border-bottom mx-3" to="privacy">
              Privacy Policy
            </Link>
            <Link className="text-white-50 border-bottom" to="/terms">
              Content Policies
            </Link>
          </p>
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
              <Home className="mr-2" /> Homepage
            </Link>
          </li>
          <li>
            <Link to="/authemtication">
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
            <a href="trending.html">
              <TrendingUp className="mr-2" /> Trending
            </a>
          </li>
          <li>
            <a href="most_popular.html">
              <Award className="mr-2" /> Most Popular
            </a>
          </li>
          <li>
            <a href="restaurant.html">
              <Paperclip className="mr-2" /> Restaurant Detail
            </a>
          </li>
          <li>
            <a href="recipe.html">
              <FileText className="fmr-2" /> Recipe
            </a>
          </li>
          <li>
            <a href="checkout.html">
              <List className="mr-2" /> Checkout
            </a>
          </li>
          <li>
            <a href="map.html">
              <MapPin className="mr-2" /> Live Map
            </a>
          </li>
          <li>
            <a href="payment.html">
              <CreditCard className="mr-2" /> Payment
            </a>
          </li>
          <li>
            <a href="#">
              <User className="mr-2" /> Profile
            </a>
            <ul>
              <li>
                <a href="profile.html">Profile</a>
              </li>
              <li>
                <a href="favorites.html">Favorites</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <Book className="mr-2" /> Pages
            </a>
            <ul>
              <li>
                <a href="filters.html">Filters</a>
              </li>
              <li>
                <a href="terms.html">Terms &amp; conditions</a>
              </li>
              <li>
                <a href="faq.html">FAQ</a>
              </li>
              <li>
                <a href="privacy.html">Privacy &amp; Policy</a>
              </li>
              <li>
                <a href="contact-us.html">Contact Us</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <AlertTriangle className="mr-2" /> Error
            </a>
            <ul>
              <li>
                <a href="not-found.html">Not Found</a>
              </li>
              <li>
                <a href="maintence.html"> Maintence</a>
              </li>
              <li>
                <a href="coming-soon.html">Coming Soon</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <Link2 className="mr-2" /> Navigation Link Example
            </a>
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
                <Home className="text-danger" />
              </p>
              Home
            </a>
          </li>
          <li className="github">
            <a href="faq.html">
              <p className="h5 m-0">
                <MessageCircle className="feather-message-circle" />
              </p>
              FAQ
            </a>
          </li>
          <li className="ko-fi">
            <a href="contact-us.html">
              <p className="h5 m-0">
                <Home className="feather-phone" />
              </p>
              Help
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Login
