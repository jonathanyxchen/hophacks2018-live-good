import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap'

class ListView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };


  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <ListGroup>
          <ListGroupItem href="#link1">
            <span>Academy on Charles</span>
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
          </ListGroupItem>
        </ListGroup>
      </div>
    )
  }
}

export default ListView;