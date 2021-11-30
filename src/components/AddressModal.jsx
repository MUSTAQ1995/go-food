import React, { useState, useEffect } from 'react';
import AddLocationOutlinedIcon from '@mui/icons-material/AddLocationOutlined';
import Dialog from '@mui/material/Dialog';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Slide from '@mui/material/Slide';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import  Geocode from "react-geocode";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});  

function AddressModal({ address }) {
  const [openModal, setOpenModal] = useState(false);
  const [ currentPosition, setCurrentPosition ] = useState([]);
  const [value, setValue] =  useState(null)

  
  // useEffect( () => {
  //   navigator.geolocation.getCurrentPosition(success);

  // }, []);

  // const success = position => {
  //   const currentPosition = {
  //     lat: position.coords.latitude,
  //     lng: position.coords.longitude
  //   }
  //   console.log(currentPosition.lat)
  //   console.log(currentPosition.lng)
  //   Geocode.fromLatLng(currentPosition.lat, currentPosition.lng ).then(
  //     response => {
  //       const address = response.results[0].formatted_address;
  //       console.log(address);
  //       setCurrentPosition(address);
  //     },
  //     error => {
  //       console.error("Error at generating the address",error);
  //     }
  //   );
  // };

  const handleClickOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };
  return (
    <div style={{ width: "100%"}}>
          <Dialog
            fullScreen
            // style={{ marginTop: "30vh" }}
            open={openModal}
            onClose={handleClose}
            TransitionComponent={Transition}
          > 
          
          <HighlightOffIcon
          className="close__modal"
          fontSize={"large"}
          onClick={handleClose} 
        /> 
           <div className="modal__body" >
              <div className="modal__heading" >
                <h5>Select a location</h5>
                {/* <div className="auto__search" >
                  <SearchIcon/>
                </div> */}
                <GooglePlacesAutocomplete 
                    apiKey="AIzaSyATefqmYTyXDI5M4jr9vcZvdsQyoD7bMt8"
                    selectProps={{
                      value,
                      onChange: setValue,
                      // onClick:Redirect()
                    }}
                  />
                <a href="/confirm-address" >
                  <div className="current__location" >
                    <div className="location__icon" >
                      <GpsFixedIcon fontSize="small" />
                    </div>
                    <div className="location__details" >
                      <h6>Use current location</h6>
                      <p> {address} </p>
                    </div>
                    <div className="setcurrent__location" >
                        <KeyboardArrowRightIcon fontSize="small" />
                    </div>
                  </div>
                </a>
              </div>
           </div>
          </Dialog>
          <p style={{ color: "#c4302b"}} onClick={()=> handleClickOpen()} >CHANGE</p>
    </div>
  )
}

export default AddressModal
