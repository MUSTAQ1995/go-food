import React from 'react';
// import "../css/style.css";
import { Link } from 'react-router-dom';
import Biriyani from "../img/biriyani.jpg";
import Cake from "../img/cake.jpg";
import Kebab from "../img/kebab.jpg";
import Paratha from "../img/paratha.jpg";
import Sweets from "../img/sweets.jpg";

function Categories() {
  return (
    <div>
      <div className="osahan-favorites">
        <div className="p-3 osahan-inner-header bg-white shadow-sm">
          <div className="d-flex align-items-center">
            <Link
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
            </Link>
            <span className="ml-3 h6 mb-0">Categories</span>
          </div>
        </div>
        {/* Most popular */}
        <div className="most_popular p-3">
          <div className="row">
            <div className="col-6 pr-1">
              <div className="list-card h-100 position-relative grid-card">
                <div className="list-card-image">
                  <Link to="/category&restraunts">
                    <img
                      src={Kebab}
                      className="img-fluid item-img w-100 rounded shadow-sm"
                    />
                  </Link>
                </div>
                <div className="py-3 position-relative">
                  <div className="list-card-body">
                    <h6 className="mb-1 categoty__name">
                      <Link to="/category&restraunts" className="text-black">
                        Indian Sweets
                      </Link>
                    </h6>
                    {/* <p className="text-gray mb-3">North, Hamburgers, Pure veg</p> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 pl-1">
              <div className="list-card h-100 position-relative grid-card">
                <div className="list-card-image">
                  <Link to="/category&restraunts">
                    <img
                      src={Kebab}
                      className="img-fluid item-img w-100 rounded shadow-sm"
                    />
                  </Link>
                </div>
                <div className="py-3 position-relative">
                  <div className="list-card-body">
                    <h6 className="mb-1 categoty__name">
                      <Link to="/category&restraunts" className="text-black">
                        Thali
                      </Link>
                    </h6>
                    {/* <p className="text-gray mb-3">Pure veg Indian, Indian</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-2">
            <div className="col-6 pr-1">
              <div className="list-card h-100 position-relative grid-card">
                <div className="list-card-image">
                  <Link to="/category&restraunts">
                    <img
                      src={Biriyani}
                      className="img-fluid item-img w-100 rounded shadow-sm"
                    />
                  </Link>
                </div>
                <div className="py-3 position-relative">
                  <div className="list-card-body">
                    <h6 className="mb-1 categoty__name">
                      <Link to="/category&restraunts" className="text-black">
                        The Sweets
                      </Link>
                    </h6>
                    {/* <p className="text-gray mb-3">Hamburgers, Pure veg</p> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 pl-1">
              <div className="list-card h-100 position-relative grid-card">
                <div className="list-card-image">
                  <Link to="/category&restraunts">
                    <img
                      src={Biriyani}
                      className="img-fluid item-img w-100 rounded shadow-sm"
                    />
                  </Link>
                </div>
                <div className="py-3 position-relative">
                  <div className="list-card-body">
                    <h6 className="mb-1 categoty__name">
                      <Link to="/category&restraunts" className="text-black">
                        Sandwiches
                      </Link>
                    </h6>
                    {/* <p className="text-gray mb-3">
                    ?  American, North Indian, Pure veg
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-2">
            <div className="col-6 pr-1">
              <div className="list-card h-100 position-relative grid-card">
                <div className="list-card-image">
                  <Link to="/category&restraunts">
                    <img
                      src={Paratha}
                      className="img-fluid item-img w-100 rounded shadow-sm"
                    />
                  </Link>
                </div>
                <div className="py-3 position-relative">
                  <div className="list-card-body">
                    <h6 className="mb-1 categoty__name ">
                      <Link to="/category&restraunts" className="text-black text-align-center">
                        The 
                      </Link>
                    </h6>
                    {/* <p className="text-gray mb-3">North, Hamburgers, Pure veg</p> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 pl-1">
              <div className="list-card h-100 position-relative grid-card">
                <div className="list-card-image">
                  <Link to="/category&restraunts">
                    <img
                      src={Paratha}
                      className="img-fluid item-img w-100 rounded shadow-sm"
                    />
                  </Link>
                </div>
                <div className="py-3 position-relative">
                  <div className="list-card-body">
                    <h6 className="mb-1 categoty__name ">
                      <Link to="/category&restraunts" className="text-black">
                        Bite Me
                      </Link>
                    </h6>
                    {/* <p className="text-gray mb-3">American, Pure veg</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-2">
            <div className="col-6 pr-1">
              <div className="list-card h-100 position-relative grid-card">
                <div className="list-card-image">
                  <Link to="/category&restraunts">
                    <img
                      src={Cake}
                      className="img-fluid item-img w-100 rounded shadow-sm"
                    />
                  </Link>
                </div>
                <div className="py-3 position-relative">
                  <div className="list-card-body">
                    <h6 className="mb-1 categoty__name ">
                      <Link to="/category&restraunts" className="text-black">
                        The Sakafo
                      </Link>
                    </h6>
                    {/* <p className="text-gray mb-3">Maha, Hamburgers, Pure veg</p> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 pl-1">
              <div className="list-card h-100 position-relative grid-card">
                <div className="list-card-image">
                  <Link to="/category&restraunts">
                    <img
                      src={Cake}
                      className="img-fluid item-img w-100 rounded shadow-sm"
                    />
                  </Link>
                </div>
                <div className="py-3 position-relative">
                  <div className="list-card-body">
                    <h6 className="mb-1 categoty__name">
                      <Link to="/category&restraunts" className="text-black">
                        Bite 
                      </Link>
                    </h6>
                    {/* <p className="text-gray mb-3">Indian, Pure veg</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br/>
        <br/>
        <br/>
    
        {/* Footer */}
        
        
        <div class="osahan-menu-fotter fixed-bottom bg-white px-3 py-2 text-center">
          <div class="row">
            <div class="col">
              <Link to="/home" class="text-dark small font-weight-bold text-decoration-none">
              <p class="h4 m-0"><i class="feather-home "></i></p>
                  Home
              </Link>
            </div>
            <div class="col">
              <Link to="/offers" class="text-dark small font-weight-bold text-decoration-none">
                  <p class="h4 m-0"><i class="feather-map-pin"></i></p>
                  Offers
              </Link>
            </div>
           
            <div class="col selected">
              <Link to="/categories" class="text-danger small font-weight-bold text-decoration-none">
                  
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

export default Categories;
