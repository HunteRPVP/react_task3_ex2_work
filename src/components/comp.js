import React from 'react';

export default class Comp extends React.Component {
    render() {
        return <p>Hello, {this.props.str} {this.props.str2}!</p>
    }
}