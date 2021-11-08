import React from 'react';
import { 
  Book, 
  Layers, 
  Edit2, 
  TrendingUp, 
  Award, 
  Paperclip, 
  List, 
  CreditCard, 
  AlertTriangle, 
  Link2, Bookmark, 
  ChevronDown, 
  ChevronRight, 
  Clock, Filter, 
  Grid, Heart, 
  MapPin, 
  MessageCircle, 
  Phone, Search, 
  Star, User, X} from 'react-feather';
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

import NavLogo from "../img/nav-logo.png"





function Home() {
  return (
    <div>
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
                <Search size={14} />
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
        <div className="osahan-main" >
          <div className="cat-slider border-bottom" >
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
            <div className="px-3 pt-3 title d-flex align-items-center">
              <h6 className="m-0 font-weight-bold">Trending this week</h6>
              <Link className="font-weight-bold ml-auto" to="/trending">
                View all <ChevronRight size={15} />
              </Link>
            </div>
            <div className="trending-slider" >
              <div className="osahan-slider-item py-3 px-1" >
                <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm" >
                  <div className="list-card-image" >
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
              <div className="osahan-slider-item py-3 px-1" >
                <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm" >
                  <div className="list-card-image" >
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
        </div>
        
        {/* Footer */}
        <div className="osahan-menu-fotter border rounded shadow fixed-bottom bg-white m-3 px-3 py-2 text-center">
          <div className="row" >
            <div className="col selected" >
              <Link to ="/home"
                className="text-danger small font-weight-bold text-decoration-none"
              >
                <p className="h4 m-0 text-danger" >
                <img src="https://img.icons8.com/small/24/000000/home.png" alt="" />
                </p>
              </Link>
            </div>
            <div className="col">
              <Link
                to="/mostpopular"
                className="text-dark small font-weight-bold text-decoration-none"
              >
                <p className="h4 m-0">
                  <MapPin size={15}/>
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
                  <User size={15} className="feather-user" />
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
      
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        
        
      </div>
    </div>
  )
}

export default Home
