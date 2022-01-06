import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper} from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainerHyd extends Component {
  render() {


    return (
      <Map
        google={this.props.google}
        zoom={12}
        style={mapStyles}
        initialCenter={{
            lng: 78.47470741698163,
            lat: 17.361696696371606

          }}>
        <Marker key="marker_1"


          position={{

            lng: 78.47470741698163,
            lat: 17.361696696371606

          }}
          label={{
            text: "Charminar",
            fontFamily: "Arial",
            fontSize: "20px",
            color: "black"
          }}
        />
        <Marker key="marker_1"


          position={{

            lng: 78.40097769978033,
            lat: 17.38348303713472

          }}
          label={{
            text: "Golkonda Fort",
            fontFamily: "Arial",
            fontSize: "20px",
            color: "black"
          }}
        />
        <Marker key="marker_1"


          position={{

            lng: 78.46919661439043,
            lat: 17.40698410490425

          }}
          label={{
            text: "Birla Mandir",
            fontFamily: "Arial",
            fontSize: "20px",
            color: "black"
          }}
        />
        <Marker key="marker_1"


          position={{

            lng: 78.46826997557957 ,
            lat: 17.413055176204356

          }}
          label={{
            text: "NTR Amusement park",
            fontFamily: "Arial",
            fontSize: "20px",
            color: "black"
          }}
        />
        <Marker key="marker_1"


          position={{

            lng: 78.29880667209032 ,
            lat: 17.35874343821867

          }}
          label={{
            text: "Chilkoor Balaji Temple",
            fontFamily: "Arial",
            fontSize: "20px",
            color: "black"
          }}
        />
        <Marker key="marker_1"


          position={{

            lng: 78.48030567126071 ,
            lat: 17.37136674284697

          }}
          label={{
            text: "Salar Jung Museum",
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
})(MapContainerHyd);