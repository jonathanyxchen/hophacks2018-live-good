import React from 'react';
import { Navbar, Nav, NavItem, FormGroup, FormControl, Button } from 'react-bootstrap';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeKey: 1 };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(selectedKey) {
    this.setState({ activeKey: selectedKey });
  }

  render() {
    return (
      <header>
        <Navbar inverse collapseOnSelect staticTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">HopHacks2018 App</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>

          <Navbar.Collapse>
            <Navbar.Form pullRight>
              <FormGroup>
                <FormControl type="text" placeholder="Search" />
              </FormGroup>
            </Navbar.Form>
            <Nav>
              <NavItem href="/">
                Link
            </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
}

export default Header;