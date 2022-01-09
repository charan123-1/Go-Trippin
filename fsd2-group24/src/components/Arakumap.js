import React, { useState, useEffect, Component } from 'react';
import { Map, Marker, GoogleApiWrapper, InfoWindow } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

const map_img = {
  width: '400px',
  height: '300px',
  textAlign: 'center',

}

export function MapContainerAraku(props) {
  const [showingInfoWindow, setShowingInfoWindow] = useState(true);
  const [activeMarker, setActiveMarker] = useState({});
  const [selectedPlace, setSelectedPlace] = useState({});
  const [maps, setMaps] = useState([])
  const [item, setItem] = useState(null);
    //on clicking the marker infowindow will be shown
  const onMarkerClick = (props, marker, item, e) => {
    setSelectedPlace(props);
    setActiveMarker(marker);
    setShowingInfoWindow(true);
    setItem(item);
  }
//on clicking the map setting up the markers

  const onMapClicked = (props) => {
    if (showingInfoWindow) {
      setActiveMarker();
      setShowingInfoWindow(true);
      setItem(item)
    }
  };
    //fetching maps from the json server

  useEffect(() => {
    fetch('http://localhost:5000/Arakumaps').then(res => {
      return res.json();
    })
      .then(data => {
        console.log(data);
        setMaps(data);
        console.log(maps);
      })
  }, []);
  return (
        //Map imported from google given initialCenter and onClick all the markers will be appeared

    <Map google={props.google}
      onClick={onMapClicked}
      defaultZoom={12}
      initialCenter={{
        lng: 82.8792522280164,
        lat: 18.32246705318015
      }}>
      {/* all the items in the json list is iterated and returned to display using map function */}
      {maps.map(item => (
        <Marker
          onMouseover={onMarkerClick}
          position={{
            lng: item.lng,
            lat: item.lat
          }}
          name={item.name}
          key={item.id}
          content={item.image}

        />
      ))}
      {/* InfoWindow is imported to show the image and name of the location */}
      <InfoWindow
        marker={activeMarker}
        visible={showingInfoWindow}>
        <div style={map_img}>
          <img src={selectedPlace.content} width="512px" height="250px;" />
          <h3>{selectedPlace.name}</h3>
        </div>
      </InfoWindow>
    </Map>
  );
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyD1hrUHm5CzRtbuAkoBvCgAGjhEv-Xt4Vc'
})(MapContainerAraku);