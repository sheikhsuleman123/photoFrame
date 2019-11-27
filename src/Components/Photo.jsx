import React, { Component } from 'react'

export default class Photo extends Component {
    render() {
        return (
            <figure>
                <img className="photo" src={this.props.finalphoto.imageLink} alt={this.props.finalphoto.description} />
                <figcaption className="cen"> <p>{this.props.finalphoto.description}</p> </figcaption>
                <div className="button-container"> <button className="remove-button">Remove</button></div>
            </figure>
        )
    }
}
