import React, { useState, useRef, useEffect } from 'react';
import { compose, withProps, lifecycle, withState, withHandlers } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, DirectionsRenderer, Circle } from "react-google-maps";
import  Geocode from "react-geocode";
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import AddLocationOutlinedIcon from '@mui/icons-material/AddLocationOutlined';
import Dialog from '@mui/material/Dialog';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Slide from '@mui/material/Slide';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";
import AddressModal from './AddressModal';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';





const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});  

const mapOptions = {
  fullscreenControl: false,
}

const SetCurrentLocation = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyATefqmYTyXDI5M4jr9vcZvdsQyoD7bMt8&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `70vh` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,

)((props) =>{

  Geocode.setApiKey("AIzaSyATefqmYTyXDI5M4jr9vcZvdsQyoD7bMt8");
  Geocode.setLanguage("en");
  Geocode.setRegion("hi");
  Geocode.enableDebug();
  
  const refMap = useRef(null);

//  const [ center, setCenter ] = useState({lat: 12.91420669605438, lng: 77.64166670990149 });
  const [ center, setCenter ] = useState({ lat: 12.91420669605438, lng: 77.64166670990149 });
  const [ currentPosition, setCurrnetPosition ] = useState({});
  const [ lat, setLat ] = useState("");
  const [ lan, setLan ] = useState("");
  const [ address, setAddress ] = useState("");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [inputCenter, setInputCenter] = useState({ lat: "", lng: ""});


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  useEffect(() => {
    const inputLat = localStorage.getItem("lat");
    const inputLan = localStorage.getItem("lan");
    // const inputAddress = {inputLat, inputLan};
    // setCenter(inputAddress);
    console.log(inputLat);
    console.log(inputLan);
  }, [])

  const handleBoundsChanged = () => {
    const mapCenter = refMap.current.getCenter();
    setCenter(mapCenter);
    setLat(mapCenter.lat().toString())
    setLan(mapCenter.lng().toString())
     console.log(mapCenter.lat().toString())
     console.log(mapCenter.lng().toString())
    
  }

  const options = {
    strokeColor: 'blue',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: 'blue',
    fillOpacity: 0.35,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    radius: 30,
    zIndex: 1
  }
  
  const onLoad = circle => {
    console.log('Circle onLoad circle: ', circle)
  }
  
  const onUnmount = circle => {
    console.log('Circle onUnmount circle: ', circle)
  }

 

  const success = position => {
    const currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }
    console.log("Coordinates-->", currentPosition);
    // setCurrnetPosition(currentPosition)
    // setCenter(currentPosition)
    // setLat(currentPosition.lat)
    // setLan(currentPosition.lng)
  }

  const setInitialAddress = () => {

  }


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success)
  }, [])

   const presetntPosition = () => {
    navigator.geolocation.getCurrentPosition(success);
  }
  
  const fetchAddress = () => {
    Geocode.fromLatLng(lat, lan).then(
      response => {
        const address = response.results[0].formatted_address;
        console.log(address);
        setAddress(address)
      },
      error => {
        console.error(error);
      }
    );
  }

  const confirmLocation =() => {
    localStorage.setItem("address", address);
  }
  
  var label=value.label
  Geocode.fromAddress(label).then(
    (response) => {
      const { lat, lng } = response.results[0].geometry.location;
      // console.log(lat, lng);
      const inputCenter = {lat, lng}
      // setInputCenter(inputCenter)
      setCenter(inputCenter)
    },
    (error) => {
      console.error(error);
    }
  );
 
  return(
    <>
      <GoogleMap
        ref={refMap}
        defaultZoom={10}
        // center={center}
        defaultCenter={center}
        // defaultCenter={currentPosition}
        // center={currentPosition} 
        // when the above line is excuted then mao is working 
        clickableIcons={false}
        onBoundsChanged={handleBoundsChanged}
        onIdle={()=> fetchAddress()}
        onLoad={() => setInitialAddress()}
        options={{
          panControl: true,
          mapTypeControl: false,
          scrollwheel: false,
          gestureHandling: "greedy",
          disableDefaultUI: true,
          fullscreenControl: false,
        }}
      >  
        <GooglePlacesAutocomplete 
          apiKey="AIzaSyATefqmYTyXDI5M4jr9vcZvdsQyoD7bMt8"
          selectProps={{
            value,
            onChange: setValue
            
          }}
        />
        <div className="show__address" >
          <div>
            <h6>Confirm delivery location</h6>
          </div>
          <div className="current__location" >
            <div className="location__icon" >
              <AddLocationOutlinedIcon fontSize="small" />
            </div>
            <div className="location__details" >
                <p> {address} </p>
              </div>
              <div 
                className="setcurrent__location"
                onClick={handleClickOpen}
              >
                <AddressModal address={address} />
              </div>
          </div>
          <Link to="/home" >
          <button 
            className="confirm__buttom"
            onClick={ () => confirmLocation()}
          >Confirm location</button>
          </Link>
         
        </div> 
     
       
        {/* <div className="auto__detect" >
          <GpsFixedIcon 
            fontSize={"medium"} 
            onClick={presetntPosition}
          />
        </div> */}
        <Circle
          // optional
          onLoad={onLoad}
          // optional
          onUnmount={onUnmount}
          // required
          center={center}
          // required
          options={options}
        />
   
        <Marker 
          position={center}
          defaultIcon="https://img.icons8.com/ios-filled/32/c4302b/marker.png"
        />
        {/* <Marker 
         position={center}
        /> */}
     
        
        <Marker 
          position={inputCenter}
          // defaultIcon="https://img.icons8.com/ios-filled/24/c4302b/marker.png"
        />
        
      </GoogleMap>
    </>
  )
}
  
)

export default SetCurrentLocation;
