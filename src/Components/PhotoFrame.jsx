import React, { Component } from 'react'
import Photo from './Photo';
import PropTypes from 'prop-types';

export default class PhotoFrame extends Component {
    render() {
        return (
            <div>
            <button className="addIcon"></button>
            <div className="photo-grid">
                {this.props.photoblock.map((singlePhoto,index) => <Photo key={index} onRemovePhoto={this.props.onRemovePhoto} finalphoto={singlePhoto}/>)}
                </div>
            </div>
        )
    }
}

PhotoFrame.protoTypes = {
    photoblock:PropTypes.array.isRequired,
    onRemovePhoto:PropTypes.func.isRequired
}