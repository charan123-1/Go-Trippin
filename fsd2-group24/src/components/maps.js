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
        zoom={12}
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
        <Marker key="marker_1"
          position={{

            lng: 83.34519670139929 ,
            lat: 17.748298645238204

          }}
          label={{
            text: "KAILASH GIRI",
            fontFamily: "Arial",
            fontSize: "20px",
            color: "black"
          }}
        />
        <Marker key="marker_1"
          position={{

            lng: 83.34854542564264 ,
            lat: 17.74734806039722

          }}
          label={{
            text: "TENNETI PARK",
            fontFamily: "Arial",
            fontSize: "20px",
            color: "black"
          }}
        />
        <Marker key="marker_1"
          position={{

            lng: 83.33003082944325 ,
            lat: 17.717481135950656

          }}
          label={{
            text: "Kursura Submarine",
            fontFamily: "Arial",
            fontSize: "20px",
            color: "black"
          }}
        />
        <Marker key="marker_1"
          position={{

            lng: 83.34425427531079 ,
            lat: 17.768985164595804

          }}
          label={{
            text: "Indira Gandhi Zoological Park",
            fontFamily: "Arial",
            fontSize: "20px",
            color: "black"
          }}
        />
        <Marker key="marker_1"
          position={{

            lng: 83.29508559851892 ,
            lat: 17.698508099513553

          }}
          label={{
            text: " Sri Kanaka Maha Lakshmi Temple",
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