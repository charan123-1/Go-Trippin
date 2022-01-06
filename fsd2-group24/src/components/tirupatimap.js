import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper} from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainerTirupati extends Component {
  render() {


    return (
      <Map
        google={this.props.google}
        zoom={10}
        style={mapStyles}
        initialCenter={{
            lng: 79.34776812108626,
            lat: 13.684474045692369
          }}>
        <Marker key="marker_1"


          position={{

            lng: 79.34776812108626,
            lat: 13.684474045692369

          }}
          label={{
            text: "Tirupati",
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
})(MapContainerTirupati);