import React from 'react'
import { Clock, Link, ShoppingBag, MapPin,Heart, User } from 'react-feather';
import Popular1 from "../img/popular1.png";
import NavLogo from "../img/nav-logo.png"

function MostPopular() {
  return (
    <div>
      <h3>Most Popular</h3>
      <div className="osahan-popular">
        <div className="p-3 osahan-inner-header bg-white shadow-sm">
          <div className="d-flex align-items-center">
            <a
              className="font-weight-bold text-dark text-back text-decoration-none "
              to="/home"
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
            </a>
            <span className="ml-3 h6 mb-0">
              Most Popular <small>20 places</small>
            </span>
            <div className="ml-auto d-flex align-items-center">
              <a
                className="text-dark mx-2 top-nav-btn top-nav-btn-cart fs-18 position-relative"
                to="checkout.html"
              >
                <i className="feather-shopping-bag" /> <span>3</span>
              </a>
              <a
                className="toggle ml-2 text-dark hc-nav-trigger hc-nav-1"
                to="#"
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
              </a>
            </div>
          </div>
        </div>
        {/* Most popular */}
        <div className="most_popular bg-light p-3">
          <div className="row">
            <div className="col-12">
              <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow">
                <div className="list-card-image">
                  <div className="trending-slider">
                    <div className="osahan-slider-item">
                      <a to="#">
                        <img
                          src="img/popular1.png"
                          className="img-fluid item-img w-100"
                        />
                      </a>
                    </div>
                    <div className="osahan-slider-item">
                      <a to="#">
                        <img
                          src="img/popular2.png"
                          className="img-fluid item-img w-100"
                        />
                      </a>
                    </div>
                    <div className="osahan-slider-item">
                      <a to="#">
                        <img
                          src="img/popular3.png"
                          className="img-fluid item-img w-100"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-3 position-relative">
                  <div className="list-card-body">
                    <h6 className="mb-1">
                      <a to="#" className="text-black">
                        The Sakafo Restaurant
                      </a>
                    </h6>
                    <p className="text-gray mb-3">North • Hamburgers • Pure veg</p>
                    <p className="text-gray mb-3 time">
                      <span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">
                        <i className="feather-clock" /> 15–25 min
                      </span>{" "}
                      <span className="float-right text-black-50">
                        {" "}
                        $500 FOR TWO
                      </span>
                    </p>
                  </div>
                  <div className="list-card-badge d-flex align-items-center">
                    <span className="badge badge-danger mr-2">OFFER</span>{" "}
                    <small>65% NEW50</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-2">
            <div className="col-12">
              <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow">
                <div className="list-card-image">
                  <div className="trending-slider">
                    <div className="osahan-slider-item">
                      <a to="#">
                        <img
                          src="img/popular4.png"
                          className="img-fluid item-img w-100"
                        />
                      </a>
                    </div>
                    <div className="osahan-slider-item">
                      <a to="#">
                        <img
                          src="img/popular5.png"
                          className="img-fluid item-img w-100"
                        />
                      </a>
                    </div>
                    <div className="osahan-slider-item">
                      <a to="#">
                        <img
                          src="img/popular6.png"
                          className="img-fluid item-img w-100"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-3 position-relative">
                  <div className="list-card-body">
                    <h6 className="mb-1">
                      <a to="#" className="text-black">
                        Conrad Chicago Restaurant
                      </a>
                    </h6>
                    <p className="text-gray mb-3">North • Hamburgers • Pure veg</p>
                    <p className="text-gray mb-3 time">
                      <span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">
                        <i className="feather-clock" /> 15–25 min
                      </span>{" "}
                      <span className="float-right text-black-50">
                        {" "}
                        $500 FOR TWO
                      </span>
                    </p>
                  </div>
                  <div className="list-card-badge d-flex align-items-center">
                    <span className="badge badge-danger mr-2">OFFER</span>{" "}
                    <small>65% NEW50</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-2">
            <div className="col-12">
              <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow">
                <div className="list-card-image">
                  <div className="trending-slider">
                    <div className="osahan-slider-item">
                      <a to="#">
                        <img
                          src="img/popular7.png"
                          className="img-fluid item-img w-100"
                        />
                      </a>
                    </div>
                    <div className="osahan-slider-item">
                      <a to="#">
                        <img
                          src="img/popular8.png"
                          className="img-fluid item-img w-100"
                        />
                      </a>
                    </div>
                    <div className="osahan-slider-item">
                      <a to="#">
                        <img
                          src="img/popular1.png"
                          className="img-fluid item-img w-100"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-3 position-relative">
                  <div className="list-card-body">
                    <h6 className="mb-1">
                      <a to="#" className="text-black">
                        Bayfront Catering Restaurant
                      </a>
                    </h6>
                    <p className="text-gray mb-3">North • Hamburgers • Pure veg</p>
                    <p className="text-gray mb-3 time">
                      <span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">
                        <i className="feather-clock" /> 15–25 min
                      </span>{" "}
                      <span className="float-right text-black-50">
                        {" "}
                        $500 FOR TWO
                      </span>
                    </p>
                  </div>
                  <div className="list-card-badge d-flex align-items-center">
                    <span className="badge badge-danger mr-2">OFFER</span>{" "}
                    <small>65% NEW50</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="osahan-menu-fotter border rounded shadow fixed-bottom bg-white m-3 px-3 py-2 text-center">
          <div className="row">
            <div className="col">
              <a
                to="/home"
                className="text-dark small font-weight-bold text-decoration-none"
              >
                <p className="h4 m-0">
                  <i className="feather-home" />
                </p>
                Home
              </a>
            </div>
            <div className="col selected">
              <a
                to="trending.html"
                className="text-danger small font-weight-bold text-decoration-none"
              >
                <p className="h4 m-0">
                  <i className="feather-map-pin text-danger" />
                </p>
                Trending
              </a>
            </div>
            <div className="col osahan-menu-logo">
              <a
                to="checkout.html"
                className="text-white small font-weight-bold text-decoration-none"
              >
                <img src="img/nav-logo.png" className="img-fluid" />
              </a>
            </div>
            <div className="col">
              <a
                to="favorites.html"
                className="text-dark small font-weight-bold text-decoration-none"
              >
                <p className="h4 m-0">
                  <i className="feather-heart" />
                </p>
                Favorites
              </a>
            </div>
            <div className="col">
              <a
                to="profile.html"
                className="text-dark small font-weight-bold text-decoration-none"
              >
                <p className="h4 m-0">
                  <i className="feather-user" />
                </p>
                Profile
              </a>
            </div>
          </div>
        </div>
      </div>
      <nav id="main-nav">
        <ul className="second-nav">
          <li>
            <a to="index.html">
              <i className="feather-grid mr-2" /> Intro
            </a>
          </li>
          <li>
            <a to="landing.html">
              <i className="feather-layers mr-2" /> Landing
            </a>
          </li>
          <li>
            <a to="/home">
              <i className="feather-home mr-2" /> Homepage
            </a>
          </li>
          <li>
            <a to="#">
              <i className="feather-edit-2 mr-2" /> Authentication
            </a>
            <ul>
              <li>
                <a to="login.html">Login</a>
              </li>
              <li>
                <a to="signup.html">Register</a>
              </li>
              <li>
                <a to="forgot_password.html">Forgot Password</a>
              </li>
              <li>
                <a to="verification.html">Verification</a>
              </li>
              <li>
                <a to="location.html">Location</a>
              </li>
              <li>
                <a to="select_country.html">Select Country</a>
              </li>
            </ul>
          </li>
          <li>
            <a to="trending.html">
              <i className="feather-trending-up mr-2" /> Trending
            </a>
          </li>
          <li>
            <a to="most_popular.html">
              <i className="feather-award mr-2" /> Most Popular
            </a>
          </li>
          <li>
            <a to="restaurant.html">
              <i className="feather-paperclip mr-2" /> Restaurant Detail
            </a>
          </li>
          <li>
            <a to="recipe.html">
              <i className="feather-file-text mr-2" /> Recipe
            </a>
          </li>
          <li>
            <a to="checkout.html">
              <i className="feather-list mr-2" /> Checkout
            </a>
          </li>
          <li>
            <a to="map.html">
              <i className="feather-map-pin mr-2" /> Live Map
            </a>
          </li>
          <li>
            <a to="payment.html">
              <i className="feather-credit-card mr-2" /> Payment
            </a>
          </li>
          <li>
            <a to="#">
              <i className="feather-user mr-2" /> Profile
            </a>
            <ul>
              <li>
                <a to="profile.html">Profile</a>
              </li>
              <li>
                <a to="favorites.html">Favorites</a>
              </li>
            </ul>
          </li>
          <li>
            <a to="#">
              <i className="feather-book mr-2" /> Pages
            </a>
            <ul>
              <li>
                <a to="filters.html">Filters</a>
              </li>
              <li>
                <a to="terms.html">Terms &amp; conditions</a>
              </li>
              <li>
                <a to="faq.html">FAQ</a>
              </li>
              <li>
                <a to="privacy.html">Privacy &amp; Policy</a>
              </li>
              <li>
                <a to="contact-us.html">Contact Us</a>
              </li>
            </ul>
          </li>
          <li>
            <a to="#">
              <i className="feather-alert-triangle mr-2" /> Error
            </a>
            <ul>
              <li>
                <a to="not-found.html">Not Found</a>
              </li>
              <li>
                <a to="maintence.html"> Maintence</a>
              </li>
              <li>
                <a to="coming-soon.html">Coming Soon</a>
              </li>
            </ul>
          </li>
          <li>
            <a to="#">
              <i className="feather-link mr-2" /> Navigation Link Example
            </a>
            <ul>
              <li>
                <a to="#">Link Example 1</a>
                <ul>
                  <li>
                    <a to="#">Link Example 1.1</a>
                    <ul>
                      <li>
                        <a to="#">Link</a>
                      </li>
                      <li>
                        <a to="#">Link</a>
                      </li>
                      <li>
                        <a to="#">Link</a>
                      </li>
                      <li>
                        <a to="#">Link</a>
                      </li>
                      <li>
                        <a to="#">Link</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a to="#">Link Example 1.2</a>
                    <ul>
                      <li>
                        <a to="#">Link</a>
                      </li>
                      <li>
                        <a to="#">Link</a>
                      </li>
                      <li>
                        <a to="#">Link</a>
                      </li>
                      <li>
                        <a to="#">Link</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a to="#">Link Example 2</a>
              </li>
              <li>
                <a to="#">Link Example 3</a>
              </li>
              <li>
                <a to="#">Link Example 4</a>
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
            <a className="text-danger" to="/home">
              <p className="h5 m-0">
                <i className="feather-home text-danger" />
              </p>
              Home
            </a>
          </li>
          <li className="github">
            <a to="faq.html">
              <p className="h5 m-0">
                <i className="feather-message-circle" />
              </p>
              FAQ
            </a>
          </li>
          <li className="ko-fi">
            <a to="contact-us.html">
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

export default MostPopular
