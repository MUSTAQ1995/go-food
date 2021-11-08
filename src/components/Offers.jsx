import React from 'react';
// import "../css/style.css";
import { Link } from 'react-router-dom';
import FoodTwo from "../img/foodTwo.jpg"

function Offers() {
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
            <span className="ml-3 h6 mb-0">Offers</span>
          </div>
        </div>
        {/* Most popular */}
        <Link to="/offer&restraunts">
          <div className="p-3 banner__details">
            {/* <h3>Offers to this Product</h3> */}
            <img src={FoodTwo} className="banner__image" />
          </div>
        </Link>

        <Link to="/offer&restraunts">
          <div className="p-3 banner__details">
            <img src={FoodTwo} className="banner__image" />
          </div>
        </Link>
        <Link to="/offer&restraunts">
          <div className="p-3 banner__details">
            <img src={FoodTwo} className="banner__image" />
          </div>
        </Link>
        <Link to="/offer&restraunts">
          <div className="p-3 banner__details">
            <img src={FoodTwo} className="banner__image" />
          </div>
        </Link>
        <Link to="/offer&restraunts">
          <div className="p-3 banner__details">
            <img src={FoodTwo} className="banner__image" />
          </div>
        </Link>
        <br/>
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
            <div class="col selected">
              <Link to="/offers" class="text-danger small font-weight-bold text-decoration-none">
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

export default Offers;
