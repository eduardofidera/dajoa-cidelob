import React from 'react';
import ReactDOM from 'react-dom';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const MyMapComponent = withScriptjs(withGoogleMap((props) =>
<GoogleMap
  defaultZoom={8}
  defaultCenter={{ lat: -34.397, lng: 150.644 }}
>
  {props.markers.map((marker, index)=> {
    return (
      <Marker
        key={index}
        position={{ lat: marker.lat, lng: marker.lng }}
        title="Click to zoom"
      />
    )
  })}
</GoogleMap>
))

class Map extends React.Component {
  state = {
    markers: [
      {
        'lat': -34.397,
        'lng': 150.644
      },
      {
        lat: -34.400,
        'lng': 150.654
      }
    ]
  }
  render() {
    return (
      <div>
        <h1>My Map.</h1>
        <MyMapComponent
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          markers={this.state.markers}
          isMarkerShown
        />
      </div>
    )
  }


}

ReactDOM.render(<Map />, document.getElementById('app'));