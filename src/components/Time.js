import React, { Component } from 'react';

class Time extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Time</h1>
                <p>
                    The time is { this.state.date.toLocaleTimeString() }.
                </p>
            </React.Fragment>
        );
    }
}


export default Time;