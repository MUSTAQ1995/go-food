import React, { useState, useRef, useEffect }  from "react";
import { compose, withProps, lifecycle } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import  Geocode from "react-geocode";
import { Link } from "react-router-dom";
import GpsFixedIcon from '@mui/icons-material/GpsFixed';


const SelectAddress = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyATefqmYTyXDI5M4jr9vcZvdsQyoD7bMt8&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `90vh` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
    lifecycle({
      componentWillMount() {

          const refs = {}

          this.setState({
              position: null,
              onMarkerMounted: ref => {
                  refs.marker = ref;
              },
              places: [],
              onSearchBoxMounted: ref => {
                refs.searchBox = ref;
              },

              onPositionChanged: () => {
                  const position = refs.marker.getPosition();
                  //  console.log(position.lat().toString());
                  //  console.log(position.lng().toString());
              },
          })
      },
  }),
  withScriptjs,
  withGoogleMap
)((props) =>{
  Geocode.setApiKey("AIzaSyATefqmYTyXDI5M4jr9vcZvdsQyoD7bMt8");
  Geocode.setLanguage("en");
  Geocode.setRegion("hi");
  Geocode.enableDebug();
  

  const [center, setCenter] = useState({});
  const refMap = useRef(null);

  const [ lat, setLat] = useState("");
  const [ lan, setLan] = useState("");
  const [ address, setAddress] = useState("")
  const [ currentPosition, setCurrentPosition ] = useState({});
  
  const refs = {};
  const  onSearchBoxMounted = (ref) => {
    refs.searchBox = ref;
  };
  

    const handleBoundsChanged = () => {
    const mapCenter = refMap.current.getCenter(); //get map center
    setCenter(mapCenter);  
    setLat(mapCenter.lat().toString())
    setLan(mapCenter.lng().toString()) 
    // console.log(mapCenter.lat().toString())
    // console.log(mapCenter.lng().toString())    
  };

  
  const success = position => {
    const currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }
    console.log(currentPosition.lat)
    // setLat(currentPosition.lat)
    // setLan(currentPosition.lng) 
    setCurrentPosition(currentPosition);

  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, [])

  const presetntPosition = () => {
    navigator.geolocation.getCurrentPosition(success);
  }


 
   
  const fetchAddress = () => {
    Geocode.fromLatLng(lat, lan ).then(
      response => {
        const address = response.results[0].formatted_address;
        console.log(address);
        setAddress(address)
      },
      error => {
        console.error("............/////////////",error);
      }
    );
  }
  

  return(
    <>
      <GoogleMap
        ref={refMap}
        defaultZoom={15}
        center={currentPosition}
        onBoundsChanged={handleBoundsChanged}
        onIdle={()=>fetchAddress()}
        options={{
          panControl: false,
          mapTypeControl: false,
          scrollwheel: false,
          gestureHandling: "greedy"
        }}
      >
        <div className="show__address" >
          <h6>Drop Here</h6>
          <p>{address}</p>
          <Link to="/pickup" >
            <button className="change__button" >Change</button>
          </Link>
          
        </div>
        <div className="auto__detect" >
          <GpsFixedIcon 
            fontSize={"medium"} 
            onClick={presetntPosition}
          />
        </div>
        <Marker 
          position={center} 
          defaultIcon='https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/32/Map-Marker-Flag--Right-Chartreuse.png'
        />
        <Marker 
          position={currentPosition}
          defaultIcon="https://img.icons8.com/ios-glyphs/30/4a90e2/marker.png"
        />
            
      </GoogleMap>
    </>
  )
}
  
)

export default SelectAddress;
