import React, { Component } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { Badge } from 'react-bootstrap';

class MapView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      viewport: {
        width: 400,
        height: 650,
        latitude: 39.3284207,
        longitude: -76.619335,
        zoom: 13.5
      },
      properties: []
    };

  }


  componentDidMount() {
    fetch('/api/counters')
      .then(res => res.json())
      .then(json => {
        this.setState({
          properties: json
        });
      });
  }

  render() {
    return (
      <div>
        <ReactMapGL
          {...this.state.viewport}
          onViewportChange={(viewport) => this.setState({ viewport })}
        > {
            this.state.properties.map(property => 
              <Marker latitude={property.latitude} longitude={property.longitude} >
                <Badge>{property.name}</Badge>
              </Marker>
            )
          }
        </ReactMapGL>
      </div>
    )
  }
}

export default MapView;