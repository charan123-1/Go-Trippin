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
        style={mapStyles}
        initialCenter={{
          lng: 83.323685,
          lat: 17.714294
        }}
          >

        <Marker onMouseover={this.onMarkerClick}
        position={{

          lng: 83.323685,
          lat: 17.714294

          }}
                name={'RK beach'}
                />

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div style={map_img} >
              <img src="images/RKbeach.jpg" alt="Rk beach" width="300px" height="300px;"/>
              <h3>{this.state.selectedPlace.name}</h3>
            </div>
        </InfoWindow>

        <Marker key="marker_1"
          onMouseover={this.onMarkerClick}
          position={{

            lng: 83.34519670139929,
            lat: 17.748298645238204

          }}
          name={'KAILASH GIRI'}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
          <div style={map_img} >
            <img src="images/RKbeach.jpg"  alt="rk beach" width="300px" height="300px;" />
            <h3>{this.state.selectedPlace.name}</h3>
          </div>
        </InfoWindow>

        <Marker key="marker_1"
          onMouseover={this.onMarkerClick}
          position={{

            lng: 83.34854542564264,
            lat: 17.74734806039722

          }}
          name={"TENNETI PARK"}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
          <div style={map_img} >
            <img src="images/RKbeach.jpg"  alt="tenneti park" width="300px" height="300px;" />
            <h3>{this.state.selectedPlace.name}</h3>
          </div>
        </InfoWindow>
        <Marker key="marker_1"
          onMouseover={this.onMarkerClick}
          position={{

            lng: 83.33003082944325,
            lat: 17.717481135950656

          }}
          name={"Kursura Submarine"}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
          <div style={map_img} >
            <img src="images/RKbeach.jpg" alt="kursura" width="300px" height="300px;" />
            <h3>{this.state.selectedPlace.name}</h3>
          </div>
        </InfoWindow>
        <Marker key="marker_1"
          onMouseover={this.onMarkerClick}
          position={{

            lng: 83.34425427531079,
            lat: 17.768985164595804

          }}
          name={"Indira Gandhi Zoological Park"}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
          <div style={map_img} >
            <img src="images/RKbeach.jpg" alt="zoo" width="300px" height="300px;" />
            <h3>{this.state.selectedPlace.name}</h3>
          </div>
        </InfoWindow>
        <Marker key="marker_1"
          onMouseover={this.onMarkerClick}
          position={{

            lng: 83.29508559851892,
            lat: 17.698508099513553

          }}
          name={"Sri Kanaka Maha Lakshmi Temple"}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
          <div style={map_img} >
            <img src="images/RKbeach.jpg"  alt="temple" width="300px" height="300px;" />
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