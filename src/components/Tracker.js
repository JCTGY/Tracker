import React, { Component } from 'react';
import Checker from './Checker';
import './Tracker.css';

class Tracker extends Component {
    constructor(props) {
        super();
        this.state = {
            count: 0
        }
    }

    render() {
        return (
            <div className="container">
                <h1 className="count">Count: {this.state.count}</h1>
                <div className="text-center">
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button className="btn btn-secondary" onClick={() => this.setState({ count: this.state.count + 1 })}>Add</button>
                    <button className="btn btn-secondary" onClick={() => this.setState({ count: this.state.count - 1 })}>Subtract</button>
                    <button className="btn btn-secondary" onClick={() => this.setState({ count: 0 })}>Reset</button>
                    <button className="btn btn-secondary" onClick={() => this.setState({ count: this.state.count * 2 })}>Muti 2</button>
                    <button className="btn btn-secondary" onClick={() => this.setState({ count: Math.ceil(Math.random() * 20) })}>Random</button>
                </div>
                </div>
                <div className="row">
                    <Checker numberValue={10} count={this.state.count} />
                    <Checker numberValue={5} count={this.state.count} />
                    <Checker numberValue={-5} count={this.state.count} />
                </div>
            </div>
        );
    }
}

export default Tracker;
