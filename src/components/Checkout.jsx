import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import FoodOne from "../img/foodOne.jpg";
import FoodTwo from "../img/foodTwo.jpg";
import Dialog from '@mui/material/Dialog';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Slide from '@mui/material/Slide';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import WorkIcon from '@mui/icons-material/Work';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


function Checkout() {

  const [item, setItem ] = useState(1);
  const [PriceItem, setPriceItem] = useState(89);
  const [open, setOpen] = useState(false);
  const [itemPrice, setItemPrice] = useState();

  const Decrease = () => {
    setItem(item-1);
    setPriceItem(PriceItem-89);
  };

  const Increase = () => {
    setItem(item+1)
    setPriceItem(PriceItem+89)
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="osahan-checkout">
        <div className="p-3 osahan-inner-header bg-white shadow-sm">
          <div className="d-flex align-items-center">
            <Link
              className="font-weight-bold text-dark text-back text-decoration-none "
              to="/restaurant"
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
            <span className="ml-3 h6 mb-0">Checkout</span>
            
          </div>
        </div>
        {/* checkout */}
        <div className="py-3 osahan-cart-item">
         <div className="delivery" >
           <div className="delivery__address" >
             <img 
                src="https://img.icons8.com/small/16/fa314a/marker.png"
                alt="delivery__location"
              />
              <h6>Work- <strong>552, 2nd floor, Sector 4, HSR Layout, Bengaluru.</strong> 
                <em onClick={() => handleClickOpen()} >change</em>
              </h6>
           </div>
           <div className="delivery__time" >
             <img 
                src="https://img.icons8.com/material/16/26e07f/clock--v1.png"
                alt="delivery__time"
              />
              <p>Delivery in <strong>24 min</strong></p>
           </div>
         </div>
          <div className="d-flex align-items-center mb-3 osahan-cart-item-profile bg-white shadow p-3">
            <img
              alt="osahan"
              src={FoodOne}
              className="mr-3 rounded-circle img-fluid"
            />
            <div className="osahan-cart-item-profile-body">
              <h6 className="mb-1 font-weight-bold pt-1">The Chatori Street</h6>
              <p className="mb-0 small text-muted">
                <i className="feather-map-pin" /> Ramdaspeth, Nagpur, Maharashtra
              </p>
            </div>
          </div>
          <div className="bg-white shadow mb-3">
            <div>
              <div className="gold-members d-flex align-items-center justify-content-between px-3 py-2 border-bottom">
                <div className="media align-items-center">
                  <div className="mr-2 text-danger">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="bi bi-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <circle cx={8} cy={8} r={8} />
                    </svg>
                  </div>
                  <div className="media-body">
                    <p className="m-0">Chicken Tikka Sub</p>
                  </div>
                </div>
                <div className="add__more d-flex" >
                <button onClick={Decrease} >-</button>
                <p>{item}</p>
                <button onClick={Increase} >+</button>
              </div>
              <div className=" align-items-center">
                <p className="text-gray mb-0 float-right ml-2 text-muted small">
                  {PriceItem}₨
                </p>
              </div>
              </div>
            </div>
            <div className="gold-members d-flex align-items-center justify-content-between px-3 py-2 border-bottom">
              <div className="media align-items-center">
                <div className="mr-2 text-danger">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <circle cx={8} cy={8} r={8} />
                  </svg>
                </div>
                <div className="media-body">
                  <p className="m-0">Methi Chicken Dry</p>
                </div>
              </div>
              <div className="add__more d-flex" >
                <button onClick={Decrease} >-</button>
                <p>{item}</p>
                <button onClick={Increase} >+</button>
              </div>
              <div className=" align-items-center">
                <p className="text-gray mb-0 float-right ml-2 text-muted small">
                  {PriceItem}₨
                </p>
              </div>
            </div>
            <div className="gold-members d-flex align-items-center justify-content-between px-3 py-2 border-bottom">
              <div className="media align-items-center">
                <div className="mr-2 text-danger">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <circle cx={8} cy={8} r={8} />
                  </svg>
                </div>
                <div className="media-body">
                  <p className="m-0">Reshmi Kebab</p>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <p className="text-gray mb-0 float-right ml-2 text-muted small">
                  $628
                </p>
              </div>
            </div>
            <div className="gold-members d-flex align-items-center justify-content-between px-3 py-2 border-bottom">
              <div className="media align-items-center">
                <div className="mr-2 text-success">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <circle cx={8} cy={8} r={8} />
                  </svg>
                </div>
                <div className="media-body">
                  <p className="m-0">Lemon Cheese Dry</p>
                </div>
              </div>
              <div className="d-flex align-items-center">
                
                <p className="text-gray mb-0 float-right ml-2 text-muted small">
                  $628
                </p>
              </div>
            </div>
            <div className="gold-members d-flex align-items-center justify-content-between px-3 py-2 border-bottom">
              <div className="media align-items-center">
                <div className="mr-2 text-success">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <circle cx={8} cy={8} r={8} />
                  </svg>
                </div>
                <div className="media-body">
                  <p className="m-0">Rara Paneer</p>
                </div>
              </div>
              <div className="d-flex align-items-center">
               
                <p className="text-gray mb-0 float-right ml-2 text-muted small">
                  $628
                </p>
              </div>
            </div>
            <div className="gold-members d-flex align-items-center justify-content-between px-3 py-2 border-bottom">
              <div className="media align-items-center">
                <div className="mr-2 text-success">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <circle cx={8} cy={8} r={8} />
                  </svg>
                </div>
                <div className="media-body">
                  <p className="m-0">Special Lemon Cheese</p>
                </div>
              </div>
              <div className="d-flex align-items-center">
               
                <p className="text-gray mb-0 float-right ml-2 text-muted small">
                  $628
                </p>
              </div>
            </div>
            <div className="gold-members d-flex align-items-center justify-content-between px-3 py-2">
              <div className="media align-items-center">
                <div className="mr-2 text-danger">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <circle cx={8} cy={8} r={8} />
                  </svg>
                </div>
                <div className="media-body">
                  <p className="m-0">Tandoori Chicken</p>
                </div>
              </div>
              <div className="d-flex align-items-center">
                {/* <div className="osahan-quantity">
                  <input type="button" defaultValue="-" className="minus" />
                  <input
                    type="text"
                    name="quantity"
                    defaultValue={1}
                    title="Qty"
                    className="qty"
                    size={4}
                  />
                  <input type="button" defaultValue="+" className="plus" />
                </div> */}
                <p className="text-gray mb-0 float-right ml-2 text-muted small">
                  $628
                </p>
              </div>
            </div>
          </div>
          <div className="mb-3 shadow bg-white p-3 py-3 mt-3 clearfix">
            <div className="input-group-sm mb-2 input-group">
              <input
                placeholder="Enter promo code"
                type="text"
                className="form-control"
              />
              <div className="input-group-append">
                <button
                  id="button-addon2"
                  type="button"
                  className="btn btn-primary"
                >
                  <i className="feather-percent" /> APPLY
                </button>
              </div>
            </div>
            <div className="mb-0 input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="feather-message-square" />
                </span>
              </div>
              <textarea
                placeholder="Any suggestions? We will pass it on..."
                aria-label="With textarea"
                className="form-control"
                defaultValue={""}
              />
            </div>
          </div>
          <div className="rider__tips  " >
            <img src={FoodTwo} alt="" />
            <div className="rider__text" >
              <h6>Help them celevrate quth a generous tip</h6>
              <p>You can make their day 100% of the tip will be transferred to your delivery partner.</p>
            </div>
            <div className="add__tips d-flex justify-content-around " >
              <div className="d-flex border-1" >
                😁20₨
              </div>
              <div className="d-flex" >
                ❤️30₨
              </div>
              <div className="d-flex" >
                😍40₨
              </div>
              <div className="d-flex" >
                👌etc
              </div>
            </div>
          </div>
          <div className="shadow bg-white p-3 mb-3 clearfix">
            <p className="mb-1">
              Item Total <span className="float-right text-dark">$3140</span>
            </p>
            <p className="mb-1">
              Restaurant Charges{" "}
              <span className="float-right text-dark">$62.8</span>
            </p>
            <p className="mb-1">
              Delivery Fee
              <span className="text-info ml-1">
                <i className="icofont-info-circle" />
              </span>
              <span className="float-right text-dark">$10</span>
            </p>
            <p className="mb-1 text-success">
              Total Discount<span className="float-right text-success">$1884</span>
            </p>
            <hr />
            <h6 className="font-weight-bold mb-0">
              TO PAY <span className="float-right">$1329</span>
            </h6>
          </div>
          <div className="del__inst" >

          </div>
          <div >
            <Dialog
              fullScreen
              open={open}
              onClose={handleClose}
              TransitionComponent={Transition}
            > 
            
            <HighlightOffIcon
              className="close__modal"
              fontSize={"large"}
              onClick={handleClose} 
            />
              <div className="address__modal" >
                <div className="select__address" >
                  <h5>Select an Address</h5>
                </div>
                <Link to="/select-address" >
                  <div className="add__address" >
                    <AddLocationIcon fontSize="small" style={{ marginLeft: '10px' }} />
                    <h6>Add Address</h6>
                  </div>
                </Link>
                <div className="saved__Addresses" >
                  <h5>Saved Addresses</h5>
                  <h6>DELIVERS TO</h6>
                  <div className="delivers__address" >
                    <WorkIcon fontSize="small" />
                    <div className="deliver__address" >
                      <h6>Work</h6>
                      <p>#552, 2nd floor,15th cross, 16th main, sector-4, HSR-Layout Bengaluru-560102</p>
                    </div>
                  </div>
                </div>
              </div>   
            </Dialog>
          </div>
          <br/>
          <br/>
          <br/>
          <br/>
          <div className="fixed-bottom mb-0">
            <a
              href="payment.html"
              className="btn btn-success btn-block btn-lg text-white rounded shadow text-decoration-none d-flex align-items-center shadow"
            >
              <div className="border-right pr-3">
                <h4 className="m-0">
                  <i className="feather-shopping-bag" aria-hidden="true" />
                </h4>
              </div>
              <div className="ml-3 text-left">
                <p className="mb-0 small text-white-50">5 item</p>
                <p className="mb-0 font-weight-bold text-white">$235,50.00</p>
              </div>
              <div className="ml-auto">
                <p className="mb-0 text-white">
                  PAY{" "}
                  <i className="feather-chevron-right pl-2" aria-hidden="true" />
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Checkout;
