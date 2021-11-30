import React, { useState,useEffect }from 'react';
import { 
  Search, 
} from 'react-feather';
import { Link } from 'react-router-dom';
import FoodOne from "../img/foodOne.jpg";
import Dialog from '@mui/material/Dialog';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Slide from '@mui/material/Slide';
import ReactStars from "react-rating-stars-component";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const firstExample = {
  size: 20,
  value: 2.5,
  edit: true,
  isHalf:true,
  onChange: newValue => {
    console.log(`Example 2: new value is ${newValue}`);
  }
};

function Restaurnt() {
  
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState(0);
  const [itemPrice, setItemPrice] = useState();
  const [ changeValue, setChangeValue] = useState();
  const [add, setAdd] =useState(true);
  const [nonCustomAdd, setNonCustomAdd] = useState(1);
  const [nonCustomPrice, setNonCustomPrice] = useState(250)
 
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(()=>{
    
    if(nonCustomAdd==0){
  
      setAdd(true)
    }
  },[nonCustomAdd])
  // const Increase = () => {
  //   setItem(item+1);
  //   setItemPrice(itemPrice+70);
  // };

  // const Decrease = () => {
  //   setItem(item-1);
  //   setItemPrice(itemPrice-70);
  // };

  const selectValue = (a) => {
    console.log(a)
    setChangeValue(a)
  
  }

  const NonCustomIncrease= () => {

    setNonCustomAdd(nonCustomAdd+1);
    setNonCustomPrice(nonCustomPrice+250)
  };

  const NonCustomDecrease = () => {
    
    
    setNonCustomAdd(nonCustomAdd-1);
   
    setNonCustomPrice(nonCustomPrice-250)
  };

  const Increase = () => {
    setItem(item+1);
    const one = parseInt(changeValue);
    const two = parseInt(item);
    setItemPrice(one * two);
  };

  const Decrease = () => {
    setItem(item-1);
    console.log()
    const one = parseInt(changeValue);
    console.log(one)
    const two = parseInt(item);
    console.log(two);

     setItemPrice(one * two);
     console.log(itemPrice);
  }
  const clik=()=>{
    if(nonCustomAdd == 0) {

   
     }
  }
 
  return (
    <div>
      <div className="osahan-restaurant">
        <div className="osahan-restaurant-detail">
        <div className="shadow p-3 homepage-osahan-header bg-white">
          <div className="title d-flex align-items-center">
            <div className="mr-auto">
              <Link
                className="text-dark d-flex align-items-center"
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
                {/* <ArrowBackIosIcon fontSize={"small"} /> */}
                {/* <MapPin className="feather-map-pin fs-18 mr-2" /> */}
                <h6 className=" home__location ">
                  Restraunt Name Udupi Palace...
                </h6>
              </Link>
            </div>
            <div className="ml-auto d-flex align-items-center">
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
              placeholder="Search dishes in Menu..."
              aria-label
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
          <div className="px-3 pt-4 pb-3 bg-primary">
            <div>
              <p className="font-weight-bold text-black-50 m-0" >
                North Indian, Street Food, Chinies, Sount Indian
              </p>
              <p className="font-weight-light text-black-50 m-0">
                24th Main, 22nd Cross Parangiplaya
              </p>
              <div className="rating-wrap d-flex align-items-center mt-2">
                <ReactStars 
                  className="rating-stars" 
                  {...firstExample}  
                />
                <p className="label-rating text-white-50 ml-2 small m-0">
                  {" "}
                  (245 Reviews)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Menu */}
        <div className="px-3 pt-3 " >
          <div className="row">
            <h6 className="mb-3 mt-3 col-md-12">
              Starters <small className="text-black-50">8 ITEMS</small>
            </h6>
            <div className="col-md-12 px-0 border-top">
              <div className="bg-white">
                <div className="p-3 border-bottom gold-members d-flex justify-content-between">
                  <div className="dish__info">
                      <div className="mr-3 font-weight-bold text-danger non_veg">
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
                        <h6 className="mb-1">Chicken Tikka Sub </h6>
                        <p className="text-muted mb-0">$250</p>
                        <div className="rating-wrap d-flex align-items-center mt-2">
                            <ReactStars 
                              className="rating-stars" 
                              {...firstExample}  
                            />
                          <p className="label-rating text-dark-50 ml-2 small m-0">
                            {" "}
                            (245 Reviews)
                          </p>
                        </div>
                      </div>
                    </div>
                  <div className="starter__media">
                    <img
                      src={FoodOne}
                      alt
                      className="mr-3 rounded-pill "
                    />
                    {add ? 
                      (
                      <div className="">
                        <span className="ml-auto">
                          <a
                            onClick={()=> setAdd(false)}
                            className="btn btn-outline-secondary btn-sm add-sm-btn"
                          >
                            ADD
                          </a>
                        </span>
                      </div>
                      ) : 
                      (
                        <div className="noncustom__price" >
                          <div className="noncustom__buttons" >
                            <button 
                              onClick={NonCustomDecrease} 
                              
                              >-</button>
                            <p>{nonCustomAdd}</p>
                            <button 
                              onClick={NonCustomIncrease} 
                            >+</button>
                          </div>
                      </div>
                      )
                    }
                    
                  </div>
                </div>
                <div className="p-3 border-bottom gold-members d-flex justify-content-between">
                  <div className="dish__info">
                      <div className="mr-3 font-weight-bold text-danger non_veg">
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
                        <h6 className="mb-1">Chicken Tikka Sub </h6>
                        <p className="text-muted mb-0">$250</p>
                        <div className="rating-wrap d-flex align-items-center mt-2">
                          <ReactStars 
                            className="rating-stars" 
                            {...firstExample}  
                          />
                          <p className="label-rating text-dark-50 ml-2 small m-0">
                            {" "}
                            (245 Reviews)
                          </p>
                        </div>
                      </div>
                    </div>
                  <div className="starter__media">
                    <img
                      src={FoodOne}
                      alt
                      className="mr-3 rounded-pill "
                    />
                    <div className="">
                      <span className="ml-auto">
                        <a
                          onClick={handleClickOpen}
                          className="btn btn-outline-secondary btn-sm add-sm-btn"
                        >
                          ADD
                        </a>
                        <p>Customize</p>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-3 border-bottom gold-members d-flex justify-content-between">
                  <div className="dish__info">
                      <div className="mr-3 font-weight-bold text-danger non_veg">
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
                        <h6 className="mb-1">Chicken Tikka Sub </h6>
                        <p className="text-muted mb-0">$250</p>
                        <div className="rating-wrap d-flex align-items-center mt-2">
                          <ReactStars 
                            className="rating-stars" 
                            {...firstExample}  
                          />               
                          <p className="label-rating text-dark-50 ml-2 small m-0">
                            {" "}
                            (245 Reviews)
                          </p>
                        </div>
                      </div>
                    </div>
                  <div className="starter__media">
                    <img
                      src={FoodOne}
                      alt
                      className="mr-3 rounded-pill "
                    />
                    <div className="">
                      <span className="ml-auto">
                        <p
                          onClick={handleClickOpen}
                          className="btn btn-outline-secondary btn-sm add-sm-btn"
                        >
                          ADD
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-3 border-bottom gold-members d-flex justify-content-between">
                  <div className="dish__info">
                      <div className="mr-3 font-weight-bold text-danger non_veg">
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
                        <h6 className="mb-1">Chicken Tikka Sub </h6>
                        <p className="text-muted mb-0">$250</p>
                        <div className="rating-wrap d-flex align-items-center mt-2">
                          <ReactStars 
                            className="rating-stars" 
                            {...firstExample}  
                          />
                          <p className="label-rating text-dark-50 ml-2 small m-0">
                            {" "}
                            (245 Reviews)
                          </p>
                        </div>
                      </div>
                    </div>
                  <div className="starter__media">
                    <img
                      src={FoodOne}
                      alt
                      className="mr-3 rounded-pill "
                    />
                    <div className="">
                      <span className="ml-auto">
                        <a
                          onClick={handleClickOpen}
                          className="btn btn-outline-secondary btn-sm add-sm-btn"
                        >
                          ADD
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-3 border-bottom gold-members d-flex justify-content-between">
                  <div className="dish__info">
                      <div className="mr-3 font-weight-bold text-danger non_veg">
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
                        <h6 className="mb-1">Chicken Tikka Sub </h6>
                        <p className="text-muted mb-0">$250</p>
                        <div className="rating-wrap d-flex align-items-center mt-2">
                          <ReactStars 
                            className="rating-stars" 
                            {...firstExample}  
                          /> 
                          <p className="label-rating text-dark-50 ml-2 small m-0">
                            {" "}
                            (245 Reviews)
                          </p>
                        </div>
                      </div>
                    </div>
                  <div className="starter__media">
                    <img
                      src={FoodOne}
                      alt
                      className="mr-3 rounded-pill "
                    />
                    <div className="">
                      <span className="ml-auto">
                        <a
                          onClick={handleClickOpen}
                          className="btn btn-outline-secondary btn-sm add-sm-btn"
                        >
                          ADD
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div >
          <Dialog
            fullScreen
            // style={{ marginTop: "30vh" }}
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
          > 
          
          <HighlightOffIcon
          className="close__modal"
          fontSize={"large"}
          onClick={handleClose} 
        />
            <div className="modal__page" >
              <div className="modal__media" >
                <img src={FoodOne} alt="" />
                <h6>Chicken Curry</h6>
              </div>
              <div className="modal__quantity">
                <div className="modal__required" >
                  <h6>Quantity </h6>
                  <p>Please select any one option</p>
                </div>
                <div className="required">
                  <p>REQUIRED</p>
                </div>
              </div>
              <form>
                <fieldset id="group1" >
                  <div className="quantity__types" >
                    <label for="quater" >Quater</label>
                    <p>70₨</p>
                    <input 
                      type="radio" 
                      id="quater" 
                      name="group1" 
                      onClick={()=>selectValue(70)}  
                      value="value1"
                    />
                  </div>
                  <div className="quantity__types" >
                    <label for="quater" >Half</label>
                    <p>100₨</p>
                    <input 
                      type="radio" 
                      id="quater" 
                      name="group1"
                      onClick={()=>selectValue(100)}
                      />
                  </div>
                  <div className="quantity__types" >
                    <label for="quater" >Full</label>
                    <p>200₨</p>
                    <input 
                      type="radio" 
                      id="quater" 
                      name="group1" 
                      onClick={()=>selectValue(200)}
                    />
                  </div>
                </fieldset>
              </form>
              <div className="quantity__price" >
                <div className="quantity__buttons" >
                  <button onClick={Decrease} >-</button>
                  <p>{item}</p>
                  <button onClick={Increase} >+</button>
                </div>
                <div className="quantity__add" >
                  <p style={{ color: "white"}} >
                    <h5 onClick={()=>handleClose()} >Add {itemPrice}₨</h5>
                  </p>                
                </div>
              </div>
            </div>   
          </Dialog>
        </div>
        {/* Footer */}
        { add ? "" :( 
        <div className="fixed-bottom mb-0">
          <Link
            to="/checkout"
            className="btn btn-success btn-block btn-lg text-white rounded shadow text-decoration-none d-flex align-items-center shadow"
          >
            <div className="border-right pr-3">
              <h4 className="m-0">
                <i className="feather-shopping-bag" aria-hidden="true" />
              </h4>
            </div>
            <div className="ml-3 text-left">
              <p className="mb-0 small text-white-50">{nonCustomAdd} ITEMS</p>
              <p className="mb-0 font-weight-bold text-white">{nonCustomPrice}</p>
            </div>
            <div className="ml-auto">
              <p className="mb-0 text-white">
                Proceed to cart{" "}
                <i className="feather-chevron-right pl-2" aria-hidden="true" />
              </p>
            </div>
          </Link>
        </div>
        )}
        
      </div>
    </div>
  )
}

export default Restaurnt


{/* <div className="fixed-bottom mb-0">
<Link
  to="/checkout"
  className="btn btn-success btn-block btn-lg text-white rounded shadow text-decoration-none d-flex align-items-center shadow"
>
  <div className="border-right pr-3">
    <h4 className="m-0">
      <i className="feather-shopping-bag" aria-hidden="true" />
    </h4>
  </div>
  <div className="ml-3 text-left">
    <p className="mb-0 small text-white-50">{item}</p>
    <p className="mb-0 font-weight-bold text-white">{itemPrice}</p>
  </div>
  <div className="ml-auto">
    <p className="mb-0 text-white">
      Proceed to cart{" "}
      <i className="feather-chevron-right pl-2" aria-hidden="true" />
    </p>
  </div>
</Link>
</div> */}