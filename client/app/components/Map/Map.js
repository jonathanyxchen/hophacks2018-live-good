import React, { Component } from 'react';
//import MapComponent from 'react-cartographer/lib/components/Map';
import ReactMapGL from 'react-map-gl';

class MapView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      viewport: {
        width: 400,
        height: 400,
        latitude: 39.330433,
        longitude: -76.615729,
        zoom: 15
      }
    };


  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
      <ReactMapGL 
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})}
      />
      </div>
    )
  }
}

export default MapView;