import React from 'react';
// import "../css/style.css";
import { Link } from 'react-router-dom';
import Biriyani from "../img/biriyani.jpg";
import Cake from "../img/cake.jpg";
import Kebab from "../img/kebab.jpg";
import Paratha from "../img/paratha.jpg";
import Sweets from "../img/sweets.jpg";

function Favorites() {
  return (
    <div>
      <div className="osahan-favorites">
        <div className="p-3 osahan-inner-header bg-white shadow-sm">
          <div className="d-flex align-items-center">
            <a
              className="font-weight-bold text-dark text-back text-decoration-none "
              href="home.html"
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
            <span className="ml-3 h6 mb-0">Categories</span>
          </div>
        </div>
        {/* Most popular */}
        <div className="most_popular p-3">
          <div className="row">
            <div className="col-6 pr-1">
              <div className="list-card h-100 position-relative grid-card">
                <div className="list-card-image">
                  {/* <div className="star position-absolute">
                    <span className="badge badge-success">
                      <i className="feather-star" /> 4.1
                    </span>
                  </div> */}
                  {/* <div className="favourite-heart position-absolute">
                    <a href="#">
                      <i className="feather-bookmark" />
                    </a>
                  </div> */}
                  {/* <div className="member-plan position-absolute">
                    <span className="badge badge-danger">Hot</span>
                  </div> */}
                  <Link to="/restaurent">
                    <img
                      src={Kebab}
                      className="img-fluid item-img w-100 rounded shadow-sm"
                    />
                  </Link>
                </div>
                <div className="py-3 position-relative">
                  <div className="list-card-body">
                    <h6 className="mb-1">
                      <Link to="/restaurent" className="text-black">
                        The Sakafo Restaurant
                      </Link>
                    </h6>
                    <p className="text-gray mb-3">North, Hamburgers, Pure veg</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 pl-1">
              <div className="list-card h-100 position-relative grid-card">
                <div className="list-card-image">
                  {/* <div className="star position-absolute">
                    <span className="badge badge-success">
                      <i className="feather-star" /> 4.4
                    </span>
                  </div> */}
                  {/* <div className="favourite-heart position-absolute">
                    <a href="#">
                      <i className="feather-bookmark" />
                    </a>
                  </div> */}
                  {/* <div className="member-plan position-absolute">
                    <span className="badge badge-warning">50% OFF</span>
                  </div> */}
                  <a href="restaurant.html">
                    <img
                      src={Kebab}
                      className="img-fluid item-img w-100 rounded shadow-sm"
                    />
                  </a>
                </div>
                <div className="py-3 position-relative">
                  <div className="list-card-body">
                    <h6 className="mb-1">
                      <Link to="/restaurent" className="text-black">
                        Thai Famous Cuisine
                      </Link>
                    </h6>
                    <p className="text-gray mb-3">Pure veg Indian, Indian</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-2">
            <div className="col-6 pr-1">
              <div className="list-card h-100 position-relative grid-card">
                <div className="list-card-image">
                  {/* <div className="star position-absolute">
                    <span className="badge badge-success">
                      <i className="feather-star" /> 2.4
                    </span>
                  </div> */}
                  {/* <div className="favourite-heart position-absolute">
                    <a href="#">
                      <i className="feather-bookmark" />
                    </a>
                  </div> */}
                  <a href="restaurant.html">
                    <img
                      src={Biriyani}
                      className="img-fluid item-img w-100 rounded shadow-sm"
                    />
                  </a>
                </div>
                <div className="py-3 position-relative">
                  <div className="list-card-body">
                    <h6 className="mb-1">
                      <Link to="/restaurent" className="text-black">
                        The Maharashtra Restaurant
                      </Link>
                    </h6>
                    <p className="text-gray mb-3">Hamburgers, Pure veg</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 pl-1">
              <div className="list-card h-100 position-relative grid-card">
                <div className="list-card-image">
                  {/* <div className="star position-absolute">
                    <span className="badge badge-success">
                      <i className="feather-star" /> 3.1
                    </span>
                  </div> */}
                  {/* <div className="favourite-heart position-absolute">
                    <a href="#">
                      <i className="feather-bookmark" />
                    </a>
                  </div> */}
                  {/* <div className="member-plan position-absolute">
                    <span className="badge badge-primary">DEAL</span>
                  </div> */}
                  <Link to="/restaurent">
                    <img
                      src={Biriyani}
                      className="img-fluid item-img w-100 rounded shadow-sm"
                    />
                  </Link>
                </div>
                <div className="py-3 position-relative">
                  <div className="list-card-body">
                    <h6 className="mb-1">
                      <Link to="/restaurent" className="text-black">
                        Bite Me Sandwiches
                      </Link>
                    </h6>
                    <p className="text-gray mb-3">
                      American, North Indian, Pure veg
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-2">
            <div className="col-6 pr-1">
              <div className="list-card h-100 position-relative grid-card">
                <div className="list-card-image">
                  {/* <div className="star position-absolute">
                    <span className="badge badge-success">
                      <i className="feather-star" /> 2.1
                    </span>
                  </div> */}
                  {/* <div className="favourite-heart position-absolute">
                    <a href="#">
                      <i className="feather-bookmark" />
                    </a>
                  </div> */}
                  {/* <div className="member-plan position-absolute">
                    <span className="badge badge-dark">Promoted</span>
                  </div> */}
                  <Link to="/restaurent">
                    <img
                      src={Paratha}
                      className="img-fluid item-img w-100 rounded shadow-sm"
                    />
                  </Link>
                </div>
                <div className="py-3 position-relative">
                  <div className="list-card-body">
                    <h6 className="mb-1">
                      <Link to="/restaurent" className="text-black">
                        The Sakafo Restaurant
                      </Link>
                    </h6>
                    <p className="text-gray mb-3">North, Hamburgers, Pure veg</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 pl-1">
              <div className="list-card h-100 position-relative grid-card">
                <div className="list-card-image">
                  {/* <div className="star position-absolute">
                    <span className="badge badge-success">
                      <i className="feather-star" /> 4.1
                    </span>
                  </div> */}
                  {/* <div className="favourite-heart position-absolute">
                    <a href="#">
                      <i className="feather-bookmark" />
                    </a>
                  </div> */}
                  {/* <div className="member-plan position-absolute">
                    <span className="badge badge-info">50% OFF</span>
                  </div> */}
                  <a href="restaurant.html">
                    <img
                      src={Paratha}
                      className="img-fluid item-img w-100 rounded shadow-sm"
                    />
                  </a>
                </div>
                <div className="py-3 position-relative">
                  <div className="list-card-body">
                    <h6 className="mb-1">
                      <a href="restaurant.html" className="text-black">
                        Bite Me Sandwiches
                      </a>
                    </h6>
                    <p className="text-gray mb-3">American, Pure veg</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-2">
            <div className="col-6 pr-1">
              <div className="list-card h-100 position-relative grid-card">
                <div className="list-card-image">
                  {/* <div className="star position-absolute">
                    <span className="badge badge-success">
                      <i className="feather-star" /> 3.4
                    </span>
                  </div> */}
                  {/* <div className="favourite-heart position-absolute">
                    <a href="#">
                      <i className="feather-bookmark" />
                    </a>
                  </div> */}
                  {/* <div className="member-plan position-absolute">
                    <span className="badge badge-warning">Promoted</span>
                  </div> */}
                  <a href="restaurant.html">
                    <img
                      src={Cake}
                      className="img-fluid item-img w-100 rounded shadow-sm"
                    />
                  </a>
                </div>
                <div className="py-3 position-relative">
                  <div className="list-card-body">
                    <h6 className="mb-1">
                      <a href="restaurant.html" className="text-black">
                        The Sakafo Restaurant
                      </a>
                    </h6>
                    <p className="text-gray mb-3">Maha, Hamburgers, Pure veg</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 pl-1">
              <div className="list-card h-100 position-relative grid-card">
                <div className="list-card-image">
                  {/* <div className="star position-absolute">
                    <span className="badge badge-success">
                      <i className="feather-star" /> 4.1
                    </span>
                  </div>
                  <div className="favourite-heart position-absolute">
                    <a href="#">
                      <i className="feather-bookmark" />
                    </a>
                  </div>
                  <div className="member-plan position-absolute">
                    <span className="badge badge-danger">OFFER</span>
                  </div> */}
                  <a href="restaurant.html">
                    <img
                      src={Cake}
                      className="img-fluid item-img w-100 rounded shadow-sm"
                    />
                  </a>
                </div>
                <div className="py-3 position-relative">
                  <div className="list-card-body">
                    <h6 className="mb-1">
                      <a href="restaurant.html" className="text-black">
                        Bite Me Sandwiches
                      </a>
                    </h6>
                    <p className="text-gray mb-3">Indian, Pure veg</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        
        
        <div class="osahan-menu-fotter fixed-bottom bg-white px-3 py-2 text-center">
          <div class="row">
            <div class="col selected">
              <a href="home.html" class="text-danger small font-weight-bold text-decoration-none">
                  <p class="h4 m-0"><i class="feather-home text-danger"></i></p>
                  Home
              </a>
            </div>
            <div class="col">
              <a href="most_popular.html" class="text-dark small font-weight-bold text-decoration-none">
                  <p class="h4 m-0"><i class="feather-map-pin"></i></p>
                  Offers
              </a>
            </div>
            <div class="col">
              <Link to="/categories" class="text-dark small font-weight-bold text-decoration-none">
                  <p class="h4 m-0"><i class="feather-heart"></i></p>
                  Categories
              </Link>
            </div>
            <div class="col">
              <Link to="/favorites" class="text-dark small font-weight-bold text-decoration-none">
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

export default Favorites
