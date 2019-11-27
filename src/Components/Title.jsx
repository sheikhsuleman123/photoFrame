import React, { Component } from 'react'
import '../Components/Styling.css';

export default class Title extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}
