import React from 'react';
import { Book, Layers, Edit2, TrendingUp, Award, Paperclip,List, CreditCard, AlertTriangle, Link2, Bookmark, ChevronDown, ChevronRight, Clock, Filter, Grid, Heart, MapPin, MessageCircle, Phone, Search, Star, User, X } from 'react-feather';
import { Link } from 'react-router-dom';
import Icons1 from "../img/icons/Breakfast.png";
import Icons2 from "../img/icons/Burger.png";
import Icons3 from "../img/icons/Coffee.png";
import Icons4 from "../img/icons/ColaCan.png";
import Icons5 from "../img/icons/Fries.png";
import Icons6 from "../img/icons/Hotdog.png";
import Icons7 from "../img/icons/Pizza.png";
import Icons8 from "../img/icons/Salad.png";
import Icons9 from "../img/icons/Sandwich.png";
import Icons10 from "../img/icons/Steak.png";
import Icons11 from "../img/icons/Fries.png";
import Trending5 from "../img/trending5.png";
import Trending6 from "../img/trending6.png";
import Trending1 from "../img/trending1.png";
import Pro1 from "../img/pro1.jpg";
import Pro2 from "../img/pro2.jpg";
import Pro3 from "../img/pro3.jpg";
import Pro4 from "../img/pro4.jpg";
import Popular1 from "../img/popular1.png";
import Popular2 from "../img/popular2.png";
import Popular3 from "../img/popular3.png";
import Popular4 from "../img/popular4.png";
import Banner from "../img/banner.png";
import Sales1 from "../img/sales1.png";
import Sales2 from "../img/sales2.png";
import Sales3 from "../img/sales3.png";
import Map from './Map';
import NavLogo from "../img/nav-logo.png"





function Home() {
  return (
    <div>
      <h3>Home</h3>
      <div className="osahan-home-page">
        <div className="shadow p-3 homepage-osahan-header bg-white">
          <div className="title d-flex align-items-center">
            <div className="mr-auto">
              <Link
                className="text-dark d-flex align-items-center"
                to="/location"
              >
                <MapPin className="feather-map-pin fs-18 mr-2" />
                <h6 className="m-0 border-dashed-bottom">
                  Pune, Maharashtra 411014
                </h6>
              </Link>
            </div>
            <div className="ml-auto d-flex align-items-center">
              <Link
                className="text-dark mx-2 fs-18 top-nav-btn-cart position-relative"
                data-toggle="modal"
                data-target="#exampleModal"
                to="#"
              >
                <Filter size={15} />
              </Link>
              <Link
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
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className="input-group border osahan-search mt-3 rounded-lg shadow-sm overflow-hidden">
            <div className="input-group-prepend">
              <button className="border-0 btn btn-outline-secondary text-primary bg-white btn-block">
                <Search size={15} />
              </button>
            </div>
            <input
              type="text"
              className="shadow-none border-0 form-control pl-0"
              placeholder="Search for restaurants or dishes"
              aria-label
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
        {/* Filters */}
        <div className="osahan-main">
          <div className="cat-slider border-bottom">
            <div className="cat-item px-1 py-3">
              <Link className="d-block text-center" to="/trending">
                <img src={Icons1} className="img-fluid mb-2 shadow" />
                <p className="m-0 small">Healthy</p>
              </Link>
            </div>
            <div className="cat-item px-1 py-3">
              <Link className="d-block text-center" to="/trending">
                <img src={Icons2} className="img-fluid mb-2 shadow" />
                <p className="m-0 small">Pizza</p>
              </Link>
            </div>
            <div className="cat-item px-1 py-3">
              <Link className="d-block text-center" to="/trending">
                <img src={Icons3} className="img-fluid mb-2 shadow" />
                <p className="m-0 small">Burger</p>
              </Link>
            </div>
            <div className="cat-item px-1 py-3">
              <Link className="d-block text-center" to="/trending">
                <img src={Icons4} className="img-fluid mb-2 shadow" />
                <p className="m-0 small">Rolls</p>
              </Link>
            </div>
            <div className="cat-item px-1 py-3">
              <Link className="d-block text-center" to="/trending">
                <img src={Icons5} className="img-fluid mb-2 shadow" />
                <p className="m-0 small">Chaat</p>
              </Link>
            </div>
            <div className="cat-item px-1 py-3">
              <Link className="d-block text-center" to="/trending">
                <img src={Icons6} className="img-fluid mb-2 shadow" />
                <p className="m-0 small">Shawarma</p>
              </Link>
            </div>
            <div className="cat-item px-1 py-3">
              <Link className="d-block text-center" to="/trending">
                <img src={Icons7} className="img-fluid mb-2 shadow" />
                <p className="m-0 small">Fries</p>
              </Link>
            </div>
            <div className="cat-item px-1 py-3">
              <Link className="d-block text-center" to="/trending">
                <img src={Icons8} className="img-fluid mb-2 shadow" />
                <p className="m-0 small">Pasta</p>
              </Link>
            </div>
            <div className="cat-item px-1 py-3">
              <Link className="d-block text-center" to="/trending">
                <img src={Icons9} className="img-fluid mb-2 shadow" />
                <p className="m-0 small">Chaap</p>
              </Link>
            </div>
            <div className="cat-item px-1 py-3">
              <Link className="d-block text-center" to="/trending">
                <img src={Icons10} className="img-fluid mb-2 shadow" />
                <p className="m-0 small">Chicken</p>
              </Link>
            </div>
            <div className="cat-item px-1 py-3">
              <Link className="d-block text-center" to="/trending">
                <img src={Icons11} className="img-fluid mb-2 shadow" />
                <p className="m-0 small">Manchurian</p>
              </Link>
            </div>
          </div>
          {/* Trending this week */}
          <div className="px-3 pt-3 title d-flex align-items-center">
            <h6 className="m-0 font-weight-bold">Trending this week</h6>
            <Link className="font-weight-bold ml-auto" to="/trending">
              View all <ChevronRight size={15} />
            </Link>
          </div>
          {/* slider */}
          <div className="trending-slider">
            <div className="osahan-slider-item py-3 px-1">
              <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                <div className="list-card-image">
                  <div className="star position-absolute">
                    <span className="badge badge-success">
                      <Star size={15} className="feather-star" />
                      3.4
                    </span>
                  </div>
                  <div className="favourite-heart position-absolute">
                    <Link to="#">
                      <Bookmark size={15} className="feather-bookmark" />
                    </Link>
                  </div>
                  <div className="member-plan position-absolute">
                    <span className="badge badge-danger">HOT</span>
                  </div>
                  <Link to="/restaurant">
                    <img
                      src={Trending5}
                      className="img-fluid item-img w-100"
                    />
                  </Link>
                </div>
                <div className="p-3 position-relative">
                  <div className="list-card-body">
                    <h6 className="mb-1">
                      <Link to="/restaurant" className="text-black">
                        Famous Dave's Bar-B-Que
                      </Link>
                    </h6>
                    <p className="text-gray mb-3">Vegetarian, Indian, Pure veg</p>
                    <p className="text-gray mb-3 time">
                      <span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">
                        <Clock size={15} className="feather-clock" />
                        15–30 min
                      </span>{" "}
                      <span className="float-right text-black-50">
                        {" "}
                        $350 FOR TWO
                      </span>
                    </p>
                  </div>
                  <div className="list-card-badge d-flex align-items-center">
                    <span className="badge badge-danger mr-2">OFFER</span>{" "}
                    <small> Use Coupon NEW50</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="osahan-slider-item py-3 px-1">
              <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                <div className="list-card-image">
                  <div className="star position-absolute">
                    <span className="badge badge-success">
                      <Star size={15} className="feather-star" />
                      4.1
                    </span>
                  </div>
                  <div className="favourite-heart position-absolute">
                    <Link to="#">
                      <Bookmark size={15} className="feather-bookmark" />
                    </Link>
                  </div>
                  <div className="member-plan position-absolute">
                    <span className="badge badge-warning">Promoted</span>
                  </div>
                  <Link to="/restaurant">
                    <img
                      src={Trending6}
                      className="img-fluid item-img w-100"
                    />
                  </Link>
                </div>
                <div className="p-3 position-relative">
                  <div className="list-card-body">
                    <h6 className="mb-1">
                      <Link to="/restaurant" className="text-black">
                        Thai Famous Cuisine
                      </Link>
                    </h6>
                    <p className="text-gray mb-3">North Indian, Indian, Pure veg</p>
                    <p className="text-gray mb-3 time">
                      <span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">
                        <Clock size={15} className="feather-clock" />
                        30–35 min
                      </span>{" "}
                      <span className="float-right text-black-50">
                        {" "}
                        $250 FOR TWO
                      </span>
                    </p>
                  </div>
                  <div className="list-card-badge d-flex align-items-center">
                    <span className="badge badge-success mr-2">OFFER</span>{" "}
                    <small>65% off</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="osahan-slider-item py-3 px-1">
              <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                <div className="list-card-image">
                  <div className="star position-absolute">
                    <span className="badge badge-success">
                      <Star size={15} className="feather-star" />
                      3.1
                    </span>
                  </div>
                  <div className="favourite-heart position-absolute">
                    <Link to="#">
                      <Bookmark size={15} className="feather-bookmark" />
                    </Link>
                  </div>
                  <div className="member-plan position-absolute">
                    <span className="badge badge-info">Ads</span>
                  </div>
                  <Link to="/restaurant">
                    <img
                      src={Trending1}
                      className="img-fluid item-img w-100"
                    />
                  </Link>
                </div>
                <div className="p-3 position-relative">
                  <div className="list-card-body">
                    <h6 className="mb-1">
                      <Link to="/restaurent" className="text-black">
                        The Sakafo Restaurant
                      </Link>
                    </h6>
                    <p className="text-gray mb-3">North, Hamburgers, Pure veg</p>
                    <p className="text-gray mb-3 time">
                      <span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">
                        <i className="feather-clock" />
                        15–25 min
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
          <div className="offer-slider bg-white border-top border-bottom">
            <div className="cat-item px-1 py-3">
              <Link className="d-block text-center" to="/trending">
                <img
                  src={Pro1}
                  className="img-fluid rounded rounded-lg shadow-sm"
                />
              </Link>
            </div>
            <div className="cat-item px-1 py-3">
              <Link className="d-block text-center" to="/trending">
                <img
                  src={Pro2}
                  className="img-fluid rounded rounded-lg shadow-sm"
                />
              </Link>
            </div>
            <div className="cat-item px-1 py-3">
              <Link className="d-block text-center" to="/trending">
                <img
                  src={Pro3}
                  className="img-fluid rounded rounded-lg shadow-sm"
                />
              </Link>
            </div>
            <div className="cat-item px-1 py-3">
              <Link className="d-block text-center" to="/trending">
                <img
                  src={Pro4}
                  className="img-fluid rounded rounded-lg shadow-sm"
                />
              </Link>
            </div>
          </div>
          {/* Most popular */}
          <div className="px-3 pt-4 pb-3 title d-flex align-items-center">
            <h6 className="m-0 font-weight-bold">Most popular</h6>
            <Link className="font-weight-bold ml-auto" to="/mostpopular">
              26 places <ChevronRight size={15} className="feather-chevrons-right" />
            </Link>
          </div>
          {/* Most popular */}
          <div className="most_popular px-3">
            <div className="row">
              <div className="col-6 pr-1">
                <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                  <div className="list-card-image">
                    <div className="star position-absolute">
                      <span className="badge badge-success">
                        <Star size={15} /> 4.4
                      </span>
                    </div>
                    <div className="favourite-heart position-absolute">
                      <Link to="#">
                        <Bookmark size={15}  />
                      </Link>
                    </div>
                    <div className="member-plan position-absolute">
                      <span className="badge badge-danger">HOT</span>
                    </div>
                    <Link to="/restaurant">
                      <img
                        src={Popular1}
                        className="img-fluid item-img w-100"
                      />
                    </Link>
                  </div>
                  <div className="p-3 position-relative">
                    <div className="list-card-body">
                      <h6 className="mb-1">
                        <Link to="/restaurant" className="text-black">
                          The Sakafo Restaurant
                        </Link>
                      </h6>
                      <p className="text-gray mb-1 small">North, Hamburgers</p>
                      <p className="text-gray mb-1 rating"></p>
                      <ul className="rating-stars list-unstyled">
                        <li>
                          <Star size={15} className=" star_active" />
                          <Star size={15} className=" star_active" />
                          <Star size={15} className=" star_active" />
                          <Star size={15} className=" star_active" />
                          <Star size={15} />
                        </li>
                      </ul>
                      <p />
                    </div>
                    <div className="list-card-badge d-flex align-items-center">
                      <span className="badge badge-danger mr-2">OFFER</span>{" "}
                      <small>60% NEW50</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 pl-1">
                <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                  <div className="list-card-image">
                    <div className="star position-absolute">
                      <span className="badge badge-success">
                        <Star size={15} className="feather-star" /> 2.4
                      </span>
                    </div>
                    <div className="favourite-heart position-absolute">
                      <Link to="#">
                        <Bookmark className="feather-bookmark" />
                      </Link>
                    </div>
                    <div className="member-plan position-absolute">
                      <span className="badge badge-warning">Buy 1 Get 1 free</span>
                    </div>
                    <Link to="/restaurant">
                      <img
                        src={Popular2}
                        className="img-fluid item-img w-100"
                      />
                    </Link>
                  </div>
                  <div className="p-3 position-relative">
                    <div className="list-card-body">
                      <h6 className="mb-1">
                        <a to="/restaurent" className="text-black">
                          Thai Famous Indian Cuisine
                        </a>
                      </h6>
                      <p className="text-gray mb-1 small">Indian, Pure veg</p>
                      <p className="text-gray mb-1 rating"></p>
                      <ul className="rating-stars list-unstyled">
                        <li>
                          <Star size={15} className=" star_active" />
                          <Star size={15} className=" star_active" />
                          <Star size={15} className=" star_active" />
                          <Star size={15} className=" star_active" />
                          <Star size={15} />
                        </li>
                      </ul>
                      <p />
                    </div>
                    <div className="list-card-badge d-flex align-items-center">
                      <span className="badge badge-danger mr-2">OFFER</span>{" "}
                      <small>50% off</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row pt-2">
              <div className="col-6 pr-1">
                <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                  <div className="list-card-image">
                    <div className="star position-absolute">
                      <span className="badge badge-success">
                        <i className="feather-star" /> 4.3
                      </span>
                    </div>
                    <div className="favourite-heart position-absolute">
                      <Link to="#">
                        <Bookmark className="feather-bookmark" />
                      </Link>
                    </div>
                    <Link to="/restaurant">
                      <img
                        src={Popular3}
                        className="img-fluid item-img w-100"
                      />
                    </Link>
                  </div>
                  <div className="p-3 position-relative">
                    <div className="list-card-body">
                      <h6 className="mb-1">
                        <Link to="/restaurant" className="text-black">
                          The Sakafo Restaurant
                        </Link>
                      </h6>
                      <p className="text-gray mb-1 small">Hamburgers, Pure veg</p>
                      <p className="text-gray mb-1 rating"></p>
                      <ul className="rating-stars list-unstyled">
                        <li>
                          <Star size={15} className=" star_active" />
                          <Star size={15} className=" star_active" />
                          <Star size={15} className=" star_active" />
                          <Star size={15} className=" star_active" />
                          <Star size={15} />
                        </li>
                      </ul>
                      <p />
                    </div>
                    <div className="list-card-badge d-flex align-items-center">
                      <span className="badge badge-danger mr-2">OFFER</span>{" "}
                      <small>30% NEW50</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 pl-1">
                <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                  <div className="list-card-image">
                    <div className="star position-absolute">
                      <span className="badge badge-success">
                        <Star size={15} className="feather-star" /> 3.3
                      </span>
                    </div>
                    <div className="favourite-heart position-absolute">
                      <Link to="#">
                        <Bookmark className="feather-bookmark" />
                      </Link>
                    </div>
                    <div className="member-plan position-absolute">
                      <span className="badge badge-dark">Ads</span>
                    </div>
                    <Link to="/restaurant">
                      <img
                        src={Popular4}
                        className="img-fluid item-img w-100"
                      />
                    </Link>
                  </div>
                  <div className="p-3 position-relative">
                    <div className="list-card-body">
                      <h6 className="mb-1">
                        <Link to="/restaurant" className="text-black">
                          Bite Me Now Sandwiches
                        </Link>
                      </h6>
                      <p className="text-gray mb-1 small">American, Pure veg</p>
                      <p className="text-gray mb-1 rating"></p>
                      <ul className="rating-stars list-unstyled">
                        <li>
                          <Star size={15} className=" star_active" />
                          <Star size={15} className=" star_active" />
                          <Star size={15} className=" star_active" />
                          <Star size={15} className=" star_active" />
                          <Star size={15} />
                        </li>
                      </ul>
                      <p />
                    </div>
                    <div className="list-card-badge d-flex align-items-center">
                      <span className="badge badge-success mr-2">OFFER</span>{" "}
                      <small>40% off</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-3">
            <Link to="/trending">
              <img src={Banner} className="img-fluid rounded-lg" />
            </Link>
          </div>
          {/* Most sales */}
          <div className="px-3 pt-4 pb-3 title d-flex align-items-center">
            <h6 className="m-0 font-weight-bold">Most sales</h6>
            <Link className="font-weight-bold ml-auto" to="/mostpopular">
              26 places <ChevronRight size={15} className="feather-chevrons-right" />
            </Link>
          </div>
          {/* Most sales */}
          <div className="most_sale px-3 pb-5">
            <div className="row">
              <div className="col-12">
                <div className="d-flex align-items-center list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm homepage-osahan-list-items">
                  <div className="list-card-image">
                    <div className="star position-absolute">
                      <span className="badge badge-success">
                        <Star size={15} className="feather-star" /> 3.1
                      </span>
                    </div>
                    <div className="favourite-heart position-absolute">
                      <Link to="#">
                        <Bookmark size={15} className="feather-bookmark" />
                      </Link>
                    </div>
                    <div className="member-plan position-absolute">
                      <span className="badge badge-dark">Promoted</span>
                    </div>
                    <Link to="/restaurent">
                      <img
                        src={Sales1}
                        className="img-fluid item-img w-100"
                      />
                    </Link>
                  </div>
                  <div className="p-3 position-relative">
                    <div className="list-card-body">
                      <h6 className="mb-1">
                        <Link to="/restaurent" className="text-black">
                          The Sakafo Restaurant
                        </Link>
                      </h6>
                      <p className="text-gray mb-3">North, Hamburgers, Pure veg</p>
                      <p className="text-gray mb-3 time">
                        <span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">
                          <Clock size={15} className="feather-clock" />
                          15–25 min
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
              <div className="col-12 pt-2">
                <div className="d-flex align-items-center list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm homepage-osahan-list-items">
                  <div className="list-card-image">
                    <div className="star position-absolute">
                      <span className="badge badge-success">
                        <Star size={15} className="feather-star" /> 3.1
                      </span>
                    </div>
                    <div className="favourite-heart position-absolute">
                      <Link to="#">
                        <i className="feather-bookmark" />
                      </Link>
                    </div>
                    <div className="member-plan position-absolute">
                      <span className="badge badge-dark">Promoted</span>
                    </div>
                    <Link to="/restaurent">
                      <img
                        src={Sales2}
                        className="img-fluid item-img w-100"
                      />
                    </Link>
                  </div>
                  <div className="p-3 position-relative">
                    <div className="list-card-body">
                      <h6 className="mb-1">
                        <Link to="/restaurent" className="text-black">
                          Thai Famous Cuisine
                        </Link>
                      </h6>
                      <p className="text-gray mb-3">
                        North Indian, Indian, Pure veg
                      </p>
                      <p className="text-gray mb-3 time">
                        <span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">
                          <Clock size={15} className="feather-clock" />
                          30–35 min
                        </span>{" "}
                        <span className="float-right text-black-50">
                          {" "}
                          $250 FOR TWO
                        </span>
                      </p>
                    </div>
                    <div className="list-card-badge d-flex align-items-center">
                      <span className="badge badge-success mr-2">OFFER</span>{" "}
                      <small>65% off</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 pt-2">
                <div className="d-flex align-items-center list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm homepage-osahan-list-items">
                  <div className="list-card-image">
                    <div className="star position-absolute">
                      <span className="badge badge-success">
                        <Star size={15} className="feather-star" /> 3.1
                      </span>
                    </div>
                    <div className="favourite-heart position-absolute">
                      <Link to="#">
                        <Bookmark size={15} className="feather-bookmark" />
                      </Link>
                    </div>
                    <div className="member-plan position-absolute">
                      <span className="badge badge-dark">Promoted</span>
                    </div>
                    <Link to="/restaurent">
                      <img
                        src={Sales3}
                        className="img-fluid item-img w-100"
                      />
                    </Link>
                  </div>
                  <div className="p-3 position-relative">
                    <div className="list-card-body">
                      <h6 className="mb-1">
                        <Link to="/restaurent" className="text-black">
                          Bite Me Now Sandwiches
                        </Link>
                      </h6>
                      <p className="text-gray mb-3">North, Hamburgers, Pure veg</p>
                      <p className="text-gray mb-3 time">
                        <span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">
                          <Clock size={15} className="feather-clock" />
                          15–25 min
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
        </div>
        {/* Footer */}
        <div className="osahan-menu-fotter border rounded shadow fixed-bottom bg-white m-3 px-3 py-2 text-center">
          <div className="row">
            <div className="col selected">
              <Link
                to="/home"
                className="text-danger small font-weight-bold text-decoration-none"
              >
                <p className="h4 m-0">
                  <Home  size={15} className="text-danger" />
                </p>
                Home
              </Link>
            </div>
            <div className="col">
              <Link
                to="/mostpopular"
                className="text-dark small font-weight-bold text-decoration-none"
              >
                <p className="h4 m-0">
                  <Map size={15}/>
                </p>
                Trending
              </Link>
            </div>
            <div className="col osahan-menu-logo">
              <Link
                to="/checkout"
                className="text-white small font-weight-bold text-decoration-none"
              >
                <img src={NavLogo} className="img-fluid" />
              </Link>
            </div>
            <div className="col">
              <Link
                to="/favorites"
                className="text-dark small font-weight-bold text-decoration-none"
              >
                <p className="h4 m-0">
                  <Heart size={15} />
                </p>
                Favorites
              </Link>
            </div>
            <div className="col">
              <Link
                to="/profile"
                className="text-dark small font-weight-bold text-decoration-none"
              >
                <p className="h4 m-0">
                  <User size={!5} className="feather-user" />
                </p>
                Profile
              </Link>
            </div>
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
                <Home className="feather-home text-danger" />
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
                <Phone className="feather-phone" />
              </p>
              Help
            </a>
          </li>
        </ul>
      </nav>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header align-items-center">
              <h5 className="modal-title" id="exampleModalLabel">
                Filter
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <X size={15} className=" float-right" />
              </button>
            </div>
            <div className="modal-body p-0">
              <div className="osahan-filter">
                <div className="filter">
                  <div className="filters-body">
                    <div id="accordion">
                      <div className="filters-card border-bottom">
                        <div className="filters-card-header" id="headingOne">
                          <h6 className="mb-0">
                            <Link
                              to="#"
                              className="btn-link p-3"
                              data-toggle="collapse"
                              data-target="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              Location{" "}
                              <ChevronDown className="float-right" />
                            </Link>
                          </h6>
                        </div>
                        <div
                          id="collapseOne"
                          className="collapse show"
                          aria-labelledby="headingOne"
                          data-parent="#accordion"
                        >
                          <div className="filters-card-body pb-3 card-shop-filters">
                            <div className="custom-control custom-checkbox p-0">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="cb1"
                              />
                              <label
                                className="custom-control-label py-1 w-100 px-3"
                                htmlFor="cb1"
                              >
                                Apollo Bandar
                                <small className="text-black-50">230</small>
                              </label>
                            </div>
                            <div className="custom-control custom-checkbox p-0">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="cb2"
                              />
                              <label
                                className="custom-control-label py-1 w-100 px-3"
                                htmlFor="cb2"
                              >
                                Bahadur Bapat Road
                                <small className="text-black-50">95</small>
                              </label>
                            </div>
                            <div className="custom-control custom-checkbox p-0">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="cb3"
                              />
                              <label
                                className="custom-control-label py-1 w-100 px-3"
                                htmlFor="cb3"
                              >
                                Colaba Mumbai
                                <small className="text-black-50">35</small>
                              </label>
                            </div>
                            <div className="custom-control custom-checkbox p-0">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="cb4"
                              />
                              <label
                                className="custom-control-label py-1 w-100 px-3"
                                htmlFor="cb4"
                              >
                                College Road{" "}
                                <small className="text-black-50">46</small>
                              </label>
                            </div>
                            <div className="custom-control custom-checkbox p-0">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="cb5"
                              />
                              <label
                                className="custom-control-label py-1 w-100 px-3"
                                htmlFor="cb5"
                              >
                                Mathuradas Mills
                                <small className="text-black-50">20</small>
                              </label>
                            </div>
                            <div className="mt-1 px-3">
                              <Link to="#" className="link">
                                See all
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="filters-card border-bottom">
                        <div className="filters-card-header" id="headingTwo">
                          <h6 className="mb-0">
                            <Link
                              to="#"
                              className="btn-link p-3"
                              data-toggle="collapse"
                              data-target="#collapsetwo"
                              aria-expanded="true"
                              aria-controls="collapsetwo"
                            >
                              All cuisines
                              <i className="feather-chevron-down float-right" />
                            </Link>
                          </h6>
                        </div>
                        <div
                          id="collapsetwo"
                          className="collapse show"
                          aria-labelledby="headingTwo"
                          data-parent="#accordion"
                        >
                          <div className="filters-card-body pb-3 card-shop-filters">
                            <form className="filters-search px-3">
                              <div className="form-group mb-2 position-relative">
                                <Search className="feather-search" />
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Start typing to search..."
                                />
                              </div>
                            </form>
                            <div className="custom-control custom-checkbox p-0">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="cb6"
                              />
                              <label
                                className="custom-control-label py-1 w-100 px-3"
                                htmlFor="cb6"
                              >
                                American{" "}
                                <small className="text-black-50">156</small>
                              </label>
                            </div>
                            <div className="custom-control custom-checkbox p-0">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="cb7"
                              />
                              <label
                                className="custom-control-label py-1 w-100 px-3"
                                htmlFor="cb7"
                              >
                                Pizza <small className="text-black-50">120</small>
                              </label>
                            </div>
                            <div className="custom-control custom-checkbox p-0">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="cb8"
                              />
                              <label
                                className="custom-control-label py-1 w-100 px-3"
                                htmlFor="cb8"
                              >
                                Healthy <small className="text-black-50">130</small>
                              </label>
                            </div>
                            <div className="custom-control custom-checkbox p-0">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="cb9"
                              />
                              <label
                                className="custom-control-label py-1 w-100 px-3"
                                htmlFor="cb9"
                              >
                                Vegetarian{" "}
                                <small className="text-black-50">120</small>
                              </label>
                            </div>
                            <div className="custom-control custom-checkbox p-0">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="cb10"
                              />
                              <label
                                className="custom-control-label py-1 w-100 px-3"
                                htmlFor="cb10"
                              >
                                {" "}
                                Chinese <small className="text-black-50">111</small>
                              </label>
                            </div>
                            <div className="custom-control custom-checkbox p-0">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="cb11"
                              />
                              <label
                                className="custom-control-label py-1 w-100 px-3"
                                htmlFor="cb11"
                              >
                                {" "}
                                Hamburgers{" "}
                                <small className="text-black-50">95</small>
                              </label>
                            </div>
                            <div className="custom-control custom-checkbox p-0">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="cb12"
                              />
                              <label
                                className="custom-control-label py-1 w-100 px-3"
                                htmlFor="cb12"
                              >
                                {" "}
                                Dessert <small className="text-black-50">50</small>
                              </label>
                            </div>
                            <div className="custom-control custom-checkbox p-0">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="cb13"
                              />
                              <label
                                className="custom-control-label py-1 w-100 px-3"
                                htmlFor="cb13"
                              >
                                {" "}
                                Chicken <small className="text-black-50">32</small>
                              </label>
                            </div>
                            <div className="custom-control custom-checkbox p-0">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="cb14"
                              />
                              <label
                                className="custom-control-label py-1 w-100 px-3"
                                htmlFor="cb14"
                              >
                                {" "}
                                Indian <small className="text-black-50">156</small>
                              </label>
                            </div>
                            <div className="mt-1 px-3">
                              <Link to="#" className="link">
                                See all
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="filters-card border-bottom">
                        <div className="filters-card-header" id="headingCategory">
                          <h6 className="mb-0">
                            <Link
                              to="#"
                              className="btn-link p-3"
                              data-toggle="collapse"
                              data-target="#collapseFeature"
                              aria-expanded="true"
                              aria-controls="collapseFeature"
                            >
                              Feature{" "}
                              <ChevronDown className="float-right" />
                            </Link>
                          </h6>
                        </div>
                        <div
                          id="collapseFeature"
                          className="collapse"
                          aria-labelledby="headingCategory"
                          data-parent="#accordion"
                        >
                          <div className="filters-card-body pb-3 card-shop-filters">
                            <div className="custom-control custom-checkbox p-0">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="cb15"
                              />
                              <label
                                className="custom-control-label py-1 w-100 px-3"
                                htmlFor="cb15"
                              >
                                Free Delivery
                                <small className="text-black-50">156</small>
                              </label>
                            </div>
                            <div className="custom-control custom-checkbox p-0">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="cb26"
                              />
                              <label
                                className="custom-control-label py-1 w-100 px-3"
                                htmlFor="cb26"
                              >
                                Coupons <small className="text-black-50">120</small>
                              </label>
                            </div>
                            <div className="custom-control custom-checkbox p-0">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="cb37"
                              />
                              <label
                                className="custom-control-label py-1 w-100 px-3"
                                htmlFor="cb37"
                              >
                                Open Now [1:31am]
                                <small className="text-black-50">85</small>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="filters-card border-bottom">
                        <div className="filters-card-header" id="headingOffer">
                          <h6 className="mb-0">
                            <Link
                              to="#"
                              className="btn-link p-3"
                              data-toggle="collapse"
                              data-target="#collapseOffer"
                              aria-expanded="true"
                              aria-controls="collapseOffer"
                            >
                              Delivery time{" "}
                              <ChevronDown className="float-right" />
                            </Link>
                          </h6>
                        </div>
                        <div
                          id="collapseOffer"
                          className="collapse"
                          aria-labelledby="headingOffer"
                          data-parent="#accordion"
                        >
                          <div className="filters-card-body pb-3 card-shop-filters">
                            <div className="custom-control custom-checkbox p-0">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="cb19"
                              />
                              <label
                                className="custom-control-label py-1 w-100 px-3"
                                htmlFor="cb19"
                              >
                                Any Time{" "}
                              </label>
                            </div>
                            <div className="custom-control custom-checkbox p-0">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="cb20"
                              />
                              <label
                                className="custom-control-label py-1 w-100 px-3"
                                htmlFor="cb20"
                              >
                                25 min
                              </label>
                            </div>
                            <div className="custom-control custom-checkbox p-0">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="cb36"
                              />
                              <label
                                className="custom-control-label py-1 w-100 px-3"
                                htmlFor="cb36"
                              >
                                30 min
                              </label>
                            </div>
                            <div className="custom-control custom-checkbox p-0">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="cb47"
                              />
                              <label
                                className="custom-control-label py-1 w-100 px-3"
                                htmlFor="cb47"
                              >
                                40 min
                              </label>
                            </div>
                            <div className="custom-control custom-checkbox p-0">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="cb58"
                              />
                              <label
                                className="custom-control-label py-1 w-100 px-3"
                                htmlFor="cb58"
                              >
                                50 min
                              </label>
                            </div>
                            <div className="mt-1 px-3">
                              <Link to="#" className="link">
                                See all
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="filters-card border-bottom">
                        <div className="filters-card-header" id="headingCategory">
                          <h6 className="mb-0">
                            <Link
                              to="#"
                              className="btn-link p-3"
                              data-toggle="collapse"
                              data-target="#collapseCategory"
                              aria-expanded="true"
                              aria-controls="collapseCategory"
                            >
                              Sort By{" "}
                              <ChevronDown className="feather-chevron-down float-right" />
                            </Link>
                          </h6>
                        </div>
                        <div
                          id="collapseCategory"
                          className="collapse"
                          aria-labelledby="headingCategory"
                          data-parent="#accordion"
                        >
                          <div className="filters-card-body pb-3 card-shop-filters">
                            <div className="custom-control px-0 custom-radio">
                              <input
                                type="radio"
                                id="customRadio1"
                                name="location"
                                className="custom-control-input"
                                defaultChecked
                              />
                              <label
                                className="custom-control-label py-1 w-100 px-3"
                                htmlFor="customRadio1"
                              >
                                Top Rated
                              </label>
                            </div>
                            <div className="custom-control px-0 custom-radio">
                              <input
                                type="radio"
                                id="customRadio2"
                                name="location"
                                className="custom-control-input"
                              />
                              <label
                                className="custom-control-label py-1 w-100 px-3"
                                htmlFor="customRadio2"
                              >
                                Nearest Me
                              </label>
                            </div>
                            <div className="custom-control px-0 custom-radio">
                              <input
                                type="radio"
                                id="customRadio3"
                                name="location"
                                className="custom-control-input"
                              />
                              <label
                                className="custom-control-label py-1 w-100 px-3"
                                htmlFor="customRadio3"
                              >
                                Cost High to Low
                              </label>
                            </div>
                            <div className="custom-control px-0 custom-radio">
                              <input
                                type="radio"
                                id="customRadio4"
                                name="location"
                                className="custom-control-input"
                              />
                              <label
                                className="custom-control-label py-1 w-100 px-3"
                                htmlFor="customRadio4"
                              >
                                Cost Low to High
                              </label>
                            </div>
                            <div className="custom-control px-0 custom-radio">
                              <input
                                type="radio"
                                id="customRadio5"
                                name="location"
                                className="custom-control-input"
                              />
                              <label
                                className="custom-control-label py-1 w-100 px-3"
                                htmlFor="customRadio5"
                              >
                                Most Popular
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer p-0 border-0 p-3">
              <div className="col-6 m-0 pl-0 pr-1">
                <button
                  type="button"
                  className="btn border btn-lg btn-block"
                  data-dismiss="modal"
                >
                  Clear
                </button>
              </div>
              <div className="col-6 m-0 pr-0 pl-1">
                <button
                  type="button"
                  className="btn btn-primary btn-lg btn-block"
                  data-dismiss="modal"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
