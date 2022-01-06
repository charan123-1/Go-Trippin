import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper} from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainerAraku extends Component {
  render() {


    return (
      <Map
        google={this.props.google}
        zoom={10}
        style={mapStyles}
        initialCenter={{
            lng: 82.8792522280164,
            lat: 18.32246705318015
          }}>
        <Marker key="marker_1"
            position={{

            lng: 82.8792522280164,
            lat: 18.32246705318015

          }}
          label={{
            text: "ARAKU VALLEY",
            fontFamily: "Arial",
            fontSize: "20px",
            color: "black"
          }}
        />
        <Marker key="marker_1"
            position={{

            lng: 82.98332616247572,
            lat: 18.2692471520723

          }}
          label={{
            text: "Galikonda view point",
            fontFamily: "Arial",
            fontSize: "20px",
            color: "black"
          }}
        />
        <Marker key="marker_1"
            position={{

            lng: 82.99092402327588,
            lat: 18.268408039851757

          }}
          label={{
            text: "Coffe Plantation ",
            fontFamily: "Arial",
            fontSize: "20px",
            color: "black"
          }}
        />
        <Marker key="marker_1"
            position={{

            lng: 83.03970993015982,
            lat: 18.280804936122628

          }}
          label={{
            text: "Borra Caves",
            fontFamily: "Arial",
            fontSize: "20px",
            color: "black"
          }}
        />
        <Marker key="marker_1"
            position={{

            lng: 81.88143057136507,
            lat: 17.872641474931

          }}
          label={{
            text: "Chaparai",
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
})(MapContainerAraku);