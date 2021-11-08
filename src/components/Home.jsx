import React from 'react';
import { 
  ArrowLeft,
  ChevronRight, 
  Filter, 
  Heart, 
  MapPin, 
  Search, 
  Star,} from 'react-feather';
import { Link } from 'react-router-dom';
import FoodOne from "../img/foodOne.jpg";
import FoodTwo from "../img/foodTwo.jpg";
import ReactStars from "react-rating-stars-component";



const firstExample = {
  size: 15,
  value: 2.5,
  edit: true,
  isHalf:true,
  onChange: newValue => {
    console.log(`Example 2: new value is ${newValue}`);
  }
};

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
                {/* <ArrowBackIosIcon fontSize={"small"} /> */}
                {/* <MapPin className="feather-map-pin fs-18 mr-2" /> */}
                <h6 className="border-dashed-bottom home__location ">
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
             {/* Most popular */}
            <div className="px-3 pt-4 pb-3 title d-flex align-items-center">
              <h6 className="m-0 font-weight-bold">Order Again</h6>
              <Link className="font-weight-bold ml-auto" to="/allrestraunt">
                see more <ChevronRight size={15} className="feather-chevrons-right" />
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
                          <i className="feather-star" /> 4.4
                        </span>
                      </div>
                      <div className="favourite-heart position-absolute">
                        <Link to="#">
                        <i className="feather-bookmark" />
                        </Link>
                      </div>
                      <div className="member-plan position-absolute">
                        <span className="badge badge-danger">HOT</span>
                      </div>
                      <Link to="/restaurant">
                        <img
                          src={FoodOne}
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
                        <ReactStars 
                          className="rating-stars" 
                          {...firstExample} 
                          
                          />
                        {/* <ul className="rating-stars list-unstyled">
                          <li>
                            <Star size={15} className=" star_active" />
                            <Star size={15} className=" star_active" />
                            <Star size={15} className=" star_active" />
                            <Star size={15} className=" star_active" />
                            <Star size={15} />
                          </li>
                        </ul> */}
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
                          <i className="feather-star" /> 2.4
                        </span>
                      </div>
                      <div className="favourite-heart position-absolute">
                        <Link to="#">
                          <i className="feather-bookmark" />
                        </Link>
                      </div>
                      <div className="member-plan position-absolute">
                        <span className="badge badge-warning">Buy 1 Get 1 free</span>
                      </div>
                      <Link to="/restaurant">
                        <img
                          src={FoodOne}
                          className="img-fluid item-img w-100"
                        />
                      </Link>
                    </div>
                    <div className="p-3 position-relative">
                      <div className="list-card-body">
                        <h6 className="mb-1">
                          <Link to="/restaurant" className="text-black">
                            Thai Famous Indian Cuisine
                          </Link>
                        </h6>
                        <p className="text-gray mb-1 small">Indian, Pure veg</p>
                        <p className="text-gray mb-1 rating"></p>
                        <ReactStars className="rating-stars" {...firstExample} />
                        {/* <ul className="rating-stars list-unstyled">
                          <li>
                            <Star size={15} className=" star_active" />
                            <Star size={15} className=" star_active" />
                            <Star size={15} className=" star_active" />
                            <Star size={15} className=" star_active" />
                            <Star size={15} />
                          </li>
                        </ul> */}
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
                          <i className="feather-bookmark" />
                        </Link>
                      </div>
                      <Link to="/restaurant">
                        <img
                          src={FoodOne}
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
                        <ReactStars className="rating-stars" 
                          count={5}
                          size={15}
                          activeColor="#ffd700"
                          isHalf={true}
                          value={3}
                        />
                        {/* <ul className="rating-stars list-unstyled">
                          <li>
                            <i className=" feather-star star_active" />
                            <i className="feather-star star_active" />
                            <i className=" feather-star star_active" />
                            <i className="feather-star star_active" />
                            <i className="feather-star" />
                          </li>
                        </ul> */}
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
                          <i className="feather-star" /> 3.3
                        </span>
                      </div>
                      <div className="favourite-heart position-absolute">
                        <Link to="#">
                          <i className="feather-bookmark" />
                        </Link>
                      </div>
                      <div className="member-plan position-absolute">
                        <span className="badge badge-dark">Ads</span>
                      </div>
                      <Link to="/restaurant">
                        <img
                          src={FoodOne}
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
                        <ReactStars className="rating-stars" {...firstExample} />
                        {/* <ul className="rating-stars list-unstyled">
                          <li>
                            <Star size={15} className=" star_active" />
                            <Star size={15} className=" star_active" />
                            <Star size={15} className=" star_active" />
                            <Star size={15} className=" star_active" />
                            <Star size={15} />
                          </li>
                        </ul> */}
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
            <Link to="/trending">
              <div className="p-3 banner__details">
                <img src={FoodTwo} className="banner__image" />
              </div>
            </Link>
            {/* Most sales */}
            <div className="px-3 pt-4 pb-3 title d-flex align-items-center">
              <h6 className="m-0 font-weight-bold">Most sales</h6>
              {/* <Link className="font-weight-bold ml-auto" to="/mostpopular">
                26 places <ChevronRight size={15} className="feather-chevrons-right" />
              </Link> */}
            </div>
            {/* Most sales */}
            <div className="most_sale px-3 pb-5">
              <div className="row">
                <div className="col-12">
                  <div className="d-flex align-items-center list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm homepage-osahan-list-items">
                    <div className="list-card-image">
                      <div className="star position-absolute">
                        <span className="badge badge-success">
                        <i className="feather-star" />3.1
                          {/* <Star size={15} className="feather-star" /> 3.1 */}
                        </span>
                      </div>
                      <div className="favourite-heart position-absolute">
                        <Link to="#">
                        <i className="feather-bookmark" />
                          {/* <Bookmark size={15} className="feather-bookmark" /> */}
                        </Link>
                      </div>
                      <div className="member-plan position-absolute">
                        <span className="badge badge-dark">Promoted</span>
                      </div>
                      <Link to="/restaurant">
                        <img
                          src={FoodOne}
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
                        <p className="text-gray mb-3">North, Hamburgers, Pure veg</p>
                        <p className="text-gray mb-3 time">
                          <span className="bg-white text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">
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
                <div className="col-12 pt-2">
                  <div className="d-flex align-items-center list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm homepage-osahan-list-items">
                    <div className="list-card-image">
                      <div className="star position-absolute">
                        <span className="badge badge-success">
                          <i className="feather-star" />3.1
                          {/* <Star size={15} className="feather-star" /> 3.1 */}
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
                      <Link to="/restaurant">
                        <img
                          src={FoodOne}
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
                        <p className="text-gray mb-3">
                          North Indian, Indian, Pure veg
                        </p>
                        <p className="text-gray mb-3 time">
                          <span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">
                            <i className="feather-clock" />
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
                          <i className="feather-star" /> 3.1
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
                      <Link to="/restaurant">
                        <img
                          src={FoodOne}
                          className="img-fluid item-img w-100"
                        />
                      </Link>
                    </div>
                    <div className="p-3 position-relative mb-30">
                      <div className="list-card-body">
                        <h6 className="mb-1">
                          <Link to="/restaurant" className="text-black">
                            Bite Me Now Sandwiches
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
            </div>
          </div>
        </div>
        <br/>
        <br/>
   
        
        {/* Footer */}
        <div class="osahan-menu-fotter fixed-bottom bg-white px-3 py-2 text-center mt-30">
          <div class="row">
            <div class="col selected">
              <Link to="/home" class="text-danger small font-weight-bold text-decoration-none">
                  <p class="h4 m-0"><i class="feather-home text-danger"></i></p>
                  Home
              </Link>
            </div>
            <div class="col">
              <Link to="/offers" class="text-dark small font-weight-bold text-decoration-none">
                  <p class="h4 m-0"><i class="feather-map-pin"></i></p>
                  Offers
              </Link>
            </div>
            <div class="col">
              <Link to="/categories" class="text-dark small font-weight-bold text-decoration-none">
                  <p class="h4 m-0"><i class="feather-heart"></i></p>
                  Categories
              </Link>
            </div>
            <div class="col">
              <Link to="/orders" class="text-dark small font-weight-bold text-decoration-none">
                  <p class="h4 m-0"><i class="feather-user"></i></p>
                  Orders
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
