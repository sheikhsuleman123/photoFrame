import React, { Component } from 'react'
import '../Components/Styling.css';
import {Link} from 'react-router-dom';

export default class Title extends Component {
    render() {
        return (
            <div>
                <h1 className="h1"> <Link to="/"> {this.props.title} </Link> </h1>
            </div>
        )
    }
}
