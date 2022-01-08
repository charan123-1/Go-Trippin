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

export function MapContainerWarangal(props) {
  const [showingInfoWindow, setShowingInfoWindow] = useState(true);
  const [activeMarker, setActiveMarker] = useState({});
  const [selectedPlace, setSelectedPlace] = useState({});
  const [maps, setMaps] = useState([])
  const [item, setItem] = useState(null);
  const onMarkerClick = (props, marker, item, e) => {
    setSelectedPlace(props);
    setActiveMarker(marker);
    setShowingInfoWindow(true);
    setItem(item);
  }

  const onMapClicked = (props) => {
    if (showingInfoWindow) {
      setActiveMarker();
      setShowingInfoWindow(true);
      setItem(item)
    }
  };
  useEffect(() => {
    fetch('http://localhost:5000/Wglmaps').then(res => {
      return res.json();
    })
      .then(data => {
        console.log(data);
        setMaps(data);
        console.log(maps);
      })
  }, []);
  return (
    <Map google={props.google}
      onClick={onMapClicked}
      defaultZoom={12}
      initialCenter={{
        lng: 79.57472384375572,
        lat: 18.003847621501116
      }}>
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
})(MapContainerWarangal);