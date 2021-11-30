import React, { useState, useRef, useEffect } from 'react';
import { compose, withProps, lifecycle, withState, withHandlers } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, DirectionsRenderer, Circle } from "react-google-maps";
// import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
const MapTracking = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyATefqmYTyXDI5M4jr9vcZvdsQyoD7bMt8&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `70vh` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
  withState("isOpen, setIsOpen", false),
  withState("coords", "setCoords", { lat: 12.91420669605438, lng: 77.64166670990149 }),
  withState("address", "setAddress", ""),
  withHandlers({
    handleChange: props => address => {
      props.setAddress(address);
    },
    // handleSelect: props => address => {
    //   geocodeByAddress(address)
    //   .then(results => getLatLng(results[0]))
    //   .then(latLng => {
    //     props.setCoords(latLng)
    //     console.log(latLng)
    //   })
    //   .catch(error => console.error("Error", error))
    // },
    handleToggleOpen: props => () => {
      props.setIsOpen(true);
    },
    handleToggleClose: props => () => {
      props.setIsOpen(false);
    },
  }),
  lifecycle({
    componentDidMount() {
      const DirectionsService = new window.google.maps.DirectionsService();

      DirectionsService.route({
        origin: new window.google.maps.LatLng(this.props.coords),
        destination: new window.google.maps.LatLng("12.932945759264559", "77.62244063568274"),
        travelMode: window.google.maps.TravelMode.DRIVING,
      }, (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
           this.setState({
             directions: result,
           });
        } else {
          console.error(`error fetching deirections ${ result}`);
        }
      })
    }
  })
)((props) =>{

  const [ center, setCenter ] = useState({lat: 12.91420669605438, lng: 77.64166670990149});
  return(
    <>
<GoogleMap
    defaultZoom={7}
    // defaultCenter={new google.maps.LatLng(41.8507300, -87.6512600)}
    defaultCenter={center}
    clickableIcons={false}
    options={{
      disableDefaultUI: true,
    }}
  >
    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
    </>
  )
  
  }
);

export default MapTracking;
