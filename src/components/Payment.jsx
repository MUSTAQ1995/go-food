import React from 'react'
import { Link } from 'react-router-dom'

function Payment() {
  return (
    <div>
      <div className="osahan-payment">
        <div className="p-3 osahan-inner-header bg-white shadow-sm">
          <div className="d-flex align-items-center">
            <Link
              className="font-weight-bold text-dark text-back text-decoration-none "
              to="/checkout"
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
            <span className="ml-3 h6 mb-0">Payment</span>
            {/* <div className="ml-auto d-flex align-items-center">
              <a
                className="text-dark mx-2 top-nav-btn top-nav-btn-cart fs-18 position-relative"
                href="checkout.html"
              >
                <i className="feather-shopping-bag" /> <span>3</span>
              </a>
              <a
                className="toggle ml-2 text-dark hc-nav-trigger hc-nav-1"
                href="#"
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
            </div> */}
          </div>
        </div>
        {/* checkout */}
        <div className="py-3 osahan-cart-item">
          <div className="osahan-cart-item-profile bg-white shadow p-3">
            <div className="d-flex flex-column">
              <h6 className="mb-2 font-weight-bold">DELIVERY ADDRESS</h6>
              <div className="custom-control custom-radio mb-2 px-0">
                <input
                  type="radio"
                  id="customRadio1"
                  name="customRadio"
                  className="custom-control-input"
                  // defaultChecked
                />
                <label
                  className="custom-control-label border osahan-check p-3 w-100 rounded border-primary"
                  htmlFor="customRadio1"
                >
                  <b>
                    <i className="feather-home mr-2" /> Home
                  </b>{" "}
                  <br />
                  <p className="small mb-0 pl-4">
                    Kalyani Nagar, Pune, Maharashtra
                  </p>
                </label>
              </div>
              <div className="custom-control custom-radio mb-2 px-0">
                <input
                  type="radio"
                  id="customRadio2"
                  name="customRadio"
                  className="custom-control-input"
                />
                <label
                  className="custom-control-label border osahan-check p-3 w-100 rounded bg-light"
                  htmlFor="customRadio2"
                >
                  <b>
                    <i className="feather-briefcase mr-2" /> Work
                  </b>{" "}
                  <br />
                  <p className="small mb-0 pl-4">Pune, Maharashtra 411014</p>
                </label>
              </div>
              <a
                className="btn btn-primary"
                href="#"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                {" "}
                ADD NEW ADDRESS{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="accordion pb-3" id="accordionExample" style={{ marginBottom:"80px"}} >
          <div className="osahan-card bg-white overflow-hidden shadow mb-2">
            <div className="osahan-card-header" id="headingOne">
              <h2 className="mb-0">
                <button
                  className="d-flex p-3 align-items-center btn btn-link w-100"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <i className="feather-credit-card mr-3" /> Credit/Debit Card
                  <i className="feather-chevron-down ml-auto" />
                </button>
              </h2>
            </div>
            <div
              id="collapseOne"
              className="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div className="osahan-card-body border-top p-3">
                <h6 className="m-0">Add new card</h6>
                <p className="small">
                  WE ACCEPT{" "}
                  <span className="osahan-card ml-2 font-weight-bold">
                    ( Master Card / Visa Card / Rupay )
                  </span>
                </p>
                <form>
                  <div className="form-row">
                    <div className="col-md-12 form-group">
                      <label className="form-label mb-1 small">Card number</label>
                      <div className="input-group">
                        <input
                          placeholder="Card number"
                          type="number"
                          className="form-control"
                        />
                        <div className="input-group-append">
                          <button
                            id="button-addon2"
                            type="button"
                            className="btn btn-outline-secondary"
                          >
                            <i className="feather-credit-card" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-8 form-group">
                      <label className="form-label mb-1 small">
                        Valid through(MM/YY)
                      </label>
                      <input
                        placeholder="Enter Valid through(MM/YY)"
                        type="number"
                        className="form-control"
                      />
                    </div>
                    <div className="col-md-4 form-group">
                      <label className="form-label mb-1 small">CVV</label>
                      <input
                        placeholder="Enter CVV Number"
                        type="number"
                        className="form-control"
                      />
                    </div>
                    <div className="col-md-12 form-group">
                      <label className="form-label mb-1 small">Name on card</label>
                      <input
                        placeholder="Enter Card number"
                        type="text"
                        className="form-control"
                      />
                    </div>
                    <div className="col-md-12 form-group mb-0">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          id="custom-checkbox1"
                          className="custom-control-input"
                        />
                        <label
                          title
                          type="checkbox"
                          htmlFor="custom-checkbox1"
                          className="custom-control-label small pt-1"
                        >
                          Securely save this card for a faster checkout next time.
                        </label>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="osahan-card bg-white overflow-hidden shadow  mb-2">
            <div className="osahan-card-header" id="headingTwo">
              <h2 className="mb-0">
                <button
                  className="d-flex p-3 align-items-center btn btn-link w-100"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <i className="feather-globe mr-3" /> Net Banking
                  <i className="feather-chevron-down ml-auto" />
                </button>
              </h2>
            </div>
            <div
              id="collapseTwo"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <div className="osahan-card-body border-top p-3">
                <form>
                  <div
                    className="btn-group btn-group-toggle w-100"
                    data-toggle="buttons"
                  >
                    <label className="btn btn-outline-secondary active">
                      <input
                        type="radio"
                        name="options"
                        id="option1"
                        defaultChecked
                      />{" "}
                      HDFC
                    </label>
                    <label className="btn btn-outline-secondary">
                      <input type="radio" name="options" id="option2" /> ICICI
                    </label>
                    <label className="btn btn-outline-secondary">
                      <input type="radio" name="options" id="option3" /> AXIS
                    </label>
                  </div>
                  <hr />
                  <div className="form-row">
                    <div className="col-md-12 form-group mb-0">
                      <label className="form-label small font-weight-bold">
                        Select Bank
                      </label>
                      <br />
                      <select className="custom-select form-control">
                        <option>Bank</option>
                        <option>KOTAK</option>
                        <option>SBI</option>
                        <option>UCO</option>
                      </select>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="osahan-card bg-white overflow-hidden shadow">
            <div className="osahan-card-header" id="headingThree">
              <h2 className="mb-0">
                <button
                  className="d-flex p-3 align-items-center btn btn-link w-100"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <i className="feather-dollar-sign mr-3" /> Cash on Delivery
                  <i className="feather-chevron-down ml-auto" />
                </button>
              </h2>
            </div>
            <div
              id="collapseThree"
              className="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
            >
              <div className="card-body border-top">
                <h6 className="mb-3 mt-0 mb-3 font-weight-bold">Cash</h6>
                <p className="m-0">
                  Please keep exact change handy to help us serve you better
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed-bottom">
          <a className="btn btn-success btn-lg btn-block" href="profile.html">
            PAY $1329
            <i className="feather-arrow-right" />
          </a>
        </div>
        {/* Modal */}
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
                  Add Delivery Address
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="feather-x float-right" />
                </button>
              </div>
              <div className="modal-body">
                <form className>
                  <div className="form-row">
                    <div className="col-md-12 form-group">
                      <label className="form-label">Delivery Area</label>
                      <div className="input-group">
                        <input
                          placeholder="Delivery Area"
                          type="text"
                          className="form-control"
                        />
                        <div className="input-group-append">
                          <button
                            id="button-addon2"
                            type="button"
                            className="btn btn-outline-secondary"
                          >
                            <i className="feather-map-pin" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 form-group">
                      <label className="form-label">Complete Address</label>
                      <input
                        placeholder="Complete Address e.g. house number, street name, landmark"
                        type="text"
                        className="form-control"
                      />
                    </div>
                    <div className="col-md-12 form-group">
                      <label className="form-label">Delivery Instructions</label>
                      <input
                        placeholder="Delivery Instructions e.g. Opposite Gold Souk Mall"
                        type="text"
                        className="form-control"
                      />
                    </div>
                    <div className="mb-0 col-md-12 form-group">
                      <label className="form-label">Nickname</label>
                      <div
                        className="btn-group btn-group-toggle w-100"
                        data-toggle="buttons"
                      >
                        <label className="btn btn-outline-secondary active">
                          <input
                            type="radio"
                            name="options"
                            id="option1"
                            defaultChecked
                          />{" "}
                          Home
                        </label>
                        <label className="btn btn-outline-secondary">
                          <input type="radio" name="options" id="option2" /> Work
                        </label>
                        <label className="btn btn-outline-secondary">
                          <input type="radio" name="options" id="option3" /> Other
                        </label>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer p-0 border-0 p-3">
                <div className="col-6 m-0 pl-0 pr-1">
                  <button
                    type="button"
                    className="btn border btn-lg btn-block"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
                <div className="col-6 m-0 pr-0 pl-1">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg btn-block"
                  >
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
