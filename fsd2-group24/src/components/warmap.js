import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper} from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainerWarangal extends Component {
  render() {


    return (
      <Map
        google={this.props.google}
        zoom={9}
        style={mapStyles}
        initialCenter={{
            lng:79.57472384375572,
            lat: 18.003847621501116
          }}>
        <Marker key="marker_1"
          position={{

            lng: 79.57472384375572,
            lat: 18.003847621501116

            }}
            label={{
            text: "THOUDSAND PILLAR TEMPLE",
            fontFamily: "Arial",
            fontSize: "20px",
            color: "black"
            }}
            />
            <Marker key="marker_1"
            position={{

            lng: 79.9433178021949,
            lat: 18.259459370530504

            }}
            label={{
            text: "Ramappa temple",
            fontFamily: "Arial",
            fontSize: "20px",
            color: "black"
            }}
            />
            <Marker key="marker_1"
            position={{

            lng: 80.4297432838787,
            lat: 18.337953068540106

            }}
            label={{
            text: "Eturnagaram wild life sactuary",
            fontFamily: "Arial",
            fontSize: "20px",
            color: "black"
            }}
            />
            <Marker key="marker_1"
            position={{

            lng: 79.58873817097555,
            lat: 17.991226148770526

            }}
            label={{
            text: "kakatiya musical garden",
            fontFamily: "Arial",
            fontSize: "20px",
            color: "black"
            }}
            />
            <Marker key="marker_1"
            position={{

            lng: 80.06180762864109,
            lat: 18.149572795886055

            }}
            label={{
            text: "Laknavaram Cheruvu",
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
})(MapContainerWarangal);