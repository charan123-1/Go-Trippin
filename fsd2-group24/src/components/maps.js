import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper} from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  render() {


    return (
      <Map
        google={this.props.google}
        zoom={10}
        style={mapStyles}
        initialCenter={{
            lng: 83.323685,
            lat: 17.714294
          }}>
        <Marker key="marker_1"


          position={{

            lng: 83.323685,
            lat: 17.714294

          }}
          label={{
            text: "RK BEACH",
            fontFamily: "Arial",
            fontSize: "20px",
            color: "black"
          }}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD1hrUHm5CzRtbuAkoBvCgAGjhEv-Xt4Vc'
})(MapContainer);