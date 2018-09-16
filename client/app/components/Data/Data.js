import React from 'react';
import { FormGroup, FormControl, ControlLabel, HelpBlock, Button } from 'react-bootstrap';

class Data extends React.Component {
    constructor(props) {
        super(props);

        this.handleNameChange = this.handleNameChange.bind(this);

        this.state = {
            name: '',
            address: '',
            price:''
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

    componentDidMount() {

    }

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
                            onChange={this.handleChange}
                        />
                        <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup controlId="address">
                        <ControlLabel>Address of the property:</ControlLabel>
                        <FormControl
                            type="text"
                            value={this.state.address}
                            placeholder="Enter text"
                            onChange={this.handleChange}
                        />
                        <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup controlId="price">
                        <ControlLabel>Price of the property:</ControlLabel>
                        <FormControl
                            type="number"
                            value={this.state.price}
                            placeholder="Enter number"
                            onChange={this.handleChange}
                        />
                        <FormControl.Feedback />
                    </FormGroup>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <Button type="submit" value="Submit">Default</Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Data;