import React from 'react';
import { FormGroup, FormControl, ControlLabel, HelpBlock, Button } from 'react-bootstrap';
import axios from 'axios';

class Data extends React.Component {
    constructor(props) {
        super(props);

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);

        // this.saveInDatabase = this.saveInDatabase.bind(this);

        this.state = {
            name: '',
            address: '',
            price: ''
        };

    }

    getValidationState() {
        const length = this.state.value.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
        return null;
    }

    handleNameChange(e) {
        this.setState({ name: e.target.value });
    }

    handleAddressChange(e) {
        this.setState({ address: e.target.value });
    }

    handlePriceChange(e) {
        this.setState({ price: e.target.value });
    }

    // saveInDatabase() {
    //     alert('Test');

    //     // const property = {
    //     //     name: this.state.name,
    //     //     address: this.state.address,
    //     //     price: this.state.price
    //     // };

    //     // console.log("test");

    //     // fetch('/api/properties', { method: 'POST' })
    //     // .then(res => res.json())
    //     // .then(json => {
    //     //   let data = property;
    //     //   data.push(json);
    //     // });

    //     fetch('/api/counters', { method: 'POST' })
    //     .then(res => res.json())
    //     .then(json => {
    //       let data = this.state.counters;
    //       data.push(json);
  
    //       this.setState({
    //         counters: data
    //       });
    //     });

    //     console.log("submitted!");
    // }

    handleSubmit(event) {
        event.preventDefault();

        const property = {
            name: this.state.name,
            address: this.state.address,
            price: this.state.price
        };

        fetch('/api/counters', { method: 'POST' });

        // console.log("test");

        // fetch('/api/properties', { method: 'POST' })
        // .then(res => res.json())
        // .then(json => {
        //   let data = property;
        //   data.push(json);
        // });

        console.log("submitted!");
    }

    // componentDidMount() {
    //     fetch('/api/properties')
    //     .then(res => res.json());
    // }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="name">
                        <ControlLabel>Name of the property:</ControlLabel>
                        <FormControl
                            type="text"
                            value={this.state.name}
                            placeholder="Enter text"
                            onChange={this.handleNameChange}
                        />
                        <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup controlId="address">
                        <ControlLabel>Address of the property:</ControlLabel>
                        <FormControl
                            type="text"
                            value={this.state.address}
                            placeholder="Enter text"
                            onChange={this.handleAddressChange}
                        />
                        <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup controlId="price">
                        <ControlLabel>Price of the property:</ControlLabel>
                        <FormControl
                            type="number"
                            value={this.state.price}
                            placeholder="Enter number"
                            onChange={this.handlePriceChange}
                        />
                        <FormControl.Feedback />
                    </FormGroup>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button type="submit" value="Submit">Submit</Button>
                        {/* onClick={this.saveInDatabase} */}
                    </div>
                </form>
            </div>
        )
    }
}

export default Data;