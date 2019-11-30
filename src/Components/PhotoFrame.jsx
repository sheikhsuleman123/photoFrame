import React, { Component } from 'react'
import Photo from './Photo';

export default class PhotoFrame extends Component {
    render() {
        return (
       
            <div className="photo-grid">
                {this.props.photoblock.map((singlePhoto,index) => <Photo key={index} onRemovePhoto={this.props.onRemovePhoto} finalphoto={singlePhoto}/>)}
            </div>
        )
    }
}
