import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper,InfoWindow} from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

const map_img ={
    width : '400px',
    height : '350px',
    textAlign: 'center',

}

export class MapContainer extends Component {
    state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };
   onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

    render() {

    return (
      <Map google={this.props.google}
          onClick={this.onMapClicked}
          initialCenter={{
            lng: 78.47470741698163,
            lat: 17.361696696371606

          }}
          >

        <Marker onMouseover={this.onMarkerClick}
        position={{

            lng: 78.47470741698163,
            lat: 17.361696696371606

          }}
                name={'Hyderabad'}
                />

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div style={map_img} >
              <img src="images/ABYS.jpg" width="300px" height="300px;"/>
              <h3>{this.state.selectedPlace.name}</h3>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD1hrUHm5CzRtbuAkoBvCgAGjhEv-Xt4Vc'
})(MapContainer);