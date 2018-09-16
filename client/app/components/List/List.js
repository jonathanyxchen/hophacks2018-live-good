import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap'

class ListView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
        <ListGroup>
          {
            this.state.properties.map(property =>
              <ListGroupItem href="#link1">
                <div>Name: {property.name}</div>
                <div>Address: {property.address}</div>
                <div>Price: {property.price}</div>
                <div>Minutes to Brody: {property.distance}</div>
              </ListGroupItem>)
          }
          {/* <ListGroupItem href="#link1">
            <span>{properties}</span>
            <span>1000m </span>
            <span>3700 N. Charles Street, 21218</span>
          </ListGroupItem>
          <ListGroupItem href="#link1">
            <span>Marylander</span>
            <span>3400 N. Charles Street, 21218</span>
            <span>300m</span>
          </ListGroupItem>
          <ListGroupItem href="#link1">
            <span>Hopkins House</span>
            <span>3400 N. Charles Street, 21218</span>
            <span>1500m</span>
          </ListGroupItem>
          <ListGroupItem href="#link1">
            <span>ICON</span>
            <span>3400 N. Charles Street, 21218</span>
            <span>1800m</span>
          </ListGroupItem> */}
        </ListGroup>
      </div>
    )
  }
}

export default ListView;