import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Addphoto extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        const imageLink = e.target.elements.link.value;
        const description = e.target.elements.des.value;
      const photo = {
          id:0,
          description: description,
          imageLink:imageLink
      }
        if(imageLink && description !== "") {
            this.props.onAddPhoto(photo)
        }
    }
    render() {
        return (
            <div>
                <h1 className="h1"> <Link to="/"> Photo Frame </Link></h1>
                <div className="form">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Link" name="link"/>
                    <input type="text" placeholder="Description" name="des" />
                    <button> Submit</button>
                </form>
                </div>
            </div>
        )
    }
}
