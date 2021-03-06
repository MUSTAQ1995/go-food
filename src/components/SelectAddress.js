import React, { useState, useRef, useEffect } from 'react';
import { compose, withProps, lifecycle, withState, withHandlers } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, DirectionsRenderer, Circle } from "react-google-maps";
import  Geocode from "react-geocode";
import GpsFixedIcon from '@mui/icons-material/GpsFixed';



const SelectAddress = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyATefqmYTyXDI5M4jr9vcZvdsQyoD7bMt8&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `80vh` }} />,
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
 

 

  const handleBoundsChanged = () => {
    const mapCenter = refMap.current.getCenter();
    // alert(JSON.stringify(mapCenter))
    setCenter(mapCenter);
    setLat(mapCenter.lat().toString())
    setLan(mapCenter.lng().toString())
    //  console.log(mapCenter.lat().toString())
    //  console.log(mapCenter.lng().toString())
    
  }

  const options = {
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
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
    setCurrnetPosition(currentPosition)
    
    setLat(currentPosition.lat)
    setLan(currentPosition.lng)
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
  

  return(
    <>
      <GoogleMap
        ref={refMap}
        defaultZoom={10}
        defaultCenter={center}
        // defaultCenter={currentPosition}
        // center={currentPosition} 
        // when the above line is excuted then mao is working 
        // center={center}
        clickableIcons={false}
        onBoundsChanged={handleBoundsChanged}
        onIdle={()=> fetchAddress()}
        options={{
          panControl: true,
          mapTypeControl: false,
          scrollwheel: false,
          gestureHandling: "greedy",
          disableDefaultUI: true,
          
        }}
      >  
        <div className="show__address" >
          {/* <h6>Pick Up</h6> */}
          <p>{address}</p>
        </div> 
       
        <div className="auto__detect" >
          <GpsFixedIcon 
            fontSize={"medium"} 
            onClick={presetntPosition}
          />
        </div>
        <Circle
      // optional
      onLoad={onLoad}
      // optional
      onUnmount={onUnmount}
      // required
      center={currentPosition}
      // required
      options={options}
    />
   
        <Marker 
          position={center}
          defaultIcon='https://img.icons8.com/ios-filled/30/000000/map-pin.png'
        />

        
        <Marker 
          position={currentPosition}
          defaultIcon="https://img.icons8.com/ios-filled/24/c4302b/marker.png"
          onIdle={() => fetchAddress()}
        />
      </GoogleMap>
    </>
  )
}
  
)

export default SelectAddress;
