import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeKey: 1
    };
    
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(selectedKey) {
    this.setState({ activeKey: selectedKey });
  }

  render() {
    return (
      <Navbar inverse fixedBottom>
        <Nav bsStyle="pills" activeKey={this.state.activeKey} onSelect={this.handleSelect}>
          <NavItem eventKey="1">
            List
            </NavItem>
          <NavItem eventKey="2">
            Map
            </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default Footer;
