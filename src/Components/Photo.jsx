import React, { Component } from 'react'

export default class Photo extends Component {
    render() {
        return (
            <figure>
                <img className="photo" src={this.props.finalphoto.imageLink} alt=""/>
            </figure>
        )
    }
}
