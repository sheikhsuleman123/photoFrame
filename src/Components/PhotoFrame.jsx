import React, { Component } from 'react'
import Photo from './Photo';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export default class PhotoFrame extends Component {
    render() {
        return (
            <div>

            <Link className="addIcon" to="AddPhoto"></Link>
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