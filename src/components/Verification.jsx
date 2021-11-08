import React from 'react';
import { AlertTriangle, Award, Book, CreditCard, Edit2, Grid, HelpCircle, Layers, Link2, List, MapPin, Paperclip, TrendingUp, User } from 'react-feather';
import { Link } from "react-router-dom";

function Verification() {
  return (
    <div>
      <div className="osahan-verification">
        <div className="p-3 osahan-inner-header bg-white shadow-sm">
          <div className="d-flex align-items-center">
            <Link
              className="font-weight-bold text-dark text-back text-decoration-none d-flex"
              to="/login"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={18}
                fill="currentColor"
                className="back-page bi bi-chevron-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                />
              </svg>
              <span className="pl-2">Back to login</span>
            </Link>
            <div className="ml-auto d-flex align-items-center">
              <Link
                className="text-dark mx-2 top-nav-btn top-nav-btn-cart fs-18 position-relative"
                to="/contactus"
              >
                <HelpCircle />
              </Link>
              <Link
                className="toggle ml-2 text-dark hc-nav-trigger hc-nav-1"
                to="/login"
                role="button"
                aria-controls="hc-nav-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="currentColor"
                  className="bi bi-list"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="verify_number p-4">
          <h2 className="mb-3">
            Verify your
            <br />
            phone number
          </h2>
          <h6 className="text-black-50">Enter your OTP code here</h6>
          {/* <form action="landing.html"> */}
          {/* the above line is used in template */}
            <form action="/landing" >
            <div className="row my-5 mx-0">
              <div className="col pr-1 pl-0">
                <input
                  type="number"
                  defaultValue={4}
                  className="form-control form-control-lg"
                />
              </div>
              <div className="col px-2">
                <input
                  type="number"
                  defaultValue={0}
                  className="form-control form-control-lg"
                />
              </div>
              <div className="col px-2">
                <input
                  type="number"
                  defaultValue={8}
                  className="form-control form-control-lg"
                />
              </div>
              <div className="col pl-1 pr-0">
                <input
                  type="number"
                  defaultValue={0}
                  className="form-control form-control-lg"
                />
              </div>
            </div>
            <button className="btn btn-lg btn-primary btn-block">Verify Now</button>
          </form>
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

export default Verification
