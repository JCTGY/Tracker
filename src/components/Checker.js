import React, { Component } from 'react';

class Checker extends Component {

    render() {
        return (
            <div className="card col" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">NumberValue: {this.props.numberValue}</h5>
                    <p className="card-text">{this.props.count > this.props.numberValue
                        ? "numberValue is greater then count"
                        : "numberValue is not greater then count"}
                    </p>
                </div>
            </div>
        );
    }
}

export default Checker;
